import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Featured />
        <Menu />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
