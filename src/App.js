import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './components/content';
import Topbar from './components/Topbar';
import Section from './components/Section';
import Another from './components/Another';
import Testimonials from "./components/Testimonials";
import Sfooter from "./components/Sfooter";
import Form from "./components/Form";
import Pricing from './components/pricing';
import AboutUs from './components/About';
import Projects from './components/projects';
import Home from './components/Home'; // You might want to create this
import Bar from './components/Bar';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Bar />
        
        <Routes>
          {/* Home route - contains all your main components */}
          <Route path="/" element={
            <>
              <Content />
              <Section />
              <Another />
              <Testimonials />
              <Form />
            </>
          } />
          
          {/* Individual page routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
        
        <Sfooter />
      </div>
    </Router>
  );
}

export default App;