import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import EPRALicensing from './EPRALicensing';
import SolarDesignTraining from './SolarDesignTraining';
import ElectricalDesign from './ElectricalDesign';
import HealthSafetyTraining from './HealthSafetyTraining';
import WebinarsSection from './WebinarsSection';
import BrandingTraining from './BrandingTraining';
import UpcomingTraining from './UpcomingTraining';
import Footer from './Footer';
import PastWebinars from './PastWebinars';

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <Testimonials />
      <ContactSection />
      <main className="flex-grow">
        <Routes>
          <Route path="/training" element={<HeroSection />} />
          <Route path="/training/about" element={<AboutSection />} />
          <Route path="/training/epra" element={<EPRALicensing />} />
          <Route path="/training/solar" element={<SolarDesignTraining />} />
          <Route path="/training/electrical" element={<ElectricalDesign />} />
          <Route path="/training/safety-training" element={<HealthSafetyTraining />} />
          <Route path="/training/webinars" element={<WebinarsSection />} />
          <Route path="/training/branding" element={<BrandingTraining />} />
          <Route path="/training/pastwebinars" element={<PastWebinars />} />
          <Route path="/training/upcoming" element={<UpcomingTraining />} />
          <Route path="/training/testimonials" element={<Testimonials />} />
          <Route path="/training/contact" element={<ContactSection />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
