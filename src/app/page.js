import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Shortener from '@/components/Shortener';

export default function Home() {
  return (
    <main>
      <Header />
      <Shortener />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
