import { useState, useEffect } from 'react';
import { FaDownload, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Auto-close mobile menu when switching to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group relative z-50">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-xl shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
            A
          </div>
        </a>

        {/* Desktop Navigation - Pill Style */}
        <div className="hidden lg:flex items-center gap-1 rounded-full bg-white/60 dark:bg-slate-800/60 p-1.5 border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm shadow-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 rounded-full transition-all hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>

          <a 
            href="/Arun_CV.pdf" 
            download="Arun_Sharma_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95"
          >
            <FaDownload className="text-xs" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Toggle & Theme Switcher */}
        <div className="flex items-center gap-4 lg:hidden relative z-50">
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          
          <button 
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`absolute left-4 right-4 top-full mt-3 z-40 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-xl transition-all duration-300 origin-top ${
            isOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible pointer-events-none scale-95 -translate-y-2'
          }`}
        >
          <div className="flex flex-col gap-2 p-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/Arun_CV.pdf" 
              download="Arun_Sharma_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-white font-bold hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/30"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}