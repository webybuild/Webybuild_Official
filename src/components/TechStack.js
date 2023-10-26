import React from "react";
import mui from "../assets/images/Web-Interface/webdesigntechstack/logos_material-ui.svg";
import tail from "../assets/images/Web-Interface/webdesigntechstack/devicon_tailwindcss.svg";
import fig from "../assets/images/Web-Interface/webdesigntechstack/logos_figma.svg";
import boots from "../assets/images/Web-Interface/webdesigntechstack/devicon_bootstrap-wordmark.svg";
import react from "../assets/images/Web-Interface/webdesigntechstack/logos_react.svg";
import css from "../assets/images/Web-Interface/webdesigntechstack/vscode-icons_file-type-css.svg";
import wopress from "../assets/images/Web-Interface/webdesigntechstack/skill-icons_wordpress.svg";
import js from "../assets/images/Web-Interface/webdesigntechstack/skill-icons_javascript.svg";
import jque from "../assets/images/Web-Interface/webdesigntechstack/devicon_jquery-wordmark.svg";

const TechStack = () => {
  const icons = [mui, tail, fig, boots, react, css, wopress, js, jque];
  return (
    <>
      <div className="p-4 w-full my-8 bg-gradient-to-r from-[#eff4ff67] to-[#ffffff62] lg:mt-8 relative flex flex-col items-center overflow-hidden justify-center">
        <div>
          <h1 className="multi_color_heading text-2xl font-bold uppercase drop-shadow-md text-center">
            We Work with following tech Stack
          </h1>
          <h1 className="multi_color_heading text-base lg:text-4xl font-bold uppercase drop-shadow-md text-center">
            Our Tech Stack is Flexible and Reliable
          </h1>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 lg:gap-8 lg:m-7">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-[30%] lg:w-full flex justify-center items-center"
            >
              <img src={icon} alt={"icons"} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
