import React from "react";

const GetInTouch = ({ title, para, paratwo, but, space }) => {
  return (
    <>
      <div
        className={`w-full bg-black py-${space} px-4 lg:px-32 flex flex-col lg:flex-row`}
      >
        <div className="text-white flex-1 flex flex-col items-center justify-center">
          <div>
            <img src="" alt="" />
            <h1 className="text-center lg:text-left text-sm lg:text-base">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-2xl md:text-[2rem] leading-none font-bold text-center lg:text-left my-3 lg:my-0">
              {para}
            </p>
            <p className="text-center lg:text-left text-sm lg:text-base">
              {paratwo}
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="border p-3 mt-8 lg:mt-0 md:p-5 gradient-border-button">
            <h1 className="text-white">{but}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
