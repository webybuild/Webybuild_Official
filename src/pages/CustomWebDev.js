import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import ServiceFeed from "../components/ServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";
import HeadTitle from "../components/HeadTitle";
import imgOne from "../assets/images/web_dev/service.png";
import imgTwo from "../assets/images/web_dev/whyUs.png";
import ex from "../assets/images/Web-Interface/ServiceIcons/skill-icons_expressjs-light.svg";
import node from "../assets/images/Web-Interface/ServiceIcons/logos_nodejs.svg";
import mongo from "../assets/images/Web-Interface/ServiceIcons/devicon_mongodb-wordmark.svg";
import mysql from "../assets/images/Web-Interface/ServiceIcons/logos_mysql.svg";
import redis from "../assets/images/Web-Interface/ServiceIcons/devicon_redis-wordmark.svg";
import kafka from "../assets/images/Web-Interface/ServiceIcons/logos_kafka.svg";
import stripe from "../assets/images/Web-Interface/ServiceIcons/Vector.svg";

const CustomWebDev = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Custom Website Development"
          intro="We create stunning, functional websites. Whether you're starting fresh or enhancing your existing site, our team brings your vision to life. From online stores to custom apps, we've got your web development covered."
          bread="Web Development"
        />
        <HeadTitle
          titleOne="We understand that"
          highlight="a well-crafted website"
          titleTwo="is the cornerstone of your online identity"
          subTitle="With a team of skilled and experienced web developers, we offer a range of services designed to take your web presence to new heights."
        />

        <ServiceFeed
          img={imgOne}
          titleOne="Custom Website Development"
          titleTwo="E-Commerce Solutions"
          titleThree="Content Management Systems (CMS)"
          titleFour="Web Application Development"
          titleFive="Search engine optimization"
          titleSix="Responsive Design"
          one="We design and develop tailor-made websites that are as unique as your brand. Our team of experienced developers will work closely with you to ensure your website not only looks exceptional but also functions flawlessly."
          two="If you're looking to sell products or services online, our e-commerce solutions have you covered. We can build a secure and user-friendly online store that drives sales and enhances customer satisfaction."
          three="Managing your website content should be easy. We specialize in creating and customizing CMS solutions like WordPress, Drupal, and Joomla, making it simple for you to update and maintain your site without the need for technical expertise."
          four="If you have a unique idea for a web application, we can turn it into reality. Our team is well-versed in web app development, from social networking platforms to complex business tools, and we'll guide you through the entire development process."
          five="In today's mobile-first world, your website must look and function flawlessly on any device. We design and optimize websites for a seamless user experience, regardless of whether your visitors are using a desktop, tablet, or smartphone."
          six="Building a beautiful website is just the beginning. Our digital marketing experts can help you with search engine optimization (SEO) and online marketing strategies to ensure your website attracts and engages your target audience."
        />
        <HeadTitle
          titleOne="we're the ideal"
          highlight="choice for businesses"
          titleTwo="seeking top-tier web development services."
          subTitle="Let us bring your online vision to life with creativity, precision, and a focus on your success."
        />
        <ServiceFeed
          img={imgTwo}
          titleOne="Expertise"
          titleTwo="Client-Centric Approach"
          titleThree="Quality Assurance"
          titleFour="Timely Delivery"
          titleFive="Ongoing Support"
          titleSix="Cutting-Edge Design"
          one="Our team consists of seasoned web developers and designers who have accumulated years of experience in the industry. This expertise allows us to create websites that not only look fantastic but also function flawlessly."
          two="At Webybuild, your vision and unique goals are our top priority. We work closely with you to understand your brand, objectives, and target audience."
          three="We are committed to providing websites that are bug-free and deliver a seamless user experience. Our quality assurance processes are rigorous, guaranteeing that your website is thoroughly tested and free from glitches."
          four="We understand that meeting deadlines is crucial in today's fast-paced digital world. We value your time, and our team works diligently to ensure that your project is delivered on schedule."
          five="Our relationship doesn't end once your website is live. We provide continuous support and maintenance services to keep your online presence in top shape. Whether you need updates, enhancements, or technical assistance, we're here to ensure your website remains current and effective."
          six="We're passionate about staying at the forefront of design trends and technology. Our team is always exploring new ideas and innovative solutions to make your website stand out in the competitive digital landscape."
        />
        <TechStack
          one={ex}
          two={node}
          eight={mongo}
          four={mysql}
          three={redis}
          six={kafka}
          seven={stripe}
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

export default CustomWebDev;
