/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github,
  Menu,
  X,
  Zap,
  Users2,
  Server
} from "lucide-react";
import { useState, useEffect } from "react";
import { PROJECTS, ESSAYS, TESTIMONIALS, Essay } from "./data";
import { Nav } from "./components/Nav";
import { EssayPage } from "./components/EssayPage";

export default function App() {
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  if (selectedEssay) {
    return <EssayPage essay={selectedEssay} onClose={() => setSelectedEssay(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-slate-900 selection:text-white overflow-x-hidden text-slate-900">
      <Nav />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
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
          >
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="flex-1 order-2 lg:order-1">
                <div id="about" className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 mb-8 border border-slate-200/50">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Available · Principal IC & Director roles
                </div>
                
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8">
                  Sunitha <br />
                  Narayanan<span className="text-slate-300">.</span>
                </h1>
                
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    Principal Technical Product Manager
                  </h2>
                  <p className="text-slate-700 font-medium text-sm mt-2">Available · Principal IC & Director roles Based in Portland, OR · Open to remote & hybrid (PST / EST)</p>
                </div>

                <div className="space-y-6 mb-12">
                  <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                    <span className="text-slate-900 font-bold">Authoring an enterprise blueprint for safely operationalizing autonomous agents</span> — data-dependency mapping, cost-to-value gates, and governance for high-compliance environments.
                  </p>
                  <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                    <span className="text-slate-900 font-bold">Consumer product creation & data viz:</span> Owned the technical strategy for physiological body-map visualizations for apparel design for performance products.
                  </p>
                  <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                    <span className="text-slate-900 font-bold">I specialize in the journey from Innovation to Pilot to Scale.</span> 
                    By bridging deep technical strategy with product execution, I unblock complex organizations and transform ambitious concepts into global enterprise reality.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                  <a 
                    href="mailto:sunitha.n@gmail.com"
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-slate-900/40 hover:bg-slate-800 transition-all active:scale-95"
                  >
                    Email Me
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="#impact"
                    className="inline-flex items-center justify-center px-10 py-5 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-slate-900 hover:bg-slate-50 transition-all"
                  >
                    View Outcomes
                  </a>
                </div>

                <p className="text-slate-600 font-medium italic text-sm mb-12">
                  Currently exploring Principal/Director roles in AI platform strategy.
                </p>

                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-12 border-t border-slate-200">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-1">Previous</span>
                    <span className="text-sm font-bold text-slate-800">Nike // Product Strategy</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-1">Location</span>
                    <span className="text-sm font-bold text-slate-800">Portland, OR // Remote</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-[450px] order-1 lg:order-2 relative">
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden bg-slate-900 relative shadow-2xl group border-[12px] border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Strategic Execution and Data Orchestration"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                  <div className="absolute inset-0 flex flex-col justify-center px-12">
                    <div className="h-px w-12 bg-white/40 mb-6" />
                    <div className="text-4xl font-bold text-white tracking-tighter leading-none mb-4">
                      Innovation <br/>to Scale.
                    </div>
                    <div className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                      Digital Product Strategy
                    </div>
                  </div>
                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex justify-between items-end">
                      <div className="text-white/40 text-[8px] font-mono uppercase tracking-[0.4em]">
                        Artifact SV-092 <br/>[TECHNICAL STRATEGY]
                      </div>
                    </div>
                  </div>
                </div>
                {/* Visual Artifacts - Redacted Doc Aesthetic */}
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 hidden xl:block rotate-[-5deg]">
                  <div className="w-full h-full border-[1.5px] border-dashed border-slate-200 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mb-3 underline decoration-slate-200 underline-offset-4">Strategic Roadmap.docx</div>
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-slate-100 rounded-full" />
                      <div className="h-1 w-3/4 bg-slate-100 rounded-full" />
                      <div className="h-1 w-5/6 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -top-10 -right-10 w-24 h-24 bg-slate-900 rounded-3xl -z-10" 
                />
              </div>
            </div>
          </motion.div>
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
      {/* Logo Wall */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" className="h-8" />
            <div className="text-xl font-black tracking-tighter">GLOBAL ENTERPRISE</div>
            <div className="text-xl font-bold font-mono tracking-tighter italic">D2C SCALE</div>
            <div className="text-xl font-light tracking-[0.2em]">SUPPLY CHAIN</div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-32">
            <div>
              <div className="inline-block py-1 pr-6 border-r border-slate-900 mb-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">Principal Scope</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Unblocking Orgs <br/>Through Technical Strategy.</h3>
              <div className="space-y-6 mb-12">
                <p className="text-xl text-slate-900 font-bold leading-tight">
                  "To lead is to prioritize the right problem, not just the right solution. Technical depth is a baseline; empathy is the differentiator."
                </p>
                <p className="text-lg text-slate-800 leading-relaxed">
                  I replace roadmap-driven development with research-driven purpose. By surfacing where users are truly stuck—not just where they say they are—I bridge the gap between complex technical potential and transformative business value.
                </p>
              </div>
              
              <div className="space-y-4 mb-12">
                {[
                  { icon: Zap, title: "The Synthesis Engine", desc: "I distill complex technical friction into actionable strategic roadmaps that execs can fund and engineers can ship." },
                  { icon: Users2, title: "Unblocking Organizations", desc: "Setting the trust boundaries for Agentic AI and global data privacy in high-compliance environments." },
                  { icon: Server, title: "Architectural Depth", desc: "Deep fluency in cloud-native modernization, microservices, and global D2C infrastructure." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#FAFAFA] border border-slate-100 items-center">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-900 flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-800 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-10">Decision-Making Framework</div>
                <div className="space-y-8">
                  {TESTIMONIALS.map((t, i) => (
                    <div key={i} className="relative">
                      <p className="text-xl font-medium leading-relaxed italic mb-6">"{t.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="h-px w-8 bg-white/20" />
                        <div>
                          <div className="font-bold text-sm">{t.author}</div>
                          <div className="text-[10px] uppercase tracking-widest text-slate-600">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12 border border-slate-100 rounded-[2.5rem] bg-[#FAFAFA]">
                 <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-8">Mentorship Impact</div>
                 <h4 className="text-3xl font-bold mb-4">30+ Women Mentored</h4>
                 <p className="text-slate-800 leading-relaxed">
                   Founded a cross-functional mentorship circle to sponsor emerging talent. 
                   Focused on navigating technical seniority and building influence in architectural reviews.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-700 mb-4">Strategic Outcomes</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Decisions & Impact.</h3>
            </div>
          </div>

          <div className="grid gap-16">
            {PROJECTS.map((proj, i) => (
              <div 
                key={i}
                className="group flex flex-col xl:flex-row gap-12 lg:gap-20 items-start"
              >
                <div className="xl:w-[350px] flex-shrink-0">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-sm border border-slate-100">
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-8 left-8 text-white text-[9px] font-bold uppercase tracking-[0.4em] bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      {proj.years}
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-10 pt-4">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-4">{proj.role}</div>
                    <h4 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">{proj.title}</h4>
                    <p className="text-lg font-bold text-slate-900 border-l-2 border-slate-900 pl-4">{proj.oneSentenceImpact}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">The Problem</div>
                      <p className="text-slate-600 leading-relaxed font-medium">{proj.problem}</p>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Decision Owned</div>
                      <p className="text-slate-900 leading-relaxed font-bold italic">"{proj.decision}"</p>
                    </div>
                  </div>

                  <div className="p-8 bg-slate-900 text-white rounded-3xl">
                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Audit-able Outcome</div>
                     <p className="text-2xl font-bold tracking-tight">{proj.outcome}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-bold uppercase tracking-widest px-4 py-2 bg-slate-100 text-slate-500 rounded-lg border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thinking / POV Section */}
      <section id="thinking" className="py-24 md:py-32 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-700 mb-4">Thinking</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Product Strategy & The Future of Platforms.</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ESSAYS.map((essay, i) => (
              <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-200 hover:border-slate-900 transition-all group">
                <div className="text-xs font-bold text-slate-400 mb-6">{essay.date}</div>
                <h4 className="text-3xl font-bold mb-6 group-hover:translate-x-2 transition-transform">{essay.title}</h4>
                <p className="text-slate-800 leading-relaxed mb-8">{essay.excerpt}</p>
                <button
                  onClick={() => setSelectedEssay(essay)}
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900"
                >
                  Read Essay <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
              <Mail className="w-12 h-12 mx-auto mb-10 text-slate-600" />
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
            <div className="font-mono">© 2026 Sunitha Narayanan // Principal Technical Product Manager</div>
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
