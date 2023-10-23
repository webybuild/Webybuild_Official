import React from "react";
import manifest from "../assets/images/portfolio/manifest.svg";
import desginfirm from "../assets/images/portfolio/designFirms.svg";
import googlereview from "../assets/images/portfolio/google.svg";
import clutch from "../assets/images/portfolio/Clutch.svg";
import rectangle from "../assets/images/Shapes/Rectangle5.svg";
import linkedin from "../assets/images/social/skill-icons_linkedin.svg";
import facebook from "../assets/images/social/logos_facebook.svg";
import instagram from "../assets/images/social/skill-icons_instagram.svg";
import twitter from "../assets/images/social/fa6-brands_square-x-twitter.svg";
import pinterst from "../assets/images/social/logos_pinterest.svg";
import tick from "../assets/images/Shapes/tick.svg";
import phone from "../assets/images/Shapes/phone.svg";
import support from "../assets/images/Shapes/support.svg";
const Contacts = () => {
  return (
    <>
      <section className="bg-white mt-16 px-16">
        <div className="flex gap-16">
          <div className="flex-1">
            <p className="text-sm text-gray-500">Home / Contact</p>
            <div className="flex justify-end gap-6">
              <img src={rectangle} alt="" />
              <h1 className="font-extrabold uppercase text-xl lg:text-right lg:text-6xl mt-2 multi_color_heading">
                Get in touch
              </h1>
            </div>
            <h2 className="font-light uppercase text-xl lg:text-right lg:text-2xl mt-2 text-black">
              Thank you for your interest in Webybuild and Our Services, We will
              get back to you within 24 hrs
            </h2>
          </div>
          <div className="flex justify-center items-center flex-1">
            <div className="flex gap-4 mt-7 justify-center lg:justify-start lg:mb-8 xl:mb-0">
              <img className="w-[21%]" src={googlereview} alt="" />
              <img className="w-[15%]" src={desginfirm} alt="" />
              <img className="w-[20%] lg:w-[18%] ml-5" src={manifest} alt="" />
              <img className="w-[13%] ml-4" src={clutch} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 px-9">
          <div className="flex-1">
            <div className=" mt-16 mb-4">
              <h1 className="text-5xl font-bold">Reach Out to Us</h1>
              <h1 className="text-gray-400">
                We're just a message away, and we'll be sure to reply to you
                within 24 hours
              </h1>
            </div>
            <hr class="w-1/2 border-t border-gray-300"></hr>
            <div className="my-8">
              <h1 className="font-bold">
                Nations Where We Provide Our Services
              </h1>
              <div className="m-4">
                <div className="flex items-center gap-2">
                  <img className="w-[5%]" src={tick} alt="" />
                  <h1 className="font-light">USA</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[5%]" src={tick} alt="" />
                  <h1 className="font-light">Canada</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[5%]" src={tick} alt="" />
                  <h1 className="font-light">Germany</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[5%]" src={tick} alt="" />
                  <h1 className="font-light">Australia</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[5%]" src={tick} alt="" />
                  <h1 className="font-light">Switzerland</h1>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[5%]" src={tick} alt="" />
                  <h1 className="font-light">Ireland</h1>
                </div>
              </div>
            </div>
            {/* <hr class="w-1/2 border-t border-gray-300 my-4"></hr> */}
            <div className="my-4">
              <h1 className="font-bold my-2">Phone</h1>
              <div className="flex items-center gap-2">
                <img className="w-[5%]" src={phone} alt="" />
                <h1 className="text-gray-500">+91-8809867438</h1>
              </div>
            </div>
            <hr class="w-1/2 border-t border-gray-300 my-4"></hr>
            <div className="my-4">
              <h1 className="font-bold my-2">Support</h1>
              <div className="flex items-center gap-2">
                <img className="w-[5%]" src={support} alt="" />
                <h1 className="text-gray-500">hello@webybuild.com</h1>
              </div>
            </div>
            {/* <hr class="w-1/2 border-t border-gray-300 my-4"></hr> */}
            <div className="mt-16">
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
          <div className="flex-1 py-8 lg:py-16 px-12 mx-auto max-w-screen-md bg-[#f9f9f9] rounded-3xl p-20">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about our service?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div className="flex w-full gap-8">
                <div className="w-full">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-[#818181]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg shadow-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-[#818181]"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="name@email.com"
                    required
                  />
                </div>
              </div>
              <div className="flex w-full gap-8">
                <div className="w-full">
                  <label
                    for="help"
                    className="block mb-2 text-sm font-medium text-[#818181]"
                  >
                    How we can help you?
                  </label>
                  <div className="flex items-center">
                    <select
                      id="Project_menu"
                      className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="Project Discussion">
                        Project Discussion
                      </option>
                      <option value=" General Question">
                        General Question
                      </option>
                      <option value="Complain">Complain</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Job / Career">Job / Career</option>
                      <option value="Legal">Legal</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    for="help"
                    className="block mb-2 text-sm font-medium text-[#818181]"
                  >
                    Services?
                  </label>
                  <div className="flex items-center">
                    <select
                      id="Project_menu"
                      className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="Web Design">Web Design</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Inventory Management">
                        Inventory Management
                      </option>
                      <option value="Mobile Application">
                        Mobile Application
                      </option>
                      <option value="Cloud Services">Cloud Services</option>
                      <option value="Logo Design">Logo Design</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-[#818181]"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border shadow-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter the name of your company or brand"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-[#818181]"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <div className="">
                <div className="flex gap-6 items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="form-checkbox text-primary-500 h-5 w-5 rounded-md border-2 border-primary-500 focus:ring-2 ring-primary-500 focus:ring-offset-0 dark:text-primary-500 dark:focus:ring-primary-500 dark:ring-offset-0"
                    required
                  />
                  <label
                    for="terms"
                    className="block text-sm font-medium text-[#686868] "
                  >
                    I agree with{" "}
                    <a href="/" className="text-[#ab5a91]">
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                <p className="text-xs mt-5">
                  We will not spam or bother you, we may contact you for any
                  further questions.
                </p>
              </div>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a
                  href="/"
                  className="block py-2 px-4 text-black border font-medium gradient-border-button  hover:shadow-lg "
                >
                  Send Message
                </a>
                <a
                  className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border"
                  href="https://wa.me/918809867438"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
