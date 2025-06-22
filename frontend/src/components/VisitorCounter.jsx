import React, { useState, useEffect } from "react";
import "./Styles/VisitorCounter.css";

const VisitorCounter = () => {
  const [count, setCount] = useState(() => {
    // Retrieve from local storage if available, else start at 1211
    return parseInt(localStorage.getItem("visitorCount")) || 1211;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem("visitorCount", newCount); // Store count
        return newCount;
      });
    }, 60000); // Increase every 1 minute (60000ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="visitor-counter">
      <p>👀 Total Visitors:{count}</p>
      {/* <h2>{count}</h2> */}
    </div>
  );
};

export default VisitorCounter;
