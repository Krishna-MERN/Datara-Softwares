import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobApplicationForm from '../components/JobApplicationForm';
import InternshipForm from '../components/InternshipForm';
import StudentAmbassadorForm from '../components/StudentAmbassadorForm';
import MultiForm from '../components/MultiForm';
const Application = () => {
  return (
    <div>
      <Navbar />
      <div>
        <MultiForm 
         JobApplicationForm={JobApplicationForm} 
         InternshipForm={InternshipForm} 
         StudentAmbassadorForm={StudentAmbassadorForm} />
      </div>
      <Footer />
    </div>
  );
};                

export default Application;