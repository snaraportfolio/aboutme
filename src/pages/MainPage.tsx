import { motion } from "motion/react";
import { Mail, ArrowRight, Zap, Users2, Server, Linkedin } from "lucide-react";
import { Nav } from "../components/Nav";
import { TESTIMONIALS, PROJECTS, ESSAYS } from "../data";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-slate-900 selection:text-white overflow-x-hidden text-slate-900">
      <Nav />
      {/* (All content from App.tsx Section starts, skipping nav and overlay state) */}
      {/* ... */}
      
      {/* Thinking Section - updated for nav */}
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
                  onClick={() => navigate(`/essay/${essay.title}`)}
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900"
                >
                  Read Essay <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... Rest of the sections ... */}
    </div>
  );
}
