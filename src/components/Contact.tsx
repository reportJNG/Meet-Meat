import { Instagram, Music2, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div id="reservation" className="absolute -top-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Panel - Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              {t('contactTitle')}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{t('phone')}</h3>
                <p className="text-lg text-muted-foreground">0662225857</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{t('email')}</h3>
                <p className="text-lg text-muted-foreground">meetmeat.dz@gmail.com</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{t('address')}</h3>
                <p className="text-lg text-muted-foreground">
                  Algiers, Algeria
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{t('hours')}</h3>
                <p className="text-lg text-muted-foreground">{t('hoursValue')}</p>
              </div>
            </div>

            {/* Reserve Button */}
            <a
              href="https://maps.app.goo.gl/P4zkAENV6JvGTtsB8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-block"
            >
              {t('reserveTable')}
            </a>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">{t('followUs')}</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/meetandmeat_dz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-glow-primary hover:scale-110"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@meet.and.meat1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-glow-primary hover:scale-110"
                >
                  <Music2 className="w-6 h-6" />
                </a>
                <a
                  href="https://maps.app.goo.gl/P4zkAENV6JvGTtsB8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:shadow-glow-primary hover:scale-110"
                >
                  <MapPin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Google Maps */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-xl overflow-hidden shadow-2xl h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.0918477145675!2d3.0588!3d36.7538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ1JzEzLjciTiAzwrAwMyczMS43IkU!5e0!3m2!1sen!2sdz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Meet Meat Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
