import React, { useState, useEffect } from "react";
import cover1 from "../Photo/slider.jpg"; // Example image 1
import cover2 from "../Photo/slider3.jpg"; // Example image 2
import cover3 from "../Photo/slider2.jpg"; // Example image 3
import "../Home/Home.css";

function Homepage() {
  const images = [cover1, cover2, cover3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="main-container">
      <div className="carousel-container">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-slide">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="carousel-image"
          />
        </div>
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Homepage;
