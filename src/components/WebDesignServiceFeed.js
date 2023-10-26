import React from "react";
// import headImg from "../assets/images/Web-Interface/webDesign.png";
import whyImg from "../assets/images/web_design/whyUs.png";
import HeadTitle from "./HeadTitle";
import service from "../assets/images/web_design/service.png";

const WebDesignServiceFeed = () => {
  return (
    <>
      <section>
        <HeadTitle
          titleOne="Transform Your"
          highlight="Vision into Reality"
          titleTwo="with Our Web Design Services"
          subTitle="We understand the significance of captivating web design in creating a lasting impact."
        />
        <div className="flex flex-col lg:flex-row h-full w-full justify-center items-center px-2 md:px-12 xl:px-8 my-4 lg:my-16">
          <div className="flex-1 flex mb-10 lg:my-0 w-full h-full">
            <img className="w-full" src={service} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center ml-0 lg:ml-8 px-4 lg:px-0">
            <div className="text-left">
              {/* <h1 className="text-lg md:text-2xl font-bold mb-4 uppercase drop-shadow-md">
                Choose Us for Exceptional Web Design.
              </h1>
              <h2 className="text-sm md:text-xl font-semibold uppercase mb-4 drop-shadow-md">
                Your Vision, Our Expertise.
              </h2> */}
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Custom Web Design{" :- "}
                </span>{" "}
                Every business is unique, and your website should reflect that.
                Our custom web design services ensure that your site is tailored
                to your brand's identity, offering a one-of-a-kind online
                presence that sets you apart from the competition.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Responsive Design{" :- "}{" "}
                </span>
                In the age of mobile devices, a responsive design is crucial. We
                create websites that adapt seamlessly to all screen sizes,
                ensuring an optimal user experience on desktops, tablets, and
                smartphones.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  E-Commerce Web Design{" :- "}
                </span>{" "}
                For businesses looking to sell products or services online, our
                e-commerce web design expertise comes into play. We craft
                engaging and secure online shopping experiences, boosting your
                online sales and customer satisfaction.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Redesign and Modernization{" :- "}
                </span>{" "}
                If your existing website needs a facelift, we can help. Our web
                designers will breathe new life into your outdated site,
                ensuring it meets modern design standards and user expectations.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  User Experience (UX) Design{" :- "}
                </span>{" "}
                User experience is key to keeping visitors engaged. We design
                with the user in mind, creating intuitive navigation and user
                interfaces to enhance the overall experience.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Landing Page Design{" :- "}
                </span>{" "}
                Landing pages are essential for marketing and lead generation.
                We specialize in creating high-converting landing pages that
                drive results for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <HeadTitle
          titleOne="Why"
          highlight="Choose"
          titleTwo="Webybuild"
          subTitle="Choosing us means choosing a partner dedicated to transforming your online presence. Enhancing your brand's identity, and engaging your audience effectively"
        />
        <div className="flex flex-col lg:flex-row h-full w-full px-2 md:px-12 xl:px-8 my-4 lg:my-16">
          <div className="flex-1 flex justify-center my-4 lg:my-0 w-full h-full">
            <img className="w-full" src={whyImg} alt="" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="text-left px-4 lg:px-0">
              <h1 className="text-lg md:text-2xl font-bold mb-4 uppercase drop-shadow-md">
                Choose Us for Exceptional Web Design.
              </h1>
              <h2 className="text-sm md:text-xl font-semibold uppercase mb-4 drop-shadow-md">
                Your Vision, Our Expertise.
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Creative Excellence{" :- "}
                </span>{" "}
                Our web designers are passionate about their craft and committed
                to delivering creative excellence. With a keen eye for design
                and a dedication to innovation, we ensure that your website
                stands out with visually stunning and unique designs.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Tailored Approach{" :- "}{" "}
                </span>
                We understand that your business is unique, and we take a
                tailored approach to web design. We work closely with you to
                grasp your brand identity, goals, and objectives, customizing
                every aspect of the design to meet your specific needs and
                vision.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  User-Centric Focus{" :- "}
                </span>{" "}
                User experience is at the heart of our design philosophy. We
                prioritize the user's perspective, creating websites with
                intuitive navigation and user-friendly interfaces. This
                user-centric approach ensures that your visitors stay engaged
                and enjoy a seamless browsing experience.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Mobile-First Approach:{" :- "}
                </span>{" "}
                In an era dominated by mobile devices, our responsive designs
                guarantee that your website looks great and functions seamlessly
                on all screen sizes. We adopt a mobile-first approach, ensuring
                that your site is accessible and user-friendly, whether your
                visitors are on a desktop, tablet, or smartphone.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Ongoing Support{" :- "}
                </span>{" "}
                Our commitment to your success doesn't end with the design
                phase. We provide continued support and maintenance services to
                keep your website fresh, up-to-date, and secure. We're here to
                help you as your business grows and evolves.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-4 font-light">
                <span className="multi_color_heading font-semibold">
                  Proven Expertise{" :- "}
                </span>{" "}
                With a track record of successful web design projects, our team
                of designers has the experience and expertise needed to bring
                your vision to life. We've helped numerous businesses across
                various industries create visually stunning and highly
                functional websites that drive results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignServiceFeed;
