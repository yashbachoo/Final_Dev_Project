import { useState, useEffect } from "react";
import React from "react";





const slideStyles = {
    width: "100vw",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative", // Ensure position is relative for text placement
  };
  
  const textStyles = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "18px",
    textAlign: "center",
    width: "80%",
  };
  
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const sliderStyles = {
    position: "relative",
    height: "100%",
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

const ImageSlider = ({ slides, autoPlay = true, autoPlayInterval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  // Function to go to a specific slide
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-slideshow effect using useEffect
  useEffect(() => {
    if (!autoPlay) return; // Only run if autoPlay is enabled

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, [currentIndex, autoPlay, autoPlayInterval]); // Dependency array ensures it updates correctly

  const slideStylesWithBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div className="container">
    <div style={sliderStyles}>
      <div onClick={goToPrevious} style={leftArrowStyles}>
        ❰
      </div>
      <div onClick={goToNext} style={rightArrowStyles}>
        ❱
      </div>
      <div style={slideStylesWithBackground}>
        <div style={textStyles}>{slides[currentIndex].text}</div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => goToSlide(slideIndex)}
          >
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
