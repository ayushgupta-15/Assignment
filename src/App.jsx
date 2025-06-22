import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomersSection from './components/CustomersSection';
import Footer from './components/Footer';
import PreFooter from './components/PreFooter';
import PlatformHeader from './components/PlatformHeader';
import BenefitsSection from './components/BenefitsSection';
import PlatformSection from './components/PlatformSection';
import LightFeatureRow from './components/LightFeatureRow';
import FaqSection from './components/FaqSection';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <CustomersSection/>
      <PlatformHeader />
      <BenefitsSection/>
      <PlatformSection/>
      <LightFeatureRow/>
      <FaqSection/>
      <PreFooter />
       <Footer />
    </div>
  );
}
