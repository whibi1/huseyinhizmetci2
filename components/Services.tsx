import React from 'react';
import { Map, Landmark, Moon, Users } from 'lucide-react';

interface ServicesProps {
  content: any;
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const icons = [Users, Landmark, Moon, Map];

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mt-2 mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-slate-500 font-light">
            {content.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.items.map((item: any, index: number) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-warm border border-stone-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-secondary mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;