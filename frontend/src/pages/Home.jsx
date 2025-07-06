import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Notices from '../components/Notices';
import Footer from '../components/Footer';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import FAQ from '../components/FAQ';
import ChatBot from '../components/ChatBot';
import ClientReviews from '../components/ClientReviews';
import Opportunities from '../components/Opportunities';
import ProductSlider from '../components/ProductSlider';


const Home = () => {
    console.log('Home component rendered'); // Debug log
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductSlider />
      <Services /> 
      <Opportunities />
      <Notices />
      <ClientReviews />
      <ContactUs />
      <FAQ />
      <ChatBot />
      <Footer />
    </div>
)};
export default Home;