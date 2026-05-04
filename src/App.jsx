import { useState } from 'react'
import './index.css'
import './App.css'

import photo1 from './assets/smit.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
// Note: smit.jpg is the black suit arms-crossed photo (hero)
// photo2.jpg is the white shirt office photo
// photo3.jpg is the navy blue suit tie photo

const SERVICES = [
  {
    icon: '🤖',
    color: '#e8f0ff',
    title: 'AI Apps & Integration',
    desc: 'Custom AI-powered solutions integrated directly into your business workflows.',
    list: ['Custom AI chatbots for websites', 'AI-powered customer support', 'Smart workflow automation', 'Prompt engineering for business', 'No-code & low-code AI solutions'],
  },
  {
    icon: '🌐',
    color: '#eef8f0',
    title: 'Web & Mobile Design',
    desc: 'Modern, scalable web applications and SaaS products that perform and grow.',
    list: ['Full-stack web application dev', 'SaaS product from 0 to launch', 'Secure login & user management', 'Database design & API dev', 'Cloud deployment & CI/CD'],
  },
  {
    icon: '📝',
    color: '#fff0f5',
    title: 'AI Landing Page Content',
    desc: 'High-converting copy and content that speaks to your audience and drives action.',
    list: ['Landing page copy that converts', 'Complete sales funnel content', 'Product & service descriptions', 'Email marketing sequences', 'SEO-friendly content structure'],
  },
  {
    icon: '🔍',
    color: '#f5f0ff',
    title: 'AI Research Reports',
    desc: 'Deep research and analysis to inform your business decisions with clarity.',
    list: ['Market & industry analysis', 'Competitor research reports', 'Business & investment research', 'Product & niche research', 'Executive summaries'],
  },
  {
    icon: '📊',
    color: '#e8f8ff',
    title: 'Excel & Sheets Automation',
    desc: 'Smart spreadsheets and dashboards that save hours of manual work every week.',
    list: ['Spreadsheet automation', 'Custom dashboards with live data', 'Data cleaning & organization', 'AI-powered data analysis', 'Automated reporting systems'],
  },
  {
    icon: '🚀',
    color: '#fff8e8',
    title: 'Full Delivery & Support',
    desc: 'End-to-end ownership from idea to deployed, working product — built to last.',
    list: ['Fast execution, quality output', 'Clear communication always', 'Full ownership & accountability', 'Scalable & maintainable builds', 'Revisions until you\'re satisfied'],
  },
]

const PROJECTS = [
  {
    emoji: '🏥',
    label: 'LIVE',
    bg: 'linear-gradient(135deg,#b8d4f0,#d4ccf0)',
    title: 'MediCap — Doctor & Patient System',
    desc: 'Complete Doctor and Patient Management System with role-based dashboards, secure authentication, 20+ API endpoints. Deployed live on Google Cloud with automated CI/CD pipeline from GitHub.',
    link: 'https://github.com/Smart123-12/medicap',
    linkLabel: 'View on GitHub',
  },
  {
    emoji: '🦷',
    label: 'LIVE',
    bg: 'linear-gradient(135deg,#b8e8d8,#c8e6f8)',
    title: 'Dental Clinic Management System',
    desc: 'Full-stack Dental Clinic Management System with admin, doctor & patient roles. Built with React, Node.js and MongoDB. Live deployment on GitHub Pages.',
    link: 'https://smart123-12.github.io/dental-clinic_12/',
    linkLabel: 'Visit Live Site',
  },
  {
    emoji: '🎓',
    label: 'DEPLOYED',
    bg: 'linear-gradient(135deg,#f0d4cc,#f0ccd4)',
    title: 'Tattavyan School — Edutech System',
    desc: 'Multi-role school management system (Admin, Teacher, Student) with interactive dashboards, homework management, attendance, and notice boards.',
    link: 'https://github.com/Smart123-12/tattavyan-school',
    linkLabel: 'View on GitHub',
  },
  {
    emoji: '🏢',
    label: 'LIVE',
    bg: 'linear-gradient(135deg,#d4ccf0,#c8e6f8)',
    title: 'Zenvora Tech Solutions',
    desc: 'Premium portfolio website for USA Job Placement & Search Support Service. Modern, responsive, conversion-focused design deployed on GitHub Pages.',
    link: 'https://github.com/Smart123-12/zenvora-tech-solutions',
    linkLabel: 'View on GitHub',
  },
  {
    emoji: '🧾',
    label: 'TOOL',
    bg: 'linear-gradient(135deg,#b8e8d8,#eef8f0)',
    title: 'Invoice Generator',
    desc: 'Clean, professional invoice generation web app. Generate, preview and download invoices instantly with custom branding support.',
    link: 'https://github.com/Smart123-12/invoice-generator',
    linkLabel: 'View on GitHub',
  },
  {
    emoji: '🏗️',
    label: 'PLATFORM',
    bg: 'linear-gradient(135deg,#fff0e8,#f0d4cc)',
    title: 'Neev Platform',
    desc: 'A modern platform project demonstrating full-stack development capabilities with JavaScript. Scalable architecture built for production.',
    link: 'https://github.com/Smart123-12/neev-platform',
    linkLabel: 'View on GitHub',
  },
]

const REASONS = [
  { icon: '⚡', title: 'Fast Execution', desc: 'I deliver quickly without cutting corners. Speed + quality, not a trade-off.' },
  { icon: '💬', title: 'Clear Communication', desc: 'You know where your project stands at every stage. No ghosting, no guessing.' },
  { icon: '🏆', title: 'Real Deployed Projects', desc: 'Not just mockups — live, working products you can see and use.' },
  { icon: '🔄', title: 'Revisions Until Perfect', desc: 'Your satisfaction is the goal. I stay until the work is done right.' },
  { icon: '📦', title: 'Scalable & Maintainable', desc: 'Clean code built to grow with your business, not fall apart.' },
  { icon: '🕐', title: 'Available 30+ hrs/week', desc: 'Fully committed. I treat every project personally — your success is mine.' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          <span className="logo-dot"></span> Smit Parmar
        </a>
        <div className="navbar-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn-primary navbar-cta" style={{padding:'10px 22px',fontSize:'13px'}}>Hire Me →</a>
        </div>
        <button className="hamburger" aria-label="Menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="blob-bg hero-blob1"></div>
      <div className="blob-bg hero-blob2"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              Available for New Projects
            </div>
            <h1 className="hero-title">
              I Build <span className="grad-text">Scalable Web Apps</span> & AI-Powered Solutions
            </h1>
            <p className="hero-desc">
              From ideas to real, working products — delivered fast, built to last. Clean execution, clear communication, and results that move your business forward.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">🚀 Start a Project</a>
              <a href="#projects" className="btn-outline">View My Work</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">10+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">5+</div>
                <div className="stat-label">Live Deployments</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">30+</div>
                <div className="stat-label">Hrs/Week Available</div>
              </div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <div className="hero-photo-inner">
                <img src={photo1} alt="Smit Parmar" />
              </div>
            </div>
            <div className="hero-badge">
              <span className="hero-badge-icon">🤖</span>
              <div>
                <div className="hero-badge-text">AI Builder</div>
                <div className="hero-badge-sub">Non-IT → Full Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-tag">✨ What I Do</div>
        <h2 className="section-title">Services That Deliver <span className="grad-text">Real Results</span></h2>
        <p className="section-sub">Every service is built with the same commitment — clean execution, scalable output, and real business value.</p>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon" style={{ background: s.color }}>{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-list">
                {s.list.map((item, j) => (
                  <li key={j}><span className="service-check">✔</span>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-tag">🏆 Portfolio</div>
        <h2 className="section-title">Real Projects, <span className="grad-text">Real Impact</span></h2>
        <p className="section-sub">Not just mockups — live deployed applications that clients use every day.</p>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-thumb" style={{ background: p.bg }}>
                <span className="project-thumb-icon">{p.emoji}</span>
                <span className="project-thumb-label">{p.label}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {p.linkLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop: 40 }}>
          <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="btn-outline">
            🐙 View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyMe() {
  return (
    <section className="whyme section" id="about">
      <div className="container">
        <div className="whyme-inner">
          <div className="whyme-photo-stack">
            <div className="whyme-photo-1">
              <img src={photo2} alt="Smit Parmar professional" />
            </div>
            <div className="whyme-photo-2">
              <img src={photo3} alt="Smit Parmar office" />
            </div>
            <div className="whyme-card-badge">
              <div className="whyme-card-badge-num">100%</div>
              <div className="whyme-card-badge-text">Satisfaction<br/>Guaranteed</div>
            </div>
          </div>
          <div>
            <div className="section-tag">💼 Why Work With Me</div>
            <h2 className="section-title">I Take Every Project <span className="grad-text">Personally</span></h2>
            <p className="section-sub">Your success is my success — I won't stop until the work is done right. Here's what sets me apart:</p>
            <div className="reasons-list">
              {REASONS.map((r, i) => (
                <div className="reason-item" key={i}>
                  <span className="reason-icon">{r.icon}</span>
                  <div className="reason-text">
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`🚀 New Project Inquiry from ${form.name} — ${form.service}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject Details:\n${form.message}`)
    window.location.href = `mailto:tattvayan.ai@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div>
            <div className="section-tag">📬 Get In Touch</div>
            <h2 className="section-title">Let's Build Something <span className="grad-text">Amazing</span></h2>
            <p className="section-sub">Send me a message and let's get started today. I respond within 24 hours.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-item-icon">📧</span>
                <div className="contact-item-text">
                  <a href="mailto:tattvayan.ai@gmail.com">tattvayan.ai@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">🐙</span>
                <div className="contact-item-text">
                  <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer">github.com/Smart123-12</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">⏰</span>
                <div className="contact-item-text">
                  <span>Available 30+ hours per week</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-item-icon">✅</span>
                <div className="contact-item-text">
                  <span>Revisions until you are 100% satisfied</span>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 style={{ fontFamily:'Outfit', fontWeight:700, fontSize:'1.3rem', marginBottom:24, color:'var(--text-dark)' }}>
              Start Your Project
            </h3>
            {/* Hidden botcheck field for spam protection */}
            <input type="checkbox" name="botcheck" style={{ display:'none' }} />
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Smith" required
                  value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@email.com" required
                  value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
              </div>
            </div>
            <div className="form-group">
              <label>Service Needed</label>
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
                <option value="">Select a service...</option>
                <option>AI Apps & Integration</option>
                <option>Web & Mobile Design</option>
                <option>AI Landing Page Content</option>
                <option>AI Research Report</option>
                <option>Excel & Sheets Automation</option>
                <option>Other / Full Project</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Tell me about your project, goals, and timeline..." required
                value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ width:'100%', justifyContent:'center' }}
            >
              {sent ? '✅ Opening Email App...' : '🚀 Send Message'}
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
      <div style={{ maxWidth: 1180, margin:'0 auto' }}>
        <div className="footer-inner">
          <div>
            <div className="footer-logo">Smit Parmar</div>
            <div className="footer-copy">© 2026 Smit Parmar. All rights reserved.</div>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <hr className="footer-divider" />
        <p style={{ textAlign:'center', fontSize:12, marginTop:16, opacity:0.5 }}>
          Built with ❤️ — Fast execution, clean code, real results.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </>
  )
}
