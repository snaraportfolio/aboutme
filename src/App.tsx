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
  years: string;
  shortName: string;
  oneSentenceImpact: string;
  role: string;
  context: string;
  problem: string;
  decision: string;
  outcome: string;
  impact: string;
  tags: string[];
  image: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface Essay {
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

// --- Data ---
const LOGOS = [
  { name: "Nike", url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Global Enterprise", url: "" }, // Will use text for these if no logo
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Sunitha has a rare ability to bridge the gap between high-level executive vision and deep architectural constraints. She doesn't just manage products; she unblocks entire engineering organizations.",
    author: "Engineering Director",
    role: "Digital Platform Lead @ Nike"
  },
  {
    quote: "Sunitha has a rare ability to blend her engineering pedigree to deliver great product experiences. She keeps the customer at the heart of everything she does, building lasting business partnerships while navigating real-world technical constraints without losing momentum. A product leader with a serious engineering background who stays curious—she has the unique vision required to lead radical transformations.",
    author: "Engineering Director",
    role: "Director Product Creation"
  }
];

const ESSAYS: Essay[] = [
  {
    title: "The Agentic Adoption Blueprint",
    excerpt: "Moving beyond LLM chat toward autonomous trust boundaries. How to architect for agents in high-compliance environments.",
    date: "May 2026",
    content: `
# The Agentic Adoption Blueprint

Moving beyond basic LLM interactions requires establishing robust trust and architectural boundaries. For high-compliance environments, an agentic strategy is not about replacing human decision-making; it's about augmenting human capacity through secure, repeatable autonomous patterns.

## 1. Establishing Trust Boundaries
The foundation of agentic adoption in enterprise is strict policy-based control. Before an agent can act, it must operate within a clearly defined scope (the "Trust Boundary"). This prevents unauthorized actions and ensures accountability in automated workflows.

## 2. Infrastructure for Observability
You cannot trust what you cannot measure. Deploying agents at scale requires sophisticated observability. This includes logging every decision step, monitoring for unexpected behavior, and implementing automated kill-switches for when an agent deviates from its defined parameters.

## 3. Metrics for Capacity Creation
Don't measure adoption; measure outcomes. The success of an enterprise agent is defined by the capacity it creates—the time it saves, the error rate it reduces, or the new business scenarios it enables. Map agentic capability directly to measurable business throughput to ensure sustained investment.
    `
  },
  {
    title: "Innovation to Pilot to Scale",
    excerpt: "A tactical framework for bridging the gap between ambitious R&D concepts and stable, global enterprise deployments.",
    date: "2025",
    content: `
# Innovation to Pilot to Scale

Bridging the gap between ambitious R&D and global enterprise reality requires more than just technical prowess—it requires a tactical framework that separates discovery from deployment.

## 1. Innovation: Leading with the Problem
The biggest mistake in R&D is starting with a solution. True innovation begins by identifying where users are stuck. Use research—user interviews, diary studies, and usage analytics—to map the friction points. Don't build a roadmap; build an understanding.

## 2. Pilot: The "Pilot-and-Learn" Model
Once a high-potential use case is identified, move to a pilot. Keep the environment controlled. Define clear Success Metrics up front. Is it saving time? Increasing throughput? Improving user satisfaction? Ensure the pilot is built to learn, not just to show off. Crucially, involve legal, privacy, and data security teams from day one; experimentation must adhere to strict corporate standards to protect our brand and customer data throughout the journey.

## 3. Scale: Enterprise Accountability
Scale is where governance, security, and compliance meet technology. For a pilot to become a global deployment, it must fit within existing architectural boundaries. Focus on data dependency, cost-to-value trade-offs, and observability. Scaling is about creating sustainable capacity, not just deploying a feature.
    `
  }
];

const PROJECTS: Project[] = [
  {
    title: "Strategic AI & Agentic Core",
    years: "2024 - Present",
    shortName: "AGENTIC",
    oneSentenceImpact: "Developing an enterprise-grade framework for business case selection and agentic capacity creation.",
    role: "Principal PM, AI Strategy",
    context: "Organizations struggle to move from LLM chat curiosity to measurable agentic workflows with ROI.",
    problem: "Lack of a structured method for identifying high-margin agentic use cases and measuring the resulting capacity creation.",
    decision: "Independently researching a 'Decision-to-Metric' framework that maps agent capability to organizational capacity.",
    outcome: "Drafting the 'Strategy in Motion' blueprint to enable secure adoption and measurable business metrics for agentic pilots.",
    impact: "Researching autonomous agent frameworks with a focus on data dependency and cost-to-value trade-offs. Mapping how agentic implementations create capacity for new organizational capabilities.",
    tags: ["Agentic AI", "Business Metrics", "Strategic Framework", "Capacity Creation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Biomechanical Running Insights",
    years: "2021 - 2023",
    shortName: "INNOVATION",
    oneSentenceImpact: "Scaled a biomechanical insight engine across 4 Geos, expanding localized features for global consumer relevance.",
    role: "Principal Product Manager",
    context: "Biomechanical insight engines were high-touch, personalized services for elite athletes, leaving everyday runners underserved.",
    problem: "Expanding commitment to runners required democratizing elite-level insights for the everyday athlete within Nike's ecosystem.",
    decision: "Pivoted from niche model to scale, leveraging a pilot-and-learn strategy across 4 Geos to deliver personalized, localized biomechanical insights.",
    outcome: "Achieved a 180% engagement lift and deeper member activation by making elite-level insights accessible to the everyday runner.",
    impact: "Scaling global biomechanical running insights and predictive engines, aligning specialized sports science with Nike's global commitment to runners.",
    tags: ["Geo-Expansion", "Biomechanical", "Localization", "Feature Innovation"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Enterprise Platforms & Digital Core",
    years: "2018 - 2021",
    shortName: "SCALE",
    oneSentenceImpact: "Modernized legacy supply chains into a unified, cloud-native digital core with 12x faster release velocity.",
    role: "Principal Product Manager",
    context: "A multi-billion dollar supply chain was running on fragmented, 20-year-old legacy systems.",
    problem: "Deployment cycles took months, and data silos were causing multi-million dollar inventory errors.",
    decision: "Proposed and unblocked a wholesale migration to a cloud-native 'Single Source of Truth' digital core.",
    outcome: "Increased release frequency 12x and maintained 99.9% uptime during peak holiday traffic.",
    impact: "Modernizing fragmented legacy systems into a unified cloud-native platform, streamlining manufacturing and product creation across the global digital thread.",
    tags: ["Enterprise SaaS", "Digital Thread", "Modernization", "Operational Excellence"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Multi-Region Ecommerce Orchestration",
    years: "2015 - 2018",
    shortName: "GLOBAL",
    oneSentenceImpact: "Shipped a multi-billion dollar D2C platform across 5 global regions with 99.99% availability.",
    role: "Principal Product Manager",
    context: "Global expansion was stalled by a monolithic architecture that couldn't handle localized regional requirements.",
    problem: "Entry into China and Japan required a localized tech stack that the current monolith couldn't support.",
    decision: "Decided to decouple the checkout and identity services to allow for regional-specific integrations.",
    outcome: "Successfully scaled to 500%+ traffic growth and supported $1B+ in new regional ARR.",
    impact: "Engineering the strategic roadmap for ecommerce expansion across China, Japan, and the EU. Scaling architecture to support 500%+ traffic growth while maintaining 99.99% availability for a multi-billion dollar platform.",
    tags: ["Global Scale", "Localization", "Multi-Billion ARR", "Strategic Execution"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000",
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
            <a href="#impact" className="hover:text-slate-500 transition-colors">Outcomes</a>
            <a href="#thinking" className="hover:text-slate-500 transition-colors">Thinking</a>
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
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-slate-900 selection:text-white overflow-x-hidden text-slate-900">
      <Nav />
      {selectedEssay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-3xl font-bold mb-4">{selectedEssay.title}</h2>
            <div className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">{selectedEssay.content}</div>
            <button
              onClick={() => setSelectedEssay(null)}
              className="mt-8 px-6 py-3 bg-slate-900 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-slate-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
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
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 relative z-10">
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
                <div className="xl:w-[450px] flex-shrink-0">
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
                     <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Audit-able Outcome</div>
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
