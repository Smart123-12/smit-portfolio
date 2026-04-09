import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Code2, Database, Brain, Globe, Layout, Smartphone, Cloud, Cpu, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profileImage from './assets/smit.jpg'; // Using standard profile picture
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="mesh-bg">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">Smit.</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">AI Builder & No-Code Creator</span>
            <h1>Hi, I'm <span>Smit Parmar</span></h1>
            <p>
              I build Agentic AI systems, No-Code SaaS platforms, and automate workflows using n8n. 
              Currently exploring Gemini API, Vertex AI, and building intelligent solutions.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-image-blob">
              <img 
                src={profileImage} 
                alt="Smit Parmar" 
                onError={(e) => { 
                  e.target.onerror = null; 
                  e.target.src = 'https://ui-avatars.com/api/?name=Smit+Parmar&size=512&background=0284c7&color=fff'; 
                }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about bg-alt">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            About Me
          </motion.h2>
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                As an AI Builder and Prompt Engineer, I specialize in bridging the gap between complex AI capabilities and practical, user-friendly solutions. My journey from a Non-IT background has given me a unique perspective on solving real-world problems.
              </p>
              <p>
                I hold multiple certifications from Google, including Gen AI Agents, Google Cloud Infrastructure, and Prompt Design in Vertex AI. My goal is to leverage these skills to build innovative No-Code SaaS applications and automate workflows.
              </p>
              <div className="about-stats">
                <div className="stat-card glass-card">
                  <h3>18th</h3>
                  <p>Rank at PromptWars</p>
                </div>
                <div className="stat-card glass-card">
                  <h3>5+</h3>
                  <p>Google Certifications</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="about-img-container">
                 <img 
                   src={profileImage} 
                   alt="Smit Parmar AI" 
                   className="about-img" 
                   onError={(e) => { 
                     e.target.onerror = null; 
                     e.target.src = 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop'; 
                   }} 
                 />
                 <div className="about-img-backdrop"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Core Skills
          </motion.h2>
          <motion.div 
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { icon: <Brain />, name: "Prompt Engineering" },
              { icon: <Cpu />, name: "Agentic AI Systems" },
              { icon: <Globe />, name: "No-Code SaaS" },
              { icon: <Cloud />, name: "Google Cloud Run" },
              { icon: <Database />, name: "BigQuery ML" },
              { icon: <Code2 />, name: "Gemini / Vertex AI" },
              { icon: <Layout />, name: "n8n Automation" },
              { icon: <Smartphone />, name: "Responsive UI" }
            ].map((skill, index) => (
              <motion.div key={index} className="skill-card glass-card" variants={fadeInUp}>
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-alt">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="projects-grid">
            {/* MediCap */}
            <motion.div className="project-card glass-card" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="project-image">
                <Brain size={64} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">AI/ML</span>
                  <span className="project-tag">Google Cloud</span>
                </div>
                <h3 className="project-title">MediCap</h3>
                <p className="project-desc">A smart Doctor & Patient platform tailored for Gujarat, built with AI features and deployed securely on Google Cloud Run.</p>
                <div className="project-links">
                  <a href="https://github.com/Smart123-12/medicap" target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Tattvayan */}
            <motion.div className="project-card glass-card" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="project-image">
                <Globe size={64} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">HTML/CSS</span>
                  <span className="project-tag">Web Design</span>
                </div>
                <h3 className="project-title">Tattvayan</h3>
                <p className="project-desc">A modern, responsive web experience showcasing clean UI/UX and fundamental front-end development principles.</p>
                <div className="project-links">
                  <a href="https://github.com/Smart123-12/tattvayan" target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Agentic Workflows */}
            <motion.div className="project-card glass-card" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="project-image">
                <Cpu size={64} />
              </div>
              <div className="project-content">
                <div className="project-tags">
                  <span className="project-tag">n8n</span>
                  <span className="project-tag">Automation</span>
                </div>
                <h3 className="project-title">Agentic AI Workflows</h3>
                <p className="project-desc">Automated, no-code integrations combining Gemini API with diverse data sources to create powerful, autonomous business solutions.</p>
                <div className="project-links">
                  <a href="https://github.com/Smart123-12" target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={18} /> View More
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <motion.div 
            className="contact-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-card glass-card">
              <div className="contact-icon">
                <Mail size={32} />
              </div>
              <h3>Reach out via Email</h3>
              <p>Interested in collaborating on AI projects or have an idea for a No-Code SaaS? Let's talk!</p>
              <a href="mailto:smitparmar208@gmail.com" className="email-btn">
                smitparmar208@gmail.com <ArrowRight size={20} />
              </a>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
              <a href="https://github.com/Smart123-12" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <FaGithub size={32} />
              </a>
              <a href="https://linkedin.com/in/parmar-smit-101490196" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <FaLinkedin size={32} />
              </a>
              <a href="https://g.dev/smitparmar" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                <Globe size={32} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Smit Parmar. Built with modern web technologies.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
