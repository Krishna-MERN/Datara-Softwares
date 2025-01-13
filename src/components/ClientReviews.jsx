import React from "react";
import "./Styles/ClientReviews.css";

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      message: "The team delivered a fantastic website that exceeded my expectations!",
      rating: 5,
      service: "Web Development",
    },
    {
      id: 2,
      name: "Sarah Smith",
      message:
        "The mobile app they built for us is user-friendly and has been a hit with our customers.",
      rating: 4,
      service: "Mobile App Development",
    },
    {
      id: 3,
      name: "Michael Brown",
      message: "Their cloud solutions have greatly improved our scalability and efficiency.",
      rating: 5,
      service: "Cloud Solutions",
    },
    {
      id: 4,
      name: "Michael Brown",
      message: "Their cloud solutionr cloud solutions have greatly improved our scalability and efficiencys have greatly improved our scalability and efficiency.",
      rating: 5,
      service: "Cloud Solutions",
    },
    {
      id: 5,
      name: "Michael Brown",
      message: "Their cloud solutions have greatly improved our scalability and efficiency.",
      rating: 4,
      service: "Cloud Solutions",
    },
  ];

  return (
    <section className="reviews-section">
      <h2 className="section-title">Our Client Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3 className="client-name">{review.name}</h3>
            <p className="client-service">{review.service}</p>
            <p className="client-message">"{review.message}"</p>
            <div className="client-rating">
              Rating: {Array(Math.floor(review.rating))
                .fill("⭐")
                .join("")}
              {review.rating % 1 !== 0 && "⭐"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
