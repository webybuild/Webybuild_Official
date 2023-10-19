import React from "react";

const AboutButtonCta = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm multi_color_heading font-medium capitalize">
            Let’s Craft Your Next Digital Story
          </h1>
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Have a Question?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b93166] to-[#5250E1]">
              Our Team is Happy to assist you
            </span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Achieve Digital Excellence, Partner with Our Web Development Wizards
            for Success
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="/"
              className="block py-2 px-4 text-black border font-medium gradient-border-button  hover:shadow-lg "
            >
              Contact Us
            </a>
            <a
              href="/"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border"
            >
              Whatsapp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutButtonCta;
