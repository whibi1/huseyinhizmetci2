import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  content: any;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ content, language }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=2000" 
          alt="Istanbul Bosphorus View" 
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 text-white backdrop-blur-sm text-sm md:text-base font-light tracking-wider uppercase mb-2">
            Professional Guide • Istanbul
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg">
            {content.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
            {content.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-amber-500 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {content.ctaPrimary}
            </a>
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              {content.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#about" className="text-white/70 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;