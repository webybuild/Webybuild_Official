import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import HeadTitle from "../components/HeadTitle";
import ServiceFeed from "../components/ServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";

const MobileApp = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Mobile Application Service"
          intro="Discover how we harness the potential of React Native to create exceptional mobile applications that span across both iOS and Android platforms, offering you a cost-effective solution for reaching a broader audience while ensuring native-like performance and unique, customized user experiences."
          bread="Mobile Application"
        />
        <HeadTitle
          titleOne="Seamless"
          highlight="User Experiences"
          titleTwo="with React Native"
          subTitle="Bringing Your App to iOS and Android, Without Breaking the Bank"
        />
        <ServiceFeed
          //   img={imgOne}
          titleOne="Cross-Platform Development"
          titleTwo="Native Performance"
          titleThree="Reusable Code"
          titleFour="Community Support"
          titleFive="Custom UI Components"
          titleSix="Cost-Effective Solutions"
          one="We leverage the power of React Native, a popular JavaScript framework, to develop mobile applications that run seamlessly on both iOS and Android platforms. This ensures a wider reach for your app with reduced development time and costs."
          two="With React Native, we create apps that provide a native-like experience. Users won't notice the difference, as the apps are fast, responsive, and have access to device-specific features and capabilities."
          three=" React Native allows us to write a single codebase for both platforms, reducing the need for duplicating efforts. This not only accelerates development but also simplifies maintenance and updates."
          four="We stay updated with the latest advancements in React Native, benefiting from the active community of developers and the constant improvements in the framework. This ensures that your app remains cutting-edge and secure."
          five="We can create custom, unique UI components tailored to your brand and app requirements, providing a personalized and engaging user experience."
          six="By using React Native, we offer cost-effective mobile app development solutions, enabling you to reach a wider audience without breaking the bank."
        />
        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Our Commitment to Excellence in React Native Development"
        />
        <ServiceFeed
          //   img={imgTwo}
          titleOne="Proven Expertise"
          titleTwo="Client-Centric Approach"
          titleThree="Timely Delivery"
          titleFour="Transparent Communication"
          titleFive="Quality Assurance"
          titleSix="Ongoing Support"
          one="We are a team of experienced and skilled developers with a strong track record of successfully delivering mobile applications. Our expertise in React Native ensures top-notch results."
          two="We prioritize understanding your needs and objectives. Our solutions are tailored to meet your specific requirements, ensuring client satisfaction and long-term success."
          three="We understand the importance of meeting deadlines. Our commitment to delivering projects on time ensures that your mobile app reaches the market as planned."
          four="We maintain clear and open communication throughout the development process. You'll be updated at every stage, from planning to deployment."
          five="Our rigorous quality assurance processes guarantee bug-free, high-performance applications. Your users will enjoy a smooth and reliable experience."
          six="Our relationship doesn't end with app deployment. We offer post-launch support, ensuring that your app remains up to date, secure, and continuously improved based on user feedback and emerging trends."
        />
        <TechStack
        //   one={mui}
        //   two={tail}
        //   three={fig}
        //   four={boots}
        //   five={react}
        //   six={css}
        //   seven={wopress}
        //   eight={js}
        //   nine={jque}
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

export default MobileApp;
