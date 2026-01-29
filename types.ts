export enum Language {
  TR = 'TR',
  EN = 'EN',
  AR = 'AR',
}

export interface Content {
  nav: {
    home: string;
    about: string;
    tours: string;
    gallery: string;
    contact: string;
    bookBtn: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    statExperience: string;
    statTours: string;
    statClients: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  features: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    infoPhone: string;
    infoInsta: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
}