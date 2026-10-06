import { useState, useEffect, useRef } from "react";
import { CONTENT } from "./content";
import "./App.css";
import logo from '/umn_logo.jpeg';

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
  "TypeScript":      { src: "typescript/typescript-original.svg", invert: false },
  "JavaScript":      { src: "javascript/javascript-original.svg", invert: false },
  "SvelteKit":       { src: "svelte/svelte-original.svg", invert: false },
  "Svelte / SvelteKit": { src: "svelte/svelte-original.svg", invert: false },
  "D3.js":           { src: "d3js/d3js-original.svg", invert: false },
  "Git":             { src: "git/git-original.svg", invert: false },
  "OpenGL":          { src: "opengl/opengl-original.svg", invert: false },
  "Azure OpenAI":    { src: "azure/azure-original.svg", invert: false },
};

const UMNLogo = () => (
  <div style={{
    width: 42, height: 42,
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", flexShrink: 0,
  }}><img
      src={logo}
      alt=""
      style={{ width: 42, height: 42 }}
    />
  </div>
);

const UnityBadge = () => (
  <div style={{
    width: 42, height: 42, background: "#1b1b1b",
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", flexShrink: 0,
  }}>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
      alt=""
      style={{ width: 24, height: 24, filter: "invert(1)" }}
    />
  </div>
);

const AZTUBadge = () => (
  <div style={{
    width: 42, height: 42, background: "#0c1f4a",
    borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", flexShrink: 0,
    fontFamily: "'Space Mono', monospace", fontWeight: 700,
    fontSize: 10, color: "#fff", letterSpacing: "0.02em",
  }}>AZTU</div>
);

const OrgBadge = ({ logo }) => {
  if (logo === "unity") return <UnityBadge />;
  if (logo === "aztu") return <AZTUBadge />;
  if (logo === "ipmd" || logo === "abb") return <div className={`org-badge ${logo}`}>{logo.toUpperCase()}</div>;
  return <UMNLogo />;
};

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

const NAV_IDS = ["about", "projects", "experience", "education", "skills"];

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

export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [lang, setLang] = useState("en");
  const mainRef = useRef(null);
  const wrapRef = useRef(null);
  const c = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `Ehtiram Shukurov | ${CONTENT[lang].role}`;
  }, [lang]);

  useEffect(() => {
    const main = mainRef.current;
    const updateActive = () => {
      const desktop = window.matchMedia("(min-width: 881px)").matches;
      const rootTop = desktop ? main.getBoundingClientRect().top : 0;
      let current = NAV_IDS[0];
      for (const id of NAV_IDS) {
        const section = document.getElementById(id);
        if (section.getBoundingClientRect().top - rootTop <= 120) current = id;
      }
      const atBottom = desktop
        ? main.scrollTop + main.clientHeight >= main.scrollHeight - 20
        : window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 20;
      setActive(atBottom ? "skills" : current);
    };
    main.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      main.removeEventListener("scroll", updateActive);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const handleMouseMove = (event) => {
    const wrap = wrapRef.current;
    wrap.style.setProperty("--mx", `${event.clientX}px`);
    wrap.style.setProperty("--my", `${event.clientY}px`);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const main = mainRef.current;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    if (window.matchMedia("(min-width: 881px)").matches) {
      main.scrollTo({ top: main.scrollTop + element.getBoundingClientRect().top - main.getBoundingClientRect().top - 64, behavior });
    } else {
      window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - 24, behavior });
    }
  };

  return (
    <>
      <a className="skip-link" href="#main-content">{lang === "en" ? "Skip to content" : "Məzmuna keç"}</a>
      <div className="portfolio" ref={wrapRef} onMouseMove={handleMouseMove} >

        <aside className="sidebar">
          <div className="lang-toggle" aria-label={lang === "en" ? "Language" : "Dil"}>
            <button className={`lang-btn${lang === "en" ? " on" : ""}`} aria-label="English" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
            <span className="lang-sep">|</span>
            <button className={`lang-btn${lang === "az" ? " on" : ""}`} aria-label="Azərbaycan dili" aria-pressed={lang === "az"} onClick={() => setLang("az")}>AZ</button>
          </div>

          <div>
            <h1 className="p-name">Ehtiram Shukurov</h1>
            <div className="p-role">{c.role}</div>
            <div className="p-tagline">{c.tagline}</div>
            <div className="status-badge"><span className="pulse-ring" />{c.status}</div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="sidebar-resume">{c.resume} <span aria-hidden="true">↗</span></a>
            <nav aria-label={lang === "en" ? "Sections" : "Bölmələr"}>
              {NAV_IDS.map((id, i) => (
                <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`nav-item${active === id ? " active" : ""}`} onClick={(event) => { event.preventDefault(); scrollTo(id); }}>
                  <span className="nav-line" />{c.navLabels[i]}
                </a>
              ))}
            </nav>
          </div>

          <div className="socials">
            <a href="https://github.com/Ehtiram-Shukurov" target="_blank" rel="noreferrer" aria-label={c.socialLabels.github} className="social-link"><GHIcon /></a>
            <a href="https://www.linkedin.com/in/ehtiram-shukurov/" target="_blank" rel="noreferrer" aria-label={c.socialLabels.linkedin} className="social-link"><LIIcon /></a>
            <a href="mailto:shukurovehtiram29@gmail.com" aria-label={c.socialLabels.email} className="social-link"><MailIcon /></a>
          </div>
        </aside>

        <main id="main-content" tabIndex={-1} className="p-main" ref={mainRef}>

          <section id="about" className="p-section">
            <h2 className="section-label">{c.navLabels[NAV_IDS.indexOf("about")]}</h2>
            {c.about.map((parts, i) => <Para key={i} parts={parts} />)}
          </section>

          <section id="projects" className="p-section">
            <h2 className="section-label">{c.navLabels[NAV_IDS.indexOf("projects")]}</h2>
            <p className="project-intro">{c.projectIntro}</p>
            <div className="proj-list">
              {c.projects.map((p) => (
                <article key={p.id} className={`proj-card${p.featured ? " featured" : ""}`}>
                  {p.cover === "dimension" && (
                    <div className="dimension-cover" aria-hidden="true">
                      <span className="dimension-name">Dimension<span>.</span></span>
                      <div className="dimension-metrics">{["100,000", "943", "1,682"].map((value, j) => <span key={value}><strong>{value}</strong>{c.coverLabels[j]}</span>)}</div>
                    </div>
                  )}
                  {p.image && (
                    <div className="proj-image-wrap">
                      <img className="proj-image" src={p.image} alt={p.title} loading="lazy" />
                    </div>
                  )}
                  <div className="proj-content">
                    <div className="proj-sub">{p.sub}</div>
                    <h3 className="proj-title">
                      {p.title}
                      {p.inProgress && <span className="badge-progress">{c.badges.progress}</span>}
                    </h3>
                    <p className="proj-desc">{p.desc}</p>
                    {p.contribution && <p className="proj-contribution"><strong>{c.contribution}</strong>{p.contribution}</p>}
                    <div className="tags">{p.tags.map((t, j) => <TagPill key={j} label={t} />)}</div>
                    {(p.github || p.demo || p.live) && (
                      <div className="proj-links">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                            <IconGH /> {c.linkLabels.code}
                          </a>
                        )}
                        {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="proj-link">{c.linkLabels.live} <span aria-hidden="true">↗</span></a>}
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noreferrer" className="proj-link">
                            <IconPlay /> {c.linkLabels.demo}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="experience" className="p-section">
            <h2 className="section-label">{c.navLabels[NAV_IDS.indexOf("experience")]}</h2>
            <div className="exp-list">
              {c.experience.map((e, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-logo"><OrgBadge logo={e.logo} /></div>
                  <div className="exp-period">{e.period}</div>
                  <div>
                    <h3 className="exp-role">{e.role}</h3>
                    <div className="exp-org">{e.org}</div>
                    <div className="exp-desc">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="p-section">
            <h2 className="section-label">{c.navLabels[NAV_IDS.indexOf("education")]}</h2>
            <div className="exp-list">
              {c.education.map((e, i) => (
                <div key={i} className="exp-item">
                  <div className="exp-logo"><OrgBadge logo={e.logo} /></div>
                  <div className="exp-period">{e.period}</div>
                  <div>
                    <h3 className="exp-role">{e.role}</h3>
                    <div className="exp-org">{e.org}</div>
                    <div className="exp-desc">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
              {c.resume} <span>↗</span>
            </a>
          </section>

          <section id="skills" className="p-section">
            <h2 className="section-label">{c.navLabels[NAV_IDS.indexOf("skills")]}</h2>
            {c.skillGroups.map(([label, items]) => <div className="skill-group" key={label}>
              <h3 className="skill-cat-label">{label}</h3>
              <div className="skills-grid">{items.map(item => <SkillBadge key={item} label={item} />)}</div>
            </div>)}
            <div className="contact-box">
              <h3 className="contact-title">{c.contact.title}</h3>
              <div className="contact-sub">{c.contact.sub}</div>
              <a href="mailto:shukurovehtiram29@gmail.com" className="contact-btn">{c.contact.btn}</a>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
