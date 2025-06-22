import './Styles/HeroSection.css';
import logo from './assets/hero5.png'; 
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import backgroundImage from './assets/hero.webp';
const HeroSection = () => {
   
  const headingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(headingRef.current, {
      strings: ["Businesses with Cutting-Edge Technology"], // Add more strings
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      // loop: true,
    });

    return () => {
      typed.destroy(); // Clean up Typed instance
    };
  }, []);

    return (
   
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   height: '100vh',
      // }}
    
        <section   className="hero bg-primary text-white text-center py-5"> 
         <div className='hero1'>
         <h1><span id='tag'>Empowering </span></h1> 
        <h1><span ref={headingRef} ><span id='tag'>Empowering </span>Businesses with Cutting-Edge Technology</span> </h1>  
        <h2><span id="title">Delivering scalable, secure, and user-friendly digital solutions.</span></h2>
        <h2>43+ Projects Delivered</h2>
        <h2>Trusted by 36+ Global Clients</h2>
        <a href='Contact'><button className='Primary-btn111'>Get a Free Consultation</button></a>
        <a href='AboutUs'><button className='secondry-btn111'>Learn More About Us</button></a>
        </div>
        <img src={logo} alt='logo' />
        
      </section>
    );
  };
  
  export default HeroSection;
  