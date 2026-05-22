import { useState, useEffect, useRef } from 'react'
import './index.css'
import './App.css'

import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'

// -- DATA --

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
    icon: '\u{1F916}', title: 'AI Apps & Integration',
    desc: 'Custom AI-powered solutions integrated directly into your business workflows.',
    list: ['Custom AI chatbots', 'AI-powered support', 'Smart automation', 'Prompt engineering', 'No-code AI solutions'],
  },
  {
    icon: '\u{1F310}', title: 'Full-Stack Web Dev',
    desc: 'Modern, scalable web applications and SaaS products that perform and grow.',
    list: ['React / Next.js apps', 'Node.js APIs', 'Auth & user management', 'Database design', 'Cloud deployment'],
  },
  {
    icon: '\u{1F4DD}', title: 'AI Content & Copy',
    desc: 'High-converting copy and content that speaks to your audience and drives action.',
    list: ['Landing page copy', 'Sales funnel content', 'Product descriptions', 'Email sequences', 'SEO optimization'],
  },
  {
    icon: '\u{1F50D}', title: 'AI Research Reports',
    desc: 'Deep research and analysis to inform your business decisions with clarity.',
    list: ['Market analysis', 'Competitor research', 'Investment research', 'Niche research', 'Executive summaries'],
  },
  {
    icon: '\u{1F4CA}', title: 'Data & Automation',
    desc: 'Smart spreadsheets and dashboards that save hours of manual work every week.',
    list: ['Spreadsheet automation', 'Live dashboards', 'Data cleaning', 'AI data analysis', 'Auto reporting'],
  },
  {
    icon: '\u{1F680}', title: 'End-to-End Delivery',
    desc: 'From idea to deployed product - built to last with full ownership.',
    list: ['Fast execution', 'Clear communication', 'Full accountability', 'Scalable builds', 'Unlimited revisions'],
  },
]

const PROJECTS = [
  {
    emoji: '\u{267B}', label: 'LIVE', tech: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    title: 'EcoLoop', subtitle: 'Circular Economy Tech',
    desc: 'AI-powered B2B Circular Economy Platform connecting factories, certified recyclers, and buyers to exchange industrial waste and audit Scope 3 ESG metrics.',
    link: 'https://smart123-12.github.io/ecoloop/',
    details: {
      tagline: 'Futuristic Climate-Tech Circular Infrastructure Platform',
      fullDesc: 'EcoLoop is an AI-powered B2B Circular Economy Platform that connects factories, certified recyclers, and raw material manufacturers to exchange industrial waste streams, optimize regional logistics, and track carbon offsets automatically.',
      problem: [
        'Factories dump valuable industrial byproducts into landfills',
        'Finding certified regional recyclers is a manual, tedious process',
        'SMEs overpay for raw materials due to high waste-disposal costs',
        'Carbon credit tracking and ESG compliance lacks audit transparency',
        'Logistics transport adds high Scope 3 carbon overhead to waste streams'
      ],
      solution: [
        'AI matching matches industrial waste lots with verified buyers',
        'A real-time price & carbon savings estimator automates quotes',
        'Live RFP bidding simulation streamlines raw material allocation',
        'Dynamic animated material flow charts visualize the circular chain',
        'Automated ESG scorecard & BRSR metrics reports verify sustainability points'
      ],
      features: [
        'Interactive AI Value & Carbon Estimator',
        'B2B Marketplace with advanced search & location filters',
        'Certified Recyclers Directory with ratings & ESG scores',
        'Real-time Active Lot Auction & Bidding stream simulator',
        'ESG Scorecard & Scope 3 carbon auditing dashboard',
        'Animated Material Flow Sankey Loop diagram (Live SVG)',
        'Comprehensive 3-tier corporate licensing plans',
        'CI/CD pipeline automated hosting on GitHub Actions'
      ],
      stats: [
        { num: '840k+ T', label: 'Waste Processed' },
        { num: '1,240+', label: 'Verified Recyclers' },
        { num: '420k+ T', label: 'CO₂ Saved' },
        { num: '98.2%', label: 'AI Match Score' }
      ],
    }
  },
  {
    emoji: '\u{1F9EA}', label: 'LIVE', tech: ['Next.js', 'NVIDIA Nemotron', 'AI Agents', 'TensorRT'],
    title: 'AI Analyst', subtitle: 'Engineering Intelligence',
    desc: 'AI-powered Engineering Intelligence Platform with 9 autonomous agents. Validates code against PRDs, runs security audits, architecture analysis & production-readiness checks.',
    link: 'https://smart123-12.github.io/ai-analyst/',
    details: {
      tagline: 'Powered by NVIDIA Nemotron - vLLM - TensorRT-LLM',
      fullDesc: 'The world\'s first PRD-aware engineering analyst. 9 autonomous AI agents validate whether your software implementations satisfy product requirements, engineering standards, and production-readiness criteria - all in one click.',
      problem: ['PR reviews miss 60% of architectural issues', 'Security vulnerabilities slip into production', 'PRD requirements are never validated against code', 'Teams waste 15+ hours/week on manual reviews', 'No single tool checks everything - devs use 5+ tools'],
      solution: ['9 specialized AI agents analyze everything in parallel', 'Upload PRD - AI validates every requirement against code', 'OWASP-aligned security scanning in every analysis', 'Full audit report generated in under 30 seconds', 'One platform replaces 5+ separate tools'],
      features: ['Multi-Agent AI System - 9 agents in parallel', 'PRD-Aware Analysis - validates every requirement', 'Deep Code Scanning - beyond linting', 'Interactive Chart.js Dashboards', 'OWASP Security Audit', 'NVIDIA Nemotron LLM powered', 'Executive Reports auto-generated', 'CI/CD pipeline integration'],
      stats: [{ num: '9', label: 'AI Agents' }, { num: '100%', label: 'PRD Coverage' }, { num: '<30s', label: 'Analysis Time' }, { num: 'NVIDIA', label: 'Nemotron LLM' }],
    }
  },
  {
    emoji: '\u{1F3E5}', label: 'LIVE', tech: ['React', 'Node.js', 'MongoDB', 'GCP'],
    title: 'MediCap', subtitle: 'Doctor & Patient System',
    desc: 'Complete Doctor & Patient Management System with role-based dashboards, secure auth, 20+ API endpoints. Deployed live on GCP.',
    link: 'https://smart123-12.github.io/medicap/',
    details: {
      tagline: 'Live on Google Cloud Platform with CI/CD',
      fullDesc: 'A comprehensive healthcare management system enabling doctors and patients to interact seamlessly. Features role-based access, appointment scheduling, medical records, and real-time dashboards - all deployed live on Google Cloud.',
      problem: ['Clinics manage patient records on paper', 'No centralized system for doctor-patient communication', 'Manual appointment scheduling wastes time', 'No real-time visibility into clinic operations'],
      solution: ['Role-based dashboards for Admin, Doctor & Patient', '20+ secure REST API endpoints', 'JWT authentication & authorization', 'Automated CI/CD pipeline from GitHub to GCP', 'Real-time appointment & records management'],
      features: ['Doctor Dashboard - manage patients & appointments', 'Patient Portal - book appointments, view records', 'Secure JWT Authentication', 'Admin Analytics Dashboard', 'MongoDB database with Mongoose ORM', 'Google Cloud Platform deployment', 'GitHub CI/CD automated pipeline', 'Fully responsive design'],
      stats: [{ num: '20+', label: 'API Endpoints' }, { num: '3', label: 'User Roles' }, { num: 'GCP', label: 'Cloud Deploy' }, { num: 'CI/CD', label: 'Auto Pipeline' }],
    }
  },
  {
    emoji: '\u{1F9B7}', label: 'LIVE', tech: ['React', 'Node.js', 'MongoDB'],
    title: 'Dental Clinic', subtitle: 'Management System',
    desc: 'Full-stack Dental Clinic System with admin, doctor & patient roles. Live deployment on GitHub Pages.',
    link: 'https://smart123-12.github.io/dental-clinic_12/',
    details: {
      tagline: 'Live on GitHub Pages - Multi-Role Healthcare System',
      fullDesc: 'A specialized dental clinic management application built for real-world use. Manages patient appointments, treatment records, billing, and staff coordination with separate dashboards for admin, dentist, and patient roles.',
      problem: ['Dental clinics rely on paper-based records', 'Scheduling conflicts with manual booking', 'No digital treatment history tracking', 'Billing and payment tracking is manual'],
      solution: ['Digital patient records with treatment history', 'Automated appointment scheduling system', 'Role-based access for admin, doctor & patient', 'Treatment tracking & billing management', 'Live deployed and accessible from anywhere'],
      features: ['Treatment Records & History tracking', 'Appointment Scheduling system', 'Multi-role access (Admin/Doctor/Patient)', 'Billing & Payment management', 'Dashboard with clinic analytics', 'Secure authentication system', 'Mobile-responsive interface', 'Live on GitHub Pages'],
      stats: [{ num: '3', label: 'User Roles' }, { num: 'Live', label: 'Deployed' }, { num: 'Full', label: 'CRUD Ops' }, { num: '100%', label: 'Responsive' }],
    }
  },
  {
    emoji: '\u{1F393}', label: 'DEPLOYED', tech: ['React', 'Node.js', 'JavaScript'],
    title: 'Tattavyan School', subtitle: 'Edutech Platform',
    desc: 'Multi-role school management (Admin, Teacher, Student) with dashboards, homework, attendance & notice boards. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/tattavyan-school/',
    details: {
      tagline: 'Complete School Management Ecosystem',
      fullDesc: 'A comprehensive school management system designed for real educational institutions. Features separate portals for administrators, teachers, and students with homework management, attendance tracking, grade management, and notice boards.',
      problem: ['Schools manage records manually on registers', 'No centralized homework submission system', 'Attendance tracking is error-prone on paper', 'Parents have no visibility into student progress'],
      solution: ['Digital dashboards for Admin, Teacher & Student', 'Online homework assignment & submission', 'Digital attendance tracking with reports', 'Notice board for announcements', 'Grade management & progress tracking'],
      features: ['Admin Dashboard - manage teachers, students, classes', 'Teacher Portal - assign homework, mark attendance', 'Student Portal - submit homework, view grades', 'Attendance Management system', 'Homework Assignment & Submission', 'Notice Board for announcements', 'Grade & Progress tracking', 'Responsive design for all devices'],
      stats: [{ num: '3', label: 'User Roles' }, { num: '6+', label: 'Modules' }, { num: 'Full', label: 'Stack' }, { num: 'Real', label: 'Use Case' }],
    }
  },
  {
    emoji: '\u{1F4B0}', label: 'LIVE', tech: ['TypeScript', 'React', 'AI'],
    title: 'AarthIQ', subtitle: 'AI Financial Advisor',
    desc: 'AI-powered Indian Tax & Financial Advisory Platform for FY 2026-27. Salary optimizer, freelancer planner, NRI tools & AI Money Coach. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/AarthIQ/',
    details: {
      tagline: 'AI-Powered Financial Intelligence for India',
      fullDesc: 'AarthIQ is an intelligent Indian tax and financial advisory platform for FY 2026-27. It uses AI to help salaried professionals, freelancers, and NRIs optimize their taxes, plan investments, and get personalized financial advice through an AI Money Coach.',
      problem: ['Indians overpay taxes due to lack of knowledge', 'Freelancers struggle with tax compliance', 'NRIs face complex double-taxation issues', 'Financial advisors charge high fees per session'],
      solution: ['AI-powered salary tax optimizer with HRA, 80C, 80D', 'Freelancer tax planner with GST guidance', 'NRI-specific tax tools for double taxation', 'Free AI Money Coach for personalized advice', 'Updated for FY 2026-27 tax slabs'],
      features: ['Salary Tax Optimizer - maximize savings', 'Freelancer Tax Planner with GST', 'NRI Tax Tools for double taxation', 'AI Money Coach - personalized advice', 'Investment Planning recommendations', 'Compare Old vs New Tax Regime', 'Privacy-first - no data stored', 'Built with TypeScript & React'],
      stats: [{ num: 'AI', label: 'Money Coach' }, { num: '2026-27', label: 'FY Updated' }, { num: '5+', label: 'Tax Tools' }, { num: '0', label: 'Data Stored' }],
    }
  },
  {
    emoji: '\u{1F499}', label: 'LIVE', tech: ['TypeScript', 'React', 'IRS API'],
    title: 'BlueTax', subtitle: 'US Tax Optimizer',
    desc: 'Privacy-first US W2 tax optimizer using 2026 IRS brackets. Keep more of your paycheck with smart tax planning. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/bluetax/',
    details: {
      tagline: 'Privacy-First US Tax Intelligence',
      fullDesc: 'BlueTax helps American W2 employees optimize their tax withholdings using official 2026 IRS tax brackets. All calculations run locally in the browser - zero data is sent to any server.',
      problem: ['Americans overpay $1000+ in taxes annually', 'Tax withholding calculators are confusing', 'Most tools require personal data uploads', 'IRS bracket changes are not reflected quickly'],
      solution: ['Smart W2 tax optimization with 2026 brackets', 'All calculations run 100% in browser', 'Zero data sent to servers - complete privacy', 'Visual breakdown of federal & state taxes', 'Actionable steps to reduce withholding'],
      features: ['Updated 2026 IRS Tax Brackets', '100% client-side - zero data leaves browser', 'Visual tax breakdown charts', 'Paycheck optimization recommendations', 'Filing status comparison (Single/Married)', 'Instant calculations in real-time', 'Mobile-friendly responsive UI', 'Built with TypeScript for reliability'],
      stats: [{ num: '2026', label: 'IRS Brackets' }, { num: '0', label: 'Data Sent' }, { num: '100%', label: 'Client-Side' }, { num: 'W2', label: 'Optimized' }],
    }
  },
  {
    emoji: '\u{1F9E0}', label: 'LIVE', tech: ['HTML', 'Node.js', 'Gemini AI'],
    title: 'Nexus AI', subtitle: 'Business Intelligence',
    desc: 'AI-Powered Business Intelligence SaaS Platform with Chart.js dashboards, MongoDB, and Gemini AI integration. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/nexus-ai/',
    details: {
      tagline: 'AI-Powered Business Intelligence SaaS',
      fullDesc: 'Nexus AI is a full-featured Business Intelligence platform that combines real-time analytics dashboards with Google Gemini AI to provide intelligent business insights. Upload your data, visualize trends, and let AI generate actionable recommendations.',
      problem: ['Small businesses cannot afford BI tools like Tableau', 'Data analysis requires technical expertise', 'No AI-powered insights in affordable tools', 'Manual report generation wastes hours'],
      solution: ['Affordable AI-powered BI platform', 'Chart.js interactive dashboards', 'Gemini AI generates smart insights automatically', 'MongoDB for scalable data storage', 'Auto-generated business reports'],
      features: ['Interactive Chart.js Dashboards', 'Gemini AI Business Insights', 'MongoDB data management', 'Real-time analytics & trends', 'Auto-generated reports', 'Secure authentication', 'AI-powered recommendations', 'Cloud-ready architecture'],
      stats: [{ num: 'Gemini', label: 'AI Powered' }, { num: 'Real-time', label: 'Analytics' }, { num: 'MongoDB', label: 'Database' }, { num: 'SaaS', label: 'Platform' }],
    }
  },
  {
    emoji: '\u{1F4C8}', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'FinWise', subtitle: 'Smart Finance',
    desc: 'Smart Finance Management for Indian families - Tax Calculator, Expense Tracker, Dashboard & Insurance Compare. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/finwise/',
    details: {
      tagline: 'Smart Finance for Indian Families',
      fullDesc: 'FinWise is a comprehensive personal finance management tool designed specifically for Indian households. Features tax calculators, expense tracking, budget planning, insurance comparison, and investment guidance - all in one beautiful interface.',
      problem: ['Indian families do not track daily expenses', 'Tax calculation is confusing for middle class', 'Insurance comparison requires visiting 10+ sites', 'No single tool for complete financial planning'],
      solution: ['All-in-one financial dashboard for families', 'Indian tax calculator with latest slabs', 'Daily expense tracker with categories', 'Insurance comparison tool built-in', 'Budget planning with visual charts'],
      features: ['Indian Tax Calculator (Old & New Regime)', 'Expense Tracker with categories', 'Financial Dashboard with charts', 'Insurance Comparison tool', 'Budget Planning & Savings goals', 'Mobile-first responsive design', 'Monthly financial reports', 'Clean, intuitive interface'],
      stats: [{ num: '5+', label: 'Finance Tools' }, { num: 'India', label: 'Focused' }, { num: '0', label: 'Cost to Use' }, { num: '100%', label: 'Offline Ready' }],
    }
  },
  {
    emoji: '\u{1F6D2}', label: 'LIVE', tech: ['React', 'Node.js', 'PHP', 'MySQL'],
    title: 'ecom-dashboard', subtitle: 'eCommerce Platform',
    desc: 'Modern Full-Stack eCommerce Dashboard with React frontend, Node.js & PHP backend, MySQL database. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/ecom-dashboard/',
    details: {
      tagline: 'Full-Stack eCommerce Management System',
      fullDesc: 'A powerful eCommerce admin dashboard for managing products, orders, customers, and inventory. Built with React on the frontend, dual backend in Node.js and PHP, and MySQL for data management.',
      problem: ['Small eCommerce stores use spreadsheets for orders', 'No real-time inventory tracking', 'Customer management is scattered across tools', 'Sales analytics require expensive tools'],
      solution: ['Centralized dashboard for all eCommerce operations', 'Real-time inventory management', 'Order tracking & status management', 'Customer database with purchase history', 'Built-in sales analytics & reports'],
      features: ['Product Management (CRUD)', 'Order Tracking & Status updates', 'Customer Database management', 'Sales Analytics Dashboard', 'Inventory Management', 'Admin Authentication system', 'Responsive admin interface', 'Dual Backend (Node.js + PHP)'],
      stats: [{ num: 'React', label: 'Frontend' }, { num: 'Node+PHP', label: 'Backend' }, { num: 'MySQL', label: 'Database' }, { num: 'Full', label: 'CRUD Ops' }],
    }
  },
  {
    emoji: '\u{1F33E}', label: 'DEPLOYED', tech: ['React', 'Node.js', 'JavaScript'],
    title: 'Khedut', subtitle: 'Farmer Platform',
    desc: 'Agricultural platform connecting farmers with resources, market data, and smart farming tools. Deployed live on GitHub Pages.',
    link: 'https://smart123-12.github.io/khedut/',
    details: {
      tagline: 'Digital Agriculture for Indian Farmers',
      fullDesc: 'Khedut is a digital agriculture platform designed to empower Indian farmers with market price information, weather updates, crop guidance, and government scheme details. Built to bridge the information gap between farmers and agricultural resources.',
      problem: ['Farmers lack access to real-time market prices', 'No awareness of government schemes & subsidies', 'Weather prediction tools are not farmer-friendly', 'Agricultural guidance is expensive & inaccessible'],
      solution: ['Real-time market price data', 'Government scheme information & eligibility', 'Simple weather updates for farming decisions', 'Crop guidance & seasonal recommendations', 'Built with regional language support'],
      features: ['Crop Price & Market data', 'Government Scheme information', 'Weather Updates for farmers', 'Crop Guidance & Recommendations', 'Farm Dashboard', 'Mobile-first design for rural areas', 'Designed for Indian agriculture', 'Fast & lightweight app'],
      stats: [{ num: 'India', label: 'Agriculture' }, { num: 'Real-time', label: 'Market Data' }, { num: 'Free', label: 'For Farmers' }, { num: 'Mobile', label: 'First Design' }],
    }
  },
  {
    emoji: '\u{1F9FE}', label: 'TOOL', tech: ['JavaScript', 'HTML', 'CSS'],
    title: 'Invoice Generator', subtitle: 'Business Tool',
    desc: 'Professional invoice generation web app. Generate, preview and download invoices instantly. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/invoice-generator/',
    details: {
      tagline: 'Generate Professional Invoices in Seconds',
      fullDesc: 'A clean, professional invoice generation tool that lets freelancers and small businesses create, preview, and download invoices instantly. Add custom branding, line items, taxes, and export as PDF - all running in the browser with no signup required.',
      problem: ['Freelancers waste time creating invoices manually', 'Invoice tools require paid subscriptions', 'Excel invoices look unprofessional', 'No quick tool for one-off invoice needs'],
      solution: ['Instant invoice generation in browser', 'Professional template with custom branding', 'Add line items, taxes & discounts', 'PDF download with one click', 'No signup, no subscription, 100% free'],
      features: ['Professional Invoice Templates', 'Custom Business Branding', 'Add Line Items, Tax & Discounts', 'PDF Download with one click', 'Live Preview as you type', 'Auto-calculate totals', 'Works on mobile browsers', 'No data stored - 100% private'],
      stats: [{ num: '0', label: 'Cost' }, { num: 'PDF', label: 'Export' }, { num: 'Instant', label: 'Generate' }, { num: 'Free', label: 'Forever' }],
    }
  },
  {
    emoji: '\u{1F3D7}', label: 'PLATFORM', tech: ['JavaScript', 'Node.js'],
    title: 'Neev Platform', subtitle: 'Scalable Architecture',
    desc: 'Modern scalable platform demonstrating full-stack dev capabilities. Production-ready architecture. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/neev-platform/',
    details: {
      tagline: 'Scalable Full-Stack Platform Architecture',
      fullDesc: 'Neev is a modern full-stack platform built with production-ready architecture patterns. Demonstrates scalable design, clean code structure, and enterprise-level patterns including modular routing, middleware, and database abstraction.',
      problem: ['Most starter projects lack production patterns', 'Beginners do not learn scalable architecture', 'No reference for clean full-stack structure', 'Enterprise patterns are hard to learn alone'],
      solution: ['Production-ready architecture from day one', 'Modular, scalable code organization', 'Best practices for routing & middleware', 'Database abstraction layer', 'Ready-to-deploy project structure'],
      features: ['Production-ready architecture', 'Modular project structure', 'RESTful API design', 'Middleware & Error handling', 'Database abstraction layer', 'NPM package management', 'Deployment ready', 'Clean, documented codebase'],
      stats: [{ num: 'Node.js', label: 'Backend' }, { num: 'Modular', label: 'Architecture' }, { num: 'REST', label: 'API Design' }, { num: 'Deploy', label: 'Ready' }],
    }
  },
  {
    emoji: '\u{1F549}', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Tattvayan', subtitle: 'Spiritual Platform',
    desc: 'Full-featured spiritual & cultural platform with beautiful UI, content pages, and interactive elements. Live on GitHub Pages.',
    link: 'https://smart123-12.github.io/tattvayan/',
    details: {
      tagline: 'Spiritual & Cultural Digital Experience',
      fullDesc: 'Tattvayan is a beautifully designed spiritual and cultural platform that brings traditional Indian wisdom to the digital world. Features rich content pages, interactive UI elements, spiritual resources, and a meditation-focused user experience.',
      problem: ['Spiritual content is scattered across the internet', 'Most spiritual sites have outdated designs', 'No modern platform for Indian cultural content', 'Young generation needs accessible spiritual resources'],
      solution: ['Modern, beautiful UI for spiritual content', 'Curated spiritual resources & articles', 'Interactive & engaging user experience', 'Mobile-first design for accessibility', 'Live deployed for worldwide access'],
      features: ['Curated Spiritual Content', 'Beautiful Modern UI Design', 'Articles & Wisdom resources', 'Meditation-focused experience', 'Mobile-responsive design', 'Interactive UI elements', 'Live on GitHub Pages', 'Fast & lightweight'],
      stats: [{ num: 'Live', label: 'Deployed' }, { num: 'Modern', label: 'UI Design' }, { num: 'Rich', label: 'Content' }, { num: 'Mobile', label: 'Friendly' }],
    }
  },
]

const REASONS = [
  { icon: '\u26A1', title: 'Fast Execution', desc: 'Speed + quality, delivered without cutting corners.' },
  { icon: '\u{1F4AC}', title: 'Clear Communication', desc: 'You always know where your project stands.' },
  { icon: '\u{1F3C6}', title: 'Real Deployed Projects', desc: 'Live, working products - not just mockups.' },
  { icon: '\u{1F504}', title: 'Unlimited Revisions', desc: 'I iterate until you are 100% satisfied.' },
  { icon: '\u{1F512}', title: 'Full Ownership', desc: 'You own everything - code, assets, data.' },
  { icon: '\u{1F680}', title: 'End-to-End Delivery', desc: 'From idea to deployment, I handle it all.' },
]

// -- HOOKS --

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

// -- COMPONENTS --

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="logo-icon">SP</span> Smit Parmar
        </a>
        <div className={`navbar-links ${open ? 'navbar-links--open' : ''}`}>
          {['About', 'Skills', 'Services', 'Projects', 'Contact'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setOpen(false)}>{s}</a>
          ))}
          <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="btn-glow btn-glow--sm">GitHub</a>
        </div>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  const [ref, visible] = useInView()
  return (
    <section className={`hero ${visible ? 'in-view' : ''}`} ref={ref}>
      <div className="container hero-inner">
        <div className="hero-text">
          <div className="hero-badge">Available for Projects</div>
          <h1 className="hero-title">
            I Build <span className="gradient-text">AI-Powered</span> Digital Products
          </h1>
          <p className="hero-desc">Non-IT background. Self-taught AI builder. I use cutting-edge AI tools to ship full-stack web apps, SaaS platforms, and automation systems - faster than traditional dev teams.</p>
          <div className="hero-btns">
            <a href="#contact" className="btn-glow">Let's Work Together</a>
            <a href="#projects" className="btn-glass">View My Work</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span className="hero-stat-num">14</span><span className="hero-stat-label">Projects Shipped</span></div>
            <div className="hero-stat"><span className="hero-stat-num">14</span><span className="hero-stat-label">Live & Deployed</span></div>
            <div className="hero-stat"><span className="hero-stat-num">AI</span><span className="hero-stat-label">First Approach</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-container">
            <div className="hero-photo-glow" />
            <div className="hero-photo-border">
              <img src={photo2} alt="Smitkumar Parmar" />
            </div>
            <div className="hero-float-badge hero-float-badge--1">
              <span>14</span>
              <div><strong>Projects</strong><br /><small>Shipped & Live</small></div>
            </div>
            <div className="hero-float-badge hero-float-badge--2">
              <span>AI</span>
              <div><strong>First</strong><br /><small>Builder</small></div>
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
    <section className={`about section ${visible ? 'in-view' : ''}`} id="about" ref={ref}>
      <div className="container about-inner">
        <div className="about-left" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="hero-photo-container">
            <div className="hero-photo-glow" />
            <div className="hero-photo-border">
              <img src={photo3} alt="Smit Parmar - AI Builder" />
            </div>
            <div className="hero-float-badge hero-float-badge--1" style={{ bottom: '50px', right: '-20px' }}>
              <span>🚀</span>
              <div><strong>AI Builder</strong><br /><small>Non-IT Advantage</small></div>
            </div>
            <div className="hero-float-badge hero-float-badge--2" style={{ top: '40px', left: '-30px', animationDelay: '0.7s' }}>
              <span>⚡</span>
              <div><strong>Fast Ship</strong><br /><small>Rapid Delivery</small></div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="section-label">About Me</div>
          <h2 className="section-heading">
            From <span className="gradient-text">Non-IT to AI Builder</span>
          </h2>
          <p className="about-text">I am not from a traditional IT background - and that is exactly my advantage. While others write code line by line, I leverage the most powerful AI tools in the world to build, ship, and deploy production-ready applications at unprecedented speed.</p>
          <p className="about-text">My toolkit includes Google Antigravity, Cursor AI, GitHub Copilot, Claude, v0, Bolt, Replit, and n8n for workflow automation. I do not just use AI - I think in AI. Every project I build is a testament to what is possible when you combine human creativity with machine intelligence.</p>
          <div className="about-highlights">
            <div className="about-highlight"><span className="about-h-icon">🧠</span><div><strong>AI-First Mindset</strong><p>Every solution starts with AI strategy</p></div></div>
            <div className="about-highlight"><span className="about-h-icon">🚀</span><div><strong>Rapid Delivery</strong><p>Ship in days, not months</p></div></div>
            <div className="about-highlight"><span className="about-h-icon">🎯</span><div><strong>Result-Focused</strong><p>Built for real users, not demos</p></div></div>
            <div className="about-highlight"><span className="about-h-icon">💻</span><div><strong>Full-Stack</strong><p>Frontend to deployment, end-to-end</p></div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const [ref, visible] = useInView()
  return (
    <section className={`skills section ${visible ? 'in-view' : ''}`} id="skills" ref={ref}>
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
                {s.list.map((item, j) => <li key={j}><span className="check">{'\u2713'}</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects({ onSelectProject }) {
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
        <p className="section-sub center">Live deployed applications - not just mockups. Click any project for full details.</p>
        <div className="project-filters">
          {labels.map(l => (
            <button key={l} className={`filter-btn ${filter === l ? 'filter-btn--active' : ''}`} onClick={() => setFilter(l)}>
              {l}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div className="project-card" key={i} style={{ '--delay': `${i * 0.07}s`, cursor: 'pointer' }} onClick={() => onSelectProject(p)}>
              <div className="project-top">
                <span className="project-emoji">{p.emoji}</span>
                <span className={`project-label project-label--${p.label.toLowerCase()}`}>{p.label}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tech">
                {p.tech.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
              </div>
              <div className="project-link-row">View Case Study <span>{'\u2192'}</span></div>
            </div>
          ))}
        </div>
        <div className="center" style={{ marginTop: 48 }}>
          <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="btn-glass">
            View All on GitHub
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
  const [ref, visible] = useInView()
  return (
    <section className={`contact section ${visible ? 'in-view' : ''}`} id="contact" ref={ref}>
      <div className="container">
        <div className="section-label center">Get In Touch</div>
        <h2 className="section-heading center">
          Ready to <span className="gradient-text">Start Your Project?</span>
        </h2>
        <p className="section-sub center">Have an idea? Let's build something incredible together.</p>
        <div className="contact-inner">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>Whether you need an AI-powered app, a full-stack platform, or automation - I deliver production-ready solutions at speed.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon-wrap" style={{ background: '#ede9fe', color: 'var(--accent-1)' }}>📧</div>
                  <div className="contact-item-text">
                    <span>Email Address</span>
                    <a href="mailto:tattvayan.ai@gmail.com">tattvayan.ai@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap" style={{ background: '#e0f2fe', color: '#0284c7' }}>📞</div>
                  <div className="contact-item-text">
                    <span>Phone Number</span>
                    <a href="tel:+918488809478">+91 8488809478</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon-wrap" style={{ background: '#f1f5f9', color: '#0f172a' }}>💻</div>
                  <div className="contact-item-text">
                    <span>GitHub Profile</span>
                    <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer">github.com/Smart123-12</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Message sent! I will get back to you soon.') }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '24px' }}>Send a Message</h3>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows={5} required />
            </div>
            <button type="submit" className="btn-glow btn-full" style={{ marginTop: '8px' }}>Send Message</button>
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
            <p className="footer-tagline">Non-IT to AI Builder | Full-Stack Developer</p>
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
          <p>2025 Smitkumar Parmar. Built with AI tools.</p>
          <p>tattvayan.ai@gmail.com | +91 8488809478</p>
        </div>
      </div>
    </footer>
  )
}

// -- PROJECT DETAIL PAGE --

function getFeatureIcon(text = '') {
  const t = text.toLowerCase()
  if (t.includes('agent') || t.includes('bot') || t.includes('coach')) return '🤖'
  if (t.includes('prd') || t.includes('requirement')) return '📋'
  if (t.includes('code') || t.includes('lint') || t.includes('architecture') || t.includes('restful') || t.includes('backend') || t.includes('api')) return '💻'
  if (t.includes('dashboard') || t.includes('chart') || t.includes('analytics') || t.includes('visual')) return '📊'
  if (t.includes('security') || t.includes('owasp') || t.includes('auth') || t.includes('jwt') || t.includes('private') || t.includes('privacy')) return '🛡️'
  if (t.includes('gemini') || t.includes('nemotron') || t.includes('brain') || t.includes('intelligence') || t.includes('recommendation')) return '🧠'
  if (t.includes('report') || t.includes('invoice') || t.includes('pdf') || t.includes('document')) return '🧾'
  if (t.includes('pipeline') || t.includes('ci/cd') || t.includes('git') || t.includes('automation') || t.includes('workflow')) return '🔄'
  if (t.includes('tax') || t.includes('w2') || t.includes('finance') || t.includes('money') || t.includes('billing') || t.includes('payment') || t.includes('price')) return '💰'
  if (t.includes('doctor') || t.includes('dental') || t.includes('patient') || t.includes('medical') || t.includes('clinic') || t.includes('treatment')) return '🏥'
  if (t.includes('school') || t.includes('teacher') || t.includes('student') || t.includes('homework') || t.includes('notice')) return '🎓'
  if (t.includes('farmer') || t.includes('crop') || t.includes('agriculture') || t.includes('rural')) return '🌾'
  if (t.includes('ecommerce') || t.includes('store') || t.includes('product') || t.includes('inventory') || t.includes('order')) return '🛒'
  if (t.includes('spiritual') || t.includes('meditation') || t.includes('wisdom') || t.includes('traditional')) return '🧘'
  if (t.includes('design') || t.includes('ui') || t.includes('theme') || t.includes('responsive') || t.includes('mobile') || t.includes('modern') || t.includes('animation') || t.includes('look')) return '✨'
  if (t.includes('live') || t.includes('deploy') || t.includes('gcp') || t.includes('cloud') || t.includes('pages')) return '🚀'
  return '⚡'
}

function ProjectDetailPage({ project, onBack }) {
  const d = project.details
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const isGitHub = project.link.includes('github.com')
  const buttonText = isGitHub ? 'View GitHub Repo' : 'Visit Live Site'

  return (
    <div className="ai-page">
      <nav className="ai-page-nav">
        <div className="container">
          <button className="ai-back-btn" onClick={onBack}>{'\u2190'} Back to Portfolio</button>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-glow" style={{padding:'10px 28px',fontSize:'13px'}}>
            {buttonText}
          </a>
        </div>
      </nav>

      <section className="ai-hero">
        <div className="ai-hero-glow" />
        <div className="container">
          <div className="ai-hero-badge">{d.tagline}</div>
          <h1 className="ai-hero-title">
            {project.emoji} {project.title} <span className="gradient-text">{project.subtitle}</span>
          </h1>
          <p className="ai-hero-desc">{d.fullDesc}</p>
          <div className="ai-hero-stats">
            {d.stats.map((s, i) => (
              <div className="ai-stat" key={i}><div className="ai-stat-num">{s.num}</div><div className="ai-stat-label">{s.label}</div></div>
            ))}
          </div>
          <div style={{marginTop:32,display:'flex',gap:8,justifyContent:'center',flexWrap:'wrap'}}>
            {project.tech.map((t, i) => <span key={i} className="tech-tag" style={{background:'rgba(99,102,241,0.08)',borderColor:'rgba(99,102,241,0.2)',color:'var(--accent-1)',padding:'6px 16px',fontSize:'12px'}}>{t}</span>)}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-white)'}}>
        <div className="container">
          <div className="ai-two-col">
            <div className="ai-problem-card">
              <div className="section-label" style={{background:'rgba(244, 63, 94, 0.08)',color:'#f43f5e',borderColor:'rgba(244, 63, 94, 0.25)'}}>The Problem</div>
              <h3>What Problem Does It Solve?</h3>
              <ul>{d.problem.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div className="ai-solution-card">
              <div className="section-label" style={{background:'rgba(16, 185, 129, 0.08)',color:'#10b981',borderColor:'rgba(16, 185, 129, 0.25)'}}>The Solution</div>
              <h3>How {project.title} Solves It</h3>
              <ul>{d.solution.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-light)'}}>
        <div className="container">
          <div className="section-label center">Key Features</div>
          <h2 className="section-heading center">
            Everything Inside <span className="gradient-text">{project.title}</span>
          </h2>
          <div className="ai-features-grid">
            {d.features.map((f, i) => {
              // Handle title - description splitting dynamically
              const parts = f.includes(' — ') ? f.split(' — ') : f.split(' - ')
              const title = parts[0]
              const desc = parts[1] || ''
              const icon = getFeatureIcon(f)
              return (
                <div className="ai-feature-card" key={i}>
                  <span className="ai-feature-icon">{icon}</span>
                  <h4>{title}</h4>
                  {desc && <p style={{marginTop:8,fontSize:'13px',color:'var(--text-gray)',lineHeight:'1.5'}}>{desc}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ai-cta-section">
        <div className="container center">
          <h2 className="section-heading">
            Check Out <span className="gradient-text">{project.title}</span> Live
          </h2>
          <p className="section-sub center" style={{marginBottom:36}}>See it in action - fully deployed and working.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-glow">
              {isGitHub ? 'View on GitHub' : 'Visit Live Project'}
            </a>
            <button onClick={onBack} className="btn-glass">Back to Portfolio</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// -- APP --

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (selectedProject) {
      // Push state so back button acts as close details
      window.history.pushState({ project: selectedProject.title }, '')
    }

    const handlePopState = (e) => {
      // If back is pressed, close the open project details page
      setSelectedProject(null)
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [selectedProject])

  const handleBack = () => {
    // If user clicked standard back button on UI, pop state if we pushed it
    if (window.history.state && window.history.state.project) {
      window.history.back()
    } else {
      setSelectedProject(null)
    }
  }

  return (
    <>
      {!selectedProject ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects onSelectProject={setSelectedProject} />
          <WhyMe />
          <Contact />
          <Footer />
        </>
      ) : (
        <ProjectDetailPage project={selectedProject} onBack={handleBack} />
      )}
    </>
  )
}
