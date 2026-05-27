import { useState, useEffect } from 'react'
import {
  Sparkles,
  BarChart3,
  TrendingUp,
  Cpu,
  ClipboardList,
  Database,
  Mail,
  MapPin,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Play,
  FileSpreadsheet,
  Check,
  Send,
  Zap,
  Globe,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react'

// Custom robust SVGs to replace Github and Linkedin
const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

// Import assets
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import smitPhoto from './assets/smit.jpg'
import smitAboutPhoto from './assets/smit_about.jpg'

// SKILLS DATA
const SKILLS = [
  { name: 'Web & App Dev (AI-First / No-Code)', level: 95, desc: 'Built 15+ functional web & mobile apps completely without manual coding. Engineered using AI tools (Cursor, Claude, Gemini, Bolt) & Prompt Engineering.' },
  { name: 'Advanced Excel', level: 95, desc: 'Nested formulas, dynamic arrays, solver & data modeling' },
  { name: 'Dashboard Creation', level: 92, desc: 'Interactive KPI dashboards, dynamic slicers & advanced charting' },
  { name: 'MIS Reporting', level: 90, desc: 'Structured corporate reporting, periodic summaries & auditing' },
  { name: 'Pivot Tables & Charting', level: 95, desc: 'Consolidated source modeling, group trends & filters' },
  { name: 'VLOOKUP / XLOOKUP', level: 98, desc: 'Complex relational lookups, error-handling & matrix indexing' },
  { name: 'AI Tools Integration', level: 90, desc: 'Leveraging Claude, Gemini, ChatGPT for daily building & operations' },
  { name: 'Prompt Engineering', level: 92, desc: 'Structured prompts, systemic instructions & custom models' },
  { name: 'Basic n8n Automation', level: 82, desc: 'Webhook triggers, API nodes, sheets sync & slack alerts' },
  { name: 'Power BI & SQL', level: 78, desc: 'Relational data modeling, DAX parameters & databases (Active Learning)' }
]

// 15 ORIGINAL PROJECTS DATA WITH COMPLETE DETAILS
const PROJECTS = [
  {
    id: 'manufactory-crm',
    title: 'Manufactory CRM',
    subtitle: 'Factory Operations & CRM OS',
    emoji: '🏭',
    label: 'LIVE',
    tech: ['React', 'Recharts', 'TailwindCSS', 'Vite', 'Twilio API'],
    link: 'https://smart123-12.github.io/manufactory-crm/',
    details: {
      tagline: 'Simple Factory Management & CRM Platform for Indian SMEs',
      problem: 'Chaotic B2B CRM tracking, offline whiteboards, and unorganized WhatsApp coordinator threads causing material shortage-driven shutdowns and dispatcher delays in local GIDC units.',
      solution: 'A unified operations dashboard replacing offline logs. Combines live machine OEE telemetries, automated material safety thresholds, B2B quotation builders, and dynamic role-based operations access.',
      features: [
        'SME Dynamic Role Gating - filtered screens for Owners, Store Managers, Accountants',
        'Live Machine Diagnostics - OEE telemetries, utilization matrices, and scrap counts',
        'Automatic Safety Stock Reminders DIP triggers on GIDC warehouse inventory',
        'WhatsApp Automations Hub -Twilio configurations for dispatch notifications'
      ],
      stats: [
        { label: 'Inventory Sync', val: '100%' },
        { label: 'Ledgers Monitored', val: '₹17.2L' },
        { label: 'Onboarding', val: '< 15m' }
      ]
    }
  },
  {
    id: 'ecoloop',
    title: 'EcoLoop',
    subtitle: 'B2B Circular Waste Exchange',
    emoji: '♻',
    label: 'LIVE',
    tech: ['Vite', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    link: 'https://smart123-12.github.io/ecoloop/',
    details: {
      tagline: 'National B2B Circular Economics & Industrial Waste Exchange',
      problem: 'Opaque scrap markets, yard storage blocks, and severe chemical disposal stress for small factories, combined with long-distance freight carbon loads.',
      solution: 'AI-powered exchange matching surplus factory waste streams directly to verified KYC recyclers, tracking regional logistics and auditing Scope 3 ESG carbon offsets.',
      features: [
        'Surplus Waste Dispatcher - declare lots in 30 seconds for local bid matching',
        'AI Value & Carbon Calculator - active tonnage sliders estimating rates in INR',
        'B2B Corporate Pricing Tiers - licensed templates for scaling manufacturers',
        'KYC Verification Auditing - standard pollution certification checking filters'
      ],
      stats: [
        { label: 'Annual GTV', val: '₹45.2 Cr' },
        { label: 'Waste Processed', val: '842k T' },
        { label: 'Logistics Finish', val: '99.4%' }
      ]
    }
  },
  {
    id: 'ai-analyst',
    title: 'AI Analyst',
    subtitle: 'PRD-Aware Multi-Agent Workspace',
    emoji: '🧠',
    label: 'LIVE',
    tech: ['Next.js', 'NVIDIA Nemotron', 'AI Agents', 'TensorRT'],
    link: 'https://smart123-12.github.io/ai-analyst/',
    details: {
      tagline: 'Powered by NVIDIA Nemotron - vLLM - TensorRT-LLM',
      problem: 'Manual PR reviews miss architectural errors, PRD metrics are rarely validated against raw code layers, and security scanning occupies hours of senior engineers.',
      solution: '9 specialized autonomous agents running in parallel to validate implementations against design benchmarks, run OWASP audits, and outline production readiness.',
      features: [
        '9 Autonomous AI Agents analyzing components simultaneously',
        'PRD-Aware Analysis - directly cross-referencing code to requirement docs',
        'Interactive Chart.js dashboard auditing diagnostic ratings',
        'Executive summaries and direct CI/CD pipeline triggers'
      ],
      stats: [
        { label: 'AI Agents', val: '9 Parallel' },
        { label: 'PRD Validation', val: '100%' },
        { label: 'Audit Time', val: '< 30s' }
      ]
    }
  },
  {
    id: 'medicap',
    title: 'MediCap',
    subtitle: 'Doctor & GCP Patient Portal',
    emoji: '🏥',
    label: 'LIVE',
    tech: ['React', 'Node.js', 'MongoDB', 'GCP'],
    link: 'https://smart123-12.github.io/medicap/',
    details: {
      tagline: 'Live on Google Cloud Platform with CI/CD',
      problem: 'Small clinics managing patient logs on scattered local spreadsheets with no role gating, causing security vulnerabilities and scheduling conflicts.',
      solution: 'A cloud-based hospital OS with JWT-authorized dashboards for Doctors, Patients, and Admins, deployed with active GitHub actions on GCP.',
      features: [
        'Secure JWT role-based access gates and login panels',
        '20+ structured REST API endpoints for complete patient charts',
        'Appointment booking engines and automatic ledger summaries',
        'Responsive grids accessible on clinics tablets and mobile browsers'
      ],
      stats: [
        { label: 'API Endpoints', val: '20+' },
        { label: 'User Roles', val: '3 Gated' },
        { label: 'Cloud Deploy', val: 'GCP' }
      ]
    }
  },
  {
    id: 'dental-clinic',
    title: 'Dental Clinic',
    subtitle: 'Specialist Patient Portal',
    emoji: '🦷',
    label: 'LIVE',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://smart123-12.github.io/dental-clinic_12/',
    details: {
      tagline: 'Live on GitHub Pages - Multi-Role Healthcare System',
      problem: 'Specialist dental clinics lacking consolidated timelines for treatment cycles, billing ledgers, and doctor schedules.',
      solution: 'Full-stack clinic organizer supporting visual dental history logs, appointment scheduler panels, and payment invoice summaries.',
      features: [
        'Treatment record tracking - visual chart indicators for dental sessions',
        'Automated slot allocator preventing scheduling collisions',
        'Invoicing ledger with print-ready billing modules',
        'Secure local auth schemas'
      ],
      stats: [
        { label: 'Gated Roles', val: '3 Roles' },
        { label: 'Operation Mode', val: 'CRUD' },
        { label: 'Responsive', val: '100%' }
      ]
    }
  },
  {
    id: 'tattavyan-school',
    title: 'Tattavyan School',
    subtitle: 'Edutech Administrative OS',
    emoji: '🎓',
    label: 'DEPLOYED',
    tech: ['React', 'Node.js', 'JavaScript'],
    link: 'https://smart123-12.github.io/tattavyan-school/',
    details: {
      tagline: 'Complete School Management Ecosystem',
      problem: 'Administrative registers, attendance sheets, homework folders, and grades logs are scattered across disparate offline papers.',
      solution: 'School management dashboard offering role-gated portals for Admins, Teachers, and Students, tracking attendance, scores, and homework submissions.',
      features: [
        'Admin Portal - global class, student, and teacher lists',
        'Teacher Desk - attendance logs, homework indicators, grade updates',
        'Student Dashboard - submission drawers and visual grades reports',
        'Live notice board displaying community announcements'
      ],
      stats: [
        { label: 'Module Packs', val: '6+ Pages' },
        { label: 'Target Roles', val: 'Admin/Tchr/Stud' },
        { label: 'Sync Rate', val: 'Instant' }
      ]
    }
  },
  {
    id: 'aarthiq',
    title: 'AarthIQ',
    subtitle: 'AI Indian Tax Advisor',
    emoji: '💵',
    label: 'LIVE',
    tech: ['TypeScript', 'React', 'AI'],
    link: 'https://smart123-12.github.io/AarthIQ/',
    details: {
      tagline: 'AI-Powered Financial Intelligence for India',
      problem: 'Indians overpaying income tax due to complex dynamic shifts across old/new tax regimes, HRA criteria, and missing structured optimization planning.',
      solution: 'AI Tax workspace mapping brackets for FY 2026-27. Features an AI Money Coach, salary planners, freelancer calculations, and NRI double-tax guides.',
      features: [
        'Salary Tax Optimizer comparing old vs new regime slabs',
        'AI Money Coach - prompt-engineered advice chatbot running locally',
        'Freelancer Tax Tracker calculating GST rules and deductions',
        '100% privacy compliance - zero personal records uploaded to databases'
      ],
      stats: [
        { label: 'Tax Year', val: 'FY 2026-27' },
        { label: 'Client Privacy', val: '100% Local' },
        { label: 'Tax Calculators', val: '5+ Tools' }
      ]
    }
  },
  {
    id: 'bluetax',
    title: 'BlueTax',
    subtitle: 'US W2 Paycheck Optimizer',
    emoji: '💙',
    label: 'LIVE',
    tech: ['TypeScript', 'React', 'IRS API'],
    link: 'https://smart123-12.github.io/bluetax/',
    details: {
      tagline: 'Privacy-First US Tax Intelligence',
      problem: 'American W2 employees overwithholding taxes, combined with complex state bracket changes and severe privacy worries.',
      solution: 'Local browser-based tax bracket calculator estimating withholdings using the latest 2026 IRS schedules, keeping details secure in client memory.',
      features: [
        '2026 IRS Federal and State tax bracket estimations',
        'Interactive paychecks optimizer charts showing net income curves',
        'Filing status selectors (Single, Married, Head of Household)',
        'Zero-server structure - no database transactions executed'
      ],
      stats: [
        { label: 'IRS Database', val: '2026 Updated' },
        { label: 'Server Ingestion', val: '0 Logs' },
        { label: 'Device Support', val: 'Mobile/Desktop' }
      ]
    }
  },
  {
    id: 'nexus-ai',
    title: 'Nexus AI',
    subtitle: 'Generative Business SaaS',
    emoji: '🧠',
    label: 'LIVE',
    tech: ['HTML', 'Node.js', 'Gemini AI'],
    link: 'https://smart123-12.github.io/nexus-ai/',
    details: {
      tagline: 'AI-Powered Business Intelligence SaaS',
      problem: 'Small companies unable to afford complex analytics licenses like Tableau, combined with low staff data literacy.',
      solution: 'Affordable BI dashboard feeding CSV files into Chart.js models, connected to Gemini AI to generate automated visual recommendations.',
      features: [
        'Interactive Chart.js visualizations for inventory and margins',
        'Gemini AI Assistant generating daily SWOT summaries',
        'MongoDB backend with secure profile authentication',
        'Custom executive reports auto-export formats'
      ],
      stats: [
        { label: 'AI Processor', val: 'Gemini API' },
        { label: 'Visualization', val: 'Chart.js' },
        { label: 'Data Store', val: 'MongoDB' }
      ]
    }
  },
  {
    id: 'finwise',
    title: 'FinWise',
    subtitle: 'Household Financial Planner',
    emoji: '📈',
    label: 'LIVE',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://smart123-12.github.io/finwise/',
    details: {
      tagline: 'Smart Finance for Indian Families',
      problem: 'Middle-class Indian households struggling to track dynamic monthly expenses, compare insurance, or estimate tax slabs.',
      solution: 'Minimal, offline-ready household planner with local expense registers, health/life insurance checklists, and budget tools.',
      features: [
        'Daily Expense Tracker categorized with visual graphs',
        'Indian Tax Slab calculator showing regime comparisons',
        'Insurance Comparison grids detailing options side-by-side',
        '100% offline support built with local browser storage'
      ],
      stats: [
        { label: 'Operational Cost', val: '₹0 Free' },
        { label: 'Integrations', val: '5+ Tools' },
        { label: 'Offline Mode', val: '100% Ready' }
      ]
    }
  },
  {
    id: 'ecom-dashboard',
    title: 'ecom-dashboard',
    subtitle: 'Multi-Backend eCommerce Admin',
    emoji: '🛒',
    label: 'LIVE',
    tech: ['React', 'Node.js', 'PHP', 'MySQL'],
    link: 'https://smart123-12.github.io/ecom-dashboard/',
    details: {
      tagline: 'Full-Stack eCommerce Management System',
      problem: 'Unorganized shop records, delayed order status updates, and lack of unified MySQL product grids.',
      solution: 'eCommerce back-office dashboard written in React with a robust dual Node.js and PHP backend API connected to MySQL.',
      features: [
        'Complete Product management with CRUD tables',
        'Dual API backend (Node.js REST + PHP endpoints)',
        'Inventory stock counter and visual sales grids',
        'Secure admin login logs and credentials encryption'
      ],
      stats: [
        { label: 'Dual Backend', val: 'Node + PHP' },
        { label: 'Relational DB', val: 'MySQL' },
        { label: 'Frontend', val: 'React ES6' }
      ]
    }
  },
  {
    id: 'khedut',
    title: 'Khedut',
    subtitle: 'Farmer Market APMC Feed',
    emoji: '🌾',
    label: 'DEPLOYED',
    tech: ['React', 'Node.js', 'JavaScript'],
    link: 'https://smart123-12.github.io/khedut/',
    details: {
      tagline: 'Digital Agriculture for Indian Farmers',
      problem: 'Farmers lacking access to real-time wholesale market APMC prices, local weather advisories, and direct information on subsidy schemes.',
      solution: 'Agriculture information gateway showing live crop rates, weather warnings, and local language scheme cards.',
      features: [
        'Real-time crop market APMC price listings',
        'Subsidy and government scheme checking lists',
        'Lightweight, high-speed layout optimized for rural cellular networks',
        'Localized UI patterns designed for ease of use'
      ],
      stats: [
        { label: 'Target Market', val: 'Agriculture' },
        { label: 'Price Sync', val: 'Live APMC' },
        { label: 'User Cost', val: '100% Free' }
      ]
    }
  },
  {
    id: 'invoice-generator',
    title: 'Invoice Generator',
    subtitle: 'Instant Freelance Billing Desk',
    emoji: '📄',
    label: 'TOOL',
    tech: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://smart123-12.github.io/invoice-generator/',
    details: {
      tagline: 'Generate Professional Invoices in Seconds',
      problem: 'Freelancers wasting valuable minutes formatting MS Word templates manually, with recurring calculation math errors.',
      solution: 'Instant browser invoicing page allowing real-time edits, auto tax calculations, and 1-click professional PDF downloads.',
      features: [
        'Dynamic calculations auto-balancing totals, tax, and discounts',
        'Custom business branding logo uploads',
        '1-click clean PDF rendering directly from browser engines',
        'No registration or profile storage mandatory'
      ],
      stats: [
        { label: 'Generation Speed', val: 'Instant' },
        { label: 'Export Format', val: 'PDF' },
        { label: 'Inquiries Logged', val: '0 None' }
      ]
    }
  },
  {
    id: 'neev-platform',
    title: 'Neev Platform',
    subtitle: 'Clean MVC Architecture Boilerplate',
    emoji: '🏗',
    label: 'PLATFORM',
    tech: ['JavaScript', 'Node.js'],
    link: 'https://smart123-12.github.io/neev-platform/',
    details: {
      tagline: 'Scalable Full-Stack Platform Architecture',
      problem: 'Beginners launching full-stack apps on messy, unscalable code structures without standard modular routing or middleware layers.',
      solution: 'Clean production-ready MVC reference architecture showcasing modular routes, secure token middleware, and robust DB abstractions.',
      features: [
        'Modular directory organization following standard practices',
        'Secure express middleware examples handling CORS and headers',
        'Database connection pool structures and error handlers',
        'Ready-to-deploy pipeline configurations'
      ],
      stats: [
        { label: 'Server Base', val: 'Node.js' },
        { label: 'Pattern', val: 'MVC Modular' },
        { label: 'Routing', val: 'RESTful' }
      ]
    }
  },
  {
    id: 'tattvayan',
    title: 'Tattvayan',
    subtitle: 'Spiritual Literature Hub',
    emoji: '🕉',
    label: 'LIVE',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://smart123-12.github.io/tattvayan/',
    details: {
      tagline: 'Spiritual & Cultural Digital Experience',
      problem: 'Spiritual literature, metrics, and resources scattered across bloated, outdated, non-responsive sites.',
      solution: 'A minimal, beautifully styled cultural portal with content pages and meditation trackers.',
      features: [
        'Spiritual literature index and reading drawers',
        'Responsive layout accessible on mobile screens',
        'Interactive meditation focus timers',
        'Fast page speeds utilizing minimal assets'
      ],
      stats: [
        { label: 'Layout Mode', val: 'Responsive' },
        { label: 'Branding Theme', val: 'Saffron Gold' },
        { label: 'Content Depth', val: 'Rich' }
      ]
    }
  }
]

export default function App() {
  const [activeTab, setActiveTab] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setContactSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
    setTimeout(() => setContactSubmitted(false), 5000)
  }

  // Highly customizable responsive live CSS visual mini-dashboards for all 15 cards
  const renderProjectVisual = (projectId) => {
    // Generate a sleek UI dashboard based on project category
    if (projectId.includes('crm') || projectId.includes('dashboard') || projectId.includes('tax') || projectId.includes('aarthiq') || projectId.includes('bluetax') || projectId.includes('finwise') || projectId.includes('invoice')) {
      return (
        <div className="w-full h-40 bg-white/40 rounded-t-xl border-b border-slate-200/50 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[8px] text-emerald-600">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="flex items-center gap-1 font-semibold text-slate-800 text-[9px] uppercase">
              <FileSpreadsheet className="w-3 h-3 text-emerald-500" /> {projectId.toUpperCase()}_SHEET.xlsx
            </span>
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[6px] animate-pulse">ACTIVE DATA</span>
          </div>
          
          <div className="grid grid-cols-3 gap-1.5 my-1.5">
            <div className="p-1 rounded bg-slate-100 border border-slate-200/50 text-center">
              <div className="text-slate-400 text-[6px] uppercase">Value Ledger</div>
              <div className="text-[9px] font-bold text-amber-600">₹17,20,000</div>
            </div>
            <div className="p-1 rounded bg-slate-100 border border-slate-200/50 text-center">
              <div className="text-slate-400 text-[6px] uppercase">Status</div>
              <div className="text-[9px] font-bold text-cyan-600">Active Sync</div>
            </div>
            <div className="p-1 rounded bg-slate-100 border border-slate-200/50 text-center">
              <div className="text-slate-400 text-[6px] uppercase">Efficiency</div>
              <div className="text-[9px] font-bold text-emerald-600">95%+ Save</div>
            </div>
          </div>

          <div className="flex items-end justify-between h-10 mt-1 border-t border-slate-200 pb-1">
            <span className="text-[6px] text-slate-400 self-center">Consolidated Slicer:</span>
            <div className="flex items-end gap-1 h-full w-[120px] justify-end">
              <div className="w-3.5 bg-emerald-500/20 rounded-t h-[40%]"></div>
              <div className="w-3.5 bg-emerald-500/40 rounded-t h-[75%]"></div>
              <div className="w-3.5 bg-emerald-500 rounded-t h-[95%] border-t border-white"></div>
            </div>
          </div>
        </div>
      )
    }

    if (projectId.includes('ai') || projectId.includes('analyst') || projectId.includes('assistant')) {
      return (
        <div className="w-full h-40 bg-white/40 rounded-t-xl border-b border-slate-200/50 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[8px] text-cyan-600">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="flex items-center gap-1 font-semibold text-slate-800 text-[9px] uppercase">
              <Cpu className="w-3 h-3 text-cyan-500" /> {projectId.toUpperCase()}_MODEL
            </span>
            <span className="text-cyan-600/70 text-[7px] uppercase font-bold tracking-widest">NVIDIA powered</span>
          </div>

          <div className="space-y-1.5 flex-grow overflow-y-auto mt-2 text-[8px]">
            <div className="flex items-start gap-1">
              <div className="bg-slate-200 px-1 py-0.5 rounded text-slate-700 text-[6px]">USER</div>
              <div className="bg-slate-100 p-1 rounded border border-slate-200 text-slate-800 leading-snug truncate max-w-[80%]">
                Validate code against PRD metrics...
              </div>
            </div>
            <div className="flex items-start gap-1">
              <div className="bg-cyan-500/10 px-1 py-0.5 rounded text-cyan-600 text-[6px]">AGENT</div>
              <div className="bg-cyan-500/5 p-1 rounded border border-cyan-500/20 text-cyan-600 leading-snug truncate max-w-[80%]">
                Analysis complete. 100% requirements passed.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 pt-1 text-[7px] text-slate-400">
            <span>Vertex AI / Gemini API</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
          </div>
        </div>
      )
    }

    if (projectId.includes('n8n') || projectId.includes('automation') || projectId.includes('workflow') || projectId.includes('platform') || projectId.includes('neev')) {
      return (
        <div className="w-full h-40 bg-white/40 rounded-t-xl border-b border-slate-200/50 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[8px]">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="flex items-center gap-1 font-semibold text-slate-800 text-[9px] uppercase">
              <Zap className="w-3 h-3 text-amber-500" /> WORKFLOW_ROUTER
            </span>
            <span className="text-emerald-600 text-[7px] font-bold">100% AUTOMATED</span>
          </div>

          <div className="flex items-center justify-center gap-1 h-16 my-1">
            <div className="flex flex-col items-center p-1 rounded bg-slate-100 border border-slate-200 text-center w-12 text-[5px]">
              <div>🔗</div>
              <div className="text-slate-800 font-semibold leading-tight">Webhook</div>
            </div>
            <div className="h-0.5 w-3 bg-emerald-500"></div>
            <div className="flex flex-col items-center p-1 rounded bg-slate-100 border border-slate-200 text-center w-12 text-[5px]">
              <div>🤖</div>
              <div className="text-slate-800 font-semibold leading-tight">AI Parse</div>
            </div>
            <div className="h-0.5 w-3 bg-emerald-500"></div>
            <div className="flex flex-col items-center p-1 rounded bg-slate-100 border border-slate-200 text-center w-12 text-[5px]">
              <div>💬</div>
              <div className="text-slate-800 font-semibold leading-tight">Slack API</div>
            </div>
          </div>

          <div className="flex justify-between text-[6px] text-slate-400 border-t border-slate-200 pt-1.5">
            <span>Orchestration Trigger: Webhook Node</span>
            <span>n8n Active</span>
          </div>
        </div>
      )
    }

    // Default Fallback circular economics/exchange visual
    return (
      <div className="w-full h-40 bg-white/40 rounded-t-xl border-b border-slate-200/50 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[8px] text-cyan-600">
        <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
          <span className="flex items-center gap-1 font-semibold text-slate-800 text-[9px] uppercase">
            <Globe className="w-3 h-3 text-emerald-500" /> {projectId.toUpperCase()}_PLATFORM
          </span>
          <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-[6px]">DEPLOYED</span>
        </div>

        <div className="flex justify-between items-center my-3 text-[7.5px] px-2 h-10 bg-slate-100 rounded border border-slate-200">
          <span className="text-slate-500">APMC Live Index Feed:</span>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold font-mono">₹45.2 Cr</span>
            <span className="text-emerald-500 text-[6px]">+9.4% MoM</span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[7px] text-slate-400 border-t border-slate-200 pt-1">
          <span>Active Nodes: Multi-Branch Sync</span>
          <span>Security Audit: Passed</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-obsidian-deep text-slate-800 selection:bg-gold-accent/15 selection:text-slate-900 overflow-x-hidden font-sans relative antialiased">
      
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-accent/5 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gold-accent/5 rounded-full blur-[80px] -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-accent/5 rounded-full blur-[120px] -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* HEADER / NAVBAR */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg md:text-xl tracking-tight text-slate-900 hover:opacity-90 group font-outfit">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-accent to-emerald-accent text-white flex items-center justify-center font-extrabold text-sm shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
              SP
            </span>
            Smit Parmar
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((sec) => (
              <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:text-gold-accent transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-gold-accent after:to-emerald-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                {sec}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-slate-900 transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent text-white shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100 transition-all duration-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 bg-white border border-slate-200 active:scale-95 transition-all">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full inset-x-0 glass-nav py-6 px-5 border-b border-slate-200/50 shadow-2xl flex flex-col gap-4 animate-fade-in">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((sec) => (
              <a key={sec} href={`#${sec.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-700 hover:text-gold-accent font-semibold py-2 border-b border-slate-200/50 transition-colors">
                {sec}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2">
              <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <Github className="w-5 h-5" /> @Smart123-12
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-5 py-2 rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent text-white text-xs font-bold uppercase">
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-accent/5 border border-emerald-accent/15 text-emerald-accent font-bold text-xs uppercase tracking-wider mb-6 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> AI Builder & Data Analytics Specialist
            </div>

            <h1 className="font-outfit text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-[1.25]">
              Hi, I'm <span className="text-gradient-gold-emerald">Smit Parmar</span> — an AI Builder, Prompt Engineer, and Data Analytics enthusiast 👋
            </h1>

            <p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-medium">
              I enjoy turning business ideas into practical AI-powered solutions using Prompt Engineering, No-Code tools, and workflow automation.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent text-white font-bold hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300">
                View My Projects
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-gold-accent hover:text-gold-accent transition-all duration-300">
                Contact Me
              </a>
              <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Hero Achievements */}
            <div className="grid grid-cols-3 gap-6 md:gap-10 mt-12 border-t border-slate-200/60 pt-8 w-full max-w-md">
              <div className="text-center md:text-left">
                <div className="font-outfit text-xl md:text-2xl font-black text-slate-900">15</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Live Applications</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-outfit text-xl md:text-2xl font-black text-slate-900">95%+</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Automation Rate</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-outfit text-xl md:text-2xl font-black text-slate-900">AI-First</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold mt-1">Without Manual Code</div>
              </div>
            </div>
          </div>

          {/* Right Image/Cyber Column */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-96 md:w-80 md:h-[420px] rounded-3xl p-1 bg-gradient-to-br from-gold-accent/20 via-white/5 to-emerald-accent/20 shadow-xl shadow-emerald-500/5 animate-float">
              
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-accent/5 to-transparent blur-xl opacity-30 -z-10" />

              <div className="w-full h-full rounded-[20px] overflow-hidden bg-white relative">
                <img src={smitPhoto} alt="Smit Parmar - AI Builder & Data Analytics" className="w-full h-full object-cover grayscale brightness-95 contrast-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 via-transparent to-white/5" />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-6 top-16 px-4 py-2.5 rounded-2xl glass-card border-l-2 border-l-emerald-accent flex items-center gap-3 animate-float-slow shadow-xl">
                <span className="text-xl">📊</span>
                <div>
                  <div className="text-xs font-bold text-slate-900">Analytics</div>
                  <div className="text-[9px] text-slate-500">Power BI & Excel</div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-16 px-4 py-2.5 rounded-2xl glass-card border-l-2 border-l-gold-accent flex items-center gap-3 animate-float-delayed shadow-xl">
                <span className="text-xl">🤖</span>
                <div>
                  <div className="text-xs font-bold text-slate-900">AI strategy</div>
                  <div className="text-[9px] text-slate-500">Systemic Prompter</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT ME SECTION WITH THE DETAILED BULLET LISTS */}
      <section id="about" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-slate-200/50 bg-obsidian-medium/40">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">Operations Narrative</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Turning Complex Ideas Into <span className="text-gradient-gold-emerald">Practical Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Photo & Profile Summary */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-64 h-80 rounded-2xl p-0.5 bg-gradient-to-tr from-emerald-accent/25 to-gold-accent/25 mb-6 shadow-md">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-white">
                  <img src={photo3} alt="Smit Parmar" className="w-full h-full object-cover brightness-95" />
                </div>
              </div>
              
              <div className="w-full p-5 rounded-2xl glass-card text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold-accent/10 text-gold-accent mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Gujarat, India</h4>
                <p className="text-xs text-slate-500">Freelance & Full-Time availability</p>
              </div>
            </div>

            {/* Right Bullet Details Lists */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* What I Work On Panel */}
              <div className="p-6 rounded-2xl glass-card-emerald border border-emerald-500/10">
                <div className="flex items-center gap-2.5 mb-4 text-emerald-accent">
                  <span className="text-xl">🤖</span>
                  <h3 className="font-outfit text-base font-bold text-slate-800 uppercase tracking-wider">What I Work On</h3>
                </div>
                
                <ul className="space-y-3 text-xs md:text-sm text-slate-700 font-medium">
                  {[
                    'AI Chatbots & Virtual Assistants',
                    'AI Websites & Web Applications',
                    'Workflow Automation (n8n, Make, Zapier)',
                    'AI-Powered Research & Content Systems',
                    'Business Process Automation',
                    'No-Code SaaS Solutions'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-emerald-500 font-extrabold text-xs">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Technologies Panel */}
              <div className="p-6 rounded-2xl glass-card-gold border border-gold-500/10">
                <div className="flex items-center gap-2.5 mb-4 text-gold-accent">
                  <span className="text-xl">📊</span>
                  <h3 className="font-outfit text-base font-bold text-slate-800 uppercase tracking-wider">Skills & Technologies</h3>
                </div>
                
                <ul className="space-y-3 text-xs md:text-sm text-slate-700 font-medium">
                  {[
                    'Advanced Excel, Power BI, SQL',
                    'Data Analytics & Reporting',
                    'Prompt Engineering & AI Tools',
                    'Python Basics',
                    'Google Cloud, Vertex AI, Gemini API',
                    'GitHub, Firebase, Streamlit',
                    'Workflow Automation with n8n'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-gold-400 font-extrabold text-xs">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Focus Callout */}
              <div className="p-5 rounded-2xl bg-white border border-slate-100 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-3.5 items-start">
                  <div className="text-xl p-1 bg-indigo-500/10 rounded-lg text-indigo-500">🎯</div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-slate-800 tracking-widest mb-1.5">Career Focus</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Building practical AI solutions while growing in Data Analytics, MIS Reporting, and AI Product Engineering.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex gap-3.5 items-start">
                  <div className="text-xl p-1 bg-amber-500/10 rounded-lg text-amber-500">💼</div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-slate-800 tracking-widest mb-1.5">Open Opportunities</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      Open to high-impact Freelance Projects & Full-Time roles in AI, Data Auditing, and MIS Automation.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SKILLS RANGE BAR INDICATORS */}
      <section id="skills" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-slate-200/50">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">My Proficiency</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Skill Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {SKILLS.map((sk, idx) => (
              <div key={idx} className="p-5 rounded-2xl glass-card relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm md:text-base font-black text-slate-900 leading-tight group-hover:text-gold-accent transition-colors">
                      {sk.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1 font-semibold">{sk.desc}</p>
                  </div>
                  <span className="text-xs font-black font-mono text-emerald-accent">{sk.level}%</span>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/30 p-0.5">
                  <div 
                    className="bg-gradient-to-r from-gold-accent to-emerald-accent h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${sk.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 15 ORIGINAL PROJECTS SECTION WITH IMMERSIVE DETAIL AND DEMO LINKS */}
      <section id="projects" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-slate-200/50 bg-obsidian-medium/40">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">15 Live Deployments</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900">
                Engineered Solutions, <span className="text-gradient-gold-emerald">Real Demo Links</span>
              </h2>
            </div>
            
            {/* Filter tags buttons */}
            <div className="flex flex-wrap gap-2">
              {['ALL', 'LIVE', 'DEPLOYED', 'TOOL', 'PLATFORM'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-gold-accent to-emerald-accent text-white border-transparent shadow-lg shadow-emerald-500/10'
                      : 'bg-white text-slate-500 border-slate-200 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 15 Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter(p => {
              if (activeTab === 'ALL') return true
              return p.label === activeTab
            }).map((proj) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group flex flex-col rounded-2xl glass-card overflow-hidden hover:scale-[1.01] cursor-pointer"
              >
                {/* CSS Live Visual Mockups */}
                {renderProjectVisual(proj.id)}

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-white/50">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{proj.emoji}</span>
                        <span className="text-[9px] font-black uppercase text-slate-400 font-mono">Case Study</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest ${
                        proj.label === 'LIVE' 
                          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' 
                          : proj.label === 'DEPLOYED' 
                          ? 'bg-cyan-500/10 text-cyan-600 border border-cyan-500/20'
                          : 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
                      }`}>
                        {proj.label}
                      </span>
                    </div>

                    <h3 className="font-outfit text-base font-bold text-slate-900 group-hover:text-gold-accent transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 font-semibold mb-3 leading-snug">{proj.subtitle}</p>

                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed font-medium">
                      {proj.details.tagline}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {proj.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-0.5 text-[8.5px] font-bold text-slate-600 bg-slate-100 border border-slate-200/50 rounded-full">
                          {t}
                        </span>
                      ))}
                      {proj.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-[8.5px] font-bold text-emerald-accent bg-emerald-accent/5 border border-emerald-accent/10 rounded-full">
                          +{proj.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-bold border-t border-slate-100 pt-3">
                      <span className="text-emerald-accent flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        Study Deep Dive <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                      
                      <span className="text-slate-400 hover:text-slate-800 transition-colors text-[10px] underline font-semibold">
                        Demo Link Available
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROFESSIONAL COMMITMENT TIMELINE */}
      <section id="experience" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto w-full">
          
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">Career Roadmap</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Commitment Timeline
            </h2>
          </div>

          <div className="space-y-12">
            
            {/* Gated Experience Card */}
            <div className="p-6 md:p-8 rounded-2xl glass-card border-l-4 border-l-emerald-accent relative">
              <div className="absolute top-6 right-6 text-xl">⚡</div>
              
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[10px] font-black uppercase font-mono">
                Active Position
              </span>

              <h3 className="font-outfit text-xl md:text-2xl font-black text-slate-900 mt-4 mb-2">
                AI Builder | MIS Executive & Automation | Freelancer
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-6">
                <MapPin className="w-3.5 h-3.5 text-gold-accent" /> Gujarat, India
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                Working on AI-powered solutions, MIS reporting, and workflow automation while building practical skills in Data Analytics and business reporting.
              </p>

              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3.5">Directives:</h4>
              <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                  <span>Synthesizing large datasets into visual corporate reports with robust Pivot configurations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                  <span>Writing structured system prompts and analytical triggers using leading Large Language Models.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                  <span>Configuring n8n and webhook arrays to eliminate repetitive administrative manual work.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                  <span>Deepening skills in <strong className="text-slate-900">Data Analytics</strong> pipelines (Power BI, SQL, relational database tables).</span>
                </li>
              </ul>
            </div>

            {/* Learning timeline element */}
            <div className="relative pl-8 timeline-item">
              <div className="absolute left-[17px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-accent shadow-md shadow-amber-500/40" />
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase text-gold-accent font-mono">Learning Phase</span>
                <span className="text-[10px] text-slate-500 font-bold">• Active Journey</span>
              </div>

              <h4 className="font-outfit text-sm md:text-base font-bold text-slate-900 mb-2">
                Advanced Data Analytics & Power BI Modeling
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-2xl font-medium">
                Developing visual analytics metrics and clean SQL queries to transition local datasets into real-time business dashboards.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-slate-200/50 bg-obsidian-medium/40">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Contact Details Left */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">Initiate Pipeline</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Let's Build <span className="text-gradient-gold-emerald">Something Incredible</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8 max-w-sm font-medium">
                Have a convoluted business spreadsheet that needs automated parsing, or a manual workspace workflow requiring prompt strategy and n8n? Get in touch and let's optimize your operations together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4 hover:border-emerald-accent/20 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-accent/10 border border-emerald-accent/20 flex items-center justify-center text-emerald-accent">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider font-mono">Direct Email</div>
                  <a href="mailto:tattvayan.ai@gmail.com" className="text-sm font-bold text-slate-900 hover:text-gold-accent transition-colors">
                    tattvayan.ai@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4 hover:border-emerald-accent/20 transition-all duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center text-gold-accent">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase text-slate-400 tracking-wider font-mono">Location</div>
                  <span className="text-sm font-bold text-slate-900">Gujarat, India</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-200">
              <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-slate-200 hover:bg-emerald-accent/10 hover:border-emerald-accent/20 text-slate-600 hover:text-emerald-accent transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white border border-slate-200 hover:bg-gold-accent/10 hover:border-gold-accent/20 text-slate-600 hover:text-gold-accent transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form Card Right */}
          <div className="md:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl glass-card relative overflow-hidden">
              
              {contactSubmitted && (
                <div className="absolute inset-0 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                  <span className="text-5xl mb-4">🎉</span>
                  <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Message Logged!</h3>
                  <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-semibold">
                    Thank you, I will review and reply within 24 hours.
                  </p>
                </div>
              )}

              <h3 className="font-outfit text-lg md:text-xl font-bold text-slate-900 mb-6">Send A message</h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 font-mono">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Recruiter / Business Lead"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-accent focus:bg-white text-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="your.address@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-accent focus:bg-white text-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 font-mono">Message / Requirement Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Specify details..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-accent focus:bg-white text-sm transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-gold-accent to-emerald-accent text-white font-bold text-sm tracking-wide uppercase hover:shadow-lg hover:shadow-emerald-500/10 active:scale-99 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 md:px-6 border-t border-slate-200 bg-slate-100">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 font-bold tracking-tight text-slate-900 font-outfit text-base">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold-accent to-emerald-accent text-white flex items-center justify-center font-extrabold text-xs">
                SP
              </span>
              Smit Parmar
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-bold font-mono">
              AI Builder | MIS Executive & Automation | Freelancer
            </p>
          </div>

          <p className="text-xs text-slate-500 font-semibold font-mono">
            © {new Date().getFullYear()} Smit Parmar. Engineered with React & Tailwind CSS. All Rights Reserved.
          </p>

        </div>
      </footer>

      {/* 15 PROJECTS DYNAMIC IMMERSIVE MODAL VIEW */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-scale-up bg-white">
            
            {/* Header Area */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-gold-accent/10 via-emerald-accent/5 to-transparent border-b border-slate-100 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase text-gold-accent tracking-wider font-mono mb-2">
                  <span className="text-xl">{selectedProject.emoji}</span> IMMERSIVE CASE STUDY DEEP DIVE
                </div>
                <h3 className="font-outfit text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">{selectedProject.details.tagline}</p>
              </div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 active:scale-90 transition-all border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow space-y-6 text-sm md:text-base leading-relaxed text-slate-700 font-medium">
              
              {/* Challenge vs Resolution columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-200">
                  <div className="flex items-center gap-2 mb-3 text-red-600 font-black text-xs uppercase tracking-wider font-mono">
                    <AlertTriangle className="w-4.5 h-4.5" /> Operational Obstacle
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {selectedProject.details.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-3 text-emerald-600 font-black text-xs uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-4.5 h-4.5" /> Programmatic Resolution
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {selectedProject.details.solution}
                  </p>
                </div>
              </div>

              {/* Core Features list */}
              <div>
                <h4 className="text-xs font-black uppercase text-slate-800 tracking-widest font-mono mb-4 border-b border-slate-100 pb-2">
                  Key Technical Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {selectedProject.details.features.map((feat, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs md:text-sm text-slate-600">
                      <Check className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Stats Grid */}
              <div>
                <h4 className="text-xs font-black uppercase text-slate-800 tracking-widest font-mono mb-4 border-b border-slate-100 pb-2">
                  Efficiency & Performance Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.details.stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1">{stat.label}</div>
                      <div className="font-outfit text-xl md:text-2xl font-black text-slate-900 tracking-tight">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies summary */}
              <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6">
                <span className="text-[9px] font-black uppercase text-slate-400 font-mono tracking-widest mr-2">Orchestration Tools:</span>
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-bold text-emerald-accent bg-emerald-accent/5 border border-emerald-accent/15 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

            </div>

            {/* Footer Buttons Area */}
            <div className="p-6 md:p-8 border-t border-slate-100 bg-slate-50 flex flex-wrap gap-4 items-center justify-between">
              
              {/* Actual live demo links */}
              <a 
                href={selectedProject.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-accent to-emerald-accent text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Globe className="w-4 h-4" /> Visit Live Demo Link
              </a>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
