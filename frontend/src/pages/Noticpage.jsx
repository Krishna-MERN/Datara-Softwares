
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
       {/* Notices Section */}
       <div className="notices-section">
        <h2>Latest Notices</h2>
        <ul className="notices-list">
          <li>
            <span className="notice-date">Jan 10, 2025:</span> Website
            maintenance scheduled from 2:00 PM to 5:00 PM. <a href='www.google.com'> <span>View Now</span></a>
          </li>
          <li>
            <span className="notice-date">Jan 5, 2025:</span> New software
            updates available for all clients.<a href=''> <span>View Now</span></a>
          </li>
          <li>
            <span className="notice-date">Dec 20, 2024:</span> Office closed for
            holidays from Dec 25 to Jan 1.<a href=''> <span>View Now</span></a>
          </li>
          <li>
            <span className="notice-date">Dec 20, 2024:</span> Office closed for
            holidays from Dec 25 to Jan 1.<a href=''> <span>View Now</span></a>
          </li>
          <li>
            <span className="notice-date">Dec 20, 2024:</span> Office closed for
            holidays from Dec 25 to Jan 1.<a href=''> <span>View Now</span></a>
          </li>
          <li>
            <span className="notice-date">Dec 20, 2024:</span> Office closed for
            holidays from Dec 25 to Jan 1.<a href=''> <span>View Now</span></a>
          </li>
          <li>
            <span className="notice-date">Dec 20, 2024:</span> Office closed for
            holidays from Dec 25 to Jan 1.<a href=''> <span>View Now</span></a>
          </li>
          
     
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
