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
  Zap
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
  { name: 'Advanced Excel', level: 95, desc: 'Nested formulas, dynamic arrays, solver & data modeling' },
  { name: 'Dashboard Creation', level: 92, desc: 'Interactive KPI dashboards, dynamic slicers & advanced charting' },
  { name: 'MIS Reporting', level: 90, desc: 'Structured corporate reporting, periodic summaries & auditing' },
  { name: 'Pivot Tables & Charting', level: 95, desc: 'Consolidated source modeling, group trends & filters' },
  { name: 'VLOOKUP / XLOOKUP', level: 98, desc: 'Complex relational lookups, error-handling & matrix indexing' },
  { name: 'AI Tools Integration', level: 88, desc: 'Leveraging Claude, Gemini, ChatGPT for daily coding & writing' },
  { name: 'Prompt Engineering', level: 90, desc: 'Structured prompts, systemic instructions & custom models' },
  { name: 'Basic n8n Automation', level: 82, desc: 'Webhook triggers, API nodes, sheets sync & slack alerts' },
  { name: 'Power BI', level: 75, desc: 'Data modeling, DAX fundamentals & custom reports (Active Learning)' },
  { name: 'GitHub & Versioning', level: 80, desc: 'Repo management, branch pipelines & deployment hooks' }
]

// PROJECTS DATA
const PROJECTS = [
  {
    id: 'excel-sales',
    title: 'Excel Sales Dashboard',
    subtitle: 'Interactive Multi-Region Sales Intelligence',
    emoji: '📊',
    shortDesc: 'Consolidates multi-region store transactions into an interactive, visual sales intelligence hub with dynamic dynamic slicers and charts.',
    tools: ['Excel', 'Pivot Tables', 'XLOOKUP', 'Dynamic Charts', 'Data Validation'],
    githubUrl: 'https://github.com/Smart123-12',
    demoUrl: '#',
    caseStudy: {
      problem: 'The regional sales managers consolidated weekly spreadsheets manually, taking over 6 hours per week. This resulted in frequent copy-paste errors, broken formulas, and slow corporate decision-making cycles.',
      solution: 'Designed an fully automated Excel data ingestion pipe. Using advanced nested formulas, named ranges, and conditional formatting, the sheet compiles records automatically into a sleek, visual dashboard.',
      features: [
        'Dynamic Region & Category Filters using interactive slicers',
        'Automatic Top-Performing Product ranking lists',
        'Visual heatmaps utilizing conditional formatting for outlier identification',
        'Auto-updating trend lines and KPI cards for gross margins'
      ],
      stats: [
        { label: 'Time Saved', val: '95%' },
        { label: 'Refresh Time', val: '< 1 min' },
        { label: 'Formula Errors', val: '0' }
      ]
    }
  },
  {
    id: 'inventory-mis',
    title: 'Inventory MIS Report',
    subtitle: 'Automated Operations & Supply Forecasting',
    emoji: '🏭',
    shortDesc: 'Corporate replenishment workbook calculating inventory safety metrics, monthly turnover ratios, and automated reorder point alerts.',
    tools: ['Advanced Excel', 'Conditional Formatting', 'Data Auditing', 'MIS Reporting'],
    githubUrl: 'https://github.com/Smart123-12',
    demoUrl: '#',
    caseStudy: {
      problem: 'Critical raw materials dipped below safety stock parameters causing sudden halts in production schedules, while overstocked goods unnecessarily locked up operating cash flow.',
      solution: 'Developed an automated Inventory Management and Replenishment MIS workbook containing safety stock matrices and automated visual alerts.',
      features: [
        'Automatic Reorder Alert warnings when stock dips below defined limits',
        'Monthly inventory turnover ratio and velocity performance charts',
        'Structured supplier data verification checks to prevent manual intake errors',
        'Dynamic vendor lead-time estimation tables'
      ],
      stats: [
        { label: 'Stockouts', val: '0' },
        { label: 'Holding Cost', val: '-18%' },
        { label: 'Accuracy Rate', val: '100%' }
      ]
    }
  },
  {
    id: 'ai-researcher',
    title: 'AI Research Assistant',
    subtitle: 'Systemic LLM Report Generator & Summarizer',
    emoji: '🤖',
    shortDesc: 'Prompt-engineered analytical pipeline that ingests raw documents, performs structural audits, and generates custom executive summaries.',
    tools: ['AI Prompts', 'Claude / Gemini', 'Workflow Structure', 'Content Prep'],
    githubUrl: 'https://github.com/Smart123-12',
    demoUrl: '#',
    caseStudy: {
      problem: 'Manually reading, extracting, and formatting 40-page market intelligence PDF files took freelancers hours of research, leading to inconsistent reports.',
      solution: 'Constructed an advanced, prompt-engineered pipeline using system prompts and custom models. Ingests unstructured logs, executes deep content analysis, and exports structured files.',
      features: [
        'Structured system prompts targeting specific analytical constraints',
        'Automatic citation checks to cross-reference quantitative claims',
        'Tabular formatting conversions for clean CSV/Excel database uploads',
        'Optimized custom instruction sets for professional narrative tones'
      ],
      stats: [
        { label: 'Research Speed', val: '8x Faster' },
        { label: 'Synthesized Data', val: '100%' },
        { label: 'Output Bias', val: '0%' }
      ]
    }
  },
  {
    id: 'n8n-workflow',
    title: 'n8n Workflow Automation',
    subtitle: 'Active Webhook & API Business Router',
    emoji: '⚡',
    shortDesc: 'SaaS automation flow connecting online lead triggers to Google Sheets, sending custom Slack notification blocks and automatic Gmail drafts.',
    tools: ['n8n', 'Webhooks', 'Google Sheets API', 'Slack API', 'Automation'],
    githubUrl: 'https://github.com/Smart123-12',
    demoUrl: '#',
    caseStudy: {
      problem: 'Incoming customer inquiries sat unassigned for hours in a cluttered inbox, causing a high lead drop-off rate due to slow team response times.',
      solution: 'Built and hosted an autonomous n8n workflow. Incoming webhooks instantly trigger lead qualification, spreadsheet routing, and notify supervisors in real-time.',
      features: [
        'Multi-branch qualification conditional routing trees',
        'Automatic Slack message block updates showing client budget indicators',
        'Instant automated personalized email responder drafts',
        'Robust webhook fallbacks in case of external API timeouts'
      ],
      stats: [
        { label: 'Lead Routing', val: '< 10 sec' },
        { label: 'Form Processing', val: '100%' },
        { label: 'Manual Entry', val: 'Eliminated' }
      ]
    }
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning Project',
    subtitle: 'Automated Record Normalization & Sanitization',
    emoji: '🧹',
    shortDesc: 'Excel Power Query workflow sanitizing 10k+ rows of unformatted CRM customer directories, removing duplicates, and standardizing schemas.',
    tools: ['Power Query', 'Data Sanitization', 'Excel Formulas', 'Regex Parsing'],
    githubUrl: 'https://github.com/Smart123-12',
    demoUrl: '#',
    caseStudy: {
      problem: 'A database of 10,000+ client transactions arrived corrupted with duplicate phone tags, missing region categories, inconsistent formatting, and invalid character hashes.',
      solution: 'Created an audit script and a reproducible Power Query sanitization funnel. The model cleanses, formats, parses, and normalizes rows with zero manual cell editing.',
      features: [
        'Auto-removal of duplicate records using custom key combinations',
        'Text formula sanitization layers extracting emails from unstructured remarks',
        'Automated local region classification tagging using postcode arrays',
        'Standardization of country codes and telephone schemas'
      ],
      stats: [
        { label: 'Sanitized Rows', val: '10,000+' },
        { label: 'Schema Audit', val: 'Passed' },
        { label: 'Manual Fixes', val: 'None' }
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

  // Live CSS Component Mockups to draw in cards instead of static image placeholders
  const renderProjectVisual = (projectId) => {
    switch (projectId) {
      case 'excel-sales':
        return (
          <div className="w-full h-44 bg-slate-950/60 rounded-t-xl border-b border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[9px] text-emerald-400">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1 font-semibold text-white text-[10px]">
                <FileSpreadsheet className="w-3 h-3 text-emerald-500" /> SALES_INTELLIGENCE_2026.xlsx
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[8px] animate-pulse">LIVE REFRESH</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">
                <div className="text-white/40 text-[7px] uppercase">GTV Sales</div>
                <div className="text-[11px] font-bold text-amber-400">₹8,42,900</div>
                <div className="text-[7px] text-emerald-500">+14.2% MoM</div>
              </div>
              <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">
                <div className="text-white/40 text-[7px] uppercase">Active Region</div>
                <div className="text-[11px] font-bold text-cyan-400">West India</div>
                <div className="text-[7px] text-emerald-500">GIDC Clusters</div>
              </div>
              <div className="p-1.5 rounded bg-white/5 border border-white/5 text-center">
                <div className="text-white/40 text-[7px] uppercase">Net Margin</div>
                <div className="text-[11px] font-bold text-emerald-400">22.8%</div>
                <div className="text-[7px] text-emerald-500">Above Target</div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-1 h-14 mt-1 border-t border-white/5 pt-2">
              <span className="text-[7px] text-white/30 self-center">Monthly Slicer:</span>
              <div className="flex items-end gap-1.5 h-full w-[160px] justify-end">
                <div className="w-4 bg-emerald-500/30 rounded-t h-[40%] flex items-center justify-center text-[6px] text-white/80">Jan</div>
                <div className="w-4 bg-emerald-500/50 rounded-t h-[65%] flex items-center justify-center text-[6px] text-white/80">Feb</div>
                <div className="w-4 bg-emerald-500/80 rounded-t h-[85%] flex items-center justify-center text-[6px] text-white/80 font-bold border-t border-emerald-300">Mar</div>
                <div className="w-4 bg-emerald-400 rounded-t h-[95%] flex items-center justify-center text-[6px] text-slate-950 font-bold border-t-2 border-white">Apr</div>
              </div>
            </div>
          </div>
        )
      case 'inventory-mis':
        return (
          <div className="w-full h-44 bg-slate-950/60 rounded-t-xl border-b border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[9px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1 font-semibold text-white text-[10px]">
                <BarChart3 className="w-3 h-3 text-amber-500" /> INVENTORY_MIS_RUN.xlsx
              </span>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-red-400 text-[8px] font-bold uppercase">Low Stock Triggered</span>
              </div>
            </div>

            <div className="space-y-1.5 my-2.5">
              <div className="flex justify-between items-center bg-white/5 p-1 rounded border border-white/5">
                <span className="text-white/60">SKU-4929 polymer_granules</span>
                <div className="flex items-center gap-2">
                  <div className="w-14 bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-red-500 h-full w-[20%]"></div>
                  </div>
                  <span className="text-red-400 font-semibold text-[8px]">20% (REORDER)</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-white/5 p-1 rounded border border-white/5">
                <span className="text-white/60">SKU-8022 chemical_binders</span>
                <div className="flex items-center gap-2">
                  <div className="w-14 bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[85%]"></div>
                  </div>
                  <span className="text-emerald-400 font-semibold text-[8px]">85% (OPTIMAL)</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-white/5 p-1 rounded border border-white/5">
                <span className="text-white/60">SKU-1122 organic_colors</span>
                <div className="flex items-center gap-2">
                  <div className="w-14 bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-amber-400 h-full w-[45%]"></div>
                  </div>
                  <span className="text-amber-400 font-semibold text-[8px]">45% (WARNING)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-1.5 text-[8px] text-white/40">
              <span>Safety Stock Factor: <strong className="text-white">1.25x</strong></span>
              <span>Reorder Automation: <strong className="text-emerald-400">ENABLED</strong></span>
            </div>
          </div>
        )
      case 'ai-researcher':
        return (
          <div className="w-full h-44 bg-slate-950/60 rounded-t-xl border-b border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[9px] text-cyan-400">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1 font-semibold text-white text-[10px]">
                <Cpu className="w-3 h-3 text-cyan-400" /> AI_ANALYST_AGENT
              </span>
              <span className="text-cyan-300/60 text-[8px]">SYSTEM READY</span>
            </div>

            <div className="space-y-2 flex-grow overflow-y-auto mt-2 text-[8.5px]">
              <div className="flex items-start gap-1.5">
                <div className="bg-white/10 p-0.5 rounded text-white text-[7px] mt-0.5">USER</div>
                <div className="bg-white/5 p-1 rounded border border-white/5 text-white/80 max-w-[85%] leading-snug">
                  Analyze and summarize chemical safety report sheet...
                </div>
              </div>

              <div className="flex items-start gap-1.5">
                <div className="bg-cyan-500/20 p-0.5 rounded text-cyan-400 text-[7px] mt-0.5">AGENT</div>
                <div className="bg-cyan-500/10 p-1 rounded border border-cyan-500/20 text-cyan-300 max-w-[85%] leading-snug">
                  <span className="font-bold">Summary:</span> Extracted 4 risks. Outliers detected in GIDC Unit 4 chemical pH index level. <span className="underline">PDF-Report.pdf [L12]</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 border-t border-white/5 pt-1 text-[7.5px] text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
              <span>Gemini 1.5 Pro | Prompt Temperature: 0.15</span>
            </div>
          </div>
        )
      case 'n8n-workflow':
        return (
          <div className="w-full h-44 bg-slate-950/60 rounded-t-xl border-b border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[9px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1 font-semibold text-white text-[10px]">
                <Zap className="w-3 h-3 text-amber-400" /> n8n WORKFLOW ENGINE
              </span>
              <span className="text-emerald-400 text-[8px] font-bold">ACTIVE RUNNING</span>
            </div>

            <div className="flex items-center justify-center gap-2 h-24 my-1">
              <div className="flex flex-col items-center p-1 rounded bg-white/5 border border-white/10 text-center w-14">
                <div className="text-[12px]">🔗</div>
                <div className="text-[7px] text-white font-semibold">Web Hook</div>
                <div className="text-[6px] text-emerald-400">Triggered</div>
              </div>

              <div className="h-0.5 w-4 bg-emerald-500 relative flex items-center">
                <div className="absolute right-0 w-1 h-1 rounded-full bg-white animate-ping"></div>
              </div>

              <div className="flex flex-col items-center p-1 rounded bg-white/5 border border-white/10 text-center w-14 border-amber-500/30">
                <div className="text-[12px]">🤖</div>
                <div className="text-[7px] text-white font-semibold">AI Parse</div>
                <div className="text-[6px] text-cyan-400">Complete</div>
              </div>

              <div className="h-0.5 w-4 bg-emerald-500 relative flex items-center">
                <div className="absolute right-0 w-1 h-1 rounded-full bg-white animate-ping"></div>
              </div>

              <div className="flex flex-col items-center p-1 rounded bg-white/5 border border-white/10 text-center w-14">
                <div className="text-[12px]">💬</div>
                <div className="text-[7px] text-white font-semibold">Slack Bot</div>
                <div className="text-[6px] text-emerald-400">Alerted</div>
              </div>
            </div>

            <div className="flex justify-between text-[7px] text-white/30 border-t border-white/5 pt-1.5">
              <span>Next Execute: <strong className="text-white">On Lead Webhook</strong></span>
              <span>Error Fallback: <strong className="text-amber-400">Active</strong></span>
            </div>
          </div>
        )
      case 'data-cleaning':
        return (
          <div className="w-full h-44 bg-slate-950/60 rounded-t-xl border-b border-white/5 relative overflow-hidden flex flex-col justify-between p-3 font-mono text-[9px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1 font-semibold text-white text-[10px]">
                <Database className="w-3 h-3 text-cyan-500" /> POWER_QUERY_CLEANER.pkg
              </span>
              <span className="text-emerald-400 text-[8px] font-bold">10k+ ROWS SANITIZED</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2 text-[7.5px] h-20 items-center">
              <div className="p-1 rounded bg-red-950/40 border border-red-500/20 text-red-300">
                <div className="font-bold uppercase text-[6px] text-red-400 pb-0.5 border-b border-red-500/10">Dirty Input Sample</div>
                <div className="truncate mt-1">"smit. parmar @gmail"</div>
                <div className="truncate">"phone: +9184888--09"</div>
                <div className="truncate">"ID: #092 (DUPLICATE)"</div>
              </div>
              
              <div className="p-1 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300">
                <div className="font-bold uppercase text-[6px] text-emerald-400 pb-0.5 border-b border-emerald-500/10">Cleaned & Formatted</div>
                <div className="truncate mt-1">"tattvayan.ai@gmail.com"</div>
                <div className="truncate">"+91 84888 09478"</div>
                <div className="truncate">"ID: #092 (MERGED)"</div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[7px] text-white/30 border-t border-white/5 pt-1">
              <span>Duplication Rate: <strong className="text-red-400">12% Deduplicated</strong></span>
              <span>Validation Schema: <strong className="text-emerald-400">ISO Standard</strong></span>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-obsidian-deep text-white selection:bg-gold-accent/25 selection:text-white overflow-x-hidden font-sans relative antialiased">
      
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-accent/10 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-accent/5 rounded-full blur-[80px] -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-gold-accent/5 rounded-full blur-[120px] -z-10 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* HEADER / NAVBAR */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg md:text-xl tracking-tight text-white hover:opacity-90 group font-outfit">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-accent to-emerald-accent text-slate-950 flex items-center justify-center font-extrabold text-sm shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
              SP
            </span>
            Smit Parmar
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((sec) => (
              <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:text-gold-accent transition-colors duration-200 py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-gold-accent after:to-emerald-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                {sec}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="#contact" className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent text-slate-950 shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0 active:scale-100 transition-all duration-300">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/5 active:scale-95 transition-all">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full inset-x-0 glass-nav py-6 px-5 border-b border-white/5 shadow-2xl flex flex-col gap-4 animate-fade-in">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((sec) => (
              <a key={sec} href={`#${sec.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-gold-accent font-medium py-2 border-b border-white/5 transition-colors">
                {sec}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2">
              <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white">
                <Github className="w-5 h-5" /> @Smart123-12
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-5 py-2 rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent text-slate-950 text-xs font-bold uppercase">
                Contact Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-accent/8 border border-emerald-accent/20 text-emerald-accent font-bold text-xs uppercase tracking-wider mb-6 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" /> Open for Freelance & Recruiter Projects
            </div>

            <h1 className="font-outfit text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Hi, I’m <span className="text-gradient-gold-emerald">Smit Parmar</span> 👋
            </h1>

            <h2 className="text-lg md:text-2xl font-semibold tracking-wide text-slate-300 mb-5 font-outfit uppercase">
              AI Builder | MIS Executive & Automation | Freelancer
            </h2>

            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
              I build AI-powered solutions, dashboards, and workflow automation using AI tools, Excel, and no-code platforms. Specialize in connecting business operations to high-efficiency automated systems.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-accent to-emerald-accent text-slate-950 font-bold hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-accent hover:text-gold-accent transition-all duration-300">
                Contact Me
              </a>
              <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Hero Achievements */}
            <div className="grid grid-cols-3 gap-6 md:gap-10 mt-12 border-t border-white/5 pt-8 w-full max-w-md">
              <div className="text-center md:text-left">
                <div className="font-outfit text-2xl md:text-3xl font-extrabold text-white">95%+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Automation Rate</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-outfit text-2xl md:text-3xl font-extrabold text-white">10k+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Cleaned Rows</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-outfit text-2xl md:text-3xl font-extrabold text-white">n8n</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-1">Flow Orchestrator</div>
              </div>
            </div>
          </div>

          {/* Right Image/Cyber Deck Column */}
          <div className="md:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-96 md:w-80 md:h-[420px] rounded-3xl p-1 bg-gradient-to-br from-gold-accent/40 via-white/5 to-emerald-accent/40 shadow-2xl shadow-emerald-500/5 animate-float">
              
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-accent/20 to-transparent blur-xl opacity-30 -z-10" />

              <div className="w-full h-full rounded-[20px] overflow-hidden bg-obsidian-medium relative">
                <img src={smitPhoto} alt="Smit Parmar - AI Builder & MIS Executive" className="w-full h-full object-cover grayscale brightness-90 contrast-105" />
                
                {/* Cyberpunk Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-white/5" />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-6 top-16 px-4 py-2.5 rounded-2xl glass-card border-l-2 border-l-emerald-accent flex items-center gap-3 animate-float-slow shadow-xl">
                <span className="text-xl">🚀</span>
                <div>
                  <div className="text-xs font-bold text-white">MIS Executive</div>
                  <div className="text-[9px] text-slate-400">Advanced Analytics</div>
                </div>
              </div>

              <div className="absolute -left-6 bottom-16 px-4 py-2.5 rounded-2xl glass-card border-l-2 border-l-gold-accent flex items-center gap-3 animate-float-delayed shadow-xl">
                <span className="text-xl">🤖</span>
                <div>
                  <div className="text-xs font-bold text-white">AI Builder</div>
                  <div className="text-[9px] text-slate-400">Prompt Automator</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-white/5 bg-obsidian-medium/40">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Symmetrical Left Column - Profile Portrait */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl p-0.5 bg-gradient-to-tr from-emerald-accent/20 to-gold-accent/20">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-obsidian-medium">
                <img src={photo3} alt="Smit Parmar" className="w-full h-full object-cover brightness-95" />
              </div>
              <div className="absolute -bottom-4 right-4 px-4 py-2 bg-emerald-accent text-slate-950 rounded-xl text-xs font-black uppercase shadow-lg shadow-emerald-500/20">
                100% Practical grit
              </div>
            </div>
          </div>

          {/* Right Column - Text Details */}
          <div className="md:col-span-7 flex flex-col">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">My Narrative</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-6">
              Empowering Operations With <span className="text-gradient-gold-emerald">AI & Automated Systems</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
              <p>
                My background is grounded in practical grit, rather than a conventional IT degree. This is a deliberate advantage. Instead of coding simple modules from scratch, I leverage bleeding-edge <strong className="text-white">AI models</strong>, robust <strong className="text-white">n8n workflows</strong>, and optimized <strong className="text-white">Advanced Excel</strong> configurations to build, validate, and deploy solutions in a fraction of the traditional timeframe.
              </p>
              <p>
                As an active <strong className="text-white">MIS Executive and Automation Professional</strong>, I understand that data only delivers value when it is structured, clean, and immediately actionable. I specialize in parsing massive datasets, implementing strict dynamic calculations, and structuring customized intelligence dashboards.
              </p>
              <p>
                My <strong className="text-gradient-gold-emerald">Data Analytics learning journey</strong> is an active, continuous pursuit. Currently, I am deepening my proficiency in <strong className="text-white">Power BI</strong> and relational modeling to further translate raw database clusters into strategic, executive-level business decisions.
              </p>
            </div>

            {/* highlights mini grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">MIS Excellence</h4>
                  <p className="text-[11px] text-slate-400">Structured reporting pipelines and auto-refresh schemas.</p>
                </div>
              </div>
              
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">AI Prompt Strategy</h4>
                  <p className="text-[11px] text-slate-400">Prompt engineering for systemic summarization & auditing.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">My Toolkit</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Tools That <span className="text-gradient-gold-emerald">Multiply Efficiency</span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              A carefully structured set of operational, statistical, and automation skills designed to ship results, reduce overhead, and scale outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {SKILLS.map((sk, idx) => (
              <div key={idx} className="p-5 rounded-2xl glass-card relative group overflow-hidden">
                
                {/* Micro hovering lighting effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white leading-tight group-hover:text-gold-accent transition-colors">
                      {sk.name}
                    </h3>
                    <p className="text-[10px] text-slate-500 mt-1">{sk.desc}</p>
                  </div>
                  <span className="text-xs font-black font-mono text-emerald-accent">{sk.level}%</span>
                </div>

                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5 p-0.5">
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-white/5 bg-obsidian-medium/40">
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">Realized Case Studies</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white">
                Engineered Solutions, <span className="text-gradient-gold-emerald">Measurable Impact</span>
              </h2>
            </div>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2.5">
              {['ALL', 'EXCEL', 'AUTOMATION', 'AI'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-gold-accent to-emerald-accent text-slate-950 border-transparent shadow-lg shadow-emerald-500/10'
                      : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.filter(p => {
              if (activeTab === 'ALL') return true
              if (activeTab === 'EXCEL') return p.title.toLowerCase().includes('excel') || p.title.toLowerCase().includes('inventory') || p.title.toLowerCase().includes('cleaning')
              if (activeTab === 'AUTOMATION') return p.title.toLowerCase().includes('n8n') || p.title.toLowerCase().includes('cleaning')
              if (activeTab === 'AI') return p.title.toLowerCase().includes('ai')
              return true
            }).map((proj) => (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group flex flex-col rounded-2xl glass-card overflow-hidden hover:scale-[1.01] cursor-pointer"
              >
                {/* Interactive Dynamic Mockup instead of screenshot placeholder */}
                {renderProjectVisual(proj.id)}

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{proj.emoji}</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 font-mono">Case Study</span>
                    </div>

                    <h3 className="font-outfit text-base md:text-lg font-bold text-white group-hover:text-gold-accent transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold mb-4">{proj.subtitle}</p>

                    <p className="text-xs text-slate-400 line-clamp-3 mb-5 leading-relaxed">
                      {proj.shortDesc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tools.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-0.5 text-[9px] font-bold text-slate-300 bg-white/5 border border-white/5 rounded-full">
                          {t}
                        </span>
                      ))}
                      {proj.tools.length > 3 && (
                        <span className="px-2 py-0.5 text-[9px] font-bold text-emerald-accent bg-emerald-accent/5 border border-emerald-accent/10 rounded-full">
                          +{proj.tools.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-xs font-bold text-emerald-accent gap-1 group-hover:gap-2 transition-all">
                      Read Full Deep Dive <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto w-full">
          
          <div className="text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">My Commitment</span>
            <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Journey
            </h2>
          </div>

          <div className="space-y-12">
            
            {/* Main Title Block Card */}
            <div className="p-6 md:p-8 rounded-2xl glass-card border-l-4 border-l-emerald-accent relative">
              <div className="absolute top-6 right-6 text-2xl animate-pulse">⚡</div>
              
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase font-mono">
                Active Position
              </span>

              <h3 className="font-outfit text-xl md:text-2xl font-black text-white mt-4 mb-2">
                AI Builder | MIS Executive & Automation | Freelancer
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold mb-6">
                <MapPin className="w-3.5 h-3.5 text-gold-accent" /> Gujarat, India (Remote & Hybrid availability)
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Actively managing end-to-end executive reporting frameworks, structuring custom dynamic dashboards, and implementing autonomous AI pipelines to save client work hours. Operating at the intersections of structural operational databases and smart generative model parameters.
              </p>

              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3.5">Primary Directives:</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
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
                  <span>Deepening skills in <strong className="text-white">Data Analytics</strong> pipelines (Power BI, DAX, relational schema optimization).</span>
                </li>
              </ul>
            </div>

            {/* Learning Roadmap Flow */}
            <div className="relative pl-8 timeline-item">
              <div className="absolute left-[17px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-accent shadow-md shadow-amber-500/40" />
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase text-gold-accent font-mono">Learning Phase</span>
                <span className="text-[10px] text-slate-500 font-bold">• Active Journey</span>
              </div>

              <h4 className="font-outfit text-sm md:text-base font-bold text-white mb-2">
                Advanced Data Analytics & Power BI Relational Modeling
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                Deepening knowledge of structured SQL database extraction patterns and visual DAX metrics in Power BI. Transitioning clean spreadsheet datasets into live, cloud-hosted enterprise intelligence models.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 md:py-28 relative px-4 md:px-6 border-t border-white/5 bg-obsidian-medium/40">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Contact Details Left */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-accent mb-3 font-mono">Initiate Pipeline</span>
              <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build <span className="text-gradient-gold-emerald">Something Incredible</span>
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm">
                Have a convoluted business spreadsheet that needs automated parsing, or a manual workspace workflow requiring prompt strategy and n8n? Get in touch and let's optimize your operations together.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-emerald-accent/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-emerald-accent/10 border border-emerald-accent/20 flex items-center justify-center text-emerald-accent">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Direct Email</div>
                  <a href="mailto:tattvayan.ai@gmail.com" className="text-sm font-bold text-white hover:text-gold-accent transition-colors">
                    tattvayan.ai@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-emerald-accent/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center text-gold-accent">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase text-slate-500 tracking-wider">Location</div>
                  <span className="text-sm font-bold text-white">Gujarat, India (IST timezone)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
              <a href="https://github.com/Smart123-12" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-accent/10 hover:border-emerald-accent/20 text-slate-300 hover:text-emerald-accent transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-gold-accent/10 hover:border-gold-accent/20 text-slate-300 hover:text-gold-accent transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form Card Right */}
          <div className="md:col-span-7">
            <div className="p-6 md:p-8 rounded-3xl glass-card relative overflow-hidden">
              
              {contactSubmitted && (
                <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                  <span className="text-5xl mb-4">🎉</span>
                  <h3 className="font-outfit text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                    Thank you for reaching out, Smit. Your data packet has been logged. I will review and reply within 24 hours.
                  </p>
                </div>
              )}

              <h3 className="font-outfit text-lg md:text-xl font-bold text-white mb-6">Send A Dynamic Packet</h3>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2 font-mono">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Recruiter / Business Lead"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-accent focus:bg-slate-950/90 text-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2 font-mono">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="your.address@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-accent focus:bg-slate-950/90 text-sm transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-wider text-slate-500 mb-2 font-mono">Message / Requirement Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Specify spreadsheet errors, required dashboards, or operational automation tasks..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-white/5 text-white placeholder-slate-600 focus:outline-none focus:border-emerald-accent focus:bg-slate-950/90 text-sm transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-gold-accent to-emerald-accent text-slate-950 font-bold text-sm tracking-wide uppercase hover:shadow-lg hover:shadow-emerald-500/10 active:scale-99 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Transmit Packet <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 md:px-6 border-t border-white/5 bg-slate-950/80">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2.5 font-bold tracking-tight text-white font-outfit text-base">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-gold-accent to-emerald-accent text-slate-950 flex items-center justify-center font-extrabold text-xs">
                SP
              </span>
              Smit Parmar
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-2 font-semibold">
              AI Builder | MIS Executive & Automation | Freelancer
            </p>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Smit Parmar. Engineered with React & Tailwind CSS. All Rights Reserved.
          </p>

        </div>
      </footer>

      {/* CASE STUDY IMMERSIVE OVERLAY MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-obsidian-deep/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl glass-card rounded-3xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-scale-up">
            
            {/* Header Area */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-indigo-accent/15 via-emerald-accent/5 to-transparent border-b border-white/5 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase text-gold-accent tracking-wider font-mono mb-2">
                  <span className="text-xl">{selectedProject.emoji}</span> IMMERSIVE CASE STUDY DEEP DIVE
                </div>
                <h3 className="font-outfit text-2xl md:text-3xl font-black text-white leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400 font-semibold mt-1">{selectedProject.subtitle}</p>
              </div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 active:scale-90 transition-all border border-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow space-y-8 text-sm md:text-base leading-relaxed text-slate-300">
              
              {/* Challenge vs Resolution columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/15">
                  <div className="flex items-center gap-2 mb-3 text-red-400 font-bold text-xs uppercase tracking-wider font-mono">
                    <AlertTriangle className="w-4.5 h-4.5" /> Operational Obstacle
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/15">
                  <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-4.5 h-4.5" /> Programmatic Resolution
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Core Features list */}
              <div>
                <h4 className="text-xs font-black uppercase text-white tracking-widest font-mono mb-4 border-b border-white/5 pb-2">
                  Key Technical Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {selectedProject.caseStudy.features.map((feat, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs md:text-sm text-slate-400">
                      <Check className="w-4 h-4 text-emerald-accent flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Stats Grid */}
              <div>
                <h4 className="text-xs font-black uppercase text-white tracking-widest font-mono mb-4 border-b border-white/5 pb-2">
                  Efficiency & Performance Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedProject.caseStudy.stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">{stat.label}</div>
                      <div className="font-outfit text-xl md:text-2xl font-black text-white tracking-tight">{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies summary */}
              <div className="flex flex-wrap items-center gap-2 border-t border-white/5 pt-6">
                <span className="text-[10px] font-black uppercase text-slate-500 font-mono tracking-widest mr-2">Orchestration Tools:</span>
                {selectedProject.tools.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-bold text-emerald-accent bg-emerald-accent/5 border border-emerald-accent/15 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

            </div>

            {/* Footer Buttons Area */}
            <div className="p-6 md:p-8 border-t border-white/5 bg-slate-950/60 flex flex-wrap gap-4 items-center justify-between">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-accent hover:text-gold-accent transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> View Git Code Repository
              </a>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  Close Case Study
                </button>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-accent to-emerald-accent text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
                >
                  Ask About This Project
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
