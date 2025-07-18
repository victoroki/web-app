import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Bar from './components/Bar';
import Sfooter from "./components/Sfooter";
import Home from './components/Home';
import AboutUs from './components/About';
import Pricing from './components/pricing';
import Projects from './components/projects';
import Form from "./components/Form";
import Another from './components/Another';

import Header from './components/training/Header';
import HeroSection from './components/training/HeroSection';
import AboutSection from './components/training/AboutSection';
import Testimonials from './components/training/Testimonials';
import ContactSection from './components/training/ContactSection';
import EPRALicensing from './components/training/EPRALicensing';
import SolarDesignTraining from './components/training/SolarDesignTraining';
import ElectricalDesign from './components/training/ElectricalDesign';
import HealthSafetyTraining from './components/training/HealthSafetyTraining';
import WebinarsSection from './components/training/WebinarsSection';
import BrandingTraining from './components/training/BrandingTraining';
import UpcomingTraining from './components/training/UpcomingTraining';
import Footer from './components/training/Footer';
import PastWebinars from './components/training/PastWebinars';
import Partners from './components/training/Partners';
import TrainerProfile from './components/training/Trainer';
import Whatsapp from './components/Whatsapp';
import WhatsappTrainer from './components/training/WhatsappTrainer';

// Create a component for the training homepage that includes all the sections
const TrainingHomepage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Partners />
      <Testimonials />
      <WhatsappTrainer />
      {/* <TrainerProfile /> */}
      {/* Add any other components you want on the training homepage */}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout routes */}
        <Route
          element={
            <>
              <Topbar />
              <Bar />
              <Outlet />
              <Whatsapp />
              <Sfooter />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/service" element={<Another />} />
        </Route>

        {/* Training layout - common header and footer for all training pages */}
        <Route
          element={
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                <Outlet />
              </main>
              <Footer />
            </div>
          }
        >
          {/* Training homepage with all sections */}
          <Route path="/training" element={<TrainingHomepage />} />
          
          {/* Individual training pages without repeated components */}
          <Route path="/training/about" element={<AboutSection />} />
          <Route path="/training/epra" element={<EPRALicensing />} />
          <Route path="/training/solar" element={<SolarDesignTraining />} />
          <Route path="/training/electrical" element={<ElectricalDesign />} />
          <Route path="/training/safety-training" element={<HealthSafetyTraining />} />
          <Route path="/training/webinars" element={<WebinarsSection />} />
          <Route path="/training/branding" element={<BrandingTraining />} />
          <Route path="/training/upcoming" element={<UpcomingTraining />} />
          <Route path="/training/testimonials" element={<Testimonials />} />
          <Route path="/training/contact" element={<ContactSection />} />
          <Route path="/training/pastwebinars" element={<PastWebinars />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;