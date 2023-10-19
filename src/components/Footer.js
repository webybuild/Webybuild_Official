import React from "react";
import logo from "../assets/images/logo/newLogo.png";

const Footer = () => {
  return (
    <>
      <footer className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-3">
            <a
              className="flex gap-1 justify-center items-center"
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
            <p className="my-4 text-sm leading-normal text-gray-500">
              Webybuild is a dynamic web development company specializing in
              creating high-quality websites that elevate our clients'
              businesses.
            </p>
          </div>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Company
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Company
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Integrations
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Documentation
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              FAQs
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Pricing
            </a>
          </nav>
          <nav className="col-span-1 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              About
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Press-Kit
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Company
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Blog
            </a>
          </nav>
          {/* <nav className="col-span-2 md:col-span-1 lg:col-span-2">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Contact
            </p>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Twitter
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Email
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Advertising
            </a>
            <a
              href="/"
              className="flex mb-3 text-sm font-medium text-gray-800 transition md:mb-2 hover:text-primary"
            >
              Chat
            </a>
          </nav> */}
          <div className="col-span-3">
            <p className="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">
              SUBSCRIBE TO OUR NEWSLETTER
            </p>
            <form action="#" className="mb-2">
              <div className="form-append">
                <input
                  className="form-input form-input-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="btn btn-light-primary btn-sm" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs leading-normal text-gray-500">
              Get lessons and insights on how to grow your freelance business.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
          <p className="mb-6 text-sm text-left text-gray-600 md:mb-0">
            © Copyright 2023 Webybuild. All Rights Reserved.
          </p>
          <div className="flex items-start justify-start space-x-6 md:items-center md:justify-center">
            <a
              href="/"
              className="text-sm text-gray-600 transition hover:text-primary"
            >
              Terms
            </a>
            <a
              href="/"
              className="text-sm text-gray-600 transition hover:text-primary"
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
