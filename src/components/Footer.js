import React from "react";
import logo from "../assets/images/logo/newLogo.png";
import { Link } from "react-router-dom";
import linkedin from "../assets/images/social/skill-icons_linkedin.svg";
import facebook from "../assets/images/social/logos_facebook.svg";
import instagram from "../assets/images/social/skill-icons_instagram.svg";
import twitter from "../assets/images/social/fa6-brands_square-x-twitter.svg";
import pinterst from "../assets/images/social/logos_pinterest.svg";
import support from "../assets/images/footer/arcticons_mail.svg";
import cloud from "../assets/images/footer/cloud.svg";

const Footer = () => {
  return (
    <>
      <footer className="px-4 py-12 mx-auto max-w-7xl">
        <h1 className="flex justify-center items-center text-[2rem] mb-12">
          Build Smarter. Better. Faster. Websites
        </h1>
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-4">
            <a
              className="flex gap-1 justify-center items-center w-9/12"
              href="/"
              title="Webybuild"
            >
              <div className="flex-[1]">
                <img className="w-full" src={logo} alt="" />
              </div>
              <div className="flex-[2]">
                <p className="multi_color_heading font-bold uppercase">
                  Webybuild
                </p>
                <p className="multi_color_heading uppercase font-semibold tracking-widest text-xs">
                  We Build Web
                </p>
              </div>
            </a>
            <p className="my-4 text-sm leading-normal text-justify text-gray-500">
              Webybuild is a dynamic and innovative web development company with
              a strong focus on delivering high-quality websites that make a
              significant impact on our clients businesses. Our team is
              passionate about leveraging the latest technologies and design
              trends to create bespoke web solutions that not only meet but
              exceed our clients expectations.
            </p>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2 mt-4">
            <p className="mb-3 text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Company
            </p>
            <Link
              to="/"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              About
            </Link>

            <Link
              to="/blog"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Blogs
            </Link>
            <Link
              to="/growth"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Growth
            </Link>
            <Link
              to="/contacts"
              className="flex mb-3 text-sm font-normal tracking-widest transition md:mb-2 text_effect"
            >
              Contacts
            </Link>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-3 mt-4">
            <p className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Services
            </p>
            <Link
              to="/services/web-design"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Website Design
            </Link>
            <a
              href="/"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Custom Web Development
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Inventory Management
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Cloud Services
            </a>
            <Link
              to="/services/logo-design"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Logo Design
            </Link>
            <a
              href="/"
              className="flex mb-3 text-sm font-normal tracking-widest text-black transition md:mb-2 text_effect"
            >
              Seo and Digital Marketing
            </a>
          </nav>

          <div className="col-span-3">
            <p className="mb-3 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Get in Touch
            </p>
            <div className="my-4">
              <div className="flex items-center gap-2">
                <img className="w-[2rem]" src={support} alt="" />
                <h1 className="text-gray-500">hello@webybuild.com</h1>
              </div>
            </div>
            <div className="my-4">
              <div className="flex items-center gap-2">
                <img className="w-[2rem]" src={cloud} alt="" />
                <h1 className="font-light">
                  USA, Canada, Germany, Australia, Switzerland, Ireland
                </h1>
              </div>
            </div>
            <div className="">
              <h1 className="font-bold my-4">Follow Us</h1>
              <div className="flex gap-3 items-center">
                <a
                  href="https://www.linkedin.com/in/harsh-j-b509b4172/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="twitter" />
                </a>
                <a
                  href="https://twitter.com/WEBYBUILD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="twitter" />
                </a>
                <a
                  href="https://www.facebook.com/webybuild"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="twitter" />
                </a>
                <a
                  href="https://in.pinterest.com/webybuild/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pinterst} alt="twitter" />
                </a>
                <a
                  href="https://www.instagram.com/webybuild/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
            © Copyright 2023 Webybuild. All Rights Reserved.
          </p>
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a
              href="/"
              className="text-sm text-gray-600 transition text_effect"
            >
              Terms
            </a>
            <a
              href="/"
              className="text-sm text-gray-600 transition text_effect"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
