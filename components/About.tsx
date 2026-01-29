import React from 'react';
import { PROFILE_PHOTO } from '../constants';
import { Award, Users, MapPin } from 'lucide-react';

interface AboutProps {
  content: any;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <img 
                src={PROFILE_PHOTO} 
                alt="Hüseyin Hizmetçi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-serif text-2xl font-bold">Hüseyin Hizmetçi</p>
                <p className="opacity-90">Professional Tourist Guide</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-10 -left-6 w-32 h-32 bg-amber-200/50 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -bottom-10 -right-6 w-40 h-40 bg-blue-200/50 rounded-full blur-2xl -z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/20 rounded-xl -z-0 hidden lg:block"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-secondary/20 rounded-xl -z-0 hidden lg:block"></div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
              Licensed Guide
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-8 leading-tight">
              {content.title}
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
              <p>{content.description1}</p>
              <p>{content.description2}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Award size={24} />
                  <span className="text-4xl font-serif font-bold text-secondary">15+</span>
                </div>
                <span className="text-sm text-slate-500 uppercase tracking-wide">{content.statExperience}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <MapPin size={24} />
                  <span className="text-4xl font-serif font-bold text-secondary">500+</span>
                </div>
                <span className="text-sm text-slate-500 uppercase tracking-wide">{content.statTours}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Users size={24} />
                  <span className="text-4xl font-serif font-bold text-secondary">2k+</span>
                </div>
                <span className="text-sm text-slate-500 uppercase tracking-wide">{content.statClients}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;