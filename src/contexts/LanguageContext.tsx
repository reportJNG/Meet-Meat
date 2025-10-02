import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    menu: 'Menu',
    reservation: 'Reservation',
    contact: 'Contact',
    heroTitle: 'Meet Meat',
    heroTagline: 'Only the best cuts. Famous for flavor.',
    reserveTable: 'Reserve a Table',
    viewMenu: 'View Menu',
    menuTitle: 'MENU',
    grill: 'Grill',
    specials: 'Specials',
    sides: 'Sides',
    drinks: 'Drinks',
    contactTitle: 'Contact & Reservation',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    hours: 'Opening Hours',
    hoursValue: 'Mon – Sun | 12:00 – 23:00',
    followUs: 'Follow Us',
    footerTagline: 'Premium cuts, legendary taste.',
    copyright: '© Meet Meat 2025',
    orderNow: 'Order Now',
  },
  fr: {
    home: 'Accueil',
    menu: 'Menu',
    reservation: 'Réservation',
    contact: 'Contact',
    heroTitle: 'Meet Meat',
    heroTagline: 'Seulement les meilleurs morceaux. Célèbre pour sa saveur.',
    reserveTable: 'Réserver une Table',
    viewMenu: 'Voir le Menu',
    menuTitle: 'MENU',
    grill: 'Grill',
    specials: 'Spécialités',
    sides: 'Accompagnements',
    drinks: 'Boissons',
    contactTitle: 'Contact & Réservation',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    hours: 'Heures d\'ouverture',
    hoursValue: 'Lun – Dim | 12:00 – 23:00',
    followUs: 'Suivez-nous',
    footerTagline: 'Morceaux premium, goût légendaire.',
    copyright: '© Meet Meat 2025',
    orderNow: 'Commander',
  },
  ar: {
    home: 'الرئيسية',
    menu: 'القائمة',
    reservation: 'الحجز',
    contact: 'اتصل بنا',
    heroTitle: 'ميت ميت',
    heroTagline: 'فقط أفضل القطع. مشهور بالنكهة.',
    reserveTable: 'احجز طاولة',
    viewMenu: 'عرض القائمة',
    menuTitle: 'القائمة',
    grill: 'مشويات',
    specials: 'عروض خاصة',
    sides: 'أطباق جانبية',
    drinks: 'مشروبات',
    contactTitle: 'التواصل والحجز',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    hours: 'ساعات العمل',
    hoursValue: 'الإثنين – الأحد | 12:00 – 23:00',
    followUs: 'تابعنا',
    footerTagline: 'قطع فاخرة، طعم أسطوري.',
    copyright: '© ميت ميت 2025',
    orderNow: 'اطلب الآن',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
