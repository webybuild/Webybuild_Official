import React from "react";

const ServiceBanner = ({ title, intro, bread }) => {
  return (
    <>
      <section className="p-8 lg:p-16 background mt-0 lg:mt-[-4rem] lg:pt-28">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <div className="flex-1">
            <p className="text-[10px] md:text-sm text-black flex justify-center items-center font-bold">
              Home / Services /{" "}
              <span className="text-white bg-[#7c44af] px-2 py-1 rounded text-[10px] md:text-sm ml-2">
                {" "}
                {bread}
              </span>
            </p>
            <div className="flex justify-start lg:justify-end gap-2">
              <h1 className="font-extrabold uppercase text-2xl lg:text-right lg:text-6xl mt-2 multi_color_heading">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <h2 className="font-light capitalize text-xs lg:text-left lg:text-base mt-2 text-black">
              {intro}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
