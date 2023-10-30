import React from "react";

const TechStack = ({
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
}) => {
  const icons = [one, two, three, four, five, six, seven, eight, nine];
  return (
    <>
      <div className="p-4 w-full my-8 bg-gradient-to-r from-[#eff4ff67] to-[#ffffff62] lg:mt-8 relative flex flex-col items-center overflow-hidden justify-center">
        <div>
          <h1 className="multi_color_heading text-2xl font-bold uppercase drop-shadow-md text-center">
            We Work with following tech Stack
          </h1>
          <h1 className="multi_color_heading text-base lg:text-4xl font-bold uppercase drop-shadow-md text-center">
            Our Tech Stack is Flexible and Reliable
          </h1>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 lg:gap-8 lg:m-7">
          {icons.map((icon, index) =>
            typeof icon === "string" && icon.trim() !== "" ? (
              <div
                key={index}
                className="w-[30%] lg:w-full flex justify-center items-center"
              >
                <img src={icon} alt={"icons"} />
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default TechStack;
