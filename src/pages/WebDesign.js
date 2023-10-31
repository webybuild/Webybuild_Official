import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import ServiceFeed from "../components/ServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";
import HeadTitle from "../components/HeadTitle";
import imgOne from "../assets/images/web_design/service.png";
import imgTwo from "../assets/images/web_design/whyUs.png";

import mui from "../assets/images/Web-Interface/webdesigntechstack/logos_material-ui.svg";
import tail from "../assets/images/Web-Interface/webdesigntechstack/devicon_tailwindcss.svg";
import fig from "../assets/images/Web-Interface/webdesigntechstack/logos_figma.svg";
import boots from "../assets/images/Web-Interface/webdesigntechstack/devicon_bootstrap-wordmark.svg";
import react from "../assets/images/Web-Interface/webdesigntechstack/logos_react.svg";
import css from "../assets/images/Web-Interface/webdesigntechstack/vscode-icons_file-type-css.svg";
import wopress from "../assets/images/Web-Interface/webdesigntechstack/skill-icons_wordpress.svg";
import js from "../assets/images/Web-Interface/webdesigntechstack/skill-icons_javascript.svg";
import jque from "../assets/images/Web-Interface/webdesigntechstack/devicon_jquery-wordmark.svg";

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
          bread="Web Design"
        />
        <HeadTitle
          titleOne="Transform Your"
          highlight="Vision into Reality"
          titleTwo="with Our Web Design Services"
          subTitle="We understand the significance of captivating web design in creating a lasting impact."
        />
        <ServiceFeed
          img={imgOne}
          titleOne="Custom Web Design"
          titleTwo="Responsive Design"
          titleThree="E-Commerce Web Design"
          titleFour="Redesign and Modernization open."
          titleFive="User Experience (UX) Design"
          titleSix="Landing Page Design"
          one="Every business is unique, and your website should reflect that.
        Our custom web design services ensure that your site is tailored
        to your brand's identity, offering a one-of-a-kind online
        presence that sets you apart from the competition."
          two="In the age of mobile devices, a responsive design is crucial. We
        create websites that adapt seamlessly to all screen sizes,
        ensuring an optimal user experience on desktops, tablets, and
        smartphones."
          three="For businesses looking to sell products or services online, our
        e-commerce web design expertise comes into play. We craft
        engaging and secure online shopping experiences, boosting your
        online sales and customer satisfaction."
          four="If your existing website needs a facelift, we can help. Our web
        designers will breathe new life into your outdated site,
        ensuring it meets modern design standards and user expectations."
          five="User experience is key to keeping visitors engaged. We design
        with the user in mind, creating intuitive navigation and user
        interfaces to enhance the overall experience."
          six="Landing pages are essential for marketing and lead generation.
        We specialize in creating high-converting landing pages that
        drive results for your business."
        />
        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Choosing us means choosing a partner dedicated to transforming your online presence. Enhancing your brand's identity, and engaging your audience effectively."
        />
        <ServiceFeed
          img={imgTwo}
          titleOne="Creative Excellence"
          titleTwo="Tailored Approach"
          titleThree="User-Centric Focus"
          titleFour="Mobile-First Approach"
          titleFive="Ongoing Support"
          titleSix="Proven Expertise"
          one="  Our web designers are passionate about their craft and committed
        to delivering creative excellence. With a keen eye for design
        and a dedication to innovation, we ensure that your website
        stands out with visually stunning and unique designs."
          two="       We understand that your business is unique, and we take a
        tailored approach to web design. We work closely with you to
        grasp your brand identity, goals, and objectives, customizing
        every aspect of the design to meet your specific needs and
        vision."
          three="We understand that your business is unique, and we take a
        tailored approach to web design. We work closely with you to
        grasp your brand identity, goals, and objectives, customizing
        every aspect of the design to meet your specific needs and
        vision."
          four="In an era dominated by mobile devices, our responsive designs
        guarantee that your website looks great and functions seamlessly
        on all screen sizes. We adopt a mobile-first approach, ensuring
        that your site is accessible and user-friendly, whether your
        visitors are on a desktop, tablet, or smartphone."
          five=" Our commitment to your success doesn't end with the design
        phase. We provide continued support and maintenance services to
        keep your website fresh, up-to-date, and secure. We're here to
        help you as your business grows and evolves."
          six="With a track record of successful web design projects, our team
        of designers has the experience and expertise needed to bring
        your vision to life. We've helped numerous businesses across
        various industries create visually stunning and highly
        functional websites that drive results."
        />
        <TechStack
          one={mui}
          two={tail}
          three={fig}
          four={boots}
          five={react}
          six={css}
          seven={wopress}
          eight={js}
          nine={jque}
        />
        <GetInTouch
          title="Get In Touch"
          para="ARE YOU LOOKING FOR A WEB DEVELOPMENT COMPANY TO MANAGE & EXECUTE A
        PROFESSIONAL WEBSITE AND APPS FOR YOUR BUSINESS"
          but="Get Started Now"
          paratwo="Contact us with different medium whatsapp, call or mail, We are
        open."
        />
      </section>
    </>
  );
};

export default WebDesign;
