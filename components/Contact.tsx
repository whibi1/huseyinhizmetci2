import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

interface ContactProps {
  content: any;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              {content.title}
            </h2>
            <p className="text-xl text-slate-500 font-light mb-12">
              {content.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase">{content.infoPhone}</p>
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-xl font-serif text-secondary hover:text-primary transition-colors">
                    +90 555 637 00 46
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase">WhatsApp</p>
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-xl font-serif text-secondary hover:text-green-600 transition-colors">
                    Direct Message
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase">{content.infoInsta}</p>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-xl font-serif text-secondary hover:text-purple-600 transition-colors">
                    @bir_an_istanbul
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12 bg-warm p-8 md:p-12 rounded-3xl shadow-sm border border-stone-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">{content.formName}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-600 mb-2">{content.formEmail}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">{content.formMessage}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-primary focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-secondary text-white rounded-lg font-bold text-lg hover:bg-primary transition-colors shadow-lg"
              >
                {content.formSubmit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;