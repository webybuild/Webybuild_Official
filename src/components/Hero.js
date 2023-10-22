import React from "react";
import heroImg from "../assets/images/Web-Interface/heroImg.jpg";
import rocket from "../assets/images/Shapes/20-years.png";
import hand from "../assets/images/Shapes/talented-squad.png";
import app from "../assets/images/Shapes/apps.png";
import projects from "../assets/images/Shapes/projects--delivered.png";
import countries from "../assets/images/Shapes/120-countries.png";
import customer from "../assets/images/Shapes/client-satisfication.png";
import { Link } from "react-router-dom";

const links = [
  { name: "Web Design", href: "/services/web-design" },
  { name: "Web Development", href: "/services/custom-web-development" },
  { name: "Mobile Application", href: "/services/inventory-management" },
  { name: "Inventry Management", href: "/services/mobile-application" },
  { name: "Digital Marketing", href: "/services/cloud-services" },
  { name: "Cloud Services", href: "/services/logo-design" },
  { name: "Logo Design", href: "/services/digital-marketing" },
];

const cardsData = [
  {
    icon: rocket,
    title: "5+",
    description: "Years Experience",
  },
  {
    icon: hand,
    title: "4+",
    description: "Talented Squad",
  },
  {
    icon: app,
    title: "99+",
    description: "Apps Developed",
  },
  {
    icon: projects,
    title: "100%",
    description: "Projects Delivered",
  },
  {
    icon: countries,
    title: "50+",
    description: "Countries Served",
  },
  {
    icon: customer,
    title: "100%",
    description: "Client Satisfaction",
  },
];

const Card = ({ icon, title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 relative rounded-lg shadow-md bg-white mb-4">
    <div className="absolute top-0 left-0 bg-gradient-to-br from-black via-white to-black w-8 h-8 rounded-tl-lg rounded-br-3xl"></div>

    <img src={icon} alt="Rocket Icon" className="mx-auto mb-2 w-12 h-12" />
    <div className="text-center">
      <p className="text-xl font-semibold multi_color_heading">{title}</p>
      <p className="text-sm multi_color_heading">{description}</p>
    </div>
  </div>
);

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#467eff] to-[#ffffff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#656de1] to-[#ffffff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-full px-6 lg:px-16">
        <div className="w-full lg:mx-5 flex flex-col-reverse lg:flex-row">
          <div className="mt-0 lg:mt-16 lg:my-auto flex-1 text-left lg:pl-12">
            <h2 className="text-2xl md:text-2xl lg:text-3xl text-center lg:text-left font-light tracking-tight text-black sm:text-3xl uppercase drop-shadow-md">
              Web Development Excellence by
              <span className="multi_color_heading"> Webybuild </span>
            </h2>
            <p className="mt-6 text-center lg:text-left text-base md:text-lg leading-8 font-light">
              When you collaborate with Webybuild, you're not just getting a web
              development partner, you're gaining a dedicated team that's
              passionate about bringing your digital vision to life.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-x-8 gap-y-6 text-base font-semibold leading-7  sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link key={link.name} to={link.href} className="text_effect">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="container m-auto flex justify-center items-center lg:flex-1 my-4 lg:my-0">
            <img
              className="w-auto h-auto object-cover"
              src={heroImg}
              alt="heroImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row px-2 sm:px-16 pt-16 gap-6 lg:gap-1">
        <div className="flex-1 flex items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex-1 px-4">
          <div className="max-w-full lg:max-w-lg text-center lg:text-left">
            <h1 className="text-2xl md:text-2xl lg:text-3xl uppercase font-light mb-4 text-black drop-shadow-md">
              Experience
              <span className="multi_color_heading"> World-class </span> Agile
              Product Development
            </h1>
            <p className="text-base md:text-lg font-light lg:text-lg text-gray-700 mb-8">
              Harness digitized business solutions comprising web, Android, and
              iOS app solutions leveraging Blockchain, AI Chatbots, Machine
              Learning, and IoT technologies for your startup or enterprise.
            </p>
            <p className="text-sm font-normal lg:text-lg text-gray-700 mb-8">
              Build and deploy thriving agile solutions that help you design,
              develop, and scale.
            </p>
          </div>
          <div className="max-w-full lg:max-w-lg my-8 text-center lg:text-left">
            <h1 className="text-sm md:text-base lg:text-lg font-bold mb-4 uppercase text-black drop-shadow-md">
              Let's Start a New Project Together
            </h1>
            <button className="border gradient-border-button text-black font-semibold py-2 px-4 transition duration-300 ease-in-out transform hover:drop-shadow-md uppercase">
              <Link to="/contacts">Request A Quote</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
