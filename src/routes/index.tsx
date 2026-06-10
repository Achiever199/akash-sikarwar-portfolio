import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowRight, GraduationCap,
  Briefcase, Code2, Award, Sparkles, Trophy, FileBadge, Users, Send,
  Brain, Database, Cpu, Globe, Layers, Rocket, MapPin, Calendar, Star,
} from "lucide-react";
import profileImg from "@/assets/image1.png";
import { TypeWriter } from "@/components/portfolio/TypeWriter";
import { Reveal } from "@/components/portfolio/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akash Sikarwar — Software Developer & ML Enthusiast" },
      { name: "description", content: "Portfolio of Akash Sikarwar — Full Stack Developer, ML Enthusiast and Data Science Explorer at MMMUT Gorakhpur." },
    ],
  }),
  component: Portfolio,
});

const nav = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Backdrop />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Interests />
        <Achievements />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-primary/30 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full blur-[140px] animate-float-slow" style={{ background: "oklch(0.68 0.21 300 / 0.28)", animationDelay: "-4s" }} />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-accent/25 blur-[120px] animate-float-slow" style={{ animationDelay: "-8s" }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-auto max-w-6xl px-4 ${scrolled ? "glass-strong" : ""} ${scrolled ? "rounded-full" : ""} transition-all`}>
        <div className="flex items-center justify-between py-2">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">AS</span>
            <span className="hidden sm:inline">Akash<span className="gradient-text">.dev</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-white/5 transition">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent hover:opacity-90 transition glow-ring">
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen((v) => !v)} aria-label="menu">
            <Layers className="h-5 w-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 text-sm rounded-md hover:bg-white/5">{n.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 text-center">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest text-accent border border-accent/30 bg-accent/5">
                <Sparkles className="h-3 w-3" /> {eyebrow}
              </span>
            )}
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-highlight to-accent" />
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 px-4">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-accent border border-accent/30 bg-accent/5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" /> Available for opportunities
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text animate-gradient">Akash Sikarwar</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground min-h-[2em]">
              I'm a <TypeWriter className="text-foreground font-semibold" words={[
                "Machine Learning Enthusiast",
                "Full Stack Developer",
                "Data Science Learner",
                "Competitive Programmer",
                "Tech Innovator",
              ]} />
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-muted-foreground">
              B.Tech Information Technology student at MMMUT Gorakhpur. I build impactful technology
              with a passion for Machine Learning, Artificial Intelligence and Full Stack Development.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-ring hover:scale-[1.02] transition">
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a href="/src/assets/Akash_Resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium glass hover:bg-white/10 transition">
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a href="https://github.com/Achiever199" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium glass hover:bg-white/10 transition">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/akash-sikarwar-aa7177327/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium glass hover:bg-white/10 transition">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
               <a href="https://leetcode.com/u/Akash_sikarwar/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium glass hover:bg-white/10 transition">
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
  LeetCode
</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto group">
            <div className="absolute -inset-3 rounded-full opacity-70 blur-2xl animate-gradient" style={{ background: "var(--gradient-vivid)" }} />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full p-1 animate-spin-slow" style={{ background: "conic-gradient(from 0deg, oklch(0.68 0.18 250), oklch(0.78 0.15 210), oklch(0.68 0.21 300), oklch(0.68 0.18 250))" }}>
              <div className="h-full w-full rounded-full bg-background p-2">
                <img
                  src={profileImg}
                  alt="Akash Sikarwar"
                  width={400}
                  height={400}
                  className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-strong px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap">
              <span className="gradient-text font-semibold">MMMUT</span> · IT '28
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  const facts = [
    { label: "CGPA", value: "8.8", icon: Star },
    { label: "University", value: "MMMUT", icon: GraduationCap },
    { label: "Department", value: "IT", icon: Cpu },
    { label: "Graduation", value: "2028", icon: Calendar },
  ];
  return (
    <Section id="about" eyebrow="About Me" title={<>Who <span className="gradient-text">I Am</span></>}>
      <div className="grid md:grid-cols-2 gap-8">
        <Reveal>
          <div className="glass rounded-2xl p-8 h-full">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-foreground font-semibold">B.Tech Information Technology</span> student at
              MMMUT Gorakhpur with a strong interest in <span className="text-accent">AI, ML, Data Science</span> and
              Software Development. I love solving problems, shipping projects, and pushing my limits in hackathons
              and coding competitions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Problem Solving", "Hackathons", "Open Source", "Leadership"].map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs glass border border-white/10">{t}</span>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl border border-highlight/30 bg-highlight/5 flex items-start gap-3">
              <Users className="h-5 w-5 text-highlight shrink-0 mt-0.5" />
              <p className="text-sm"><span className="font-semibold">Designing Head</span> · Hack With India, MMMUT Chapter</p>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="glass rounded-2xl p-6 h-full hover:border-accent/40 transition group">
                <f.icon className="h-6 w-6 text-accent group-hover:scale-110 transition" />
                <div className="mt-4 text-3xl font-bold gradient-text">{f.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { time: "2024 — 2028", title: "Madan Mohan Malaviya University of Technology", sub: "B.Tech, Information Technology", score: "CGPA: 8.8" },
    { time: "2023", title: "Shanti Niketan Public School", sub: "CBSE Class XII", score: "89.6%" },
    { time: "2021", title: "Shanti Niketan Public School", sub: "CBSE Class X", score: "91.2%" },
  ];
  return (
    <Section id="education" eyebrow="Education" title={<>My <span className="gradient-text">Academic Journey</span></>}>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-highlight to-accent opacity-50" />
        <div className="space-y-10">
          {items.map((e, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                <div className={`md:[direction:ltr] ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"} pl-12 md:pl-0`}>
                  <div className="glass rounded-2xl p-6 hover:glow-ring transition">
                    <span className="text-xs text-accent font-medium">{e.time}</span>
                    <h3 className="mt-1 text-xl font-bold">{e.title}</h3>
                    <p className="text-muted-foreground mt-1">{e.sub}</p>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs bg-primary/15 text-primary border border-primary/30 font-semibold">{e.score}</span>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-accent glow-ring" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const responsibilities = [
    "Collected, cleaned, and analyzed datasets to identify meaningful trends",
    "Prepared structured data for AI and ML applications",
    "Performed exploratory data analysis and generated actionable insights",
    "Used data visualization techniques to communicate findings",
    "Collaborated on real-world analytical problem-solving",
  ];
  const skills = ["Data Analysis", "Data Cleaning", "EDA", "Visualization", "AI Analytics", "Teamwork"];
  return (
    <Section id="experience" eyebrow="Experience" title={<>Professional <span className="gradient-text">Experience</span></>}>
      <Reveal>
        <div className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="flex flex-wrap items-start gap-4 justify-between">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-primary to-accent text-primary-foreground">
                <Briefcase className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI Data Analyst Intern</h3>
                <p className="text-accent">InAmigos Foundation</p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs glass border border-white/10">2-Week Internship</span>
          </div>
          <p className="mt-6 text-muted-foreground">
            Contributed to data-driven projects involving data analysis, data preparation, and AI-assisted
            insights generation. Gained practical exposure to AI-powered analytics workflows and industry practices.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Key Responsibilities</h4>
              <ul className="space-y-2">
                {responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Skills Developed</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full text-xs bg-primary/10 border border-primary/30 text-primary">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Skills() {
  const groups = [
    { icon: Code2, title: "Programming Languages", items: ["Python", "C", "C++", "JavaScript", "HTML", "CSS"] },
    { icon: Layers, title: "Frameworks & Libraries", items: ["React.js", "Django", "Streamlit", "Scikit-learn"] },
    { icon: Cpu, title: "Developer Tools", items: ["Git", "GitHub", "VS Code", "Streamlit"] },
    { icon: Database, title: "Cloud & Database", items: ["MySQL", "Streamlit Cloud"] },
    { icon: Users, title: "Soft Skills", items: ["Problem Solving", "Teamwork", "Communication", "Leadership", "Event Coordination"] },
  ];
  return (
    <Section id="skills" eyebrow="Skills" title={<>Tech <span className="gradient-text">Arsenal</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 70}>
            <div className="glass rounded-2xl p-6 h-full hover:border-accent/40 hover:-translate-y-1 transition group">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 text-accent group-hover:scale-110 transition">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 hover:bg-primary/15 hover:border-primary/40 transition">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Smart Guardian App",
      desc: "Intelligent air-quality analytics dashboard using ML and Streamlit to predict PM2.5 levels and simulate pollution trends across multiple cities.",
      tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-learn", "ML"],
      features: ["Pollution analytics dashboard", "PM2.5 prediction", "Interactive visualizations", "Multi-city trends"],
      icon: Brain,
      github: "https://github.com/Achiever199/Smart-Air-Guardian",  // replace with your actual link
      demo: " https://smart-air-guardian-fymtzvmkhdrkch9hjb5nbv.streamlit.app/",          // repl
      
    },

    {
      title: "WhistleVerse",
      desc: "A full-stack IPL fan platform featuring live match tracking, team analytics, player statistics, prediction games, and CSK-themed fan experiences.",
      tech: ["React.js", "Vite", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Axios", "Vercel"],
      features: ["Live match tracking", "Team & player analytics", "Prediction leaderboards", "RESTful API backend"],
      icon: Rocket,
      github: "https://github.com/Achiever199/whistleverse-live",  // replace with your actual link
      demo: "https://whistleverse-live-n97kvep10-achiever199s-projects.vercel.app",          // replace with your actual link
    },
    {
      title: "Smart AI Quote Generator",
      desc: "AI-powered quote generation platform with category filtering, search, theme switching, clipboard support, and favorites management.",
      tech: ["React.js", "JavaScript", "Vite", "LocalStorage", "Vercel"],
      features: ["Real-time search", "Category filtering", "Dark/light mode", "Favorites system"],
      icon: Sparkles,
      github: "https://github.com/Achiever199/smart-ai-quote-generator",  // replace with your actual link
      demo: "https://smart-ai-quote-generator-p5i4bkc6g-achiever199s-projects.vercel.app",     
    },
  ];
  return (
    <Section id="projects" eyebrow="Projects" title={<>Featured <span className="gradient-text">Work</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <article className="glass-strong rounded-3xl p-7 h-full relative overflow-hidden group hover:-translate-y-1 transition">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-primary/30 to-highlight/20 blur-3xl group-hover:scale-125 transition duration-700" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl grid place-items-center bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs bg-accent/10 border border-accent/30 text-accent">{t}</span>
                  ))}
                </div>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3">
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition">
  <Globe className="h-4 w-4" /> Live Demo
</a>
<a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass hover:bg-white/10 transition">
  <Github className="h-4 w-4" /> Code
</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Interests() {
  const items = [
    { icon: Brain, label: "Machine Learning" },
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: Database, label: "Data Science" },
    { icon: Globe, label: "Full Stack Web" },
    { icon: Rocket, label: "Competitive Programming" },
  ];
  return (
    <Section id="interests" eyebrow="Interests" title={<>Areas of <span className="gradient-text">Interest</span></>}>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 60}>
            <div className="glass rounded-2xl p-6 text-center hover:border-accent/40 hover:-translate-y-1 transition group">
              <div className="mx-auto h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-primary/30 to-accent/30 border border-white/10 text-accent group-hover:scale-110 transition">
                <it.icon className="h-7 w-7" />
              </div>
              <div className="mt-4 font-medium text-sm">{it.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const items = [
    { title: "Runner Up — Codezilla Coding Competition", desc: "Secured 2nd place by solving multiple DSA challenges under strict time constraints." },
    { title: "Top 15 Finalist — IIIT Bhagalpur Hackathon", desc: "Selected among top 15 teams out of 100+ teams." },
  ];
  return (
    <Section id="achievements" eyebrow="Achievements" title={<>Wins & <span className="gradient-text">Milestones</span></>}>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((a, i) => (
          <Reveal key={a.title} delay={i * 100}>
            <div className="glass-strong rounded-2xl p-7 flex gap-4 hover:glow-ring transition">
              <div className="h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-highlight to-primary text-primary-foreground shrink-0">
                <Trophy className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    "Goldman Sachs Internal Audit Job Simulation",
    "Data Labeling Job Simulation (Forage)",
    "Introduction to Data Engineering and Big Data (GUVI × HCL)",
    "GenAI Powered Data Analytics Job Simulation",
    "Presentation Skills Certification (Tata iON)",
  ];
  return (
    <Section id="certifications" eyebrow="Certifications" title={<>Verified <span className="gradient-text">Credentials</span></>}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <Reveal key={c} delay={i * 60}>
            <div className="glass rounded-2xl p-5 flex items-start gap-3 hover:border-accent/40 transition h-full">
              <FileBadge className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <span className="text-sm font-medium">{c}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title={<>Roles & <span className="gradient-text">Responsibilities</span></>}>
      <Reveal>
        <div className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-highlight/20 blur-3xl" />
          <div className="relative flex flex-wrap items-start gap-6">
            <div className="h-16 w-16 rounded-2xl grid place-items-center bg-gradient-to-br from-highlight to-accent text-primary-foreground">
              <Award className="h-8 w-8" />
            </div>
            <div className="flex-1 min-w-[260px]">
              <h3 className="text-2xl font-bold">Designing Head</h3>
              <p className="text-accent">Hack With India · MMMUT Chapter</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                {["Leading creative initiatives", "Managing design teams", "Branding & promotional content", "Event design coordination"].map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 text-accent mt-0.5" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's <span className="gradient-text">Connect</span></>}>
      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8 space-y-4">
            <h3 className="text-xl font-bold">Get in touch</h3>
            <p className="text-muted-foreground text-sm">Open to internships, collaborations, and exciting opportunities.</p>
            <div className="space-y-3 pt-2">
              <a href="tel:+919410408137" className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-white/10 transition">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/20 text-primary"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Phone</div>
                  <div className="text-sm font-medium">+91 94104 08137</div>
                </div>
              </a>
              <a href="mailto:sikarwarakash199@gmail.com" className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-white/10 transition">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-accent/20 text-accent"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium">sikarwarakash199@gmail.com</div>
                </div>
              </a>
              <a href="mailto:2024071109@mmmut.ac.in" className="flex items-center gap-3 p-3 rounded-xl glass hover:bg-white/10 transition">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-highlight/20 text-highlight"><GraduationCap className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">University</div>
                  <div className="text-sm font-medium">2024071109@mmmut.ac.in</div>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-xl glass">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary/20 text-primary"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="text-sm font-medium">Gorakhpur, India</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/Achiever199" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full glass hover:bg-primary/20 hover:text-primary transition"><Github className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/akash-sikarwar-aa7177327/" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full glass hover:bg-primary/20 hover:text-primary transition"><Linkedin className="h-5 w-5" /></a>
              {/* <a href="mailto:sikarwarakash199@gmail.com" className="h-11 w-11 grid place-items-center rounded-full glass hover:bg-primary/20 hover:text-primary transition"><Mail className="h-5 w-5" /></a> */}
               <a href="https://leetcode.com/u/Akash_sikarwar/" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full glass hover:bg-primary/20 hover:text-primary transition">
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H19.7a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
  </a>
  <a href="https://www.codechef.com/users/aka_achiever09" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-full glass hover:bg-primary/20 hover:text-primary transition">
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M11.257 0C5.04 0 0 5.373 0 12s5.04 12 11.257 12c1.footprint 0 2.46-.23 3.545-.647l.232-.09v-2.537l-.528.22a8.755 8.755 0 0 1-3.249.625C5.596 21.57 2.37 17.24 2.37 12c0-5.24 3.226-9.571 8.887-9.571a8.74 8.74 0 0 1 3.249.625l.528.22V.737l-.232-.09A11.22 11.22 0 0 0 11.257 0zm5.27 7.921l-1.3 1.3-1.27-1.27 1.3-1.3zm-8.86.06L6.37 9.28 5.1 8.01l1.3-1.3zm4.43.45v1.84H10.26V8.43zm-4.52 2.47 1.27 1.27-1.3 1.3-1.27-1.27zm9.04 0 1.27 1.27-1.3 1.3-1.27-1.27zm-4.52.33h1.84v1.84h-1.84zm-4.43 2.56 1.3 1.3-1.27 1.27-1.3-1.3zm8.86 0 1.3 1.3-1.27 1.27-1.3-1.3zm-4.43.45v1.84H10.26v-1.84z"/>
    </svg>
  </a>
  <a href="mailto:sikarwarakash199@gmail.com" className="h-11 w-11 grid place-items-center rounded-full glass hover:bg-primary/20 hover:text-primary transition">
    <Mail className="h-5 w-5" />
  </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="glass-strong rounded-3xl p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const name = fd.get("name");
              const message = fd.get("message");
              window.location.href = `mailto:sikarwarakash199@gmail.com?subject=Portfolio inquiry from ${name}&body=${encodeURIComponent(String(message ?? ""))}`;
            }}
          >
            <h3 className="text-xl font-bold">Send a message</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <input required name="name" placeholder="Your name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/60 outline-none transition" />
              <input required type="email" name="email" placeholder="Your email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/60 outline-none transition" />
            </div>
            <input name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/60 outline-none transition" />
            <textarea required name="message" rows={5} placeholder="Your message" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent/60 outline-none transition resize-none" />
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-primary to-accent glow-ring hover:scale-[1.01] transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-2 font-display font-bold">
          <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">AS</span>
          Akash<span className="gradient-text">.dev</span>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground justify-center">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground transition">{n.label}</a>
          ))}
        </nav>
        <div className="flex gap-3">
          <a href="https://github.com/Achiever199" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"><Github className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/akash-sikarwar-aa7177327/" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"><Linkedin className="h-4 w-4" /></a>
          <a href="mailto:sikarwarakash199@gmail.com" className="h-9 w-9 grid place-items-center rounded-full glass hover:text-primary transition"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Designed & Developed by <span className="gradient-text font-semibold">Akash Sikarwar</span> © 2026
      </p>
    </footer>
  );
}
