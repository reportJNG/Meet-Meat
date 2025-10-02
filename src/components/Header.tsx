import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section - 20% width */}
        <div className="w-1/5 flex items-center">
          {/* Optional: Add your logo here */}
          {/* <div className="text-xl font-bold text-primary">YourLogo</div> */}
        </div>

        {/* Centered Navigation - 60% width */}
        <nav className="w-3/5 flex justify-center">
          <div className="flex items-center gap-8 lg:gap-12 xl:gap-16">
            <button 
              onClick={() => scrollToSection('home')} 
              className="nav-link text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="nav-link text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {t('menu')}
            </button>
            <button 
              onClick={() => scrollToSection('reservation')} 
              className="nav-link text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {t('reservation')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {t('contact')}
            </button>
          </div>
        </nav>

        {/* Language Switcher - 20% width */}
        <div className="w-1/5 flex justify-end">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-md font-semibold text-sm transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-glow-primary scale-105'
                  : 'bg-secondary text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1.5 rounded-md font-semibold text-sm transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground shadow-glow-primary scale-105'
                  : 'bg-secondary text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1.5 rounded-md font-semibold text-sm transition-all duration-300 ${
                language === 'ar'
                  ? 'bg-primary text-primary-foreground shadow-glow-primary scale-105'
                  : 'bg-secondary text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;