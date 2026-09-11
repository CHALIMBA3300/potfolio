'use client';

import { useState } from 'react';
import { ArrowUpRight, ArrowDown, Code2, Layers3, Database, Terminal, Network, Wrench, Mail, Phone, Menu, X, ArrowUp, GraduationCap } from 'lucide-react';

const skills = [
  { number: '01', name: 'Web development', description: 'Responsive, user-friendly interfaces built to last.', icon: Code2, tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'] },
  { number: '02', name: 'Backend development', description: 'Server-side logic, scripting, and backend workflows.', icon: Terminal, tags: ['Python', 'Server-side Logic', 'Scripting', 'Node.js'] },
  { number: '03', name: 'Database management', description: 'Designing schemas and writing efficient queries.', icon: Database, tags: ['SQL', 'Database Design', 'Table Relationships', 'CRUD Operations'] },
  { number: '04', name: 'API integration', description: 'Connecting frontend and backend over HTTP.', icon: Network, tags: ['RESTful APIs', 'GET', 'POST', 'PUT', 'DELETE'] },
  { number: '05', name: 'UI/UX design', description: 'Translating designs into accessible interfaces.', icon: Layers3, tags: ['UI/UX Principles', 'Accessibility', 'Design Translation'] },
  { number: '06', name: 'IT support & systems', description: 'Troubleshooting, maintenance, and documentation.', icon: Wrench, tags: ['Troubleshooting', 'Technical Maintenance', 'Documentation'] },
];

const experience = [
  { role: 'Sales & Website Developer', company: 'Emu Technologies ZM', duration: 'Apr 2026 – Present', description: 'Building and maintaining client websites while supporting sales and business development at the company.' },
  { role: 'Website Developer', company: 'Chroma Pixel Games', duration: '1 Year, 4 Months', description: 'Designed and developed responsive web interfaces using HTML, CSS, and JavaScript to improve user engagement and user experience.' },
  { role: 'Back-end Developer Intern', company: 'Emu Technologies ZM', duration: '1 Month', description: 'Assisted in the development of server-side logic and database management, gaining practical experience in back-end architecture within a fast-paced environment.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="header" id="top">
        <a className="wordmark" href="#top" aria-label="Charles Chalimba home">charles<span>.</span></a>
        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>My toolkit</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </nav>
        <a className="header-cta" href="#about">Meet Charles <ArrowUpRight size={17}/></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> A LITTLE CURIOSITY. A LOT OF POSSIBILITY.</div>
            <h1 id="hero-title">Thoughtful design.<br/>Meaningful code.<br/><span>Human experiences.</span></h1>
            <p className="hero-description">Hi, I’m Charles Chalimba — a frontend-focused web developer and IT professional based in Lusaka, Zambia, building responsive, accessible interfaces at the intersection of design and code.</p>
            <div className="hero-actions"><a className="button primary" href="#about">A little about me <ArrowUpRight size={18}/></a><a className="text-link" href="#skills">Explore my skills <ArrowDown size={16}/></a></div>
            <div className="hero-footnote"><span className="little-star">✳</span> Built with intention. Always evolving.</div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract orange asterisk surrounded by design and code motifs">
            <div className="art-grid"/>
            <div className="art-top"><span>CREATIVE THINKING<br/>MEETS TECHNICAL CRAFT</span><span>CC—01</span></div>
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="asterisk">{Array.from({length: 8}, (_, i) => <span key={i} style={{transform: `rotate(${i * 22.5}deg)`}}/>)}</div>
            <div className="floating-tag code-tag"><Code2 size={17}/> developer</div>
            <div className="floating-tag design-tag"><span className="tag-dot"/> designer</div>
            <div className="art-bottom"><span>A MULTIDISCIPLINARY MIND.</span><ArrowUpRight size={28}/></div>
          </div>
        </section>

        <div className="discipline-strip"><span>DEVELOPMENT</span><span className="strip-star">✳</span><span>DESIGN</span><span className="strip-star">✳</span><span>PROBLEM-SOLVING</span><span className="strip-star">✳</span><span>CONTINUOUS GROWTH</span></div>

        <section className="about section" id="about">
          <div className="section-label"><span className="orange-square"/>01 / ABOUT ME</div>
          <div className="about-content"><h2>A curious mind.<br/>A builder at heart<span>.</span></h2><div className="about-body"><p>I’m Charles, a frontend-focused website developer and IT professional with a passion for creating meaningful, accessible digital experiences.</p><p>A graduate of Zambia University College of Technology, I combine technical expertise with creative problem-solving to build products that put people first. Whatever I’m working on, I stay curious, adaptable, and committed to growing.</p><div className="education"><GraduationCap size={24}/><div className="education-items"><div><strong>Zambia University College of Technology</strong><span>2022 – 2025</span></div><div><strong>Chilenje South Secondary School</strong><span>2016 – 2019 · Grade 12 Certificate</span></div></div></div></div></div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-label"><span className="orange-square"/>02 / MY TOOLKIT</div>
          <div className="section-heading"><h2>Ideas meet <span className="serif">know-how.</span></h2><p>From the first wireframe to the final line of code,<br/>here’s what I bring to the table.</p></div>
          <div className="skills-grid">{skills.map(({number, name, description, icon: Icon, tags}) => <article className="skill-card" key={number}><div className="card-top"><div className="skill-icon"><Icon size={23} strokeWidth={1.5}/></div><span>{number}</span></div><h3>{name}</h3><p>{description}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-label"><span className="orange-square"/>03 / EXPERIENCE</div>
          <div className="section-heading"><h2>Hands-on <span className="serif">in the field.</span></h2><p>Real projects, real teams,<br/>real problem-solving.</p></div>
          <div className="experience-list">{experience.map(({role, company, duration, description}) => <article className="experience-item" key={role}><div className="experience-top"><h3>{role}</h3><span className="experience-duration">{duration}</span></div><div className="experience-company">{company}</div><p>{description}</p></article>)}</div>
        </section>

        <section className="closing"><div className="eyebrow">CURIOUS BY NATURE. CREATIVE BY CHOICE.</div><h2>Always learning.<br/>Always <span>building something.</span></h2><a className="button primary" href="#skills">Discover what I bring <ArrowUpRight size={18}/></a></section>
      </main>
      <footer><a className="wordmark" href="#top">charles<span>.</span></a><div className="footer-contact"><a href="mailto:chalimbacharles44@gmail.com"><Mail size={13}/> chalimbacharles44@gmail.com</a><a href="tel:+260777419816"><Phone size={13}/> +260 777 419 816</a></div><p>© {new Date().getFullYear()} Charles Chalimba. Made with intention.</p><a className="back-top" href="#top">Back to top <ArrowUp size={16}/></a></footer>
    </>
  );
}
