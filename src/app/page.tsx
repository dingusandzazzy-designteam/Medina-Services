import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ServiceDetails from '@/components/sections/ServiceDetails';
import RecentWork from '@/components/sections/RecentWork';
import CompanyOverview from '@/components/sections/CompanyOverview';
import WhyMedina from '@/components/sections/WhyMedina';
import Testimonials from '@/components/sections/Testimonials';
import ContactSection from '@/components/sections/ContactSection';
import StatementBand from '@/components/StatementBand';
import { statements } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ServiceDetails />
      <StatementBand tone="green" {...statements.craftsmanship} figure="statement-painter.png" />
      <RecentWork />
      <CompanyOverview />
      <WhyMedina />
      <StatementBand tone="navy" {...statements.accountability} />
      <Testimonials />
      <ContactSection />
    </>
  );
}
