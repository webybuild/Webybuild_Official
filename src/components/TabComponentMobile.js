import React, { useState, useEffect } from "react";
import image1 from "../assets/images/Web-Interface/06ca91177969401.64e316cf2d9bf.png";
import image2 from "../assets/images/Web-Interface/139593178551319.64e9fbf685ace.jpg";

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
    text: "Timeline 1",
  },
  {
    image: image2,
    text: "Timeline 2",
  },
  {
    image: image2,
    text: "Timeline 3",
  },
  {
    image: image2,
    text: "Timeline 4",
  },
  {
    image: image2,
    text: "Timeline 5",
  },
  {
    image: image2,
    text: "Timeline 6",
  },
  // Add more timeline items here if needed
];

const TabComponentMobile = () => {
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
    <div className="flex flex-col lg:flex-row lg:items-center">
      {/* Left Side: Div with Icons */}
      <div className="w-full lg:w-1/4 p-4 flex flex-col items-center lg:items-start">
        {timelineData.map((data, index) => (
          <div
            key={index}
            className={`mb-4 lg:mb-0 lg:mr-4 flex items-center ${
              index === currentIndex ? "active" : "hidden"
            }`}
          >
            <div
              onClick={() => handleClick(index)}
              className={`w-16 h-16 rounded-full border-2 border-gray-300 p-2 cursor-pointer flex items-center justify-center ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img className="w-8 h-8" src={data.image} alt="" />
            </div>

            <div className="w-16 mt-2 lg:w-auto lg:mt-0">
              <h1 className="text-sm text-center lg:text-left">{data.text}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side: Carousel */}
      <div className="w-full lg:w-3/4 relative">
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
  );
};

export default TabComponentMobile;
