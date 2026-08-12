import { Header, Hero, FeaturesAccordion, Footer } from '@/components';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Header />
      <Hero />
      <FeaturesAccordion />
      <Footer />
    </main>
  );
}
