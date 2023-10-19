import React, { useState, useEffect } from "react";
import image1 from "../assets/images/Web-Interface/06ca91177969401.64e316cf2d9bf.png";
import image2 from "../assets/images/Web-Interface/139593178551319.64e9fbf685ace.jpg";
import TabComponentMobile from "./TabComponentMobile";

const images = [
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  // Add more imported images here if needed
];

const timelineData = [
  {
    image: image1,
    text: "Discovery & Planning",
  },
  {
    image: image2,
    text: "User Journey Mapping",
  },
  {
    image: image2,
    text: "System Design Prototyping",
  },
  {
    image: image2,
    text: "Software Engineering & Development",
  },
  {
    image: image2,
    text: "Quality Analysis & Testing",
  },
  {
    image: image2,
    text: "Flawless Deployment",
  },
  // Add more timeline items here if needed
];

const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex">
        {/* Left Side: Div with Icons */}
        <div className="w-1/4 p-4 flex flex-col items-center">
          {timelineData.map((data, index) => (
            <div key={index} className="relative">
              <div className="flex gap-8 w-56">
                <div
                  onClick={() => handleClick(index)}
                  className={`w-16 h-16 rounded-full border-2 border-gray-300 p-2 cursor-pointer flex items-center justify-center ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <img className="w-8 h-8" src={data.image} alt="" />
                </div>

                <div className="w-1/4 flex items-center">
                  <div key={index} className="text-left mt-2">
                    <h1 className="text-sm">{data.text}</h1>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                {index < timelineData.length - 1 && (
                  <div className="mt-10 mb-[-1.5rem] ml-[1.9rem] transform -translate-y-1/2 border-r-4 border-dotted border-gray-300 h-16"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Text Next to Circle */}

        {/* Right Side: Carousel */}
        <div className="w-3/4 relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide absolute w-full h-full transform transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <TabComponentMobile />
    </>
  );
};

export default VerticalCarousel;
