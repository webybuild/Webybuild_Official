import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import founder from "../assets/images/portfolio/HarshJ.png";
import AboutButtonCta from "../components/AboutButtonCta";
import Stats from "../components/Stats";

const About = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="We Build Bridges between Companies and customers"
          intro=" To build software that gives customer-facing teams at small and
          medium seized business the ability to create fruitful and enduring
          realationships with customers"
        />

        <div className="my-14 sm:flex sm:px-8 md:px-0 lg:px-32">
          <div className="sm:w-1/2 flex justify-center items-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              Together We Are Strong
            </h1>
          </div>
          <div className="sm:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-4xl leading-9">
              Our crew is always getting bigger, and we all share one big dream:
              to help your business reach a level of success it's never seen
              before, right at the very top.
            </h1>
            <h2 className="mt-5 text-gray-600 text-lg md:text-base">
              WebyBuild is like the brainchild of Harsh Jha, born in 2021. We're
              not just your run-of-the-mill web development company; we're more
              like digital architects with a global twist. Hailing from the
              heart of India, our crew defies distance by collaborating with
              businesses and individuals from all over the world. We work our
              tech magic from afar, conjuring up web applications that are not
              just great but downright impressive. Think of us as your trusty
              sidekick in the vast digital universe, dedicated to turning your
              ideas into captivating, user-friendly websites. Come join our
              exciting journey, where innovation, excellence, and success are
              part of the grand adventure.
            </h2>
          </div>
        </div>

        <div>
          <div className="flex px-32">
            <div className="flex-1 flex justify-center items-center gap-6 mt-6">
              <div className="w-1/4">
                <img
                  className="rounded-full border-4 border-gray-300"
                  src={founder}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold uppercase text-center">Harsh J </h1>
                <h1 className="text-gray-400">Founder & CEO</h1>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>

              <h1 className="text-3xl font-light">
                We're not just a company, we're your partners in the digital
                frontier.
              </h1>
            </div>
          </div>
        </div>
        <Stats />
        <AboutButtonCta />
      </section>
    </>
  );
};

export default About;
