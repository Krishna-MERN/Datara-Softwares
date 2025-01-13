import React, { useState } from "react";
import "./Styles/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of internships do you offer?",
      answer:
        "We offer internships in various domains, including software development, data analysis, digital marketing, and project management.",
    },
    {
      question: "How can I apply for an internship?",
      answer:
        "You can apply for an internship by visiting our careers page and submitting your application along with your resume.",
    },
    {
      question: "What skills are required for software development projects?",
      answer:
        "Basic programming skills, problem-solving ability, and familiarity with tools like Git and Agile methodology are recommended for software development projects.",
    },
    {
      question: "Are internships remote or on-site?",
      answer:
        "We provide both remote and on-site internships depending on the project and team requirements.",
    },
    {
      question: "Can I get a certificate for completing an internship?",
      answer:
        "Yes, all interns receive a certificate upon successful completion of their internship.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
