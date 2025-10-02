import { Instagram, Music2, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/bg-hero.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Logo & Tagline */}
          <div className="flex items-center gap-4">
            {<img src={logo} alt="Meet Meat" className="h-16 w-16 object-contain" />}
            <div>
              <h3 className="text-2xl font-black text-foreground">{t('heroTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('footerTagline')}</p>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/meetandmeat_dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-glow-primary hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@meet.and.meat1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-glow-primary hover:scale-110"
            >
              <Music2 className="w-5 h-5" />
            </a>
            <a
              href="https://maps.app.goo.gl/P4zkAENV6JvGTtsB8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-glow-primary hover:scale-110"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
