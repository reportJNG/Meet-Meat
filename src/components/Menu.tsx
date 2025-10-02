import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Category = 'all' | 'grill' | 'specials' | 'sides' | 'drinks';

interface MenuItem {
  id: number;
  name: string;
  nameAr: string;
  nameFr: string;
  category: Category;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Ribeye Steak',
    nameAr: 'ستيك ريب آي',
    nameFr: 'Entrecôte',
    category: 'grill',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'T-Bone Steak',
    nameAr: 'ستيك تي بون',
    nameFr: 'T-Bone',
    category: 'grill',
    price: 4800,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Meet Meat Signature Platter',
    nameAr: 'طبق ميت ميت المميز',
    nameFr: 'Plateau Signature',
    category: 'specials',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Lamb Chops',
    nameAr: 'قطع لحم الضأن',
    nameFr: 'Côtelettes d\'agneau',
    category: 'grill',
    price: 3900,
    image: 'https://www.simplyrecipes.com/thmb/oAlJf5c1EQExU3iYIGTPRlmtF-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__02__Rosemary-Lamb-Chops-LEAD-2-4b70775441df47848c0b4352446bac77.jpg',
  },
  {
    id: 5,
    name: 'Garlic Potatoes',
    nameAr: 'بطاطس بالثوم',
    nameFr: 'Pommes de terre à l\'ail',
    category: 'sides',
    price: 800,
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Caesar Salad',
    nameAr: 'سلطة سيزر',
    nameFr: 'Salade César',
    category: 'sides',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    name: 'Craft Cola',
    nameAr: 'كولا حرفية',
    nameFr: 'Cola Artisanal',
    category: 'drinks',
    price: 600,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    name: 'Grilled Chicken',
    nameAr: 'دجاج مشوي',
    nameFr: 'Poulet grillé',
    category: 'grill',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop',
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const { language, t } = useLanguage();

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const getItemName = (item: MenuItem) => {
    if (language === 'ar') return item.nameAr;
    if (language === 'fr') return item.nameFr;
    return item.name;
  };

  const getCategoryLabel = (category: string) => {
    return t(category);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-center mb-12 animate-slide-up">
          {t('menuTitle')}
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'grill', 'specials', 'sides', 'drinks'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category)}
              className={`px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground shadow-glow-primary scale-105'
                  : 'bg-secondary text-foreground hover:bg-muted hover:scale-105'
              }`}
            >
              {cat === 'all' ? 'All' : getCategoryLabel(cat)}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="menu-card h-full flex flex-col">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <button className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-[var(--glow-primary)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {language === 'ar' ? 'اطلب الآن' : language === 'fr' ? 'Commander' : 'Order Now'}
                    </button>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-primary/50">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {getItemName(item)}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-3xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {item.price.toLocaleString()}
                    </p>
                    <span className="text-lg text-muted-foreground font-semibold">DZD</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
