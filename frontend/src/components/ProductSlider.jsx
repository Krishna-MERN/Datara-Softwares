import React from "react";
import "./Styles/ProductSlider.css";
import dschat from './Projectimg/dschat.png'; 
import Docket from './Projectimg/DocketSS.png'; 
import attendance from './Projectimg/attendanceapp2ss.jpeg'; 
// import dlearning from './Projectimg/DLearning.jpeg'; 

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "High quality shytrht5rjtrjtrjmtdoftware product",
      image: dschat,
    },
    // {
    //   id: 2,
    //   name: "Product B",
    //   description: "Robust trainintjmtrmtfjg module",
    //   image: dlearning,
    // },
    {
      id: 3,
      name: "Product C",
      description: "Enterprise-level solution",
      image: attendance,
    },
    {
      id: 4,
      name: "Product D",
      description: "Powerful SaaS tool",
      image: Docket,
    },
  ];

  return (
    <div className="slider-container">
        <h1>Our Products / Softwares</h1>
      <div className="slider-track">
        {products.concat(products).map((product, index) => (
          <div className="slider-item" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSlider;
