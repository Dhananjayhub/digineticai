import ContactBackground from './components/ContactBackground';
import Hero from './components/Hero';
import ProcessSteps from './components/ProcessSteps';
import ServicesSection from './components/ServicesSection';
import WebMobileSolutions from './components/WebMobileSolutions';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <ProcessSteps />
      <WebMobileSolutions />
      <ContactBackground />
    </div>
  );
}
