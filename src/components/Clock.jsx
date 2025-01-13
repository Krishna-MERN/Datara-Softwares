// RealTimeClock.js
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  };

  return (
    <div style={styles.container}>
      <div style={styles.date}>{formatDate(currentTime)}</div>
      <div style={styles.time}>{formatTime(currentTime)}</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    // border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#333",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  date: {
    fontSize: "12px",
    marginBottom: "8px",
  },
  time: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Clock;
