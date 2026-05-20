import { useState, useEffect, useRef } from 'react'
import './index.css'
import './App.css'

import photo1 from './assets/smit.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'

// ── DATA ──────────────────────────────────────────────────────

const SKILLS = [
  { name: 'AI Prompt Engineering', level: 96 },
  { name: 'Google Antigravity', level: 95 },
  { name: 'AI Tools (Cursor, Copilot, Claude)', level: 94 },
  { name: 'No-Code / Low-Code Platforms', level: 92 },
  { name: 'AI App Building (v0, Bolt, Replit)', level: 90 },
  { name: 'n8n & Workflow Automation', level: 88 },
  { name: 'React / Next.js (via AI)', level: 85 },
  { name: 'Cloud Deployment (GCP, Vercel)', level: 80 },
]

const SERVICES = [
  {
    icon: '🤖', title: 'AI Apps & Integration',
    desc: 'Custom AI-powered solutions integrated directly into your business workflows.',
    list: ['Custom AI chatbots', 'AI-powered support', 'Smart automation', 'Prompt engineering', 'No-code AI solutions'],
  },
  {
    icon: '🌐', title: 'Full-Stack Web Dev',
    desc: 'Modern, scalable web applications and SaaS products that perform and grow.',
    list: ['React / Next.js apps', 'Node.js APIs', 'Auth & user management', 'Database design', 'Cloud deployment'],
  },
  {
    icon: '📝', title: 'AI Content & Copy',
    desc: 'High-converting copy and content that speaks to your audience and drives action.',
    list: ['Landing page copy', 'Sales funnel content', 'Product descriptions', 'Email sequences', 'SEO optimization'],
  },
  {
    icon: '🔍', title: 'AI Research Reports',
    desc: 'Deep research and analysis to inform your business decisions with clarity.',
    list: ['Market analysis', 'Competitor research', 'Investment research', 'Niche research', 'Executive summaries'],
  },
  {
    icon: '📊', title: 'Data & Automation',
    desc: 'Smart spreadsheets and dashboards that save hours of manual work every week.',
    list: ['Spreadsheet automation', 'Live dashboards', 'Data cleaning', 'AI data analysis', 'Auto reporting'],
  },
  {
    icon: '🚀', title: 'End-to-End Delivery',
    desc: 'From idea to deployed product — built to last with full ownership.',
    list: ['Fast execution', 'Clear communication', 'Full accountability', 'Scalable builds', 'Unlimited revisions'],
  },
]

const PROJECTS = [
  {
    emoji: '🧪', label: 'LIVE', tech: ['Next.js', 'NVIDIA Nemotron', 'AI Agents', 'TensorRT'],
    title: 'AI Analyst — Engineering Intelligence',
    desc: 'AI-powered Engineering Intelligence Platform with 9 autonomous agents. Validates code against PRDs, runs security audits, architecture analysis & production-readiness checks. Powered by NVIDIA Nemotron & vLLM. White-label SaaS with clean indigo UI.',
    link: 'https://smart123-12.github.io/ai-analyst/',
  },
  {
    emoji: '🏥', label: 'LIVE', tech: ['React', 'Node.js', 'MongoDB', 'GCP'],
    title: 'MediCap — Doctor & Patient System',
    desc: 'Complete Doctor & Patient Management System with role-based dashboards, secure auth, 20+ API endpoints. Live on Google Cloud with CI/CD.',
    link: 'https://github.com/Smart123-12/medicap',
  },
  {
    emoji: '🦷', label: 'LIVE', tech: ['React', 'Node.js', 'MongoDB'],
    title: 'Dental Clinic Management',
    desc: 'Full-stack Dental Clinic System with admin, doctor & patient roles. Live deployment on GitHub Pages.',
    link: 'https://smart123-12.github.io/dental-clinic_12/',
  },
  {
    emoji: '🎓', label: 'DEPLOYED', tech: ['React', 'Node.js', 'JavaScript'],
    title: 'Tattavyan School — Edutech',
    desc: 'Multi-role school management (Admin, Teacher, Student) with dashboards, homework, attendance & notice boards.',
    link: 'https://github.com/Smart123-12/tattavyan-school',
  },
  {
    emoji: '💰', label: 'LIVE', tech: ['TypeScript', 'React', 'AI'],
    title: 'AarthIQ — AI Financial Advisor',
    desc: 'AI-powered Indian Tax & Financial Advisory Platform for FY 2026-27. Salary optimizer, freelancer planner, NRI tools & AI Money Coach.',
    link: 'https://github.com/Smart123-12/AarthIQ',
  },
  {
    emoji: '💙', label: 'LIVE', tech: ['TypeScript', 'React', 'IRS API'],
    title: 'BlueTax — US Tax Optimizer',
    desc: 'Privacy-first US W2 tax optimizer using 2026 IRS brackets. Keep more of your paycheck with smart tax planning.',
    link: 'https://github.com/Smart123-12/bluetax',
  },
  {
    emoji: '🧠', label: 'LIVE', tech: ['HTML', 'Node.js', 'Gemini AI'],
    title: 'Nexus AI — Business Intelligence',
    desc: 'AI-Powered Business Intelligence SaaS Platform with Chart.js dashboards, MongoDB, and Gemini AI integration.',
    link: 'https://github.com/Smart123-12/nexus-ai',
  },
  {
    emoji: '📈', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'FinWise — Smart Finance',
    desc: 'Smart Finance Management for Indian families — Tax Calculator, Expense Tracker, Dashboard & Insurance Compare.',
    link: 'https://github.com/Smart123-12/finwise',
  },
  {
    emoji: '🛒', label: 'LIVE', tech: ['React', 'Node.js', 'PHP', 'MySQL'],
    title: 'ecom-dashboard — eCommerce',
    desc: 'Modern Full-Stack eCommerce Dashboard with React frontend, Node.js & PHP backend, MySQL database.',
    link: 'https://github.com/Smart123-12/ecom-dashboard',
  },
  {
    emoji: '🌾', label: 'DEPLOYED', tech: ['React', 'Node.js', 'JavaScript'],
    title: 'Khedut — Farmer Platform',
    desc: 'Agricultural platform connecting farmers with resources, market data, and smart farming tools.',
    link: 'https://github.com/Smart123-12/khedut',
  },
  {
    emoji: '🏢', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Zenvora Tech Solutions',
    desc: 'Premium portfolio for USA Job Placement & Search Support Service. Conversion-focused responsive design.',
    link: 'https://github.com/Smart123-12/zenvora-tech-solutions',
  },
  {
    emoji: '🧾', label: 'TOOL', tech: ['JavaScript', 'HTML', 'CSS'],
    title: 'Invoice Generator',
    desc: 'Professional invoice generation web app. Generate, preview and download invoices instantly.',
    link: 'https://github.com/Smart123-12/invoice-generator',
  },
  {
    emoji: '🏗️', label: 'PLATFORM', tech: ['JavaScript', 'Node.js'],
    title: 'Neev Platform',
    desc: 'Modern scalable platform demonstrating full-stack dev capabilities. Production-ready architecture.',
    link: 'https://github.com/Smart123-12/neev-platform',
  },
  {
    emoji: '🕉️', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Tattvayan — Spiritual Platform',
    desc: 'Full-featured spiritual & cultural platform with beautiful UI, content pages, and interactive elements. Live on GitHub Pages.',
    link: 'https://github.com/Smart123-12/tattvayan',
  },
]

const REASONS = [
  { icon: '⚡', title: 'Fast Execution', desc: 'Speed + quality, delivered without cutting corners.' },
  { icon: '💬', title: 'Clear Communication', desc: 'You always know where your project stands.' },
  { icon: '🏆', title: 'Real Deployed Projects', desc: 'Live, working products — not just mockups.' },
  { icon: '🔄', title: 'Revisions Until Perfect', desc: 'Your satisfaction is the goal. Always.' },
  { icon: '📦', title: 'Scalable & Maintainable', desc: 'Clean code built to grow with your business.' },
  { icon: '🕐', title: 'Available 30+ hrs/week', desc: 'Fully committed to every project.' },
]

const STATS = [
  { num: '14+', label: 'Projects Built' },
  { num: '10+', label: 'Live Deployments' },
  { num: '30+', label: 'Hrs/Week Available' },
  { num: '100%', label: 'Client Satisfaction' },
]

// ── HOOKS ──────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// ── COMPONENTS ─────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="top-nav">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">SP</span>
          <span className="logo-text">Smit Parmar</span>
        </a>
        <div className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Hire Me</a>
        </div>
        <button className={`hamburger ${menuOpen ? 'hamburger--active' : ''}`} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  const [ref, visible] = useInView()
  return (
    <section className={`hero ${visible ? 'in-view' : ''}`} id="home" ref={ref}>
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => <div key={i} className="particle" style={{ '--i': i }} />)}
      </div>
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge-top">
              <span className="pulse-dot" /> Available for New Projects
            </div>
            <h1 className="hero-title">
              I Build <span className="gradient-text">Real Products</span> Using <span className="gradient-text-alt">AI Tools</span>
            </h1>
            <p className="hero-desc">
              Non-IT → AI Builder. I use AI tools like Google Antigravity, Cursor, Claude & no-code platforms to turn ideas into real, deployed products — fast.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-glow">🚀 Start a Project</a>
              <a href="#projects" className="btn-glass">View My Work →</a>
            </div>
            <div className="hero-stats">
              {STATS.map((s, i) => (
                <div className="hero-stat" key={i}>
                  <div className="hero-stat-num">{s.num}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-container">
              <div className="hero-photo-glow" />
              <div className="hero-photo-border">
                <img src={photo1} alt="Smitkumar Parmar" />
              </div>
              <div className="hero-float-badge hero-float-badge--1">
                <span>🤖</span>
                <div><strong>AI Builder</strong><br /><small>Built with AI Tools</small></div>
              </div>
              <div className="hero-float-badge hero-float-badge--2">
                <span>🚀</span>
                <div><strong>14+ Projects</strong><br /><small>All via AI Tools</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  const [ref, visible] = useInView()
  return (
    <section className={`about ${visible ? 'in-view' : ''}`} id="about" ref={ref}>
      <div className="container">
        <div className="about-inner">
          <div className="about-photos">
            <div className="about-photo about-photo--1">
              <img src={photo2} alt="Smit Parmar professional" />
            </div>
            <div className="about-photo about-photo--2">
              <img src={photo3} alt="Smit Parmar office" />
            </div>
            <div className="about-experience-badge">
              <div className="about-exp-num">100%</div>
              <div className="about-exp-text">Satisfaction<br/>Guaranteed</div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">About Me</div>
            <h2 className="section-heading">
              Non-IT Background → <span className="gradient-text">AI Builder</span>
            </h2>
            <p className="about-text">
              I'm <strong>Smitkumar Parmar</strong> — I don't code the traditional way. I use <strong>AI tools like Google Antigravity, Cursor, GitHub Copilot, Claude, v0, Bolt & Replit Agent</strong> to build real, deployed products from scratch.
            </p>
            <p className="about-text">
              Coming from a <strong>non-IT background</strong>, I taught myself to leverage AI & no-code platforms to create full-stack apps, SaaS products & automation workflows. Currently mastering <strong>Agentic AI & n8n</strong> to build even smarter solutions.
            </p>
            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-h-icon">🎯</span>
                <div>
                  <strong>Mission</strong>
                  <p>Turn ideas into real products using AI</p>
                </div>
              </div>
              <div className="about-highlight">
                <span className="about-h-icon">💡</span>
                <div>
                  <strong>Approach</strong>
                  <p>AI tools + prompt skills = fast delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const [ref, visible] = useInView()
  return (
    <section className={`skills ${visible ? 'in-view' : ''}`} id="skills" ref={ref}>
      <div className="container">
        <div className="section-label center">My AI Toolkit</div>
        <h2 className="section-heading center">
          Tools I Use to <span className="gradient-text">Build Products</span>
        </h2>
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div className="skill-item" key={i} style={{ '--delay': `${i * 0.08}s` }}>
              <div className="skill-header">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: visible ? `${s.level}%` : '0%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [ref, visible] = useInView()
  return (
    <section className={`services ${visible ? 'in-view' : ''}`} id="services" ref={ref}>
      <div className="container">
        <div className="section-label center">What I Do</div>
        <h2 className="section-heading center">
          Services That <span className="gradient-text">Deliver Results</span>
        </h2>
        <p className="section-sub center">Clean execution, scalable output, and real business value.</p>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
              <div className="service-icon-wrap">
                <span className="service-icon">{s.icon}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul>
                {s.list.map((item, j) => <li key={j}><span className="check">✓</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ onShowAIAnalyst }) {
  const [ref, visible] = useInView()
  const [filter, setFilter] = useState('ALL')
  const labels = ['ALL', 'LIVE', 'DEPLOYED', 'TOOL', 'PLATFORM']
  const filtered = filter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.label === filter)

  return (
    <section className={`projects ${visible ? 'in-view' : ''}`} id="projects" ref={ref}>
      <div className="container">
        <div className="section-label center">Portfolio</div>
        <h2 className="section-heading center">
          Real Projects, <span className="gradient-text">Real Impact</span>
        </h2>
        <p className="section-sub center">Live deployed applications — not just mockups.</p>
        <div className="project-filters">
          {labels.map(l => (
            <button key={l} className={`filter-btn ${filter === l ? 'filter-btn--active' : ''}`} onClick={() => setFilter(l)}>
              {l}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p, i) => {
            const isAIAnalyst = p.title.includes('AI Analyst')
            return isAIAnalyst ? (
              <div className="project-card project-card--featured" key={i} style={{ '--delay': `${i * 0.07}s`, cursor: 'pointer' }} onClick={onShowAIAnalyst}>
                <div className="project-featured-badge">⭐ Featured Case Study</div>
                <div className="project-top">
                  <span className="project-emoji">{p.emoji}</span>
                  <span className={`project-label project-label--${p.label.toLowerCase()}`}>{p.label}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-link-row">View Full Case Study <span>→</span></div>
              </div>
            ) : (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" key={i} style={{ '--delay': `${i * 0.07}s` }}>
                <div className="project-top">
                  <span className="project-emoji">{p.emoji}</span>
                  <span className={`project-label project-label--${p.label.toLowerCase()}`}>{p.label}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
                </div>
                <div className="project-link-row">View Project <span>→</span></div>
              </a>
            )
          })}
        </div>
        <div className="center" style={{ marginTop: 48 }}>
          <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="btn-glass">
            🐙 View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyMe() {
  const [ref, visible] = useInView()
  return (
    <section className={`whyme ${visible ? 'in-view' : ''}`} id="whyme" ref={ref}>
      <div className="container">
        <div className="section-label center">Why Work With Me</div>
        <h2 className="section-heading center">
          I Take Every Project <span className="gradient-text">Personally</span>
        </h2>
        <div className="reasons-grid">
          {REASONS.map((r, i) => (
            <div className="reason-card" key={i} style={{ '--delay': `${i * 0.08}s` }}>
              <span className="reason-icon">{r.icon}</span>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [ref, visible] = useInView()

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`🚀 Project Inquiry from ${form.name} — ${form.service}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nDetails:\n${form.message}`)
    window.location.href = `mailto:smitparmar208@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className={`contact ${visible ? 'in-view' : ''}`} id="contact" ref={ref}>
      <div className="container">
        <div className="contact-inner">
          <div className="contact-info">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-heading">
              Let's Build <span className="gradient-text">Something Amazing</span>
            </h2>
            <p className="section-sub">Send me a message and let's get started. I respond within 24 hours.</p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="ci-icon">📧</span>
                <a href="mailto:smitparmar208@gmail.com">smitparmar208@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="ci-icon">📱</span>
                <a href="tel:+918140148302">+91 8140148302</a>
              </div>
              <div className="contact-item">
                <span className="ci-icon">🐙</span>
                <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer">github.com/Smart123-12</a>
              </div>
              <div className="contact-item">
                <span className="ci-icon">⏰</span>
                <span>Available 30+ hours per week</span>
              </div>
              <div className="contact-item">
                <span className="ci-icon">✅</span>
                <span>Revisions until 100% satisfied</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Start Your Project</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Smith" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@email.com" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label>Service Needed</label>
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
                <option value="">Select a service...</option>
                <option>AI Apps & Integration</option>
                <option>Full-Stack Web Dev</option>
                <option>AI Content & Copy</option>
                <option>AI Research Report</option>
                <option>Data & Automation</option>
                <option>Other / Full Project</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Tell me about your project, goals, and timeline..." required value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button type="submit" className="btn-glow btn-full">
              {sent ? '✅ Opening Email...' : '🚀 Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <span className="logo-icon">SP</span> Smit Parmar
            </div>
            <p className="footer-tagline">Non-IT → AI Builder | Full-Stack Developer</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Smitkumar Parmar. All rights reserved.</p>
          <p>Built with ❤️ — Fast execution, clean code, real results.</p>
        </div>
      </div>
    </footer>
  )
}

// ── AI ANALYST DETAIL PAGE ─────────────────────────────────────

const AI_AGENTS = [
  { icon: '🏗️', name: 'Architecture Agent', desc: 'Analyzes project structure, dependency graphs, module boundaries, and architectural patterns. Flags circular dependencies and anti-patterns.' },
  { icon: '🔒', name: 'Security Agent', desc: 'Scans for OWASP vulnerabilities, injection risks, auth bypass, exposed secrets, and insecure configurations across all files.' },
  { icon: '📋', name: 'PRD Compliance Agent', desc: 'Validates every feature requirement against actual code implementation. Ensures 100% coverage of product specifications.' },
  { icon: '⚡', name: 'Performance Agent', desc: 'Identifies bottlenecks, N+1 queries, memory leaks, unoptimized loops, and suggests caching strategies.' },
  { icon: '🧪', name: 'Testing Agent', desc: 'Audits test coverage, identifies untested edge cases, validates test quality, and ensures critical paths are covered.' },
  { icon: '📦', name: 'Dependency Agent', desc: 'Checks for outdated packages, known CVEs, license conflicts, and unnecessary dependencies bloating the bundle.' },
  { icon: '📝', name: 'Code Quality Agent', desc: 'Reviews naming conventions, code duplication, complexity metrics, documentation coverage, and best practices.' },
  { icon: '🚀', name: 'Deploy Readiness Agent', desc: 'Validates CI/CD configs, environment variables, health checks, monitoring setup, and production deployment checklist.' },
  { icon: '🤖', name: 'AI Orchestrator Agent', desc: 'Coordinates all 8 specialist agents, merges reports, resolves conflicts, and generates the final executive summary.' },
]

const AI_FEATURES = [
  { icon: '🧠', title: 'Multi-Agent AI System', desc: '9 autonomous AI agents working in parallel to analyze every aspect of your codebase simultaneously.' },
  { icon: '📄', title: 'PRD-Aware Analysis', desc: 'Upload your PRD and the AI validates whether your code actually implements every requirement — no guessing.' },
  { icon: '🔍', title: 'Deep Code Scanning', desc: 'Goes beyond linting — understands business logic, data flows, and architectural decisions at a semantic level.' },
  { icon: '📊', title: 'Interactive Dashboards', desc: 'Chart.js powered dashboards with real-time metrics on code health, security score, and PRD compliance.' },
  { icon: '🛡️', title: 'Security-First Audit', desc: 'OWASP-aligned security scanning, secret detection, SQL injection checks, and XSS vulnerability analysis.' },
  { icon: '⚡', title: 'NVIDIA Nemotron Powered', desc: 'Built on NVIDIA Nemotron LLM with vLLM inference engine and TensorRT-LLM for blazing-fast analysis.' },
  { icon: '📑', title: 'Executive Reports', desc: 'Auto-generated professional audit reports with severity ratings, fix suggestions, and priority rankings.' },
  { icon: '🔄', title: 'CI/CD Integration', desc: 'Plug into your GitHub Actions, GitLab CI, or any pipeline for automated code review on every commit.' },
]

const AI_TECH = [
  { name: 'Next.js 15', category: 'Frontend' },
  { name: 'React 19', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'NVIDIA Nemotron', category: 'AI Engine' },
  { name: 'vLLM', category: 'AI Inference' },
  { name: 'TensorRT-LLM', category: 'AI Optimization' },
  { name: 'Chart.js', category: 'Visualization' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'GitHub Pages', category: 'Deployment' },
]

function AIAnalystPage({ onBack }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="ai-page">
      {/* Back Nav */}
      <nav className="ai-page-nav">
        <div className="container">
          <button className="ai-back-btn" onClick={onBack}>
            ← Back to Portfolio
          </button>
          <a href="https://smart123-12.github.io/ai-analyst/" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{padding:'10px 28px',fontSize:'13px'}}>
            🚀 Visit Live Site
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="ai-hero">
        <div className="ai-hero-glow" />
        <div className="container">
          <div className="ai-hero-badge">Powered by NVIDIA Nemotron · vLLM · TensorRT-LLM</div>
          <h1 className="ai-hero-title">
            AI Analyst — <span className="gradient-text">Engineering Intelligence</span> Platform
          </h1>
          <p className="ai-hero-desc">
            The world's first AI-powered PRD-aware engineering analyst. 9 autonomous AI agents validate whether your software implementations satisfy product requirements, engineering standards, and production-readiness criteria — all in one click.
          </p>
          <div className="ai-hero-stats">
            <div className="ai-stat"><div className="ai-stat-num">9</div><div className="ai-stat-label">AI Agents</div></div>
            <div className="ai-stat"><div className="ai-stat-num">100%</div><div className="ai-stat-label">PRD Coverage</div></div>
            <div className="ai-stat"><div className="ai-stat-num">&lt;30s</div><div className="ai-stat-label">Analysis Time</div></div>
            <div className="ai-stat"><div className="ai-stat-num">NVIDIA</div><div className="ai-stat-label">Nemotron LLM</div></div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section" style={{background:'#fff'}}>
        <div className="container">
          <div className="ai-two-col">
            <div className="ai-problem-card">
              <div className="section-label" style={{background:'#fef2f2',color:'#dc2626',borderColor:'#fecaca'}}>❌ The Problem</div>
              <h3>Manual Code Reviews Are Broken</h3>
              <ul>
                <li>PR reviews miss 60% of architectural issues</li>
                <li>Security vulnerabilities slip into production</li>
                <li>PRD requirements are never validated against code</li>
                <li>Teams waste 15+ hours/week on manual reviews</li>
                <li>No single tool checks everything — devs use 5+ tools</li>
              </ul>
            </div>
            <div className="ai-solution-card">
              <div className="section-label" style={{background:'#ecfdf5',color:'#059669',borderColor:'#a7f3d0'}}>✅ The Solution</div>
              <h3>AI Analyst Does It All Automatically</h3>
              <ul>
                <li>9 specialized AI agents analyze everything in parallel</li>
                <li>Upload PRD → AI validates every requirement against code</li>
                <li>OWASP-aligned security scanning in every analysis</li>
                <li>Full audit report generated in under 30 seconds</li>
                <li>One platform replaces 5+ separate tools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9 AI Agents */}
      <section className="section" style={{background:'var(--bg-light)'}}>
        <div className="container">
          <div className="section-label center">🤖 Multi-Agent Architecture</div>
          <h2 className="section-heading center">
            Meet the <span className="gradient-text">9 AI Agents</span>
          </h2>
          <p className="section-sub center">Each agent is a specialist, trained to analyze one critical aspect of your codebase with laser focus.</p>
          <div className="ai-agents-grid">
            {AI_AGENTS.map((a, i) => (
              <div className="ai-agent-card" key={i}>
                <div className="ai-agent-icon">{a.icon}</div>
                <h4>{a.name}</h4>
                <p>{a.desc}</p>
                <div className="ai-agent-num">Agent {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{background:'#fff'}}>
        <div className="container">
          <div className="section-label center">⚡ Platform Features</div>
          <h2 className="section-heading center">
            Everything You Need for <span className="gradient-text">Code Intelligence</span>
          </h2>
          <div className="ai-features-grid">
            {AI_FEATURES.map((f, i) => (
              <div className="ai-feature-card" key={i}>
                <span className="ai-feature-icon">{f.icon}</span>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{background:'var(--bg-light)'}}>
        <div className="container">
          <div className="section-label center">🔄 How It Works</div>
          <h2 className="section-heading center">
            From Code to <span className="gradient-text">Full Audit</span> in 3 Steps
          </h2>
          <div className="ai-steps">
            <div className="ai-step">
              <div className="ai-step-num">1</div>
              <h4>Upload Your Code & PRD</h4>
              <p>Connect your GitHub repo or paste code directly. Upload your Product Requirements Document for PRD-aware analysis.</p>
            </div>
            <div className="ai-step-arrow">→</div>
            <div className="ai-step">
              <div className="ai-step-num">2</div>
              <h4>9 Agents Analyze in Parallel</h4>
              <p>All 9 AI agents activate simultaneously — security, architecture, performance, PRD compliance, testing, and more.</p>
            </div>
            <div className="ai-step-arrow">→</div>
            <div className="ai-step">
              <div className="ai-step-num">3</div>
              <h4>Get Executive Report</h4>
              <p>Receive a comprehensive audit report with severity ratings, fix suggestions, compliance scores, and action items.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" style={{background:'#fff'}}>
        <div className="container">
          <div className="section-label center">🛠️ Built With</div>
          <h2 className="section-heading center">
            Powered by <span className="gradient-text">Cutting-Edge Tech</span>
          </h2>
          <div className="ai-tech-grid">
            {AI_TECH.map((t, i) => (
              <div className="ai-tech-tag" key={i}>
                <span className="ai-tech-cat">{t.category}</span>
                <span className="ai-tech-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ai-cta-section">
        <div className="container center">
          <h2 className="section-heading">
            Ready to <span className="gradient-text">Analyze Your Code?</span>
          </h2>
          <p className="section-sub center" style={{marginBottom:36}}>Try AI Analyst free — no signup required. See what 9 AI agents find in your codebase.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://smart123-12.github.io/ai-analyst/" target="_blank" rel="noopener noreferrer" className="btn-glow">🚀 Try AI Analyst Live</a>
            <button onClick={onBack} className="btn-glass">← Back to Portfolio</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// ── APP ────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      {page === 'home' ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects onShowAIAnalyst={() => setPage('ai-analyst')} />
          <WhyMe />
          <Contact />
          <Footer />
        </>
      ) : (
        <AIAnalystPage onBack={() => setPage('home')} />
      )}
    </>
  )
}
