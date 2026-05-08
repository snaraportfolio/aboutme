import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";

export function Nav() {
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
          <Link to="/" className="font-mono font-bold text-lg tracking-tighter">
            SUNITHA<span className="text-slate-400">.N</span>
          </Link>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest items-center">
            <a href="/#about" className="hover:text-slate-500 transition-colors">About</a>
            <a href="/#expertise" className="hover:text-slate-500 transition-colors">Expertise</a>
            <a href="/#impact" className="hover:text-slate-500 transition-colors">Outcomes</a>
            <a href="/#thinking" className="hover:text-slate-500 transition-colors">Thinking</a>
            <a 
              href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-slate-500 transition-colors"
            >
              Resume
            </a>
            <a href="/#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-700 transition-all active:scale-95 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">
              Contact
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
        >
          <div className="flex flex-col gap-8 text-2xl font-bold tracking-tight">
            <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/#expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
            <a href="/#impact" onClick={() => setMobileMenuOpen(false)}>Impact</a>
            <a 
              href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
            <a href="/#contact" className="text-slate-400" onClick={() => setMobileMenuOpen(false)}>Hire Me</a>
            
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
