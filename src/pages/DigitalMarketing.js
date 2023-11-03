import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import HeadTitle from "../components/HeadTitle";
import ServiceFeed from "../components/ServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";
import trello from "../assets/images/digitalMarketing/logos_trello.svg";
import canva from "../assets/images/digitalMarketing/devicon_canva.svg";
import slack from "../assets/images/digitalMarketing/devicon_slack.svg";
import gooan from "../assets/images/digitalMarketing/logos_google-ads.svg";
import gooad from "../assets/images/digitalMarketing/logos_google-analytics.svg";
import mailChimp from "../assets/images/digitalMarketing/logos_mailchimp-freddie.svg";
import imgOne from "../assets/images/digitalMarketing/service.png";
import imgTwo from "../assets/images/digitalMarketing/whyUs.png";

const DigitalMarketing = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Digital Marketing Service"
          intro="Our expert team is dedicated to crafting customized strategies, leveraging cutting-edge technology, and providing exceptional support to help you achieve your digital marketing goals. Whether it's SEO, content marketing, PPC, social media management, or more, we're here to make your brand shine in the digital world."
          bread="Digital Marketing"
        />
        <HeadTitle
          titleOne="Driving"
          highlight="Digital Success"
          titleTwo="with Engaging Strategies"
          subTitle="Maximizing Online Engagement and Results"
        />
        <ServiceFeed
          img={imgOne}
          titleOne="Comprehensive SEO Strategies"
          one="We offer tailored Search Engine Optimization (SEO) solutions to boost your website's visibility on major search engines, driving organic traffic and increasing your online presence."
          titleTwo="Strategic Content Marketing"
          two="Our team of experienced content creators and marketers will craft engaging content that resonates with your target audience, enhancing your brand authority and encouraging customer engagement."
          titleThree="Pay-Per-Click (PPC) Advertising"
          three="We manage effective PPC campaigns to maximize your return on investment, ensuring your ads reach the right audience at the right time."
          titleFour="Social Media Management"
          four="We develop and execute social media strategies that improve brand awareness, engage your followers, and drive traffic to your website, all while maintaining a strong online reputation."
          titleFive="Conversion Rate Optimization (CRO)"
          five="We analyze user behavior and make data-driven adjustments to your website, ultimately increasing conversion rates and maximizing your revenue."
          titleSix="Analytics and Reporting"
          six="Our transparent and insightful analytics and reporting help you understand the impact of our efforts, enabling you to make informed decisions for your digital marketing campaigns."
        />

        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Our Advantages, Delivering Excellence in Digital Marketing"
        />
        <ServiceFeed
          img={imgTwo}
          titleOne="Proven Track Record"
          one="We have a successful history of helping businesses achieve their digital marketing goals. Our portfolio showcases a diverse range of satisfied clients."
          titleTwo="Dedicated Team of Experts"
          two="Our team consists of experienced professionals with expertise in various aspects of digital marketing, ensuring you receive top-notch service and results."
          titleThree="Tailored Solutions"
          three="We understand that every business is unique. We craft personalized strategies to meet your specific goals and adapt to your industry's demands."
          titleFour="Cutting-Edge Technology"
          four="We stay up-to-date with the latest digital marketing tools and technologies to ensure that your campaigns are at the forefront of industry trends."
          titleFive="Exceptional Customer Support"
          five="Our commitment to customer satisfaction means we provide responsive and attentive support throughout your journey with us."
          titleSix="Cost-Effective Solutions"
          six="We offer competitive pricing without compromising on the quality of our services. Our focus is on delivering value to your business within your budget constraints."
        />

        <TechStack
          one={mailChimp}
          two={canva}
          three={slack}
          four={gooan}
          five={gooad}
          six={trello}
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

export default DigitalMarketing;
