import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: any;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: content.home },
    { href: "#about", label: content.about },
    { href: "#services", label: content.tours },
    { href: "#gallery", label: content.gallery },
    { href: "#contact", label: content.contact },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className={`text-2xl font-serif font-bold tracking-wide ${scrolled ? 'text-secondary' : 'text-white'}`}>
            Hüseyin <span className="text-primary">Hizmetçi</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-secondary' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 ${scrolled ? 'text-secondary' : 'text-white'} hover:text-primary`}>
                <Globe size={18} />
                <span className="font-semibold">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right">
                {Object.values(Language).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-amber-50 ${language === lang ? 'text-primary font-bold' : 'text-slate-600'}`}
                  >
                    {lang === 'TR' ? 'Türkçe' : lang === 'EN' ? 'English' : 'العربية'}
                  </button>
                ))}
              </div>
            </div>

            <a 
              href="#contact" 
              className="bg-primary hover:bg-amber-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md flex items-center gap-2"
            >
              <Phone size={16} />
              <span>{content.bookBtn}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${scrolled ? 'text-secondary' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-slate-700 font-medium text-lg border-b border-gray-50 pb-2"
              >
                {link.label}
              </a>
            ))}
            
            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-500 text-sm">Language / Dil / لغة</span>
              <div className="flex space-x-2 rtl:space-x-reverse">
                {Object.values(Language).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setIsOpen(false); }}
                    className={`px-3 py-1 rounded border ${language === lang ? 'bg-primary text-white border-primary' : 'bg-gray-50 text-slate-600 border-gray-200'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;