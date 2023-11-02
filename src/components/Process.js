import React from "react";
import flowProcess from "../assets/images/Shapes/flowProcess.svg";
import HeadTitle from "./HeadTitle";
// import { Link } from "react-router-dom";

const Process = () => {
  return (
    <>
      <section>
        <HeadTitle
          titleOne="Crafting"
          highlight="the Foundation"
          titleTwo="Digital Success"
          subTitle="Success begins with planning, design, development, testing, delivering a product meeting user and business needs."
        />
        <div className="flex flex-col lg:flex-row h-full w-full px-4 md:px-12 xl:px-20 my-4 lg:my-16">
          <div className="flex-1 flex justify-center my-4 lg:my-0">
            <img className="w-3/4" src={flowProcess} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="text-left">
              <h1 className="text-lg md:text-2xl font-bold mb-4 uppercase drop-shadow-md">
                Turning Ideas into User-Friendly Realities
              </h1>
              <h2 className="text-sm md:text-xl font-semibold uppercase mb-4 drop-shadow-md">
                Guiding Your Project Toward Success, One Step at a Time
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Planning{" :- "}
                </span>{" "}
                Imagine this phase as the blueprint of your project. It's like
                preparing a recipe you jot down every ingredient and step
                without making assumptions. This meticulous planning ensures we
                know exactly what we're cooking up, aligning our project's goals
                with the people who will use it.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Design{" :- "}{" "}
                </span>
                Now, picture the design phase as the creative part, like
                decorating a cake. We take the wireframes and turn them into
                something visually appealing, while still making sure it tastes
                great for our users. It's about making something that's not only
                beautiful but also user-friendly.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Development{" :- "}
                </span>{" "}
                Development is where the magic happens. It's like building a
                sturdy foundation for a house. We're crafting clean, efficient
                code, which is like the structural support of the building. This
                strong foundation ensures our project will last and adapt over
                time.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Testing{" :- "}
                </span>{" "}
                The testing phase is where we give the project a final check
                before it's served. Think of it as the last taste test before a
                dish is ready to be presented. We look for any imperfections and
                make sure everything is just right. Once it's perfect, we serve
                it up to our clients, marking the culmination of our journey.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Maintenance{" :- "}
                </span>{" "}
                Additionally, we ensure regular system upgrades to keep pace
                with the latest software and version releases.
              </p>
              {/* <button className="border gradient-border-button mt-8 text-black font-semibold py-2 px-4 transition duration-300 ease-in-out transform hover:drop-shadow-md uppercase">
                <Link to="/contacts">Contact Us</Link>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
