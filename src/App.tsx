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
  role: string;
  impact: string;
  tags: string[];
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
    title: "Agentic AI Governance",
    role: "Technical Research Lead",
    impact: "Building scalable product patterns for enterprise workflow automation, focusing on the intersection of AI governance and high-compliance data security.",
    tags: ["Agentic AI", "Data Security", "Automation", "2025+"],
  },
  {
    title: "Nike Digital Innovation",
    role: "Principal Product Manager",
    impact: "Directed global scale-up of biomechanical platforms and predictive sizing engines. Reduced return rates by 20% and drove 180% engagement lift.",
    tags: ["Product Innovation", "Machine Learning", "Computer Vision", "Growth"],
  },
  {
    title: "Enterprise Product Creation",
    role: "Technical Product Leader",
    impact: "Built a 'Single Source of Truth' digital core for 3,000+ users. Increased release frequency 12x while maintaining 99.9% availability.",
    tags: ["Cloud Native", "Technical Debt", "Digital Thread", "SaaS"],
  },
  {
    title: "Nike.com Global Platform",
    role: "Technical Product Leader",
    impact: "Directed strategy for a multi-billion dollar platform, scaling architecture to support 500%+ traffic growth and 99.99% uptime globally.",
    tags: ["E-commerce", "Personalization", "Scale", "Direct-to-Consumer"],
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
            <div id="about" className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Principal Technical Product Manager
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold tracking-tighter leading-[0.9] mb-10">
              Bridging <br />
              <span className="text-slate-400">Strategy</span> with <br className="hidden sm:block" />
              Execution.
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-500 leading-relaxed max-w-2xl mb-12 font-medium">
              Sunitha Narayanan scales global enterprise platforms from concept to production. 
              Bridging executive vision with senior engineering execution to drive measurable outcomes.
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

            <div className="flex items-center gap-10 text-slate-300 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
              <div className="flex gap-2 items-center"><span className="text-slate-900">01</span> PRODUCT</div>
              <div className="flex gap-2 items-center"><span className="text-slate-900">02</span> LEADERSHIP</div>
              <div className="flex gap-2 items-center"><span className="text-slate-900">03</span> SCALE</div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-300 animate-bounce">
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Stats/Value Prop Bar */}
      <section className="bg-slate-900 text-white py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          {[
            { label: "Product Value", value: "$2M+ ARR" },
            { label: "Traffic Growth", value: "500%+" },
            { label: "Engagement Lift", value: "180%+" },
            { label: "Uptime SLA", value: "99.99%" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{stat.label}</span>
              <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
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
              <p className="text-lg text-slate-500 leading-relaxed mb-12">
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
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-10">The Leadership Lens</div>
                
                <div className="grid gap-12">
                  {["Product Strategy", "Technology", "Leadership"].map((cat) => (
                    <div key={cat}>
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-4">
                        {cat}
                        <div className="h-px flex-1 bg-white/10" />
                      </h4>
                      <div className="flex flex-wrap gap-2 text-white">
                        {SKILLS.filter(s => s.category === cat).map((skill, i) => (
                          <div 
                            key={i} 
                            className="px-4 py-2 border border-white/10 rounded-xl text-xs font-medium hover:bg-white/5 transition-colors"
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-4">Case Studies</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Systemic Impact Gallery.</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full">
              Principal-level Portfolio <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid gap-6">
            {PROJECTS.map((proj, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="group relative bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-slate-900 hover:text-white shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                  <div className="md:w-2/3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">{proj.role}</div>
                    <h4 className="text-3xl font-bold mb-6">{proj.title}</h4>
                    <p className="text-xl opacity-70 leading-relaxed mb-8">{proj.impact}</p>
                    <div className="flex flex-wrap gap-2 text-white">
                      {proj.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 bg-slate-900/5 group-hover:bg-white/10 rounded-lg border border-slate-200 group-hover:border-white/10 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/3 flex md:justify-end items-start pt-4">
                    <div className="w-16 h-16 rounded-full border border-slate-200 group-hover:border-white/20 flex items-center justify-center transition-all group-hover:rotate-45">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-10 right-10 text-9xl font-black opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none font-mono">
                  Era {i + 1}
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
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Let's build something <br/>that lasts.</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
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
