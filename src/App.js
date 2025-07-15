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
import TrainingSection from './components/TrainingSection';
import TrainingLayout from './components/TrainingLayout'; // We'll create this

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout routes` */}
        <Route element={
          <>
            <Topbar />
            <Bar />
            <Outlet />
            <Sfooter />
          </>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/service" element={<Another />} />
        </Route>

        {/* Training section with different layout */}
        <Route element={<TrainingLayout />}>
          <Route path="/training" element={<TrainingSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;