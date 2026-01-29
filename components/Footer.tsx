import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

interface FooterProps {
  content: any;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-secondary text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold mb-1">Hüseyin Hizmetçi</h3>
            <p className="text-slate-400 text-sm">Professional Tourist Guide • Istanbul</p>
          </div>

          <div className="flex space-x-6">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="text-center md:text-right text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {content.copyright}.</p>
            <p>{content.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;