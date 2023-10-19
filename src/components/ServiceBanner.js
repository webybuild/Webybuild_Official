import React from "react";

const ServiceBanner = ({ title, intro }) => {
  return (
    <>
      <section className="p-16 background mt-[-4rem] pt-28">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <p className="text-sm text-white">Home / About</p>
            <div className="flex justify-end gap-2">
              <h1 className="font-extrabold uppercase text-xl lg:text-right lg:text-6xl mt-2 text-white">
                {title}
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            <h2 className="font-light capitalize text-xl lg:text-left lg:text-base mt-2 text-white">
              {intro}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
