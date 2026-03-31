import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Our Works' },
    { id: 'about', label: 'About' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md border-b border-primary/10 py-3' : 'bg-transparent py-5'}`}>
      <nav className="w-full px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer flex items-center gap-6 z-50 group" onClick={() => scrollToSection('hero')}>
          <img 
            src="/main_logo.png"
            alt="NKS Events Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
          />
          <span className="text-foreground dark:text-white font-bold text-[17px] tracking-widest hidden sm:block">
            NKS EVENTS & SERVICES
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-foreground dark:text-white/90 hover:text-primary dark:hover:text-white font-medium text-[15px] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary dark:bg-white/10 dark:text-white hover:bg-primary/20 dark:hover:bg-white/20 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary hover:bg-secondary text-primary-foreground px-6 py-2.5 rounded-full font-medium shadow-primary/30 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'} transition-colors`}
          >
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative p-2 text-foreground dark:text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} className={!scrolled && !isMenuOpen ? 'dark:drop-shadow-md' : ''} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden flex flex-col pt-24 px-8 gap-6 shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <button 
            key={link.id}
            onClick={() => scrollToSection(link.id)} 
            className="text-left text-foreground hover:text-primary font-semibold text-xl py-2 border-b border-gray-100 dark:border-gray-800 transition-colors"
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => scrollToSection('contact')} 
          className="bg-primary hover:bg-secondary text-primary-foreground font-semibold text-lg py-4 mt-4 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-transform"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;