import React from "react";
// import headImg from "../assets/images/Web-Interface/webDesign.png";
import whyImg from "../assets/images/Web-Interface/bannerWebDesign.jpg";
import processImg from "../assets/images/Web-Interface/design 1.svg";
import rectanglethin from "../assets/images/Shapes/RectangleThinGradiant.svg";
import cardIcon from "../assets/images/Shapes/cardIcon.svg";
import arrow from "../assets/images/Shapes/arrowRight.svg";

const WebDesignServiceFeed = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md h-[135px]">
            <h1 className="multi_color_heading text-lg sm:text-xl font-semibold">
              Responsive Design
            </h1>
            <p className="text-gray-600 text-sm">
              Websites that adapt seamlessly to all devices.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md h-[135px]">
            <h1 className="multi_color_heading text-lg sm:text-xl font-semibold">
              Custom Graphics
            </h1>
            <p className="text-gray-600 text-sm">
              Unique visuals that reflect your brand identity.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md h-[135px]">
            <h1 className="multi_color_heading text-lg sm:text-xl font-semibold">
              User-Friendly Interfaces
            </h1>
            <p className="text-gray-600 text-sm">
              Intuitive navigation for exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md h-[135px]">
            <h1 className="multi_color_heading text-lg sm:text-xl font-semibold">
              Performance Optimization
            </h1>
            <p className="text-gray-600 text-sm">
              Fast-loading, high-performance websites.
            </p>
          </div>
        </div>
      </div>
      <div className="container flex m-auto justify-evenly">
        <div className="w-full">
          {/* <div className="h-[50vh] lg:h-[40vh] xl:h-[30vh] 2xl:h-[25vh] w-full bg-gradient-to-r from-[#eff4ff67] to-[#ffffff62] lg:p-0 lg:mt-3.5 relative flex items-center overflow-hidden justify-center">
        <img
          className="absolute -z-10 object-cover object-center w-full h-full"
          src={headImg}
          alt=""
        />
        <h1 className="multi_color_heading text-5xl lg:text-8xl font-bold uppercase drop-shadow-md text-center">
          Design Matters
        </h1>
      </div> */}
          <div className="flex flex-col items-center lg:flex-row lg:px-20 xl:px-32 m-6">
            <div className="relative lg:w-1/2 lg:pr-6">
              <h1 className="multi_color_heading uppercase text-2xl lg:text-3xl font-bold mb-2 text-center">
                Why Choose Our Web Design Services?
              </h1>
              <div className="relative h-full flex flex-col gap-2">
                <img className="absolute h-full" src={rectanglethin} alt="" />
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem] gradient-border">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div className="">
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem]">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div>
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem]">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div>
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem]">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div>
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img
                src={whyImg}
                alt=""
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:px-20 xl:px-32 m-6">
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <img src={processImg} alt="" className="w-4/5 h-auto mt-40" />
            </div>
            <div className="relative lg:w-1/2 lg:pr-6">
              <h1 className="multi_color_heading uppercase text-2xl lg:text-3xl font-bold mb-2 text-center">
                Why Choose Our Web Design Services?
              </h1>
              <div className="relative h-full flex flex-col gap-2">
                <img className="absolute h-full" src={rectanglethin} alt="" />
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem] gradient-border">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div className="">
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem]">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div>
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem]">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div>
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-11/12 m-auto">
                  <div class="relative overflow-hidden bg-white shadow-md p-6 border-l-[1.9rem]">
                    <img
                      className="absolute bottom-0 right-0"
                      src={cardIcon}
                      alt=""
                    />
                    <div>
                      <div className="flex justify-start gap-4 items-center w-full">
                        <img className="h-8" src={arrow} alt="" />
                        <h3 className="uppercase multi_color_heading font-bold tracking-widest">
                          Creative Excellence
                        </h3>
                      </div>
                      <p className="text-[11px] uppercase w-11/12">
                        Our web designers are not just professionals; they are
                        artists who transform your ideas into visually appealing
                        websites. We tailor each design to match your brand
                        identity and create a unique online experience for your
                        visitors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDesignServiceFeed;
