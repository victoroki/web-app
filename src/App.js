import './App.css';
import Navbar from './components/Navbar';
import Content from './components/content';
import Topbar from './components/Topbar';
import Section from './components/Section'
import Another from './components/Another';
import Bar from './components/Bar';
import Testimonials from "./components/Testimonials"
import Sfooter from "./components/Sfooter"

function App() {
  return (
    <div>
        <Topbar />
        {/* <Navbar /> */}
        <Content />
        <Section />
        <Another />
        <Testimonials />
        <Sfooter />
    </div>
  );
}

export default App;
