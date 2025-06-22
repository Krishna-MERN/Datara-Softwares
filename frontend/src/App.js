import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Noticpage from './pages/Noticpage';
import TermsAndConditionspage from './pages/TermsAndConditionspage';
import AdminDashboard from './pages/AdminDashboard';
import Application from './pages/Application';
import Servicepage from './pages/Servicepage';
import LoginModal from './components/LoginModal';
// import InternDashboard from './components/InternDashboard';
// import Internstatus from './components/Internstatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path='/InternDashboard' element={<InternDashboard />}/> */}
        {/* <Route path='/Internstatus' element={<Internstatus />}/> */}
        <Route path="/LoginModal" element={<LoginModal />}/>
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/noticpage" element={<Noticpage/>}/>
        <Route path="/Application" element={<Application />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/TermsAndConditionspage" element={<TermsAndConditionspage />} />
      </Routes>
    </Router>
  );
}

export default App;
