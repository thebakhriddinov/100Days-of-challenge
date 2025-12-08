import { useState } from "react";
import "./ImageSlider.css";

import barca from "../assets/barca.jpg";
import barcelona from "../assets/barcelona.jpg";
import campnou from "../assets/campnou.jpg";
import campnou2 from "../assets/campnou2.jpg";
import pedri from "../assets/pedri.jpg";


const images = [barca, barcelona, campnou, campnou2, pedri];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <h2 className="heading">Day 24 FC Barcelona Image Slider</h2>

      <div className="slider">

        <button className="nav-btn left-btn" onClick={prevSlide}>
          ❮
        </button>

        <div className="image-wrapper">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>

        <button className="nav-btn nav-btn2 right-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      <p className="caption">
        {currentIndex + 1} / {images.length} — FC Barcelona
      </p>
    </div>
  );
}