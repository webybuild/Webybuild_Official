import React from "react";
// import headImg from "../assets/images/Web-Interface/webDesign.png";

const ServiceFeed = ({
  img,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  titleFive,
  titleSix,
  one,
  two,
  three,
  four,
  five,
  six,
}) => {
  return (
    <>
      <section>
        <div className="flex flex-col lg:flex-row h-full w-full justify-center items-center px-2 md:px-12 xl:px-8 my-4 lg:my-16">
          <div className="flex-1 flex mb-10 lg:my-0 w-full h-full">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center ml-0 lg:ml-8 px-4 lg:px-0">
            <div className="text-left">
              {/* <h1 className="text-lg md:text-2xl font-bold mb-4 uppercase drop-shadow-md">
                Choose Us for Exceptional Web Design.
              </h1>
              <h2 className="text-sm md:text-xl font-semibold uppercase mb-4 drop-shadow-md">
                Your Vision, Our Expertise.
              </h2> */}
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  {titleOne} {" :- "}
                </span>{" "}
                {one}
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  {titleTwo}
                  {" :- "}{" "}
                </span>
                {two}
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  {titleThree} {" :- "}
                </span>{" "}
                {three}
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  {titleFour} {" :- "}
                </span>{" "}
                {four}
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  {titleFive} {" :- "}
                </span>{" "}
                {five}
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  {titleSix} {" :- "}
                </span>{" "}
                {six}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceFeed;
