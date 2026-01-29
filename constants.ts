import { Content, Language } from './types';
import { MapPin, History, Users, Heart, Camera, Coffee, Star, ShieldCheck, Languages } from 'lucide-react';

export const SOCIAL_LINKS = {
  phone: "+905556370046",
  whatsapp: "https://wa.me/905556370046",
  instagram: "https://www.instagram.com/bir_an_istanbul/",
  instagramHandle: "@bir_an_istanbul"
};

// Placeholder for the guide's photo if the direct link is not available
// The user provided https://ibb.co/prwsvvJc which is a landing page.
// We use a high quality placeholder for the code, but this should be replaced by the direct image link.
export const PROFILE_PHOTO = "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800"; 
// Note: To use the actual user photo, one would need to host it directly or extract the direct link.

export const TRANSLATIONS: Record<Language, Content> = {
  [Language.TR]: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      tours: "Turlar",
      gallery: "Galeri",
      contact: "İletişim",
      bookBtn: "Tur Rezervasyonu"
    },
    hero: {
      title: "İstanbul'u Profesyonel Bir Rehberle Keşfedin",
      subtitle: "15 Yıllık Tecrübe | Otantik ve Unutulmaz Turlar",
      ctaPrimary: "Hemen Ara",
      ctaSecondary: "WhatsApp İle Ulaş"
    },
    about: {
      title: "Hüseyin Hizmetçi Kimdir?",
      description1: "Merhaba, ben Hüseyin Hizmetçi. 15 yıldır İstanbul ve Marmara bölgesinde profesyonel turist rehberliği yapıyorum. Kültürel mirasımıza duyduğum tutkuyu, misafirlerime unutulmaz hikayelerle aktarmayı seviyorum.",
      description2: "Türkçe ve Arapça dillerindeki uzmanlığımla, hem yerli hem de yabancı misafirlerime bu kadim şehrin gizli kalmış köşelerini, manevi atmosferini ve tarihi derinliğini en samimi şekilde sunuyorum.",
      statExperience: "Yıllık Tecrübe",
      statTours: "Başarılı Tur",
      statClients: "Mutlu Misafir"
    },
    services: {
      title: "Hizmetlerim",
      subtitle: "Size Özel Hazırlanmış Tur Paketleri",
      items: [
        { title: "Özel İstanbul Turları", desc: "Aileniz veya grubunuz için kişiselleştirilmiş İstanbul gezileri." },
        { title: "Tarih ve Kültür Turları", desc: "Ayasofya, Topkapı ve Tarihi Yarımada'nın derinliklerine yolculuk." },
        { title: "Manevi ve Dini Turlar", desc: "İstanbul'un kutsal mekanları, camileri ve manevi atmosferi." },
        { title: "Marmara Bölgesi Turları", desc: "Bursa, Edirne ve çevre illere günübirlik veya konaklamalı geziler." }
      ]
    },
    features: {
      title: "Neden Beni Tercih Etmelisiniz?",
      items: [
        { title: "15 Yıllık Tecrübe", desc: "Sektördeki derin bilgi birikimi ve profesyonellik." },
        { title: "Yerel Uzmanlık", desc: "Sadece turistik yerleri değil, gizli hazineleri de biliyorum." },
        { title: "Çok Dilli Rehberlik", desc: "Türkçe ve Arapça dillerinde akıcı ve doğal anlatım." },
        { title: "Kişiye Özel", desc: "Standart değil, sizin ilgi alanlarınıza göre şekillenen rotalar." }
      ]
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Unutulmaz bir İstanbul deneyimi için hemen plan yapalım.",
      formName: "Adınız Soyadınız",
      formEmail: "E-posta Adresiniz",
      formMessage: "Mesajınız",
      formSubmit: "Gönder",
      infoPhone: "Telefon",
      infoInsta: "Instagram"
    },
    footer: {
      copyright: "Hüseyin Hizmetçi",
      rights: "Tüm hakları saklıdır."
    }
  },
  [Language.EN]: {
    nav: {
      home: "Home",
      about: "About",
      tours: "Tours",
      gallery: "Gallery",
      contact: "Contact",
      bookBtn: "Book Now"
    },
    hero: {
      title: "Discover Istanbul with a Professional Local Guide",
      subtitle: "15 Years of Experience | Authentic & Unforgettable Tours",
      ctaPrimary: "Call Now",
      ctaSecondary: "WhatsApp Contact"
    },
    about: {
      title: "About Hüseyin Hizmetçi",
      description1: "Hello, I am Hüseyin Hizmetçi. I have been a professional tourist guide in Istanbul and the Marmara region for 15 years. I love sharing my passion for our cultural heritage through unforgettable stories.",
      description2: "With fluency in Turkish and Arabic, I offer both local and international guests an intimate look into the hidden corners, spiritual atmosphere, and historical depth of this ancient city.",
      statExperience: "Years Experience",
      statTours: "Successful Tours",
      statClients: "Happy Guests"
    },
    services: {
      title: "Tours & Services",
      subtitle: "Customized Tour Packages Just For You",
      items: [
        { title: "Private Istanbul Tours", desc: "Personalized trips for your family or group." },
        { title: "Historical & Cultural Tours", desc: "A journey into Hagia Sophia, Topkapi, and the Historical Peninsula." },
        { title: "Religious & Heritage Tours", desc: "Istanbul's sacred sites, mosques, and spiritual atmosphere." },
        { title: "Marmara Region Tours", desc: "Day trips or overnight stays to Bursa, Edirne, and surroundings." }
      ]
    },
    features: {
      title: "Why Choose Me?",
      items: [
        { title: "15 Years Experience", desc: "Deep industry knowledge and professionalism." },
        { title: "Local Expertise", desc: "I know not just the tourist spots, but the hidden gems." },
        { title: "Multilingual", desc: "Fluent and natural guidance in Turkish and Arabic." },
        { title: "Personalized", desc: "Routes shaped by your interests, not standard packages." }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Let's plan an unforgettable Istanbul experience.",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Your Message",
      formSubmit: "Send Message",
      infoPhone: "Phone",
      infoInsta: "Instagram"
    },
    footer: {
      copyright: "Hüseyin Hizmetçi",
      rights: "All rights reserved."
    }
  },
  [Language.AR]: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      tours: "الجولات",
      gallery: "المعراض",
      contact: "اتصل بنا",
      bookBtn: "احجز الآن"
    },
    hero: {
      title: "اكتشف إسطنبول مع مرشد محلي محترف",
      subtitle: "15 عامًا من الخبرة | جولات أصيلة لا تُنسى",
      ctaPrimary: "اتصل الآن",
      ctaSecondary: "تواصل عبر واتساب"
    },
    about: {
      title: "من هو حسين خدمتجي؟",
      description1: "مرحباً، أنا حسين خدمتجي. أعمل كمرشد سياحي محترف في إسطنبول ومنطقة مرمرة منذ 15 عاماً. أحب مشاركة شغفي بتراثنا الثقافي مع ضيوفي من خلال قصص لا تُنسى.",
      description2: "بفضل اتقاني للغتين التركية والعربية، أقدم للضيوف المحليين والدوليين نظرة عميقة وحميمية على الزوايا المخفية، والجو الروحي، والعمق التاريخي لهذه المدينة العريقة.",
      statExperience: "سنوات خبرة",
      statTours: "جولة ناجحة",
      statClients: "ضيف سعيد"
    },
    services: {
      title: "الجولات والخدمات",
      subtitle: "باقات سياحية مخصصة لك خصيصاً",
      items: [
        { title: "جولات إسطنبول الخاصة", desc: "رحلات مخصصة لعائلتك أو مجموعتك." },
        { title: "الجولات التاريخية والثقافية", desc: "رحلة إلى أعماق آيا صوفيا، توبكابي، وشبه الجزيرة التاريخية." },
        { title: "الجولات الدينية والتراثية", desc: "الأماكن المقدسة في إسطنبول، المساجد، والأجواء الروحانية." },
        { title: "جولات منطقة مرمرة", desc: "رحلات يومية أو مع مبيت إلى بورصة، إدرنة، والمناطق المحيطة." }
      ]
    },
    features: {
      title: "لماذا تختارني؟",
      items: [
        { title: "15 عاماً من الخبرة", desc: "معرفة عميقة واحترافية في هذا المجال." },
        { title: "خبرة محلية", desc: "لا أعرف فقط الأماكن السياحية، بل والجواهر المخفية أيضاً." },
        { title: "مرشد متعدد اللغات", desc: "إرشاد طلق وطبيعي باللغتين التركية والعربية." },
        { title: "مخصص لك", desc: "مسارات تتشكل حسب اهتماماتك، وليست باقات قياسية." }
      ]
    },
    contact: {
      title: "تواصل معي",
      subtitle: "دعنا نخطط لتجربة لا تُنسى في إسطنبول.",
      formName: "الاسم الكامل",
      formEmail: "البريد الإلكتروني",
      formMessage: "رسالتك",
      formSubmit: "إرسال الرسالة",
      infoPhone: "الهاتف",
      infoInsta: "إنستغرام"
    },
    footer: {
      copyright: "حسين خدمتجي",
      rights: "جميع الحقوق محفوظة."
    }
  }
};