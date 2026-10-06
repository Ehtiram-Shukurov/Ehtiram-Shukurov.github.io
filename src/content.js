const GH = 'https://github.com/Ehtiram-Shukurov';
const RAW = 'https://raw.githubusercontent.com/Ehtiram-Shukurov';

const projectLinks = {
  dimension: { github: `${GH}/movie-ratings-scrollytelling`, live: 'https://ehtiram-shukurov.github.io/movie-ratings-scrollytelling/', cover: 'dimension', tags: ['SvelteKit', 'D3.js', 'TypeScript'] },
  resilience: { github: `${GH}/ResilienceProtocol`, demo: 'https://drive.google.com/file/d/1-g529OeXJKjoKnbQD4IJj7RUHxDDUOUf/view?usp=sharing', image: `${RAW}/ResilienceProtocol/main/media/screenshots/thumbnail.png`, tags: ['Unreal Engine 5', 'MetaHuman', 'Blueprints', 'VR', 'AI'], featured: true },
  thrombectomy: { github: `${GH}/mixed-reality-thrombectomy-simulation`, image: `${RAW}/mixed-reality-thrombectomy-simulation/main/media/screenshot_mr_view.png`, tags: ['Unity', 'C#', 'HLSL', 'Meta Quest', 'Mixed Reality'] },
  assistant: { github: `${GH}/mixed-reality-visualizations`, image: `${RAW}/mixed-reality-visualizations/main/media/a5.png`, tags: ['Unity', 'C#', 'Azure OpenAI', 'REST APIs', 'Mixed Reality'] },
  strokes: { github: `${GH}/living-strokes`, image: `${RAW}/living-strokes/main/Media/animated_strokes.png`, tags: ['Unity', 'HLSL', 'C#', 'Meta Quest', 'VR'] },
  platform: { github: `${GH}/platform-ink-npr-platformer`, image: `${RAW}/platform-ink-npr-platformer/main/media/level.png`, tags: ['C++', 'OpenGL', 'GLSL', 'SDL3'] },
  thesis: { tags: ['Unreal Engine 5', 'MetaHuman', 'VR', 'Research'], inProgress: true },
};
const projects = (items) => items.map(p => ({ ...projectLinks[p.id], ...p }));
const skillItems = {
  languages: ['Python', 'TypeScript', 'JavaScript', 'C#', 'C++', 'SQL', 'HTML / CSS'],
  web: ['Svelte / SvelteKit', 'React', 'D3.js', 'Three.js / WebGL', 'Tailwind CSS'],
  backend: ['ASP.NET', 'REST APIs', 'Azure OpenAI', 'Azure Speech', 'Function calling'],
  graphics: ['Unreal Engine 5', 'Unity', 'MetaHuman', 'OpenGL', 'HLSL / GLSL', 'Blueprints', 'Meta Quest SDK', 'Blender'],
  tools: ['Git / GitHub', 'Vercel', 'Claude Code', 'MCP'],
};

export const CONTENT = {
  en: {
    role: 'Software Engineer & Researcher',
    tagline: 'Web applications, AI integrations, and immersive experiences — built from idea to working software.',
    status: 'Open to opportunities',
    navLabels: ['About', 'Projects', 'Experience', 'Education', 'Skills'],
    about: [
      [{ t: "I'm a " }, { t: 'software engineer and Computer Science MS student', s: 'b' }, { t: ' at the University of Minnesota. I build web applications, connect AI services, and develop interactive systems in Python, TypeScript, C#, and C++.' }],
      [{ t: 'My work spans ' }, { t: 'data visualization, voice-driven AI, graphics, and VR/XR', s: 'h' }, { t: '. I enjoy bringing the pieces together: frontend interactions, APIs, algorithms, and the debugging that turns a prototype into a working application.' }],
      [{ t: 'Alongside software development, I research how virtual evaluator realism affects stress in VR, using Unreal Engine 5 and MetaHuman avatars under Prof. Victoria Interrante.' }],
    ],
    experience: [
      { period: 'Sep 2026 — Present', role: 'Software Engineering Intern', org: 'IPMD, Inc. · Remote', logo: 'ipmd', desc: 'Developing browser-based audio tools and Python video-analysis services, working remotely with engineers and senior mentors.' },
      { period: 'Jan 2026 — Present', role: 'Graduate Researcher', org: 'XR & Perception Lab, University of Minnesota', logo: 'umn', desc: 'Developing an Unreal Engine 5 environment for MS thesis research on avatar realism and stress in VR. Working with MetaHuman avatars and investigating rendering, facial-capture, and performance issues under Prof. Victoria Interrante.' },
      { period: 'Oct 2024 — May 2026', role: 'Lead Student Worker', org: 'UMN Dining Services', logo: 'umn', desc: 'Trained student workers, coordinated shift coverage, and communicated operational issues to supervisors.' },
      { period: 'Apr — Jul 2024', role: 'Customer Service Associate', org: 'International Bank of Azerbaijan (ABB)', logo: 'abb', desc: 'Resolved customer application, account, and payment issues through daily direct support.' },
      { period: 'Jul — Oct 2022', role: 'Unity Developer Intern', org: 'Azerbaijan Technical University', logo: 'unity', desc: 'Developed gameplay mechanics and interactive 3D prototypes in Unity and C#, taking the Sharky demo from concept to a playable build.' },
    ],
    education: [
      { period: '2024 — 2026', role: 'MS in Computer Science', org: 'University of Minnesota', logo: 'umn', desc: 'Expected December 2026 · GPA 3.8/4.0. Coursework in web development, visualization, computer graphics, intelligent mixed reality, and robotics.' },
      { period: '2020 — 2024', role: 'BS in Information Technology', org: 'Azerbaijan Technical University · SABAH Groups', logo: 'aztu', desc: 'Graduated with honors · GPA 97/100.' },
    ],
    badges: { progress: 'In Progress' },
    linkLabels: { code: 'View Code', demo: 'Watch Demo', live: 'Live Demo' },
    contribution: 'My contribution',
    projectIntro: 'Selected work across web development, AI, graphics, and immersive computing.',
    coverLabels: ['ratings', 'users', 'movies'],
    projects: projects([
      { id: 'resilience', title: 'Resilience Protocol', sub: 'VR Game · Unreal Engine 5.6', desc: 'A first-person VR horror escape game designed around stress inoculation concepts. A MetaHuman-driven AI pursues the player through physics-based puzzles, adaptive audio, and three escalating stages.' },
      { id: 'thrombectomy', title: 'Mixed Reality Thrombectomy Simulator', sub: 'Simulation · Algorithms · Meta Quest 3', desc: 'A medical MR simulation for navigating a guidewire and catheter through vascular geometry from CT-A scans.', contribution: 'Implemented graph-based navigation with 917 nodes and seven bifurcations, a history stack for exact path retraction, haptic feedback, and fluoroscopy mode.' },
      { id: 'assistant', title: 'Mixed Reality AI Assistant', sub: 'AI Integration · Voice & Vision', desc: 'A spatial AI assistant for Meta Quest 3, combining voice interaction, live camera context, and scene-aware navigation.', contribution: 'Built the speech-to-speech pipeline with Azure OpenAI and Azure Speech REST APIs, including function calling and live camera context.' },
      { id: 'strokes', title: 'Living Strokes', sub: 'VR Drawing · GPU Animation', desc: 'A VR drawing tool that animates each stroke using a recorded hand gesture. Motion is baked into GPU textures and replayed through a custom HLSL vertex shader.' },
      { id: 'platform', title: 'Platform Ink: NPR Platformer', sub: 'Graphics Programming · C++ / OpenGL', desc: 'A third-person 3D platformer built from scratch, with a custom rendering, collision, and level system. The stylized pipeline combines toon shading, rim lighting, and inverted-hull outlines.' },
      { id: 'dimension', title: 'Dimension', sub: 'Interactive Web · Data Visualization', desc: 'A team-built scrollytelling application exploring how demographics shape movie ratings, using the MovieLens 100K dataset.', contribution: 'Integrated five visualizations into one cohesive frontend and built the age/genre line chart, with genre toggles, tooltips, sample-size indicators, and scroll-driven transitions.' },
      { id: 'thesis', title: 'Social Stress VR Study', sub: 'MS Thesis · Human–Computer Interaction', desc: 'Ongoing research asking whether the visual realism of a virtual evaluator affects stress during an evaluated VR task. Developing the study in Unreal Engine 5 under Prof. Victoria Interrante.' },
    ]),
    skillGroups: [['Languages', skillItems.languages], ['Web Development', skillItems.web], ['Backend & AI', skillItems.backend], ['Graphics & XR', skillItems.graphics], ['Tools', skillItems.tools]],
    resume: 'View Résumé',
    socialLabels: { github: 'GitHub profile', linkedin: 'LinkedIn profile', email: 'Email me' },
    contact: { title: "Let's build something together", sub: 'Open to software engineering opportunities, research collaborations, and interactive technology projects.', btn: 'Get in touch →' },
  },
  az: {
    role: 'Proqram Mühəndisi və Tədqiqatçı',
    tagline: 'Veb tətbiqləri, süni intellekt inteqrasiyaları və immersiv təcrübələr — ideyadan işlək proqrama.',
    status: 'İş imkanlarına açığam',
    navLabels: ['Haqqımda', 'Layihələr', 'Təcrübə', 'Təhsil', 'Bacarıqlar'],
    about: [
      [{ t: 'Mən ' }, { t: 'proqram mühəndisiyəm və Minnesota Universitetində Kompüter Elmləri üzrə magistr təhsili alıram', s: 'b' }, { t: '. Python, TypeScript, C# və C++ ilə veb tətbiqləri hazırlayır, süni intellekt xidmətlərini inteqrasiya edir və interaktiv sistemlər qururam.' }],
      [{ t: 'İşim ' }, { t: 'verilənlərin vizuallaşdırılması, səs əsaslı süni intellekt, kompüter qrafikası və VR/XR', s: 'h' }, { t: ' sahələrini əhatə edir. İstifadəçi interfeysini, API-ləri və alqoritmləri birləşdirməyi, prototipi işlək tətbiqə çevirmək üçün problemləri həll etməyi sevirəm.' }],
      [{ t: 'Proqram təminatı hazırlamaqla yanaşı, Prof. Victoria Interrante-nin rəhbərliyi altında Unreal Engine 5 və MetaHuman avatarlarından istifadə edərək virtual qiymətləndiricinin realizminin VR-də stressə təsirini araşdırıram.' }],
    ],
    experience: [
      { period: 'Sen 2026 — Hazırda', role: 'Proqram Mühəndisliyi üzrə Təcrübəçi', org: 'IPMD, Inc. · Məsafədən', logo: 'ipmd', desc: 'Brauzerdə işləyən audio alətləri və Python ilə video təhlili xidmətləri hazırlayıram. Mühəndislər və təcrübəli mentorlarla məsafədən əməkdaşlıq edirəm.' },
      { period: 'Yan 2026 — Hazırda', role: 'Magistr Tədqiqatçısı', org: 'XR və Qavrayış Laboratoriyası, Minnesota Universiteti', logo: 'umn', desc: 'Prof. Victoria Interrante-nin rəhbərliyi altında avatar realizmi və VR-də stress mövzusunda magistr dissertasiyası üçün Unreal Engine 5 mühiti hazırlayıram. MetaHuman avatarları ilə işləyir, render, üz hərəkətlərinin qeydə alınması və performans problemlərini araşdırıram.' },
      { period: 'Okt 2024 — May 2026', role: 'Aparıcı Tələbə İşçi', org: 'Minnesota Universitetinin Qidalanma Xidməti', logo: 'umn', desc: 'Tələbə işçilərə təlim keçmiş, növbələrdə işçi təminatını əlaqələndirmiş və əməliyyat problemlərini rəhbərlərə çatdırmışam.' },
      { period: 'Apr — İyl 2024', role: 'Müştəri Xidmətləri üzrə Əməkdaş', org: 'Azərbaycan Beynəlxalq Bankı (ABB)', logo: 'abb', desc: 'Gündəlik birbaşa dəstək vasitəsilə müştərilərin müraciət, hesab və ödəniş problemlərini həll etmişəm.' },
      { period: 'İyl — Okt 2022', role: 'Unity Tərtibatçısı — Təcrübəçi', org: 'Azərbaycan Texniki Universiteti', logo: 'unity', desc: 'Unity və C# ilə oyun mexanikaları və interaktiv 3D prototiplər hazırlamış, Sharky demosunu ideyadan oynanıla bilən versiyaya çatdırmışam.' },
    ],
    education: [
      { period: '2024 — 2026', role: 'Kompüter Elmləri üzrə Magistr', org: 'Minnesota Universiteti', logo: 'umn', desc: 'Gözlənilən məzuniyyət: dekabr 2026 · GPA 3.8/4.0. Veb proqramlaşdırma, vizuallaşdırma, kompüter qrafikası, ağıllı qarışıq reallıq sistemləri və robototexnika üzrə dərslər.' },
      { period: '2020 — 2024', role: 'İnformasiya Texnologiyaları üzrə Bakalavr', org: 'Azərbaycan Texniki Universiteti · SABAH Qrupları', logo: 'aztu', desc: 'Fərqlənmə ilə məzun olmuşam · Orta bal: 97/100.' },
    ],
    badges: { progress: 'Davam edir' },
    linkLabels: { code: 'Koda bax', demo: 'Videoya bax', live: 'Canlı demo' },
    contribution: 'Mənim töhfəm',
    projectIntro: 'Veb proqramlaşdırma, süni intellekt, qrafika və immersiv texnologiyalar üzrə seçilmiş işlər.',
    coverLabels: ['qiymətləndirmə', 'istifadəçi', 'film'],
    projects: projects([
      { id: 'resilience', title: 'Resilience Protocol', sub: 'VR Oyunu · Unreal Engine 5.6', desc: 'Stressə hazırlıq konsepsiyaları əsasında hazırlanmış birinci şəxsdən VR qorxu və qaçış oyunu. MetaHuman əsaslı süni intellekt oyunçunu fizika əsaslı tapmacalar, adaptiv səslər və üç gərginləşən mərhələ boyunca təqib edir.' },
      { id: 'thrombectomy', title: 'Qarışıq Reallıq Trombektomiya Simulyatoru', sub: 'Simulyasiya · Alqoritmlər · Meta Quest 3', desc: 'CT-A skanlarından əldə edilmiş damar həndəsəsində bələdçi teli və kateteri idarə etmək üçün tibbi qarışıq reallıq simulyasiyası.', contribution: '917 düyün və yeddi şaxələnmə nöqtəsi olan qraf əsaslı naviqasiya, dəqiq geri çəkilmə üçün tarixçə steki, haptik geri bildirim və flüoroskopiya rejimi hazırlamışam.' },
      { id: 'assistant', title: 'Qarışıq Reallıq AI Köməkçisi', sub: 'AI İnteqrasiyası · Səs və Görüntü', desc: 'Meta Quest 3 üçün səsli qarşılıqlı əlaqəni, canlı kamera görüntüsünü və məkan məlumatlarına əsaslanan naviqasiyanı birləşdirən süni intellekt köməkçisi.', contribution: 'Azure OpenAI və Azure Speech REST API-ləri ilə səsdən səsə emal sistemi qurmuş, funksiya çağırışlarını və canlı kamera məlumatlarını inteqrasiya etmişəm.' },
      { id: 'strokes', title: 'Living Strokes', sub: 'VR Rəsm Aləti · GPU Animasiyası', desc: 'Hər fırça izini qeydə alınmış əl jesti ilə canlandıran VR rəsm aləti. Hərəkət GPU teksturalarında saxlanılır və xüsusi HLSL vertex shader vasitəsilə təkrarlanır.' },
      { id: 'platform', title: 'Platform Ink: NPR Platformer', sub: 'Qrafika Proqramlaşdırması · C++ / OpenGL', desc: 'Xüsusi render, kolliziya və səviyyə sistemi ilə sıfırdan hazırlanmış üçüncü şəxsdən 3D platformer. Stilizə edilmiş render xətti toon kölgələndirməsini, kənar işıqlandırmasını və tərs səth konturlarını birləşdirir.' },
      { id: 'dimension', title: 'Dimension', sub: 'İnteraktiv Veb · Verilənlərin Vizuallaşdırılması', desc: 'MovieLens 100K verilənlər dəsti əsasında demoqrafik xüsusiyyətlərin film qiymətləndirmələrinə təsirini araşdıran, səhifə sürüşdürüldükcə hekayəni açan komanda layihəsi.', contribution: 'Beş vizuallaşdırmanı vahid interfeysdə birləşdirmiş, janr seçimləri, ipucları, nümunə sayı göstəriciləri və sürüşdürmə ilə keçidləri olan yaş/janr xətt qrafikini hazırlamışam.' },
      { id: 'thesis', title: 'VR-də Sosial Stress Tədqiqatı', sub: 'Magistr Dissertasiyası · İnsan–Kompüter Qarşılıqlı Əlaqəsi', desc: 'Virtual qiymətləndiricinin vizual realizminin qiymətləndirilən VR tapşırığı zamanı stressə təsir edib-etmədiyini araşdıran davam edən tədqiqat. Prof. Victoria Interrante-nin rəhbərliyi ilə Unreal Engine 5-də hazırlanır.' },
    ]),
    skillGroups: [['Proqramlaşdırma Dilləri', skillItems.languages], ['Veb Proqramlaşdırma', skillItems.web], ['Backend və Süni İntellekt', skillItems.backend], ['Qrafika və XR', skillItems.graphics], ['Alətlər', skillItems.tools]],
    resume: 'CV-yə bax',
    socialLabels: { github: 'GitHub profilim', linkedin: 'LinkedIn profilim', email: 'E-poçt göndər' },
    contact: { title: 'Birlikdə yeni bir şey yaradaq', sub: 'Proqram mühəndisliyi üzrə iş imkanlarına, tədqiqat əməkdaşlığına və interaktiv texnologiya layihələrinə açığam.', btn: 'Əlaqə saxla →' },
  },
};
