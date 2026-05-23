import { useState, useEffect } from 'react';
import { Terminal, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  unlockSection?: (section: string) => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode, unlockSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['about', 'projects', 'skills', 'experience'];
      let currentSection = 'about';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above the middle of the viewport, it's currently active
          if (rect.top <= window.innerHeight / 2.5) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' }
  ];

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDarkMode
            ? 'backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800/80 py-3 shadow-md'
            : 'backdrop-blur-md bg-white/70 border-b border-zinc-200/80 py-3 shadow-sm'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand */}
          <a
            id="brand-logo"
            href="#about"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300 border ${
              isDarkMode 
                ? 'bg-neutral-900 border-neutral-800 text-neutral-200 group-hover:border-neutral-500' 
                : 'bg-zinc-100 border-zinc-200 text-zinc-800 group-hover:border-zinc-400'
            }`}>
              <Terminal className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className={`text-sm font-display font-semibold tracking-tight transition-all ${
                isDarkMode ? 'text-neutral-100 group-hover:text-white' : 'text-zinc-900 group-hover:text-black'
              }`}>
                {PERSONAL_INFO.name}
              </span>
              <span className={`text-[10px] font-mono tracking-wider ${
                isDarkMode ? 'text-neutral-500' : 'text-zinc-400'
              }`}>
                {PERSONAL_INFO.title.toUpperCase()}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (unlockSection) unlockSection(link.id);
                    setTimeout(() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className={`text-xs font-mono tracking-wide transition-all duration-300 uppercase ${
                    isActive 
                      ? isDarkMode 
                        ? 'text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] font-bold' 
                        : 'text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.5)] font-bold'
                      : isDarkMode 
                        ? 'text-neutral-400 hover:text-white' 
                        : 'text-zinc-500 hover:text-zinc-950'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Direct Theme Toggle Button */}
            <button
              id="theme-toggler-btn"
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg border transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-amber-400 hover:text-white hover:border-neutral-700' 
                  : 'bg-zinc-100 border-zinc-200 text-indigo-600 hover:text-indigo-900 hover:border-zinc-300'
              }`}
              title={isDarkMode ? "Set Light Mode" : "Set Dark Mode"}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              id="cta-email-nav"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-md text-xs font-mono active:scale-95 transition-all text-center tracking-wide ${
                isDarkMode 
                  ? 'bg-neutral-100 text-neutral-950 hover:bg-neutral-300' 
                  : 'bg-zinc-900 text-white hover:bg-zinc-700'
              }`}
            >
              CONNECT
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile Menu Actions */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button for Mobile screen */}
            <button
              id="theme-toggler-mobile-btn"
              onClick={toggleDarkMode}
              className={`p-1.5 rounded-lg border transition-all active:scale-95 cursor-pointer ${
                isDarkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-amber-400' 
                  : 'bg-zinc-100 border-zinc-200 text-indigo-600'
              }`}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-md border border-transparent transition-all ${
                isDarkMode 
                  ? 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 hover:border-neutral-800' 
                  : 'text-zinc-650 hover:text-zinc-950 hover:bg-zinc-100 hover:border-zinc-300'
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-[57px] left-0 w-full border-b overflow-hidden transition-all duration-300 md:hidden ${
          isDarkMode 
            ? 'border-neutral-800 bg-neutral-950/95 backdrop-blur-lg' 
            : 'border-zinc-200 bg-white/95 backdrop-blur-lg'
        } ${
          mobileMenuOpen ? 'max-h-72 opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 flex flex-col gap-5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (unlockSection) unlockSection(link.id);
                  setTimeout(() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`text-sm font-mono uppercase tracking-wider py-1 block border-b transition-all duration-300 ${
                  isActive
                    ? isDarkMode
                      ? 'text-sky-400 border-sky-400/50 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] font-bold'
                      : 'text-indigo-600 border-indigo-600/50 drop-shadow-[0_0_8px_rgba(79,70,229,0.5)] font-bold'
                    : isDarkMode 
                      ? 'text-neutral-300 hover:text-white border-neutral-900' 
                      : 'text-zinc-650 hover:text-zinc-950 border-zinc-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            id="mobile-drawer-cta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`flex items-center justify-center gap-1 py-2.5 rounded-md text-xs font-mono tracking-wide ${
              isDarkMode 
                ? 'bg-neutral-100 text-neutral-950' 
                : 'bg-zinc-900 text-white'
            }`}
          >
            LET'S CONVERSATE
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
