import { useState, useEffect, useRef } from 'react'
import './index.css'
import './App.css'

import photo1 from './assets/smit.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'

// â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
    icon: 'ðŸ¤–', title: 'AI Apps & Integration',
    desc: 'Custom AI-powered solutions integrated directly into your business workflows.',
    list: ['Custom AI chatbots', 'AI-powered support', 'Smart automation', 'Prompt engineering', 'No-code AI solutions'],
  },
  {
    icon: 'ðŸŒ', title: 'Full-Stack Web Dev',
    desc: 'Modern, scalable web applications and SaaS products that perform and grow.',
    list: ['React / Next.js apps', 'Node.js APIs', 'Auth & user management', 'Database design', 'Cloud deployment'],
  },
  {
    icon: 'ðŸ“', title: 'AI Content & Copy',
    desc: 'High-converting copy and content that speaks to your audience and drives action.',
    list: ['Landing page copy', 'Sales funnel content', 'Product descriptions', 'Email sequences', 'SEO optimization'],
  },
  {
    icon: 'ðŸ”', title: 'AI Research Reports',
    desc: 'Deep research and analysis to inform your business decisions with clarity.',
    list: ['Market analysis', 'Competitor research', 'Investment research', 'Niche research', 'Executive summaries'],
  },
  {
    icon: 'ðŸ“Š', title: 'Data & Automation',
    desc: 'Smart spreadsheets and dashboards that save hours of manual work every week.',
    list: ['Spreadsheet automation', 'Live dashboards', 'Data cleaning', 'AI data analysis', 'Auto reporting'],
  },
  {
    icon: 'ðŸš€', title: 'End-to-End Delivery',
    desc: 'From idea to deployed product â€” built to last with full ownership.',
    list: ['Fast execution', 'Clear communication', 'Full accountability', 'Scalable builds', 'Unlimited revisions'],
  },
]

const PROJECTS = [
  {
    emoji: 'ðŸ§ª', label: 'LIVE', tech: ['Next.js', 'NVIDIA Nemotron', 'AI Agents', 'TensorRT'],
    title: 'AI Analyst â€” Engineering Intelligence',
    desc: 'AI-powered Engineering Intelligence Platform with 9 autonomous agents. Validates code against PRDs, runs security audits, architecture analysis & production-readiness checks.',
    link: 'https://smart123-12.github.io/ai-analyst/',
    details: {
      tagline: 'Powered by NVIDIA Nemotron Â· vLLM Â· TensorRT-LLM',
      fullDesc: 'The world\'s first AI-powered PRD-aware engineering analyst. 9 autonomous AI agents validate whether your software implementations satisfy product requirements, engineering standards, and production-readiness criteria â€” all in one click.',
      problem: ['PR reviews miss 60% of architectural issues', 'Security vulnerabilities slip into production', 'PRD requirements are never validated against code', 'Teams waste 15+ hours/week on manual reviews', 'No single tool checks everything â€” devs use 5+ tools'],
      solution: ['9 specialized AI agents analyze everything in parallel', 'Upload PRD â†’ AI validates every requirement against code', 'OWASP-aligned security scanning in every analysis', 'Full audit report generated in under 30 seconds', 'One platform replaces 5+ separate tools'],
      features: ['ðŸ§  Multi-Agent AI System â€” 9 agents in parallel', 'ðŸ“„ PRD-Aware Analysis â€” validates every requirement', 'ðŸ” Deep Code Scanning â€” beyond linting', 'ðŸ“Š Interactive Chart.js Dashboards', 'ðŸ›¡ï¸ OWASP Security Audit', 'âš¡ NVIDIA Nemotron LLM powered', 'ðŸ“‘ Executive Reports auto-generated', 'ðŸ”„ CI/CD pipeline integration'],
      stats: [{ num: '9', label: 'AI Agents' }, { num: '100%', label: 'PRD Coverage' }, { num: '<30s', label: 'Analysis Time' }, { num: 'NVIDIA', label: 'Nemotron LLM' }],
    }
  },
  {
    emoji: 'ðŸ¥', label: 'LIVE', tech: ['React', 'Node.js', 'MongoDB', 'GCP'],
    title: 'MediCap â€” Doctor & Patient System',
    desc: 'Complete Doctor & Patient Management System with role-based dashboards, secure auth, 20+ API endpoints. Live on Google Cloud with CI/CD.',
    link: 'https://github.com/Smart123-12/medicap',
    details: {
      tagline: 'Live on Google Cloud Platform with CI/CD',
      fullDesc: 'A comprehensive healthcare management system enabling doctors and patients to interact seamlessly. Features role-based access, appointment scheduling, medical records, and real-time dashboards â€” all deployed live on Google Cloud.',
      problem: ['Clinics manage patient records on paper', 'No centralized system for doctor-patient communication', 'Manual appointment scheduling wastes time', 'No real-time visibility into clinic operations'],
      solution: ['Role-based dashboards for Admin, Doctor & Patient', '20+ secure REST API endpoints', 'JWT authentication & authorization', 'Automated CI/CD pipeline from GitHub to GCP', 'Real-time appointment & records management'],
      features: ['ðŸ‘¨â€âš•ï¸ Doctor Dashboard â€” manage patients & appointments', 'ðŸ¥ Patient Portal â€” book appointments, view records', 'ðŸ” Secure JWT Authentication', 'ðŸ“Š Admin Analytics Dashboard', 'ðŸ—„ï¸ MongoDB database with Mongoose ORM', 'â˜ï¸ Google Cloud Platform deployment', 'ðŸ”„ GitHub CI/CD automated pipeline', 'ðŸ“± Fully responsive design'],
      stats: [{ num: '20+', label: 'API Endpoints' }, { num: '3', label: 'User Roles' }, { num: 'GCP', label: 'Cloud Deploy' }, { num: 'CI/CD', label: 'Auto Pipeline' }],
    }
  },
  {
    emoji: 'ðŸ¦·', label: 'LIVE', tech: ['React', 'Node.js', 'MongoDB'],
    title: 'Dental Clinic Management',
    desc: 'Full-stack Dental Clinic System with admin, doctor & patient roles. Live deployment on GitHub Pages.',
    link: 'https://github.com/Smart123-12/dental-clinic_12/',
    details: {
      tagline: 'Live on GitHub Pages â€” Multi-Role Healthcare System',
      fullDesc: 'A specialized dental clinic management application built for real-world use. Manages patient appointments, treatment records, billing, and staff coordination with separate dashboards for admin, dentist, and patient roles.',
      problem: ['Dental clinics rely on paper-based records', 'Scheduling conflicts with manual booking', 'No digital treatment history tracking', 'Billing and payment tracking is manual'],
      solution: ['Digital patient records with treatment history', 'Automated appointment scheduling system', 'Role-based access for admin, doctor & patient', 'Treatment tracking & billing management', 'Live deployed and accessible from anywhere'],
      features: ['ðŸ¦· Treatment Records & History tracking', 'ðŸ“… Appointment Scheduling system', 'ðŸ‘¤ Multi-role access (Admin/Doctor/Patient)', 'ðŸ’° Billing & Payment management', 'ðŸ“Š Dashboard with clinic analytics', 'ðŸ” Secure authentication system', 'ðŸ“± Mobile-responsive interface', 'ðŸŒ Live on GitHub Pages'],
      stats: [{ num: '3', label: 'User Roles' }, { num: 'Live', label: 'Deployed' }, { num: 'Full', label: 'CRUD Ops' }, { num: '100%', label: 'Responsive' }],
    }
  },
  {
    emoji: 'ðŸŽ“', label: 'DEPLOYED', tech: ['React', 'Node.js', 'JavaScript'],
    title: 'Tattavyan School â€” Edutech',
    desc: 'Multi-role school management (Admin, Teacher, Student) with dashboards, homework, attendance & notice boards.',
    link: 'https://github.com/Smart123-12/tattavyan-school',
    details: {
      tagline: 'Complete School Management Ecosystem',
      fullDesc: 'A comprehensive school management system designed for real educational institutions. Features separate portals for administrators, teachers, and students with homework management, attendance tracking, grade management, and notice boards.',
      problem: ['Schools manage records manually on registers', 'No centralized homework submission system', 'Attendance tracking is error-prone on paper', 'Parents have no visibility into student progress'],
      solution: ['Digital dashboards for Admin, Teacher & Student', 'Online homework assignment & submission', 'Digital attendance tracking with reports', 'Notice board for announcements', 'Grade management & progress tracking'],
      features: ['ðŸ« Admin Dashboard â€” manage teachers, students, classes', 'ðŸ‘©â€ðŸ« Teacher Portal â€” assign homework, mark attendance', 'ðŸ“š Student Portal â€” submit homework, view grades', 'ðŸ“‹ Attendance Management system', 'ðŸ“ Homework Assignment & Submission', 'ðŸ“¢ Notice Board for announcements', 'ðŸ“Š Grade & Progress tracking', 'ðŸ“± Responsive design for all devices'],
      stats: [{ num: '3', label: 'User Roles' }, { num: '6+', label: 'Modules' }, { num: 'Full', label: 'Stack' }, { num: 'Real', label: 'Use Case' }],
    }
  },
  {
    emoji: 'ðŸ’°', label: 'LIVE', tech: ['TypeScript', 'React', 'AI'],
    title: 'AarthIQ â€” AI Financial Advisor',
    desc: 'AI-powered Indian Tax & Financial Advisory Platform for FY 2026-27. Salary optimizer, freelancer planner, NRI tools & AI Money Coach.',
    link: 'https://github.com/Smart123-12/AarthIQ',
    details: {
      tagline: 'AI-Powered Financial Intelligence for India',
      fullDesc: 'AarthIQ is an intelligent Indian tax and financial advisory platform for FY 2026-27. It uses AI to help salaried professionals, freelancers, and NRIs optimize their taxes, plan investments, and get personalized financial advice through an AI Money Coach.',
      problem: ['Indians overpay taxes due to lack of knowledge', 'Freelancers struggle with tax compliance', 'NRIs face complex double-taxation issues', 'Financial advisors charge â‚¹5000+ per session'],
      solution: ['AI-powered salary tax optimizer with HRA, 80C, 80D', 'Freelancer tax planner with GST guidance', 'NRI-specific tax tools for double taxation', 'Free AI Money Coach for personalized advice', 'Updated for FY 2026-27 tax slabs'],
      features: ['ðŸ’° Salary Tax Optimizer â€” maximize savings', 'ðŸ“‹ Freelancer Tax Planner with GST', 'ðŸŒ NRI Tax Tools for double taxation', 'ðŸ¤– AI Money Coach â€” personalized advice', 'ðŸ“Š Investment Planning recommendations', 'ðŸ“± Compare Old vs New Tax Regime', 'ðŸ”’ Privacy-first â€” no data stored', 'âš¡ Built with TypeScript & React'],
      stats: [{ num: 'AI', label: 'Money Coach' }, { num: '2026-27', label: 'FY Updated' }, { num: '5+', label: 'Tax Tools' }, { num: '0', label: 'Data Stored' }],
    }
  },
  {
    emoji: 'ðŸ’™', label: 'LIVE', tech: ['TypeScript', 'React', 'IRS API'],
    title: 'BlueTax â€” US Tax Optimizer',
    desc: 'Privacy-first US W2 tax optimizer using 2026 IRS brackets. Keep more of your paycheck with smart tax planning.',
    link: 'https://github.com/Smart123-12/bluetax',
    details: {
      tagline: 'Privacy-First US Tax Intelligence',
      fullDesc: 'BlueTax helps American W2 employees optimize their tax withholdings using official 2026 IRS tax brackets. All calculations run locally in the browser â€” zero data is sent to any server. See exactly how much more you can keep from each paycheck.',
      problem: ['Americans overpay $1000+ in taxes annually', 'Tax withholding calculators are confusing', 'Most tools require personal data uploads', 'IRS bracket changes aren\'t reflected quickly'],
      solution: ['Smart W2 tax optimization with 2026 brackets', 'All calculations run 100% in browser', 'Zero data sent to servers â€” complete privacy', 'Visual breakdown of federal & state taxes', 'Actionable steps to reduce withholding'],
      features: ['ðŸ‡ºðŸ‡¸ Updated 2026 IRS Tax Brackets', 'ðŸ”’ 100% client-side â€” zero data leaves browser', 'ðŸ“Š Visual tax breakdown charts', 'ðŸ’µ Paycheck optimization recommendations', 'ðŸ“‹ Filing status comparison (Single/Married)', 'âš¡ Instant calculations in real-time', 'ðŸ“± Mobile-friendly responsive UI', 'ðŸ—ï¸ Built with TypeScript for reliability'],
      stats: [{ num: '2026', label: 'IRS Brackets' }, { num: '0', label: 'Data Sent' }, { num: '100%', label: 'Client-Side' }, { num: 'W2', label: 'Optimized' }],
    }
  },
  {
    emoji: 'ðŸ§ ', label: 'LIVE', tech: ['HTML', 'Node.js', 'Gemini AI'],
    title: 'Nexus AI â€” Business Intelligence',
    desc: 'AI-Powered Business Intelligence SaaS Platform with Chart.js dashboards, MongoDB, and Gemini AI integration.',
    link: 'https://github.com/Smart123-12/nexus-ai',
    details: {
      tagline: 'AI-Powered Business Intelligence SaaS',
      fullDesc: 'Nexus AI is a full-featured Business Intelligence platform that combines real-time analytics dashboards with Google Gemini AI to provide intelligent business insights. Upload your data, visualize trends, and let AI generate actionable recommendations.',
      problem: ['Small businesses can\'t afford BI tools like Tableau', 'Data analysis requires technical expertise', 'No AI-powered insights in affordable tools', 'Manual report generation wastes hours'],
      solution: ['Affordable AI-powered BI platform', 'Chart.js interactive dashboards', 'Gemini AI generates smart insights automatically', 'MongoDB for scalable data storage', 'Auto-generated business reports'],
      features: ['ðŸ“Š Interactive Chart.js Dashboards', 'ðŸ¤– Gemini AI Business Insights', 'ðŸ—„ï¸ MongoDB data management', 'ðŸ“ˆ Real-time analytics & trends', 'ðŸ“‘ Auto-generated reports', 'ðŸ” Secure authentication', 'ðŸ’¡ AI-powered recommendations', 'â˜ï¸ Cloud-ready architecture'],
      stats: [{ num: 'Gemini', label: 'AI Powered' }, { num: 'Real-time', label: 'Analytics' }, { num: 'MongoDB', label: 'Database' }, { num: 'SaaS', label: 'Platform' }],
    }
  },
  {
    emoji: 'ðŸ“ˆ', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'FinWise â€” Smart Finance',
    desc: 'Smart Finance Management for Indian families â€” Tax Calculator, Expense Tracker, Dashboard & Insurance Compare.',
    link: 'https://github.com/Smart123-12/finwise',
    details: {
      tagline: 'Smart Finance for Indian Families',
      fullDesc: 'FinWise is a comprehensive personal finance management tool designed specifically for Indian households. Features tax calculators, expense tracking, budget planning, insurance comparison, and investment guidance â€” all in one beautiful interface.',
      problem: ['Indian families don\'t track daily expenses', 'Tax calculation is confusing for middle class', 'Insurance comparison requires visiting 10+ sites', 'No single tool for complete financial planning'],
      solution: ['All-in-one financial dashboard for families', 'Indian tax calculator with latest slabs', 'Daily expense tracker with categories', 'Insurance comparison tool built-in', 'Budget planning with visual charts'],
      features: ['ðŸ’° Indian Tax Calculator (Old & New Regime)', 'ðŸ“Š Expense Tracker with categories', 'ðŸ“ˆ Financial Dashboard with charts', 'ðŸ›¡ï¸ Insurance Comparison tool', 'ðŸ’µ Budget Planning & Savings goals', 'ðŸ“± Mobile-first responsive design', 'ðŸ“‹ Monthly financial reports', 'ðŸŽ¨ Clean, intuitive interface'],
      stats: [{ num: '5+', label: 'Finance Tools' }, { num: 'India', label: 'Focused' }, { num: '0', label: 'Cost to Use' }, { num: '100%', label: 'Offline Ready' }],
    }
  },
  {
    emoji: 'ðŸ›’', label: 'LIVE', tech: ['React', 'Node.js', 'PHP', 'MySQL'],
    title: 'ecom-dashboard â€” eCommerce',
    desc: 'Modern Full-Stack eCommerce Dashboard with React frontend, Node.js & PHP backend, MySQL database.',
    link: 'https://github.com/Smart123-12/ecom-dashboard',
    details: {
      tagline: 'Full-Stack eCommerce Management System',
      fullDesc: 'A powerful eCommerce admin dashboard for managing products, orders, customers, and inventory. Built with React on the frontend, dual backend in Node.js and PHP, and MySQL for data management. Complete with analytics, order tracking, and inventory management.',
      problem: ['Small eCommerce stores use spreadsheets for orders', 'No real-time inventory tracking', 'Customer management is scattered across tools', 'Sales analytics require expensive tools'],
      solution: ['Centralized dashboard for all eCommerce operations', 'Real-time inventory management', 'Order tracking & status management', 'Customer database with purchase history', 'Built-in sales analytics & reports'],
      features: ['ðŸ“¦ Product Management (CRUD)', 'ðŸ“‹ Order Tracking & Status updates', 'ðŸ‘¥ Customer Database management', 'ðŸ“Š Sales Analytics Dashboard', 'ðŸ—ƒï¸ Inventory Management', 'ðŸ” Admin Authentication system', 'ðŸ“± Responsive admin interface', 'ðŸ—ï¸ Dual Backend (Node.js + PHP)'],
      stats: [{ num: 'React', label: 'Frontend' }, { num: 'Node+PHP', label: 'Backend' }, { num: 'MySQL', label: 'Database' }, { num: 'Full', label: 'CRUD Ops' }],
    }
  },
  {
    emoji: 'ðŸŒ¾', label: 'DEPLOYED', tech: ['React', 'Node.js', 'JavaScript'],
    title: 'Khedut â€” Farmer Platform',
    desc: 'Agricultural platform connecting farmers with resources, market data, and smart farming tools.',
    link: 'https://github.com/Smart123-12/khedut',
    details: {
      tagline: 'Digital Agriculture for Indian Farmers',
      fullDesc: 'Khedut is a digital agriculture platform designed to empower Indian farmers with market price information, weather updates, crop guidance, and government scheme details. Built to bridge the information gap between farmers and agricultural resources.',
      problem: ['Farmers lack access to real-time market prices', 'No awareness of government schemes & subsidies', 'Weather prediction tools aren\'t farmer-friendly', 'Agricultural guidance is expensive & inaccessible'],
      solution: ['Real-time mandi (market) price data', 'Government scheme information & eligibility', 'Simple weather updates for farming decisions', 'Crop guidance & seasonal recommendations', 'Built in regional language support'],
      features: ['ðŸŒ¾ Crop Price & Market data', 'ðŸ›ï¸ Government Scheme information', 'ðŸŒ¤ï¸ Weather Updates for farmers', 'ðŸ“‹ Crop Guidance & Recommendations', 'ðŸ“Š Farm Dashboard', 'ðŸ“± Mobile-first design for rural areas', 'ðŸŒ Designed for Indian agriculture', 'âš¡ Fast & lightweight app'],
      stats: [{ num: 'India', label: 'Agriculture' }, { num: 'Real-time', label: 'Market Data' }, { num: 'Free', label: 'For Farmers' }, { num: 'Mobile', label: 'First Design' }],
    }
  },
  {
    emoji: 'ðŸ¢', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Zenvora Tech Solutions',
    desc: 'Premium portfolio for USA Job Placement & Search Support Service. Conversion-focused responsive design.',
    link: 'https://github.com/Smart123-12/zenvora-tech-solutions',
    details: {
      tagline: 'USA Job Placement & Support â€” Premium Website',
      fullDesc: 'A premium, conversion-optimized portfolio website built for Zenvora Tech Solutions â€” a USA-based job placement and search support service. Features modern animations, lead capture forms, service breakdowns, and testimonials designed to convert visitors into clients.',
      problem: ['Job placement services struggle with online presence', 'Generic templates don\'t convert visitors', 'No professional web presence = no trust', 'Competitors have better digital marketing'],
      solution: ['Custom premium design with brand identity', 'Conversion-optimized landing sections', 'Lead capture forms with service selection', 'Professional UI that builds instant trust', 'SEO-optimized for organic traffic'],
      features: ['ðŸŽ¨ Premium conversion-focused design', 'ðŸ“ Lead Capture Forms', 'ðŸ’¼ Service Breakdown sections', 'â­ Testimonials & Social proof', 'ðŸ“± Fully responsive on all devices', 'ðŸš€ Fast loading performance', 'ðŸ” SEO optimized structure', 'ðŸŒ Live deployed on GitHub Pages'],
      stats: [{ num: 'USA', label: 'Market' }, { num: 'Premium', label: 'Design' }, { num: 'SEO', label: 'Optimized' }, { num: 'Live', label: 'Deployed' }],
    }
  },
  {
    emoji: 'ðŸ§¾', label: 'TOOL', tech: ['JavaScript', 'HTML', 'CSS'],
    title: 'Invoice Generator',
    desc: 'Professional invoice generation web app. Generate, preview and download invoices instantly.',
    link: 'https://github.com/Smart123-12/invoice-generator',
    details: {
      tagline: 'Generate Professional Invoices in Seconds',
      fullDesc: 'A clean, professional invoice generation tool that lets freelancers and small businesses create, preview, and download invoices instantly. Add custom branding, line items, taxes, and export as PDF â€” all running in the browser with no signup required.',
      problem: ['Freelancers waste time creating invoices manually', 'Invoice tools require paid subscriptions', 'Excel invoices look unprofessional', 'No quick tool for one-off invoice needs'],
      solution: ['Instant invoice generation in browser', 'Professional template with custom branding', 'Add line items, taxes & discounts', 'PDF download with one click', 'No signup, no subscription, 100% free'],
      features: ['ðŸ“„ Professional Invoice Templates', 'ðŸ¢ Custom Business Branding', 'âž• Add Line Items, Tax & Discounts', 'ðŸ“¥ PDF Download with one click', 'ðŸ‘ï¸ Live Preview as you type', 'ðŸ’° Auto-calculate totals', 'ðŸ“± Works on mobile browsers', 'ðŸ”’ No data stored â€” 100% private'],
      stats: [{ num: '0', label: 'Cost' }, { num: 'PDF', label: 'Export' }, { num: 'Instant', label: 'Generate' }, { num: 'Free', label: 'Forever' }],
    }
  },
  {
    emoji: 'ðŸ—ï¸', label: 'PLATFORM', tech: ['JavaScript', 'Node.js'],
    title: 'Neev Platform',
    desc: 'Modern scalable platform demonstrating full-stack dev capabilities. Production-ready architecture.',
    link: 'https://github.com/Smart123-12/neev-platform',
    details: {
      tagline: 'Scalable Full-Stack Platform Architecture',
      fullDesc: 'Neev (meaning "foundation" in Hindi) is a modern full-stack platform built with production-ready architecture patterns. Demonstrates scalable design, clean code structure, and enterprise-level patterns including modular routing, middleware, and database abstraction.',
      problem: ['Most starter projects lack production patterns', 'Beginners don\'t learn scalable architecture', 'No reference for clean full-stack structure', 'Enterprise patterns are hard to learn alone'],
      solution: ['Production-ready architecture from day one', 'Modular, scalable code organization', 'Best practices for routing & middleware', 'Database abstraction layer', 'Ready-to-deploy project structure'],
      features: ['ðŸ—ï¸ Production-ready architecture', 'ðŸ“ Modular project structure', 'ðŸ”Œ RESTful API design', 'ðŸ›¡ï¸ Middleware & Error handling', 'ðŸ—„ï¸ Database abstraction layer', 'ðŸ“¦ NPM package management', 'ðŸš€ Deployment ready', 'ðŸ“ Clean, documented codebase'],
      stats: [{ num: 'Node.js', label: 'Backend' }, { num: 'Modular', label: 'Architecture' }, { num: 'REST', label: 'API Design' }, { num: 'Deploy', label: 'Ready' }],
    }
  },
  {
    emoji: 'ðŸ•‰ï¸', label: 'LIVE', tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Tattvayan â€” Spiritual Platform',
    desc: 'Full-featured spiritual & cultural platform with beautiful UI, content pages, and interactive elements. Live on GitHub Pages.',
    link: 'https://github.com/Smart123-12/tattvayan',
    details: {
      tagline: 'Spiritual & Cultural Digital Experience',
      fullDesc: 'Tattvayan is a beautifully designed spiritual and cultural platform that brings traditional Indian wisdom to the digital world. Features rich content pages, interactive UI elements, spiritual resources, and a meditation-focused user experience.',
      problem: ['Spiritual content is scattered across the internet', 'Most spiritual sites have outdated designs', 'No modern platform for Indian cultural content', 'Young generation needs accessible spiritual resources'],
      solution: ['Modern, beautiful UI for spiritual content', 'Curated spiritual resources & articles', 'Interactive & engaging user experience', 'Mobile-first design for accessibility', 'Live deployed for worldwide access'],
      features: ['ðŸ•‰ï¸ Curated Spiritual Content', 'ðŸŽ¨ Beautiful Modern UI Design', 'ðŸ“– Articles & Wisdom resources', 'ðŸ§˜ Meditation-focused experience', 'ðŸ“± Mobile-responsive design', 'âœ¨ Interactive UI elements', 'ðŸŒ Live on GitHub Pages', 'âš¡ Fast & lightweight'],
      stats: [{ num: 'Live', label: 'Deployed' }, { num: 'Modern', label: 'UI Design' }, { num: 'Rich', label: 'Content' }, { num: 'Mobile', label: 'Friendly' }],
    }
  },
]

const REASONS = [
  { icon: 'âš¡', title: 'Fast Execution', desc: 'Speed + quality, delivered without cutting corners.' },
  { icon: 'ðŸ’¬', title: 'Clear Communication', desc: 'You always know where your project stands.' },
  { icon: 'ðŸ†', title: 'Real Deployed Projects', desc: 'Live, working products â€” not just mockups.' },
  { icon: 'ðŸ”„', title: 'Revisions Until Perfect', desc: 'Your satisfaction is the goal. Always.' },
  { icon: 'ðŸ“¦', title: 'Scalable & Maintainable', desc: 'Clean code built to grow with your business.' },
  { icon: 'ðŸ•', title: 'Available 30+ hrs/week', desc: 'Fully committed to every project.' },
]

const STATS = [
  { num: '14+', label: 'Projects Built' },
  { num: '10+', label: 'Live Deployments' },
  { num: '30+', label: 'Hrs/Week Available' },
  { num: '100%', label: 'Client Satisfaction' },
]

// â”€â”€ HOOKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€ COMPONENTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
              Non-IT â†’ AI Builder. I use AI tools like Google Antigravity, Cursor, Claude & no-code platforms to turn ideas into real, deployed products â€” fast.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn-glow">ðŸš€ Start a Project</a>
              <a href="#projects" className="btn-glass">View My Work â†’</a>
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
                <span>ðŸ¤–</span>
                <div><strong>AI Builder</strong><br /><small>Built with AI Tools</small></div>
              </div>
              <div className="hero-float-badge hero-float-badge--2">
                <span>ðŸš€</span>
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
              Non-IT Background â†’ <span className="gradient-text">AI Builder</span>
            </h2>
            <p className="about-text">
              I'm <strong>Smitkumar Parmar</strong> â€” I don't code the traditional way. I use <strong>AI tools like Google Antigravity, Cursor, GitHub Copilot, Claude, v0, Bolt & Replit Agent</strong> to build real, deployed products from scratch.
            </p>
            <p className="about-text">
              Coming from a <strong>non-IT background</strong>, I taught myself to leverage AI & no-code platforms to create full-stack apps, SaaS products & automation workflows. Currently mastering <strong>Agentic AI & n8n</strong> to build even smarter solutions.
            </p>
            <div className="about-highlights">
              <div className="about-highlight">
                <span className="about-h-icon">ðŸŽ¯</span>
                <div>
                  <strong>Mission</strong>
                  <p>Turn ideas into real products using AI</p>
                </div>
              </div>
              <div className="about-highlight">
                <span className="about-h-icon">ðŸ’¡</span>
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
                {s.list.map((item, j) => <li key={j}><span className="check">âœ“</span>{item}</li>)}
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
        <p className="section-sub center">Live deployed applications â€” not just mockups. Click any project for full details.</p>
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
              <div className="project-link-row">View Case Study <span>â†’</span></div>
            </div>
          ))}
        </div>
        <div className="center" style={{ marginTop: 48 }}>
          <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="btn-glass">
            ðŸ™ View All on GitHub
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
    const subject = encodeURIComponent(`ðŸš€ Project Inquiry from ${form.name} â€” ${form.service}`)
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
                <span className="ci-icon">ðŸ“§</span>
                <a href="mailto:smitparmar208@gmail.com">smitparmar208@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="ci-icon">ðŸ“±</span>
                <a href="tel:+918140148302">+91 8140148302</a>
              </div>
              <div className="contact-item">
                <span className="ci-icon">ðŸ™</span>
                <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer">github.com/Smart123-12</a>
              </div>
              <div className="contact-item">
                <span className="ci-icon">â°</span>
                <span>Available 30+ hours per week</span>
              </div>
              <div className="contact-item">
                <span className="ci-icon">âœ…</span>
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
              {sent ? 'âœ… Opening Email...' : 'ðŸš€ Send Message'}
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
            <p className="footer-tagline">Non-IT â†’ AI Builder | Full-Stack Developer</p>
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
          <p>Â© 2026 Smitkumar Parmar. All rights reserved.</p>
          <p>Built with â¤ï¸ â€” Fast execution, clean code, real results.</p>
        </div>
      </div>
    </footer>
  )
}

// â”€â”€ PROJECT DETAIL PAGE (works for ALL projects) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ProjectDetailPage({ project, onBack }) {
  const d = project.details
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="ai-page">
      <nav className="ai-page-nav">
        <div className="container">
          <button className="ai-back-btn" onClick={onBack}>â† Back to Portfolio</button>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-glow" style={{padding:'10px 28px',fontSize:'13px'}}>
            ðŸš€ Visit Live Site
          </a>
        </div>
      </nav>

      <section className="ai-hero">
        <div className="ai-hero-glow" />
        <div className="container">
          <div className="ai-hero-badge">{d.tagline}</div>
          <h1 className="ai-hero-title">
            {project.emoji} {project.title.split('â€”')[0]} â€” <span className="gradient-text">{(project.title.split('â€”')[1] || 'Case Study').trim()}</span>
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

      <section className="section" style={{background:'#fff'}}>
        <div className="container">
          <div className="ai-two-col">
            <div className="ai-problem-card">
              <div className="section-label" style={{background:'#fef2f2',color:'#dc2626',borderColor:'#fecaca'}}>âŒ The Problem</div>
              <h3>What Problem Does It Solve?</h3>
              <ul>{d.problem.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>
            <div className="ai-solution-card">
              <div className="section-label" style={{background:'#ecfdf5',color:'#059669',borderColor:'#a7f3d0'}}>âœ… The Solution</div>
              <h3>How {project.title.split('â€”')[0].trim()} Solves It</h3>
              <ul>{d.solution.map((s, i) => <li key={i}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--bg-light)'}}>
        <div className="container">
          <div className="section-label center">âš¡ Key Features</div>
          <h2 className="section-heading center">
            Everything Inside <span className="gradient-text">{project.title.split('â€”')[0].trim()}</span>
          </h2>
          <div className="ai-features-grid">
            {d.features.map((f, i) => {
              const emoji = f.match(/^[^\s]+/)?.[0] || 'âš¡'
              const text = f.replace(/^[^\s]+\s/, '')
              const parts = text.split('â€”')
              return (
                <div className="ai-feature-card" key={i}>
                  <span className="ai-feature-icon">{emoji}</span>
                  <h4>{parts[0].trim()}</h4>
                  {parts[1] && <p>{parts[1].trim()}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="ai-cta-section">
        <div className="container center">
          <h2 className="section-heading">
            Check Out <span className="gradient-text">{project.title.split('â€”')[0].trim()}</span> Live
          </h2>
          <p className="section-sub center" style={{marginBottom:36}}>See it in action â€” fully deployed and working.</p>
          <div style={{display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-glow">ðŸš€ Visit Live Project</a>
            <button onClick={onBack} className="btn-glass">â† Back to Portfolio</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// â”€â”€ APP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

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
        <ProjectDetailPage project={selectedProject} onBack={() => setSelectedProject(null)} />
      )}
    </>
  )
}

