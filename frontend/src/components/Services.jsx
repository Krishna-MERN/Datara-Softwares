import React from "react";
import "./Styles/Services.css";
import logo1 from './assets/hero1.webp';
import logo3 from './assets/2.webp';
import logo2 from './assets/3.webp';
import logo4 from './assets/1.jpg';
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Build responsive and modern websites tailored to your needs.",
      image:  logo1,// Replace with your image URL
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Create user-friendly mobile applications for Android and iOS platforms.",
      image: logo2, // Replace with your image URL
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Leverage cloud technology to enhance scalability and security.",
      image: logo3, // Replace with your image URL
    },
    {
      id: 4,
      title: "Custon Software Development",
      description: "Leverage cloud technology to enhance scalability and security.",
      image: logo4, // Replace with your image URL
    },
  ];

  return (

  <section className="services-section ">
       <h2 className="section-title">Our Software Services</h2>
       <a id="anchor" href="/Servicepage">
       <div className="cards-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="image-container">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div></a>
    </section>
   
  );
};

export default Services;
