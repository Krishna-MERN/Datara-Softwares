import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './page-styles/about-us.css';
import React from "react";


const AboutUs = () => {
  return (
    <div className="about-page"> <Navbar />
            <section className="containers intro">
                <h1>About Us</h1>
                <p><strong>Innovating the Digital Future — One Solution at a Time</strong></p>
                <p>
                    Welcome to <strong>Datara Softwares</strong>, your reliable partner in cutting-edge software development and digital transformation. We are a dynamic team of passionate technologists, creative designers, and forward-thinking innovators dedicated to crafting impactful digital solutions. At Datara Softwares, we believe in the power of technology to transform businesses and improve everyday life. Our goal is to build intelligent, scalable, and user-centric applications that not only meet the demands of the present but also prepare businesses for the future. Whether it’s streamlining operations, enhancing customer experiences, or unlocking new opportunities, we are committed to empowering your growth through innovation and excellence.
</p>
            </section>

            <section className="containers who-we-are">
                <h2>Who We Are</h2>
                <p>
                   We are not just <strong>developers</strong> — we are <strong>problem-solvers</strong> who turn complexity into clarity. Whether you're a <strong>startup</strong> chasing a bold idea or an established <strong>enterprise</strong> aiming to scale with confidence, we bring the strategy and skills to make your vision a reality. Our services span across <strong>web and mobile development</strong>, <strong>cloud solutions</strong>, <strong>AI & ML integration</strong>, <strong>enterprise software</strong>, and beyond. We focus on delivering solutions that are not just functional, but also <strong>future-ready</strong>, user-focused, and built to scale. With Datara Softwares, you're not just building products — you're building <strong>possibilities</strong>.</p>
            </section>

            <section className="containers mission">
                <h2>Our Mission</h2>
                <p>To deliver <strong>innovative, secure, and scalable software solutions</strong> that help businesses accelerate their growth and stay ahead of the curve.</p>
            </section>

            <section className="containers vision">
                <h2>Our Vision</h2>
                <p>To become a <strong>global leader in software technology</strong>, shaping the future through innovation, agility, and excellence.</p>
            </section>

            <section className="containers services">
                <h2>What We Do</h2>
                <ul>
                    <li><strong>Custom Software Development</strong> – Tailored solutions built to fit your unique business needs.</li>
                    <li><strong>Mobile & Web Applications</strong> – Modern, intuitive, and high-performing apps for all platforms.</li>
                    <li><strong>AI & ML Integration</strong> – Intelligent automation and predictive insights to power smarter decisions.</li>
                    <li><strong>Cloud Solutions</strong> – Scalable and secure cloud architecture to future-proof your operations.</li>
                    <li><strong>UI/UX Design</strong> – Seamless user experiences that engage and convert.</li>
                </ul>
            </section>

            <section className="containers values">
                <h2>Our Core Values</h2>
                <ul>
                    <li><strong>Innovation</strong> — We never stop learning and pushing boundaries.</li>
                    <li><strong>Integrity</strong> — We operate with honesty, transparency, and ethics.</li>
                    <li><strong>Excellence</strong> — We strive for perfection in every project we take on.</li>
                    <li><strong>Client Success</strong> — Your success is our success.</li>
                </ul>
            </section>

            <section className="containers why-us">
                <h2>Why Choose Datara Softwares?</h2>
                <ul>
                    <li>Proven experience across industries</li>
                    <li>Agile and transparent development process</li>
                    <li>Dedicated support and maintenance</li>
                    <li>On-time, on-budget delivery</li>
                    <li>Future-ready technologies</li>
                </ul>
            </section>

            <section className="containers join-us">
                <h2>Join Us on the Journey</h2>
                <p>
                    We’re more than just a software company — we’re a team on a mission to build smarter solutions for a smarter world.
                    Whether you’re looking to launch a new product, optimize a process, or explore digital innovation — <strong>Datara Softwares is here to help.</strong>
                </p>
                <p><em>Let’s build something great together.</em></p>
            </section><Footer />
        </div>
        
  );
};

export default AboutUs;
