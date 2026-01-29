import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FeaturesProps {
  content: any;
}

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          
          <div className="w-full lg:w-1/2">
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              {content.title}
            </h2>
            <div className="h-1 w-20 bg-primary mb-8"></div>
            
            <div className="grid gap-6">
              {content.items.map((item: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 font-serif">{item.title}</h4>
                    <p className="text-slate-300 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
             <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8" alt="Istanbul Street" />
                <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Galata Tower" />
                <img src="https://images.unsplash.com/photo-1545459720-aacaf50988a1?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-8" alt="Turkish Tea" />
                <img src="https://images.unsplash.com/photo-1572535062534-1ee6b6330a10?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Mosque Interior" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;