import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Opportunities from '../components/Opportunities';
import JobApplicationForm from '../components/JobApplicationForm';
const Careers = () => {
    return (
      <div>
        <Navbar />
        <div className="container py-5">
          <h2>Careers</h2>
          <p>List of job openings...</p>
        </div>
        <Opportunities />
        <JobApplicationForm />
        <Footer />
      </div>
    );
  };
  
  export default Careers;
  