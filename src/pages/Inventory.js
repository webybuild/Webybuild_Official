import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import HeadTitle from "../components/HeadTitle";
import ServiceFeed from "../components/ServiceFeed";
import TechStack from "../components/TechStack";
import GetInTouch from "../components/GetInTouch";
import imgOne from "../assets/images/inventory/service.png";
import imgTwo from "../assets/images/inventory/whyUs.png";
import mongo from "../assets/images/inventory/devicon_mongodb-wordmark.svg";
import tailwind from "../assets/images/inventory/devicon_tailwindcss.svg";
import mui from "../assets/images/inventory/simple-icons_mui.svg";
import express from "../assets/images/inventory/skill-icons_expressjs-light.svg";
import node from "../assets/images/inventory/logos_nodejs.svg";
import post from "../assets/images/inventory/logos_postgresql.svg";
import react from "../assets/images/inventory/devicon_react.svg";

const Inventory = () => {
  return (
    <>
      <section className="">
        <ServiceBanner
          title="Inventory Management Service"
          intro="At Webybuild, we specialize in enhancing business success through efficient inventory management. Our services empower businesses of all sizes and industries to streamline inventory, cut costs, and boost productivity."
          bread="Inventory Management"
        />
        <HeadTitle
          titleOne="Optimizing Your"
          highlight="Inventory Management"
          titleTwo="for Enhanced Efficiency"
          subTitle="Comprehensive Solutions Tailored to Your Business's Success."
        />
        <ServiceFeed
          img={imgOne}
          titleOne="Inventory Audit and Assessment"
          titleTwo="Inventory Software Solutions"
          titleThree="Demand Forecasting"
          titleFour="Supplier Relationship Management"
          titleFive="Inventory Optimization"
          titleSix="Inventory Tracking and Reporting"
          one="Our experienced team will conduct a thorough inventory audit to assess your current stock levels, identify areas of improvement, and develop strategies to optimize your inventory management process."
          two="We offer tailored inventory software solutions that automate and streamline your inventory control. Our solutions provide real-time visibility, allowing you to track stock levels, orders, and sales with ease."
          three="Predicting customer demand is crucial to maintaining optimal inventory levels. We employ advanced data analytics and forecasting techniques to help you make informed decisions about stock levels, ensuring you have what you need when you need it."
          four="Effective supplier relationships are essential for a well-managed inventory. We can help you establish and maintain strong supplier relationships to ensure reliable and timely deliveries."
          five="Our inventory optimization services aim to reduce carrying costs, minimize stockouts, and maximize inventory turnover, ultimately improving your bottom line."
          six="Our solutions include real-time inventory tracking and reporting tools, allowing you to monitor stock movement, order status, and financial performance."
        />
        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Elevating Your Business Through Expert Inventory Management Solutions"
        />
        <ServiceFeed
          img={imgTwo}
          titleOne="Expertise"
          titleTwo="Tailored Solutions"
          titleThree="Cost Reduction"
          titleFour="Improved Efficiency"
          titleFive="Ongoing Support"
          titleSix="Data-Driven Insights"
          one="Our team brings years of experience in inventory management, helping businesses across various industries achieve better control over their inventory."
          two="We recognize that every business is unique. Our solutions are customized to meet your specific inventory management needs and goals."
          three="We focus on reducing carrying costs, eliminating excess stock, and minimizing the risk of stockouts, resulting in significant cost savings."
          four="Our solutions streamline your inventory management processes, saving you time and resources, and improving overall operational efficiency."
          five="We provide continuous support, including training and updates, to ensure your inventory management remains efficient and effective."
          six="Harness the power of data analytics to make informed decisions about your inventory, optimizing stock levels and order patterns for improved profitability."
        />
        <TechStack
          one={mui}
          two={tailwind}
          three={node}
          four={mongo}
          five={react}
          six={post}
          seven={express}
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

export default Inventory;
