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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo Section - Hidden on mobile, visible on larger screens */}
        <div className="w-1/5 hidden sm:flex items-center">
          {/* Optional: Add your logo here */}
          {/* <div className="text-xl font-bold text-primary">YourLogo</div> */}
        </div>

        {/* Centered Navigation - Full width on mobile, centered on larger screens */}
        <nav className="w-full sm:w-3/5 flex justify-center sm:justify-center">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 flex-wrap justify-center">
           
            <button 
              onClick={() => scrollToSection('menu')} 
              className="nav-link text-xs sm:text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-2 py-1 sm:px-0 sm:py-0"
            >
              {t('menu')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-xs sm:text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-2 py-1 sm:px-0 sm:py-0"
            >
              {t('reservation')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-link text-xs sm:text-sm lg:text-base font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-2 py-1 sm:px-0 sm:py-0"
            >
              {t('contact')}
            </button>
          </div>
        </nav>

        {/* Language Switcher - Always visible but smaller on mobile */}
        <div className="w-auto sm:w-1/5 flex justify-end">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md font-semibold text-xs sm:text-sm transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-glow-primary scale-105'
                  : 'bg-secondary text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md font-semibold text-xs sm:text-sm transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground shadow-glow-primary scale-105'
                  : 'bg-secondary text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded-md font-semibold text-xs sm:text-sm transition-all duration-300 ${
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