import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/bg-hero.png';
import './hero.css'

const Hero = () => {
  const { t } = useLanguage();

  return (
 <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${heroBg})`,
  }}
>

      <div className="container mx-auto px-4 text-center animate-fade-in">
        {/* Large Logo */}
        <div className="mb-8 flex justify-center relative">
          <div className="absolute inset-0 animate-pulse blur-3xl opacity-60">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-primary/50 rounded-full"></div>
          </div>
        
        </div>

      
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-[570px]">
  <a
    href="https://maps.app.goo.gl/P4zkAENV6JvGTtsB8"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-hero"
  >
    {t('reserveTable')}
  </a>
  <button
    onClick={() => {
      const menuSection = document.getElementById('menu');
      menuSection?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="btn-outline-hero"
  >
    {t('viewMenu')}
  </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
