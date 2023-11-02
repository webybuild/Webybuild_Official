import React from "react";
// import navIcon from "../assets/images/Web-Interface/land1.jpg";
import Typewriter from "typewriter-effect";
import quote from "../assets/images/Shapes/quotes.png";
import whatsapp from "../assets/images/Shapes/whatsapp.png";
import manifest from "../assets/images/portfolio/manifest.svg";
import desginfirm from "../assets/images/portfolio/designFirms.svg";
import googlereview from "../assets/images/portfolio/google.svg";
import clutch from "../assets/images/portfolio/Clutch.svg";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const isNonMobile = useMediaQuery("(min-width: 1028px)");
  const background = isNonMobile ? "bg-landing " : "bg-landing-gradiant";

  return (
    <header
      className={`h-4/5 lg:h-[95vh] w-full mt-[-4rem] ${background}  p-4 lg:p-0 relative flex items-center overflow-hidden`}
    >
      <div className="w-full flex mt-0 lg:mt-16 xl:mt-0 justify-center items-center">
        <div className="mt-16 md:mt-8 lg:my-auto text-center lg:text-center w-full lg:w-1/2 bg-none lg:bg-[#ffffff73] py-4 px-4 lg:px-20 lg:backdrop-blur-md backdrop-blur-none drop-shadow-lg rounded-lg">
          <div className="mb-4 inline-flex items-center">
            <p className="gradient-border block subpixel-antialiased font-sans text-lg leading-normal mr-3 py-0.5 pr-3 font-light text-black  uppercase border-r border-black">
              New
            </p>
            <p className="subpixel-antialiased font-sans text-lg leading-normal flex items-center font-bold uppercase">
              Webybuild
            </p>
          </div>
          <h1 className="block uppercase subpixel-antialiased tracking-normal text-2xl lg:text-[1.5rem] xl:text-[2rem] mb-4 leading-tight text-black">
            The perfect{" "}
            <span className="multi_color_heading font-bold">foundation</span>{" "}
            for your
            <span style={{ display: "block" }}>
              <Typewriter
                options={{
                  strings: [
                    " Business",
                    " Portfolio",
                    " Online Store",
                    " Blog",
                    " Branding",
                    " Educational",
                    " Nonprofit",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <h2 className="text-xs sm:text-sm text-black my-4 md:my-12 lg:my-0 font-normal">
            Welcome to our web development expertise. We create custom digital
            solutions to boost your brand and online presence. Unleash your
            business potential with our expert team.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-0 md:gap-14">
            <div>
              <button className="w-48 shadow-[10px_12px_1px_0px_#983a8d12] md:shadow-[36px_12px_1px_0px_#983a8d12] border gradient-border-button mt-5 text-black font-semibold py-2 px-4 transition duration-300 ease-in-out transform hover:drop-shadow-md uppercase">
                <div className="flex justify-center items-center gap-1 md:gap-3">
                  <div>
                    <img className="w-6" src={quote} alt="" />
                  </div>

                  <div>
                    <Link to="/contacts" className="text-xs lg:text-base">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </button>
            </div>
            <div>
              <button className="w-48 shadow-[10px_12px_1px_0px_#983a8d12] md:shadow-[36px_12px_1px_0px_#983a8d12] border gradient-border-button mt-5 text-black font-semibold py-2 px-4 transition duration-300 ease-in-out transform hover:drop-shadow-md uppercase">
                <div className="flex justify-center items-center gap-1 md:gap-3">
                  <div>
                    <img className="w-6" src={whatsapp} alt="" />
                  </div>

                  <div>
                    <a
                      className="text-xs lg:text-base"
                      href="https://wa.me/918809867438"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whatsapp Us
                    </a>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-7 justify-center lg:mb-8 xl:mb-0">
            <img className="w-[13%] lg:mr-4" src={clutch} alt="" />
            <img className="w-[15%]" src={desginfirm} alt="" />
            <img className="w-[20%] lg:w-[18%] lg:ml-5" src={manifest} alt="" />
            <img className="w-[21%]" src={googlereview} alt="" />
          </div>
        </div>
        {/* <div className="container mx-auto lg:flex-1 my-4 lg:my-0">
          <img
            className="mx-auto absolute left-0 lg:static -z-10 scale-150 lg:scale-100"
            src={navIcon}
            alt="han"
          />
        </div> */}
        {/* <div
        style={{ backgroundImage: `url(${navIcon})` }}
        className="background"
      ></div> */}
      </div>
    </header>
  );
};

export default Header;
