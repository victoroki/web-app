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
import PastTraining from "./components/training/PastTraining"
import CertificateGenerator from './components/training/certificate';
import CertificateForm from "./components/CertificateForm"
import GetInvolvedPage from './components/training/GetInvolved';
import UsefulLinksPage from './components/training/UsefullLink';
import EventsPage from './components/training/Events';
import ResourcesPage from './components/training/Resources';
import GalleryPage from './components/training/Gallery';
import ElectricVehicle from './components/training/ElectricVehicle';
import GreenHydrogen from './components/training/GreenHydrogen';
import Home2 from './components/training/Home2';
import ContactForm from './components/ContactForm';


const TrainingHomepage = () => {
  return (
    <>
      <HeroSection />
      {/* <AboutSection /> */}
      <Home2 />
      {/* <Partners />
      <Testimonials /> */}
      <WhatsappTrainer />
      {/* <TrainerProfile /> */}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
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
          <Route path="/institute" element={<TrainingHomepage />} />
          

          <Route path="/training/about" element={<><AboutSection /><TrainerProfile /><Partners /><Testimonials/></>} />
          <Route path="/training/epra" element={<EPRALicensing />} />
          <Route path="/training/solar" element={<SolarDesignTraining />} />
          <Route path="/training/electrical" element={<ElectricalDesign />} />
          <Route path="/training/safety-training" element={<HealthSafetyTraining />} />
          <Route path="/training/webinars" element={<WebinarsSection />} />
          <Route path="/training/branding" element={<BrandingTraining />} />
          <Route path="/training/upcoming" element={<UpcomingTraining />} />
          <Route path="/training/testimonials" element={<Testimonials />} />
          <Route path="/training/contact" element={<GetInvolvedPage />} />
          <Route path="/training/pastwebinars" element={<PastWebinars />} />
          <Route path="/training/pasttraining" element={<PastTraining />} />
          <Route path="/training/certificate" element={<CertificateGenerator />} />
          <Route path="/training/certificate-form" element={<CertificateForm />} />
          <Route path="/training/community/events" element={<EventsPage />} />
          <Route path="/training/community/resources" element={<ResourcesPage />} />
          <Route path="/training/community/links" element={<UsefulLinksPage />} />
          <Route path="/training/community/gallery" element={<GalleryPage />} />
          <Route path="/training/electric-vehicles" element={<ElectricVehicle />} />
          <Route path="/training/green-hydrogen" element={<GreenHydrogen />} />
          <Route path="/training/contactform" element={<ContactForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;