/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  ArrowUpRight,
  Code2, 
  Cloud, 
  Users2, 
  Zap, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronDown,
  Monitor,
  Layout,
  Server,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Types ---
interface Skill {
  name: string;
  category: "Product Strategy" | "Technology" | "Leadership";
}

interface Project {
  title: string;
  shortName: string;
  oneSentenceImpact: string;
  role: string;
  impact: string;
  tags: string[];
  image: string;
}

// --- Data ---
const SKILLS: Skill[] = [
  { name: "Product Roadmapping (PLG)", category: "Product Strategy" },
  { name: "API-First & Microservices", category: "Technology" },
  { name: "Agentic AI Governance", category: "Product Strategy" },
  { name: "AWS & Cloud Migration", category: "Technology" },
  { name: "Cross-functional Mentorship", category: "Leadership" },
  { name: "Enterprise Workflow Automation", category: "Product Strategy" },
  { name: "Data Driven Decision Making", category: "Technology" },
  { name: "Outcome Based OKRs", category: "Leadership" },
  { name: "Strategic Planning", category: "Leadership" },
];

const PROJECTS: Project[] = [
  {
    title: "Current Era: Strategic AI & Agentic Orchestration",
    shortName: "AGENTIC",
    oneSentenceImpact: "Strategizing the integration of autonomous agent pilots into secure, high-compliance enterprise blueprints.",
    role: "Principal PM, AI Strategy",
    impact: "Building agentic pilots for autonomous agents with a focus on data dependency and cost-to-value trade-offs. Drafting the 'Strategy in Motion' blueprint to operationalize Agentic AI within high-compliance enterprise environments.",
    tags: ["Agentic AI", "AI Governance", "Secure Automation", "Strategic Roadmap"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Innovation Era: Product Creation & Consumer Services",
    shortName: "INNOVATION",
    oneSentenceImpact: "Spearheading specialized physiological data visualizations to drive measurable innovation in biometric design.",
    role: "Principal Product Manager",
    impact: "Scaling global biomechanical running insights and predictive engines. Synthesizing the technical strategy for physiological body maps, driving innovation in product creation and design through specialized visualizations.",
    tags: ["Product Innovation", "Biomechanical", "Design Engine", "Data Viz"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Scale Era: Enterprise Platforms & Digital Core",
    shortName: "SCALE",
    oneSentenceImpact: "Orchestrating the evolution of legacy supply chains into a unified, cloud-native digital core with 12x faster release velocity.",
    role: "Principal Product Manager",
    impact: "Orchestrating the 'Single Source of Truth' digital core for 3,000+ users. Modernizing fragmented legacy systems into a unified cloud-native platform, streamlining manufacturing and product creation across the global digital thread.",
    tags: ["Enterprise SaaS", "Digital Thread", "Modernization", "Operational Excellence"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Global Era: Multi-Region Ecommerce Orchestration",
    shortName: "GLOBAL",
    oneSentenceImpact: "Scaling a multi-billion dollar D2C platform across 5 global regions with 99.99% availability.",
    role: "Principal Product Manager",
    impact: "Engineering the strategic roadmap for ecommerce expansion across China, Japan, and the EU. Scaling architecture to support 500%+ traffic growth while maintaining 99.99% availability for a multi-billion dollar platform.",
    tags: ["Global Scale", "Localization", "Multi-Billion ARR", "Strategic Execution"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Foundational Era: SEO, Global B2B & Wholesale Digitization",
    shortName: "FOUNDATIONS",
    oneSentenceImpact: "Architecting the digital commerce infrastructure for global wholesale and multi-billion dollar B2C expansion.",
    role: "Principal Product Manager",
    impact: "Digitizing global wholesale partner operations via Nike's first internet-based B2B commerce platforms and building the foundational catalog data layers. Transitioning to responsive design and spearheading early SEO and mobile site/app foundations.",
    tags: ["B2B & B2C", "Wholesale Digital", "SEO Strategy", "Product Foundations"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
];

// --- Components ---

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-slate-900 font-sans">
          <div className="font-mono font-bold text-lg tracking-tighter">
            SUNITHA<span className="text-slate-400">.N</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest items-center">
            <a href="#about" className="hover:text-slate-500 transition-colors">About</a>
            <a href="#expertise" className="hover:text-slate-500 transition-colors">Expertise</a>
            <a href="#impact" className="hover:text-slate-500 transition-colors">Impact</a>
            <a 
              href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-slate-500 transition-colors"
            >
              Resume
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all active:scale-95 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">
              Contact
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-2xl font-bold tracking-tight">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
            <a href="#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a>
            <a 
              href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
            <a href="#contact" className="text-slate-400" onClick={() => setMobileMenuOpen(false)}>Hire Me</a>
            
            <div className="pt-12 border-t border-slate-100 flex gap-6">
              <a href="http://linkedin.com/in/nsunitha" target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6" /></a>
              <a href="mailto:sunitha.n@gmail.com"><Mail className="w-6 h-6" /></a>
              <Github className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-slate-900 selection:text-white overflow-x-hidden text-slate-900">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 px-6">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -right-1/10 w-[600px] h-[600px] bg-slate-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -left-1/10 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[120px]" />
          <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:max-w-4xl"
          >
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1">
                <div id="about" className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Principal Technical Product Manager
                </div>
                
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-10">
                  Orchestrating <br />
                  <span className="text-slate-600">Strategy</span> with <br className="hidden sm:block" />
                  Execution.
                </h1>
                
                <p className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-12 font-medium">
                  Scaling global enterprise platforms from concept to production through the precision orchestration of technical depth and product strategy. 
                  Driving measurable architectural impact and operational excellence at $1B+ scale.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <a 
                    href="#impact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all group"
                  >
                    Impact Gallery
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-5 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-slate-900 hover:bg-slate-50 transition-all font-sans"
                  >
                    Start Conversation
                  </a>
                </div>

                <div className="flex items-center gap-10 text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                  <div className="flex gap-2 items-center"><span className="text-slate-900">01</span> PRODUCT</div>
                  <div className="flex gap-2 items-center"><span className="text-slate-900">02</span> LEADERSHIP</div>
                  <div className="flex gap-2 items-center"><span className="text-slate-900">03</span> SCALE</div>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic Leadership Visual"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Technical Leadership</div>
                    <div className="text-2xl font-bold tracking-tight">Orchestrating Complex Systems</div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-900 rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-slate-200 rounded-3xl -z-10" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-300 animate-bounce">
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Stats/Value Prop Bar */}
      <section className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12 text-center md:text-left relative z-10">
          {[
            { label: "Global Platform Scale", value: "$1B+ ARR" },
            { label: "Market Traffic Growth", value: "500%+" },
            { label: "Global Localization", value: "15+ Lang" },
            { label: "Operational Regions", value: "5 Zones" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col min-w-[200px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-2">{stat.label}</span>
              <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 md:py-32 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div>
              <div className="inline-block py-1 pr-6 border-r border-slate-900 mb-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Core Value</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Builder of Things <br/>That Matter.</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                I thrive where the problem space is ambiguous and the technical lift is steep. 
                I don’t just build products; I build teams that care.
              </p>
              
              <div className="space-y-4 mb-12">
                {[
                  { icon: Users2, title: "Relational Leadership", desc: "Mentored 30+ women in tech, viewing leadership as the orchestration of inclusive human systems." },
                  { icon: Zap, title: "The Synthesis Engine", desc: "Distilling complex technical systems into actionable strategic paths and roadmaps." },
                  { icon: Cloud, title: "Technical Fluency", desc: "Deep engineering roots allowing for seamless collaboration across dev, design, and business." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100 items-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-900 flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Education & Certification</h4>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="font-bold text-sm mb-1">M.S. Engineering & Tech</div>
                    <div className="text-xs text-slate-500">Portland State University</div>
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-1">M.S. & B.S. Computer Science</div>
                    <div className="text-xs text-slate-500">Academic Excellence</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-10">The Leadership Lens</div>
                
                <div className="grid gap-12">
                  {["Product Strategy", "Technology", "Leadership"].map((cat) => (
                    <div key={cat}>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-6 flex items-center gap-4">
                        {cat}
                        <div className="h-px flex-1 bg-white/10" />
                      </h4>
                      <div className="flex flex-wrap gap-2 text-white">
                        {SKILLS.filter(s => s.category === cat).map((skill, i) => (
                          <div 
                            key={i} 
                            className="px-4 py-2 border border-white/20 rounded-xl text-xs font-medium hover:bg-white/10 transition-colors bg-white/5"
                          >
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500 mb-4">Case Studies</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Systemic Impact Gallery.</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-slate-200/50 px-4 py-2 rounded-full text-slate-600">
              Principal-level Portfolio <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid gap-12">
            {PROJECTS.map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-[2.5rem] border border-slate-100 transition-all hover:border-slate-300 shadow-sm overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row min-h-[400px]">
                  {/* Image Side */}
                  <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 blur-[2px] group-hover:blur-0 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/10 transition-colors duration-500" />
                    <div className="absolute top-6 left-6 text-white text-[9px] font-bold uppercase tracking-[0.4em] bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      {proj.shortName}
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/3 p-8 md:p-12 border-l border-slate-50 flex flex-col justify-center">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-6 flex items-center gap-4">
                      {proj.role}
                      <div className="h-px w-8 bg-slate-200" />
                    </div>
                    <h4 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900 leading-tight">{proj.title}</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">{proj.oneSentenceImpact}</p>
                    <p className="text-xl text-slate-600 leading-relaxed mb-10">{proj.impact}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {proj.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-slate-50 text-slate-500 rounded-lg border border-slate-100 group-hover:border-slate-200 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-12 hidden lg:flex">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:-rotate-12 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl shadow-slate-900/10">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-24 text-white relative overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#334155_0%,transparent_70%)] opacity-30" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <Mail className="w-12 h-12 mx-auto mb-10 text-slate-400" />
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's synthesize something <br/>that lasts.</h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Seeking Principal-level opportunities where deep technical fluency meets AI strategy. 
                I’m energized by high-stakes conversations around product innovation and engineering culture.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:sunitha.n@gmail.com"
                  className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-3"
                >
                  Email Me
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="http://linkedin.com/in/nsunitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  Technical Leader Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <div className="font-mono">© 2024 Sunitha Narayanan // Principal Technical Product Manager</div>
            <div className="flex gap-8">
              <a href="http://linkedin.com/in/nsunitha" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">LinkedIn</a>
              <a href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Resume</a>
              <a href="mailto:sunitha.n@gmail.com" className="hover:text-slate-900 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
