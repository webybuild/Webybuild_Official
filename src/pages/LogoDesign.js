import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import HeadTitle from "../components/HeadTitle";
import ServiceFeed from "../components/ServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";
import imgOne from "../assets/images/logoDesign/service.png";
import imgTwo from "../assets/images/logoDesign/whyUs.png";
import ai from "../assets/images/logoDesign/logos_adobe-illustrator.svg";
import can from "../assets/images/logoDesign/devicon_canva.svg";
import fig from "../assets/images/logoDesign/skill-icons_figma-light.svg";
import photo from "../assets/images/logoDesign/skill-icons_photoshop.svg";

const LogoDesign = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Custom Logo Design Service"
          intro="We prioritize your vision and bring it to life, ensuring your logo leaves a lasting impression in a competitive market. Whether you seek innovation, proven expertise, or client-centered collaboration, we're your partner in logo design excellence."
          bread="Logo Design Service"
        />
        <HeadTitle
          titleOne="Logo"
          highlight="Design Excellence"
          titleTwo="Crafted Just for You"
          subTitle="Crafting Your Unique Logo, Professional Design, Unlimited Revisions, and Affordable Pricing"
        />
        <ServiceFeed
          img={imgOne}
          titleOne="Custom Logo Design"
          one="We create unique and tailor-made logos that represent your brand's identity and values. Your logo will stand out in the market and leave a lasting impression."
          titleTwo="Professional Designers"
          two="Our team consists of highly skilled and experienced logo designers who are dedicated to delivering exceptional results. They stay updated with the latest design trends to ensure your logo is modern and relevant."
          titleThree="Unlimited Revisions"
          three="We believe in the importance of client satisfaction. Therefore, we offer unlimited revisions until you are completely satisfied with your logo. Your input and feedback are highly valued."
          titleFour="Versatile Design"
          four="Our logos are designed to be versatile and scalable. They will look great on both digital platforms and print materials, ensuring consistent branding across all media."
          titleFive="Quick Turnaround"
          five="We understand that time is of the essence. You can expect a speedy turnaround without compromising the quality of your logo design. We respect your deadlines."
          titleSix="Affordable Pricing"
          six="Quality logo design doesn't have to break the bank. Our pricing is competitive and tailored to suit your budget. We offer a variety of packages to meet your specific needs."
        />
        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Connected Creation, Collaborating for the Perfect Logo"
        />
        <ServiceFeed
          img={imgTwo}
          titleOne="Client-Centric Approach"
          one="We prioritize your needs and ideas. Your vision is our starting point, and we work closely with you to create a logo that perfectly encapsulates your brand."
          titleTwo="Proven Track Record"
          two="Our portfolio is a testament to our success. We have delivered exceptional logo designs to a diverse range of clients across different industries."
          titleThree="Creativity and Innovation"
          three="We take pride in our ability to think outside the box. Our designers are committed to pushing creative boundaries and coming up with fresh and innovative logo concepts."
          titleFour="Client Testimonials"
          four="Our satisfied clients speak for us. We have received glowing testimonials for our work, which reflect our commitment to excellence in logo design."
          titleFive="Communication and Collaboration"
          five="We maintain open lines of communication with our clients throughout the design process. Your feedback is welcomed at every step, ensuring a collaborative and satisfying experience."
          titleSix="Industry Knowledge"
          six="Our team stays up-to-date with industry trends, ensuring that your logo design is not only visually appealing but also aligned with the latest design practices and market trends."
        />
        <TechStack one={ai} two={can} three={fig} four={photo} />
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

export default LogoDesign;
