import React, { useState, useEffect } from 'react';
import { Language, Content } from './types';
import { TRANSLATIONS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>(Language.TR);
  const content: Content = TRANSLATIONS[language];

  // Update HTML dir attribute for RTL support (Arabic)
  useEffect(() => {
    document.documentElement.dir = language === Language.AR ? 'rtl' : 'ltr';
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  return (
    <div className={`min-h-screen ${language === Language.AR ? 'font-sans' : ''}`}>
      <Navbar language={language} setLanguage={setLanguage} content={content.nav} />
      <main>
        <Hero content={content.hero} language={language} />
        <About content={content.about} />
        <Services content={content.services} />
        <Features content={content.features} />
        <Gallery />
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}

export default App;