import ContactForm from '../components/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
