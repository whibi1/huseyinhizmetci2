import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram } from 'lucide-react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1517089596392-fb9c9033e059?auto=format&fit=crop&q=80&w=800", // Ortakoy
    "https://images.unsplash.com/photo-1570182747185-110055743b59?auto=format&fit=crop&q=80&w=800", // Tram
    "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?auto=format&fit=crop&q=80&w=800", // Cats
    "https://images.unsplash.com/photo-1565017225287-2936232537c3?auto=format&fit=crop&q=80&w=800", // Spices
    "https://images.unsplash.com/photo-1596306499317-8490229598a2?auto=format&fit=crop&q=80&w=800", // Grand Bazaar
    "https://images.unsplash.com/photo-1523594635835-263725c40467?auto=format&fit=crop&q=80&w=800", // Maiden's Tower
  ];

  return (
    <section id="gallery" className="py-20 bg-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Memories from Istanbul</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square shadow-md cursor-pointer">
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif italic text-lg">Istanbul</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500"></div>
             <Instagram className="w-12 h-12 mx-auto mb-4 text-[#E1306C]" />
             <h3 className="text-2xl font-bold text-secondary mb-2">Follow My Journey</h3>
             <p className="text-slate-500 mb-6">@bir_an_istanbul</p>
             <a 
               href={SOCIAL_LINKS.instagram}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-primary transition-colors"
             >
               View on Instagram
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;