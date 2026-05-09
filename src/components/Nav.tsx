import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Linkedin, Mail, Github } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[#2B2D42] font-sans">
          <Link to="/" className="font-mono font-bold text-lg tracking-tighter">
            SUNITHA<span className="text-slate-400">.N</span>
          </Link>
          
          <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest items-center">
            <button onClick={() => navigateTo("#about")} className="hover:text-[#5d5f75] transition-colors">About</button>
            <button onClick={() => navigateTo("#expertise")} className="hover:text-[#5d5f75] transition-colors">Expertise</button>
            <button onClick={() => navigateTo("#impact")} className="hover:text-[#5d5f75] transition-colors">Outcomes</button>
            <button onClick={() => navigateTo("#thinking")} className="hover:text-[#5d5f75] transition-colors">Thinking</button>
            <a 
              href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#5d5f75] transition-colors"
            >
              Resume
            </a>
            <button onClick={() => navigateTo("#contact")} className="px-5 py-2.5 bg-[#E07A5F] text-white rounded-full hover:bg-[#CC6A50] transition-all active:scale-95 shadow-lg shadow-[#E07A5F]/20 hover:shadow-[#E07A5F]/30">
              Contact
            </button>
          </div>

          <button className="md:hidden text-[#2B2D42]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            <button className="text-left" onClick={() => { navigateTo("#about"); setMobileMenuOpen(false); }}>About</button>
            <button className="text-left" onClick={() => { navigateTo("#expertise"); setMobileMenuOpen(false); }}>Expertise</button>
            <button className="text-left" onClick={() => { navigateTo("#impact"); setMobileMenuOpen(false); }}>Impact</button>
            <a 
              href="https://drive.google.com/file/d/11jNyRSZGbXBeZiaUFqsn-r-gFhosTd7u/view?usp=sharing"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
            <button className="text-left text-[#5d5f75]" onClick={() => { navigateTo("#contact"); setMobileMenuOpen(false); }}>Hire Me</button>
            
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
