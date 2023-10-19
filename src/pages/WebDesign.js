import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import ServiceFeed from "../components/WebDesignServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";

const WebDesign = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Website Design and Redesign Service"
          intro="We understand that web design is more than just looks
        it's about creating a user-friendly and engaging digital experience.
        Our skilled team of designers and developers keeps up with the
        latest web design trends and technologies to bring your vision to
        life. Let's turn your ideas into reality."
        />
        <ServiceFeed />
        <TechStack />
        <GetInTouch
          title="Get In Touch"
          para="ARE YOU LOOKING FOR A WEB DESIGN COMPANY TO MANAGE & EXECUTE A
              PROFESSIONAL WEBSITE FOR YOUR BUSINESS"
          but="Get Started Now"
          paratwo="Contact us with different medium whatsapp, call or mail, We are
              open."
        />
      </section>
    </>
  );
};

export default WebDesign;
