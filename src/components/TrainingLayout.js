import { Outlet } from 'react-router-dom';
import Header from './TrainingSection'; 
import Footer from './TrainingSection'; 

const TrainingLayout = () => {
  return (
    <div className="training-layout">
      <Header />
      <main>
        <Outlet /> {/* This will render the TrainingSection content */}
      </main>
      <Footer />
    </div>
  );
};

export default TrainingLayout;