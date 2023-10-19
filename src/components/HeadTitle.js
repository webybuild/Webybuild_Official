import React from "react";

const HeadTitle = ({ titleOne, highlight, titleTwo, subTitle }) => {
  return (
    <>
      <div className="flex flex-col w-full xl:px-20 my-8 lg:my-16">
        <div className="w-full mx-auto text-center">
          <h1 className="text-2xl md:text-2xl lg:text-3xl uppercase font-bold mb-4 text-black drop-shadow-md px-4 md:px-2">
            {titleOne}{" "}
            <span className="multi_color_heading"> {highlight} </span>{" "}
            {titleTwo}
          </h1>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 px-2">
            {subTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeadTitle;
