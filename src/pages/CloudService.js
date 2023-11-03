import React from "react";
import GetInTouch from "../components/GetInTouch";
import TechStack from "../components/TechStack";
import ServiceFeed from "../components/ServiceFeed";
import HeadTitle from "../components/HeadTitle";
import ServiceBanner from "../components/ServiceBanner";
import aws from "../assets/images/cloud/logos_aws.svg";
import azure from "../assets/images/cloud/devicon_azure.svg";
import gcloud from "../assets/images/cloud/devicon_googlecloud.svg";
import hero from "../assets/images/cloud/devicon_heroku-wordmark.svg";
import imgOne from "../assets/images/cloud/service.png";
import imgTwo from "../assets/images/cloud/whyUs.png";

const CloudService = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Cloud Infrastructure Management"
          intro="In the digital age, businesses must embrace scalable and secure cloud services to remain competitive and innovative. Webybuild specializes in leveraging industry leaders like Amazon Web Services (AWS) and Microsoft Azure to elevate your business. "
          bread="Cloud Service"
        />
        <HeadTitle
          titleOne="Fueling"
          highlight="Your Business's"
          titleTwo="Digital Journey"
          subTitle="Discover How We Boost Your Business
          with AWS and Azure Cloud Solutions"
        />
        <ServiceFeed
          img={imgOne}
          titleOne="AWS Solutions"
          titleTwo="Azure Implementation"
          titleThree="Cloud Migration and Strategy"
          titleFour="Cloud Infrastructure Management"
          titleFive="Data Analytics and Machine Learning"
          titleSix="Cloud Security and Compliance"
          one="Amazon Web Services (AWS) is a globally recognized cloud platform known for its vast array of services, from computing and storage to machine learning and artificial intelligence. We'll help you leverage AWS to enhance your infrastructure, applications, and data solutions, ensuring scalability, security, and cost-efficiency."
          two="Microsoft Azure, a trusted cloud provider, offers a wide range of tools and services for building, deploying, and managing applications. Our Azure experts will tailor a solution to meet your specific business requirements, enabling you to scale with confidence and securely operate in the cloud."
          three="Migrating to the cloud can be a complex process. We provide comprehensive cloud migration and strategy services, helping you transition your on-premises systems and applications to the cloud seamlessly. Our strategic approach ensures minimal disruption and maximum ROI."
          four="Effective cloud infrastructure management is essential for your business. We offer 24/7 monitoring, maintenance, and optimization services to keep your cloud resources running efficiently, secure, and cost-effective."
          five="Unlock the potential of your data with AWS and Azure's robust data analytics and machine learning capabilities. Our experts can help you derive actionable insights from your data and develop machine learning models to drive data-driven decision-making."
          six="Security is paramount in the cloud. We provide comprehensive cloud security solutions to protect your data and applications. We'll also ensure your cloud environment complies with industry-specific regulations and standards."
        />
        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Unlocking Business Potential with Cloud Solutions"
        />
        <ServiceFeed
          img={imgTwo}
          titleOne="Certified Experts"
          titleTwo="Tailored Solutions"
          titleThree="Cost Optimization"
          titleFour="Data Security"
          titleFive="Continuous Support"
          titleSix="Proven Track Record"
          one="Our team consists of certified AWS and Azure experts with in-depth knowledge and experience in cloud technologies."
          two="We understand that every business is unique. Our solutions are customized to meet your specific needs and goals."
          three="We'll help you maximize cost-efficiency, ensuring that you only pay for what you use and need."
          four="We prioritize the security of your data and applications, implementing industry-best practices for cloud security."
          five="Our support doesn't end with implementation. We provide ongoing support and optimization to help you get the most out of your cloud services."
          six="With a history of successful cloud implementations, our company has a track record of delivering exceptional results for our clients."
        />
        <TechStack one={aws} two={gcloud} three={azure} four={hero} />
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

export default CloudService;
