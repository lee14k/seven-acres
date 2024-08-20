'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  './Flowers_Lo-Res-8305.jpg', // replace with your image URLs
  './Flowers_Lo-Res-8316.jpg', 
  './Flowers_Lo-Res-8319.jpg',
  './Flowers_Lo-Res-8338.jpg',
  // add more URLs as needed
];

function Homeslider() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 60 seconds
  
      return () => clearInterval(interval);
    }, [activeIndex]); // add activeIndex as dependency to re-run useEffect when activeIndex changes
  
    return (
      <div className="slideshow ">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
          <Image
          src='/strokesa2.png'
          height={900}
          width={900}
          className="overlay-logo"
          alt="Seven Acre Gardens Logo"
          />
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
    );
  }

export default Homeslider;
