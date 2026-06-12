import { useState, useEffect, useRef } from "react";

const DBASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";

const TAG_ICON = {
  "Unreal Engine 5": { src: "unrealengine/unrealengine-original.svg", invert: true },
  "Blueprints":      { src: "unrealengine/unrealengine-original.svg", invert: true },
  "MetaHuman":       { src: "unrealengine/unrealengine-original.svg", invert: true },
  "Unity":           { src: "unity/unity-original.svg", invert: true },
  "Python":          { src: "python/python-original.svg", invert: false },
  "C++":             { src: "cplusplus/cplusplus-original.svg", invert: false },
  "C#":              { src: "csharp/csharp-original.svg", invert: false },
  "React":           { src: "react/react-original.svg", invert: false },
  "Git":             { src: "git/git-original.svg", invert: false },
  "OpenGL":          { src: "opengl/opengl-original.svg", invert: false },
  "Azure OpenAI":    { src: "azure/azure-original.svg", invert: false },
};

const UMNLogo = () => (
  <div style={{
    width: 42, height: 42, background: "#7A0019",
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: "Georgia, 'Times New Roman', serif",
    fontWeight: 900, fontSize: 24, color: "white",
    flexShrink: 0, userSelect: "none", letterSpacing: "-0.02em",
  }}>M</div>
);

const IconGH = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
  </svg>
);

const LIIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const GH = "https://github.com/Ehtiram-Shukurov";
const RAW = "https://raw.githubusercontent.com/Ehtiram-Shukurov";

const C = {
  en: {
    role: "XR Developer & Researcher",
    tagline: "Building virtual worlds that reveal how the human mind responds to them.",
    status: "Open to opportunities",
    navLabels: ["About", "Experience", "Projects", "Skills"],
    about: [
      [
        { t: "I'm a " }, { t: "Computer Science Master's student", s: "b" },
        { t: " at the University of Minnesota, working at the intersection of virtual reality, human perception, and social psychology. My research centers on one question: " },
        { t: "how does a virtual world make you feel, and why?", s: "h" },
      ],
      [
        { t: "My thesis examines how the realism of " }, { t: "MetaHuman avatars", s: "b" },
        { t: " influences social evaluative threat responses, using the Trier Social Stress Test implemented in Unreal Engine 5. Advised by Prof. Victoria Interrante, funded by the Azerbaijani Government Scholarship." },
      ],
      [{ t: "Outside research, I build things — VR experiences, game prototypes, interactive systems. I believe immersive technology is one of the most powerful mediums ever created, and I want to push what it's capable of, both technically and emotionally." }],
    ],
    experience: [
      { period: "2024 — Now", role: "Graduate Research Assistant", org: "XR & Perception Lab, UMN", desc: "Designing and running VR-based psychological studies using MetaHuman avatars and the Trier Social Stress Test protocol in Unreal Engine 5. Advised by Prof. Victoria Interrante." },
      { period: "2025", role: "Teaching Assistant", org: "CSCI 5619: Virtual Reality, UMN", desc: "Supporting students in VR development with Unity and Meta Quest. Lab facilitation and student assessment." },
      { period: "2024 — Now", role: "MS Computer Science", org: "University of Minnesota", desc: "GPA 3.727 · Funded by Azerbaijani Government Scholarship. Focus: XR, avatar realism, and psychological stress in virtual environments." },
    ],
    badges: { progress: "In Progress" },
    linkLabels: { code: "View Code", demo: "Watch Demo" },
    projects: [
      {
        title: "Social Stress VR Study",
        sub: "MS Thesis · Unreal Engine 5",
        desc: "Investigating how MetaHuman avatar realism influences social evaluative threat responses. Participants deliver a speech to a virtual panel inside a custom UE5 environment using the Trier Social Stress Test — a gold-standard protocol for inducing measurable psychological stress.",
        tags: ["Unreal Engine 5", "MetaHuman", "VR", "C++", "Python"],
        featured: true,
        inProgress: true,
      },
      {
        title: "Resilience Protocol",
        sub: "VR Stress Inoculation · Unreal Engine 5.6",
        desc: "A first-person VR horror escape game built as a Stress Inoculation Training simulation. A MetaHuman-driven AI hunts the player through physics-based puzzles — fuse boxes, a physical keypad, rotating paintings — while adaptive audio and three escalating stages build toward a research-grounded resilience training experience.",
        tags: ["Unreal Engine 5", "MetaHuman", "Blueprints", "VR", "AI"],
        image: `${RAW}/ResilienceProtocol/main/media/screenshots/thumbnail.png`,
        github: `${GH}/ResilienceProtocol`,
        demo: "https://drive.google.com/file/d/1-g529OeXJKjoKnbQD4IJj7RUHxDDUOUf/view?usp=sharing",
      },
      {
        title: "Mixed Reality Thrombectomy Simulation",
        sub: "Mixed Reality · Meta Quest 3",
        desc: "A medical MR simulation rendering real patient CT-A scans holographically through a custom HLSL raymarching shader. Trainees navigate a guidewire and catheter through real vascular geometry extracted from the scan, with fluoroscopy mode, radiation tracking, and an 8-event haptic feedback system.",
        tags: ["Unity", "Meta Quest", "HLSL", "C#", "Mixed Reality"],
        image: `${RAW}/mixed-reality-thrombectomy-simulation/main/media/screenshot_mr_view.png`,
        github: `${GH}/mixed-reality-thrombectomy-simulation`,
      },
      {
        title: "Mixed Reality AI Assistant",
        sub: "Mixed Reality · Meta Quest 3 · Azure OpenAI",
        desc: "A spatially-aware AI companion for Meta Quest 3 that hears, sees, and understands your room. Built progressively from hand tracking and a full speech-to-speech GPT pipeline to live passthrough camera vision and scene-aware navigation via OpenAI function calling.",
        tags: ["Unity", "Meta Quest", "Azure OpenAI", "C#", "Mixed Reality"],
        image: `${RAW}/mixed-reality-visualizations/main/media/a5.png`,
        github: `${GH}/mixed-reality-visualizations`,
      },
      {
        title: "Living Strokes",
        sub: "VR Drawing · Meta Quest 3",
        desc: "A gesture-driven VR drawing tool where every stroke comes alive through your own body movement. Recorded gestures are baked into GPU motion textures and replayed through a custom HLSL vertex shader, turning each brushstroke into a continuously animated, living artifact.",
        tags: ["Unity", "Meta Quest", "HLSL", "C#", "VR"],
        image: `${RAW}/living-strokes/main/Media/animated_strokes.png`,
        github: `${GH}/living-strokes`,
      },
      {
        title: "Platform Ink: NPR Platformer",
        sub: "Graphics Engine · C++ / OpenGL",
        desc: "A third-person 3D platformer built from scratch in C++ and OpenGL, combining a playable game loop with a stylized non-photorealistic rendering pipeline — toon shading, rim lighting, and inverted-hull outlines on top of a custom collision and level system.",
        tags: ["C++", "OpenGL", "GLSL", "SDL3"],
        image: `${RAW}/platform-ink-npr-platformer/main/media/level.png`,
        github: `${GH}/platform-ink-npr-platformer`,
      },
    ],
    skills: ["Unreal Engine 5", "Unity", "VR / XR Development", "C++", "C#", "Python", "MetaHuman", "OpenGL", "HLSL / GLSL", "Blueprints", "Meta Quest / XR SDK", "Azure OpenAI", "React", "Git"],
    resume: "View Full Résumé",
    contact: { title: "Let's build something together", sub: "Open to research collaborations, game development opportunities, and XR projects.", btn: "Get in touch →" },
  },
  az: {
    role: "XR Tərtibatçı və Tədqiqatçı",
    tagline: "İnsan zehninin reaksiyasını üzə çıxaran virtual dünyalar yaradıram.",
    status: "İş imkanlarına açıqam",
    navLabels: ["Haqqımda", "Təcrübə", "Layihələr", "Bacarıqlar"],
    about: [
      [
        { t: "Mən " }, { t: "Minnesota Universitetinin Kompüter Elmləri üzrə magistrantıyam", s: "b" },
        { t: ". Virtual reallıq, insan qavrayışı və sosial psixologiyanın kəsişməsindəki sahədə çalışıram. Tədqiqatımın mərkəzindəki sual: " },
        { t: "virtual dünya sizi necə hiss etdirir və niyə?", s: "h" },
      ],
      [
        { t: "Dissertasiyam " }, { t: "MetaHuman avatarlarının", s: "b" },
        { t: " realizminin Trier Sosial Stress Testi vasitəsilə sosial qiymətləndirici təhlükə reaksiyalarına necə təsir etdiyini Unreal Engine 5-də araşdırır. Prof. Victoria Interrante tərəfindən rəhbərlik edilir, Azərbaycan Hökuməti Təqaüdü ilə maliyyələşdirilir." },
      ],
      [{ t: "Tədqiqatdan kənar müxtəlif şeylər yaradıram — VR təcrübələri, oyun prototipləri, interaktiv sistemlər. İnanıram ki, immersiv texnologiya tarixdə yaradılmış ən güclü medialardan biridir və onun imkanlarını — həm texniki, həm də emosional baxımdan — genişləndirmək istəyirəm." }],
    ],
    experience: [
      { period: "2024 — İndiyədək", role: "Tədqiqat Köməkçisi", org: "XR və Qavrayış Laboratoriyası, UMN", desc: "Unreal Engine 5-də MetaHuman avatarları və Trier Sosial Stress Testi protokolundan istifadə edərək VR əsaslı psixoloji tədqiqatlar layihələndirir və aparıram. Prof. Victoria Interrante tərəfindən rəhbərlik edilir." },
      { period: "2025", role: "Tədris Köməkçisi", org: "CSCI 5619: Virtual Reallıq, UMN", desc: "Unity və Meta Quest ilə VR inkişafında tələbələrə dəstək göstərirəm. Laboratoriya məşğələlərini aparır, tələbələri qiymətləndirirəm." },
      { period: "2024 — İndiyədək", role: "Kompüter Elmləri üzrə Magistr", org: "Minnesota Universiteti", desc: "GPA 3.727 · Azərbaycan Hökuməti Təqaüdü ilə maliyyələşdirilir. İstiqamət: XR, avatar realizmi və virtual mühitlərdə psixoloji stress." },
    ],
    badges: { progress: "Davam edir" },
    linkLabels: { code: "Koda Bax", demo: "Demoya Bax" },
    projects: [
      {
        title: "Sosial Stress VR Tədqiqatı",
        sub: "Magistr Dissertasiyası · Unreal Engine 5",
        desc: "MetaHuman avatar realizminin sosial qiymətləndirici təhlükə reaksiyalarına necə təsir etdiyini araşdırır. İştirakçılar psixoloji stress yaradan qızıl standart protokol olan Trier Sosial Stress Testindən istifadə edərək xüsusi UE5 mühitindəki virtual komissiyaya nitq edir.",
        tags: ["Unreal Engine 5", "MetaHuman", "VR", "C++", "Python"],
        featured: true,
        inProgress: true,
      },
      {
        title: "Resilience Protocol",
        sub: "VR Stress Aşılaması · Unreal Engine 5.6",
        desc: "MetaHuman əsaslı süni intellektin oyunçunu fiziki tapmacalar arasında izlədiyi — sığorta qutuları, fiziki klaviatura, fırlanan rəsmlər — Stress Aşılama Təlimi simulyasiyası kimi hazırlanmış birinci şəxs VR dəhşət qaçış oyunu. Adaptiv səs effektləri və üç güclənən mərhələ tədqiqata əsaslanan davamlılıq təlimi təcrübəsi yaradır.",
        tags: ["Unreal Engine 5", "MetaHuman", "Blueprints", "VR", "AI"],
        image: `${RAW}/ResilienceProtocol/main/media/screenshots/thumbnail.png`,
        github: `${GH}/ResilienceProtocol`,
        demo: "https://drive.google.com/file/d/1-g529OeXJKjoKnbQD4IJj7RUHxDDUOUf/view?usp=sharing",
      },
      {
        title: "Qarışıq Reallıq Trombektomiya Simulyasiyası",
        sub: "Qarışıq Reallıq · Meta Quest 3",
        desc: "Xüsusi HLSL raymarching shader vasitəsilə real bemar CT-A skanlarını holoqrafik canlandıran tibbi MR simulyasiyası. Təlimçilər skandan çıxarılmış real damar həndəsəsi boyunca guidewire və kateteri idarə edir, fluoroskopiya rejimi, radiasiya izləməsi və 8-mərhələli haptik geri bildirim sistemi ilə.",
        tags: ["Unity", "Meta Quest", "HLSL", "C#", "Mixed Reality"],
        image: `${RAW}/mixed-reality-thrombectomy-simulation/main/media/screenshot_mr_view.png`,
        github: `${GH}/mixed-reality-thrombectomy-simulation`,
      },
      {
        title: "Qarışıq Reallıq AI Köməkçisi",
        sub: "Qarışıq Reallıq · Meta Quest 3 · Azure OpenAI",
        desc: "Meta Quest 3 üçün otağınızı eşidən, görən və başa düşən məkan-şüurlu AI yoldaş. Əl izləməsi və tam nitq-nitq GPT pipeline-ından canlı passthrough kamera görüşü və OpenAI funksiya çağırışı ilə məkan-şüurlu naviqasiyaya qədər mərhələli şəkildə hazırlanmışdır.",
        tags: ["Unity", "Meta Quest", "Azure OpenAI", "C#", "Mixed Reality"],
        image: `${RAW}/mixed-reality-visualizations/main/media/a5.png`,
        github: `${GH}/mixed-reality-visualizations`,
      },
      {
        title: "Living Strokes",
        sub: "VR Çəkim · Meta Quest 3",
        desc: "Hər vuruşun öz bədən hərəkətiniz vasitəsilə canlandığı jest-əsaslı VR çəkim aləti. Qeydə alınan jestlər GPU hərəkət teksturalarına çevrilir və xüsusi HLSL vertex shader vasitəsilə təkrarlanır, hər fırça vuruşunu davamlı animasiyalı, canlı bir əsərə çevirir.",
        tags: ["Unity", "Meta Quest", "HLSL", "C#", "VR"],
        image: `${RAW}/living-strokes/main/Media/animated_strokes.png`,
        github: `${GH}/living-strokes`,
      },
      {
        title: "Platform Ink: NPR Platformer",
        sub: "Qrafika Mühərriki · C++ / OpenGL",
        desc: "Sıfırdan C++ və OpenGL ilə hazırlanmış üçüncü şəxs 3D platformer. Oynanılan oyun dövrəsini stilizə edilmiş foto-realist olmayan render pipeline-ı ilə birləşdirir — toon shading, rim lighting və tərs hull konturları, xüsusi kolliziya və səviyyə sistemi üzərində.",
        tags: ["C++", "OpenGL", "GLSL", "SDL3"],
        image: `${RAW}/platform-ink-npr-platformer/main/media/level.png`,
        github: `${GH}/platform-ink-npr-platformer`,
      },
    ],
    skills: ["Unreal Engine 5", "Unity", "VR / XR İnkişafı", "C++", "C#", "Python", "MetaHuman", "OpenGL", "HLSL / GLSL", "Blueprints", "Meta Quest / XR SDK", "Azure OpenAI", "React", "Git"],
    resume: "Tam CV-yə Bax",
    contact: { title: "Birlikdə bir şey yaradaq", sub: "Tədqiqat əməkdaşlığına, oyun inkişafı imkanlarına və XR layihələrinə açıqam.", btn: "Əlaqə saxla →" },
  },
};

const NAV_IDS = ["about", "experience", "projects", "skills"];

const Para = ({ parts }) => (
  <p className="about-p">
    {parts.map((seg, i) => {
      if (seg.s === "b") return <strong key={i}>{seg.t}</strong>;
      if (seg.s === "h") return <span key={i} className="about-hi">{seg.t}</span>;
      return <span key={i}>{seg.t}</span>;
    })}
  </p>
);

const TagPill = ({ label }) => {
  const icon = TAG_ICON[label];
  return (
    <span className="tag">
      {icon && (
        <img
          src={DBASE + icon.src}
          alt=""
          className="tag-icon"
          style={{ filter: icon.invert ? "invert(1)" : "none" }}
        />
      )}
      {label}
    </span>
  );
};

const SkillBadge = ({ label }) => {
  const icon = TAG_ICON[label];
  return (
    <span className="skill">
      {icon && (
        <img
          src={DBASE + icon.src}
          alt=""
          style={{ width: 16, height: 16, objectFit: "contain", marginRight: 7, verticalAlign: "middle", filter: icon.invert ? "invert(1)" : "none", opacity: 0.85 }}
        />
      )}
      {label}
    </span>
  );
};

const GHIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&family=Space+Mono:wght@400;700&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --bg: #0f172a; --card-bg: #112240; --card-hover: #1a3258;
    --border: rgba(148,163,184,0.09); --border-h: rgba(56,189,248,0.3);
    --acc: #38bdf8; --acc-dim: rgba(56,189,248,0.07);
    --light: #e6f1ff; --text: #ccd6f6; --secondary: #a8b2d8; --muted: #8892b0;
    --green: #4ade80; --amber: #fbbf24;
  }
  a { text-decoration: none; color: inherit; }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(56,189,248,0.15); border-radius: 3px; }

  .portfolio {
    display: flex; height: 100vh; overflow: hidden;
    background: var(--bg);
    background-image: radial-gradient(rgba(148,163,184,0.07) 1px, transparent 1px);
    background-size: 28px 28px;
    color: var(--text); font-family: 'Inter', sans-serif; line-height: 1.6; position: relative;
  }
  .portfolio::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(700px circle at var(--mx,-9999px) var(--my,-9999px), rgba(56,189,248,0.07), transparent 60%);
    pointer-events: none; z-index: 1;
  }

  /* Sidebar */
  .sidebar {
    width: 460px; flex-shrink: 0; height: 100vh;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 96px 48px 80px 130px; position: relative; z-index: 2;
  }
  .lang-toggle { position: absolute; top: 36px; right: 36px; display: flex; align-items: center; gap: 6px; }
  .lang-btn { background: none; border: none; font-family: 'Space Mono', monospace; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); cursor: pointer; padding: 4px 2px; transition: color 0.2s; }
  .lang-btn.on { color: var(--acc); }
  .lang-btn:hover:not(.on) { color: var(--secondary); }
  .lang-sep { color: var(--border); font-size: 0.8rem; user-select: none; }

  .p-name { font-size: 3.4rem; font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; color: var(--light); margin-bottom: 16px; }
  .p-role { font-size: 1.15rem; font-weight: 500; color: var(--acc); margin-bottom: 20px; }
  .p-tagline { font-size: 0.98rem; color: var(--muted); line-height: 1.8; max-width: 280px; }

  .status-badge {
    display: inline-flex; align-items: center; gap: 9px; margin-top: 22px;
    padding: 7px 14px; border-radius: 20px;
    border: 1px solid rgba(74,222,128,0.2); background: rgba(74,222,128,0.05);
    font-size: 0.75rem; font-weight: 500; color: var(--green); letter-spacing: 0.02em; width: fit-content;
  }
  .pulse-ring { position: relative; width: 8px; height: 8px; flex-shrink: 0; }
  .pulse-ring::before, .pulse-ring::after { content: ''; position: absolute; inset: 0; border-radius: 50%; background: var(--green); }
  .pulse-ring::before { animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite; opacity: 0.6; }
  @keyframes ping { 0% { transform: scale(1); opacity: 0.6; } 75%,100% { transform: scale(2.2); opacity: 0; } }

  nav { margin-top: 52px; display: flex; flex-direction: column; gap: 4px; }
  .nav-item { display: flex; align-items: center; gap: 16px; padding: 8px 0; cursor: pointer; color: var(--muted); font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; transition: color 0.2s; user-select: none; }
  .nav-item:hover { color: var(--secondary); }
  .nav-item.active { color: var(--light); }
  .nav-line { display: block; height: 1px; width: 24px; background: currentColor; transition: width 0.25s ease; flex-shrink: 0; }
  .nav-item.active .nav-line { width: 56px; background: var(--acc); }
  .nav-item:hover:not(.active) .nav-line { width: 40px; }

  .socials { display: flex; gap: 22px; align-items: center; }
  .social-link { color: var(--muted); transition: color 0.2s, transform 0.2s; display: flex; align-items: center; }
  .social-link:hover { color: var(--acc); transform: translateY(-2px); }

  /* Main */
  .p-main { flex: 1; height: 100vh; overflow-y: auto; padding: 96px 160px 128px 110px; position: relative; z-index: 2; }

  /* Scroll reveal */
  .p-section { margin-bottom: 100px; opacity: 0; transform: translateY(28px); transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1); }
  .p-section.revealed { opacity: 1; transform: translateY(0); }
  .p-section:nth-child(1) { transition-delay: 0.05s; }
  .p-section:nth-child(2) { transition-delay: 0.1s; }
  .p-section:nth-child(3) { transition-delay: 0.15s; }
  .p-section:nth-child(4) { transition-delay: 0.2s; }

  .section-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--secondary); margin-bottom: 36px; display: flex; align-items: center; gap: 16px; }
  .section-label::after { content: ''; flex: 1; height: 1px; background: rgba(148,163,184,0.12); }

  /* About */
  .about-p { font-size: 1.1rem; color: var(--muted); line-height: 1.85; margin-bottom: 22px; }
  .about-p:last-child { margin-bottom: 0; }
  .about-p strong { color: var(--secondary); font-weight: 600; }
  .about-hi { color: var(--acc); font-style: normal; font-weight: 500; }

  /* Experience */
  .exp-list { display: flex; flex-direction: column; }
  .exp-list:hover .exp-item { opacity: 0.35; }
  .exp-list .exp-item:hover { opacity: 1 !important; }
  .exp-item { display: grid; grid-template-columns: 52px 110px 1fr; gap: 0 16px; padding: 20px 16px; border-radius: 8px; margin-bottom: 4px; transition: background 0.2s, opacity 0.2s; cursor: default; align-items: start; }
  .exp-item:hover { background: rgba(56,189,248,0.04); }
  .exp-logo { padding-top: 3px; }
  .exp-period { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: var(--muted); padding-top: 6px; letter-spacing: 0.04em; white-space: nowrap; line-height: 1.5; }
  .exp-role { font-size: 1.05rem; font-weight: 600; color: var(--secondary); transition: color 0.2s; }
  .exp-item:hover .exp-role { color: var(--acc); }
  .exp-org { font-size: 0.88rem; color: var(--muted); margin: 5px 0 10px; }
  .exp-desc { font-size: 0.95rem; color: var(--muted); line-height: 1.8; }

  /* Resume */
  .resume-link { display: inline-flex; align-items: center; gap: 8px; margin: 20px 16px 0; font-size: 0.9rem; font-weight: 700; color: var(--light); transition: color 0.2s, gap 0.2s; text-decoration: none; cursor: pointer; }
  .resume-link:hover { color: var(--acc); gap: 14px; }

  /* Projects */
  .proj-list { display: flex; flex-direction: column; }
  .proj-list:hover .proj-card { opacity: 0.35; }
  .proj-list .proj-card:hover { opacity: 1 !important; }
  .proj-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; transition: border-color 0.25s, background 0.25s, transform 0.25s, box-shadow 0.25s, opacity 0.2s; cursor: default; position: relative; overflow: hidden; }
  .proj-card.featured { border-color: rgba(56,189,248,0.15); }
  .proj-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent); opacity: 0; transition: opacity 0.3s; z-index: 1; }
  .proj-card:hover { border-color: var(--border-h); background: var(--card-hover); transform: translateY(-3px); box-shadow: 0 20px 40px rgba(2,12,27,0.5); }
  .proj-card:hover::before { opacity: 1; }

  .proj-image-wrap { width: 100%; height: 280px; overflow: hidden; background: #0a0f1c; }
  .proj-image { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease, opacity 0.5s ease; }
  .proj-card:hover .proj-image { transform: scale(1.035); }

  .proj-content { padding: 28px 32px; }

  .proj-sub { font-family: 'Space Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--acc); margin-bottom: 10px; }
  .proj-title { font-size: 1.2rem; font-weight: 700; color: var(--light); margin-bottom: 14px; letter-spacing: -0.01em; transition: color 0.2s; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .proj-card:hover .proj-title { color: var(--acc); }
  .proj-desc { font-size: 1rem; color: var(--muted); line-height: 1.85; margin-bottom: 20px; }

  .badge-progress {
    font-family: 'Space Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 4px 10px; border-radius: 20px; color: var(--amber);
    background: rgba(251,191,36,0.07); border: 1px solid rgba(251,191,36,0.22);
    font-weight: 700;
  }

  .tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag { font-family: 'Space Mono', monospace; font-size: 0.62rem; padding: 5px 12px; border-radius: 20px; background: rgba(56,189,248,0.07); color: var(--acc); border: 1px solid rgba(56,189,248,0.15); letter-spacing: 0.03em; white-space: nowrap; display: inline-flex; align-items: center; gap: 6px; }
  .tag-icon { width: 12px; height: 12px; object-fit: contain; flex-shrink: 0; }

  .proj-links { display: flex; gap: 28px; margin-top: 22px; }
  .proj-link { display: inline-flex; align-items: center; gap: 8px; font-size: 0.88rem; font-weight: 600; color: var(--light); transition: color 0.2s, gap 0.2s; }
  .proj-link:hover { color: var(--acc); gap: 12px; }
  .proj-link svg { width: 17px; height: 17px; flex-shrink: 0; }

  /* Skills */
  .skills-grid { display: flex; flex-wrap: wrap; gap: 10px; }
  .skill { font-size: 0.9rem; padding: 9px 18px; border-radius: 8px; background: rgba(255,255,255,0.02); color: var(--muted); border: 1px solid var(--border); transition: all 0.2s; cursor: default; display: inline-flex; align-items: center; }
  .skill:hover { background: var(--acc-dim); border-color: rgba(56,189,248,0.2); color: var(--secondary); }

  /* Contact */
  .contact-box { margin-top: 80px; border: 1px solid var(--border); border-radius: 12px; padding: 44px 40px; text-align: center; background: var(--card-bg); position: relative; overflow: hidden; }
  .contact-box::before { content: ''; position: absolute; top: -60px; left: 50%; transform: translateX(-50%); width: 360px; height: 200px; background: radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%); pointer-events: none; }
  .contact-title { font-size: 1.5rem; font-weight: 700; color: var(--light); margin-bottom: 12px; letter-spacing: -0.02em; position: relative; }
  .contact-sub { font-size: 0.88rem; color: var(--muted); margin-bottom: 28px; line-height: 1.7; position: relative; }
  .contact-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; border: 1px solid rgba(56,189,248,0.4); color: var(--acc); border-radius: 8px; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; font-family: 'Inter', sans-serif; transition: all 0.2s; cursor: pointer; background: transparent; position: relative; text-decoration: none; }
  .contact-btn:hover { background: var(--acc-dim); border-color: rgba(56,189,248,0.65); transform: translateY(-1px); }
`;

export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState("en");
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const mainRef = useRef(null);
  const wrapRef = useRef(null);
  const c = C[lang];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,900;1,400&family=Space+Mono:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    requestAnimationFrame(() => setShow(true));
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      if (scrollTop + clientHeight >= scrollHeight - 60) { setActive(NAV_IDS[NAV_IDS.length - 1]); return; }
      const st = scrollTop + 120;
      let cur = NAV_IDS[0];
      for (const id of NAV_IDS) { const s = document.getElementById(id); if (s && s.offsetTop <= st) cur = id; }
      setActive(cur);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { root: container, threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    container.querySelectorAll(".p-section").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el && mainRef.current) mainRef.current.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="portfolio" ref={wrapRef} onMouseMove={handleMouseMove} style={{ "--mx": `${mouse.x}px`, "--my": `${mouse.y}px` }}>

        <aside className="sidebar" style={{ opacity: show ? 1 : 0, transform: show ? "none" : "translateY(16px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <div className="lang-toggle">
            <button className={`lang-btn${lang === "en" ? " on" : ""}`} onClick={() => setLang("en")}>EN</button>
            <span className="lang-sep">|</span>
            <button className={`lang-btn${lang === "az" ? " on" : ""}`} onClick={() => setLang("az")}>AZ</button>
          </div>

          <div>
            <div className="p-name">Ehtiram Shukurov</div>
            <div className="p-role">{c.role}</div>
            <div className="p-tagline">{c.tagline}</div>
            <div className="status-badge"><span className="pulse-ring" />{c.status}</div>
            <nav>
              {NAV_IDS.map((id, i) => (
                <div key={id} className={`nav-item${active === id ? " active" : ""}`} onClick={() => scrollTo(id)}>
                  <span className="nav-line" />{c.navLabels[i]}
                </div>
              ))}
            </nav>
          </div>

          <div className="socials">
            <a href="https://github.com/Ehtiram-Shukurov" target="_blank" rel="noreferrer" className="social-link"><GHIcon /></a>
            <a href="https://www.linkedin.com/in/ehtiram-shukurov/" target="_blank" rel="noreferrer" className="social-link"><LIIcon /></a>
            <a href="mailto:shukurovehtiram29@gmail.com" className="social-link"><MailIcon /></a>
          </div>
        </aside>

        <main className="p-main" ref={mainRef}>

          <section id="about" className="p-section">
            <div className="section-label">{c.navLabels[0]}</div>
            {c.about.map((parts, i) => <Para key={i} parts={parts} />)}
          </section>

          <section id="experience" className="p-section">
            <div className="section-label">{c.navLabels[1]}</div>
            <div className="exp-list">
              {c.experience.map((e, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-logo"><UMNLogo /></div>
                  <div className="exp-period">{e.period}</div>
                  <div>
                    <div className="exp-role">{e.role}</div>
                    <div className="exp-org">{e.org}</div>
                    <div className="exp-desc">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="resume-link" onClick={e => e.preventDefault()}>
              {c.resume} <span>↗</span>
            </a>
          </section>

          <section id="projects" className="p-section">
            <div className="section-label">{c.navLabels[2]}</div>
            <div className="proj-list">
              {c.projects.map((p, i) => (
                <div key={i} className={`proj-card${p.featured ? " featured" : ""}`}>
                  {p.image && (
                    <div className="proj-image-wrap">
                      <img className="proj-image" src={p.image} alt={p.title} loading="lazy" />
                    </div>
                  )}
                  <div className="proj-content">
                    <div className="proj-sub">{p.sub}</div>
                    <div className="proj-title">
                      {p.title}
                      {p.inProgress && <span className="badge-progress">{c.badges.progress}</span>}
                    </div>
                    <div className="proj-desc">{p.desc}</div>
                    <div className="tags">{p.tags.map((t, j) => <TagPill key={j} label={t} />)}</div>
                    {(p.github || p.demo) && (
                      <div className="proj-links">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                            <IconGH /> {c.linkLabels.code}
                          </a>
                        )}
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                            <IconPlay /> {c.linkLabels.demo}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="p-section">
            <div className="section-label">{c.navLabels[3]}</div>
            <div className="skills-grid">
              {c.skills.map((s, i) => <SkillBadge key={i} label={s} />)}
            </div>
            <div className="contact-box">
              <div className="contact-title">{c.contact.title}</div>
              <div className="contact-sub">{c.contact.sub}</div>
              <a href="mailto:shukurovehtiram29@gmail.com" className="contact-btn">{c.contact.btn}</a>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}