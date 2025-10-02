import { Flame, Award, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Featured = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Flame,
      title: { en: 'Signature Grills', fr: 'Grillades Signature', ar: 'مشاوي مميزة' },
      desc: { en: 'Premium cuts cooked to perfection', fr: 'Coupes premium cuites à la perfection', ar: 'قطع لحم فاخرة مطبوخة بإتقان' },
    },
    {
      icon: Award,
      title: { en: 'Award Winning', fr: 'Primé', ar: 'حائز على جوائز' },
      desc: { en: 'Best steakhouse in Algiers', fr: 'Meilleur steakhouse d\'Alger', ar: 'أفضل مطعم لحوم في الجزائر' },
    },
    {
      icon: Clock,
      title: { en: 'Fresh Daily', fr: 'Frais Quotidien', ar: 'طازج يومياً' },
      desc: { en: 'Sourced daily from local farms', fr: 'Approvisionné quotidiennement', ar: 'من مزارع محلية يومياً' },
    },
  ];

  const getText = (text: { en: string; fr: string; ar: string }) => {
    return text[language as keyof typeof text] || text.en;
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-slide-up">
          {[
            { number: '10+', label: { en: 'Years', fr: 'Années', ar: 'سنوات' } },
            { number: '50K+', label: { en: 'Happy Customers', fr: 'Clients Satisfaits', ar: 'عميل سعيد' } },
            { number: '100%', label: { en: 'Quality', fr: 'Qualité', ar: 'جودة' } },
            { number: '24/7', label: { en: 'Service', fr: 'Service', ar: 'خدمة' } },
          ].map((stat, i) => (
            <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="text-4xl md:text-5xl font-black text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground font-semibold">{getText(stat.label)}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <div key={i} className="feature-card animate-slide-up" style={{ animationDelay: `${(i + 4) * 0.1}s` }}>
              <feature.icon className="w-16 h-16 text-primary mb-6 mx-auto " style={{ animationDelay: `${i * 0.3}s` }} />
              <h3 className="text-2xl font-bold text-foreground mb-3 text-center">
                {getText(feature.title)}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {getText(feature.desc)}
              </p>
            </div>
          ))}
        </div>

        {/* Signature Dish Highlight */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&h=600&fit=crop"
              alt="Signature Platter"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/50 mb-6">
              <span className="text-primary font-bold text-sm tracking-wider">SIGNATURE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              {language === 'ar' ? 'طبق ميت ميت المميز' : language === 'fr' ? 'Plateau Signature' : 'Meet Meat Platter'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {language === 'ar'
                ? 'تشكيلة استثنائية من أفضل قطع اللحم المشوية، تقدم مع صلصاتنا المميزة والمقبلات الفاخرة'
                : language === 'fr'
                ? 'Une sélection exceptionnelle de nos meilleures viandes grillées, servie avec nos sauces signature'
                : 'An exceptional selection of our finest grilled meats, served with signature sauces and premium sides'}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-5xl font-black text-accent">7,500 DZD</span>
              <a
                href="https://maps.app.goo.gl/P4zkAENV6JvGTtsB8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                {t('orderNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
