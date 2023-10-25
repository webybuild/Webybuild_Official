import React from "react";
import bannerImg from "../assets/images/blog/Rectangle 20.png";
import codingImg from "../assets/images/blog/codingSvg.svg";
import businessImg from "../assets/images/blog/businessSvg.svg";
import websiteImg from "../assets/images/blog/websiteSvg.svg";
import blogImg from "../assets/images/blog/blogsSvg.svg";
import graphicImg from "../assets/images/blog/graphicsSvg.png";
import growthImg from "../assets/images/blog/growthSvg.svg";

const categoryItem = [
  {
    text: "Coding",
    icon: codingImg,
    color: "#fcd0d0",
  },
  {
    text: "Business",
    icon: businessImg,
    color: "#e6e6ff",
  },
  {
    text: "Website",
    icon: websiteImg,
    color: "#ffffe3",
  },
  {
    text: "Blogs",
    icon: blogImg,
    color: "#e4ffe4",
  },
  {
    text: "Graphics",
    icon: graphicImg,
    color: "#f7f7f7",
  },
  {
    text: "Growth",
    icon: growthImg,
    color: "#ffe4ff",
  },
];

const BlogDetail = () => {
  return (
    <>
      <div className="container mx-auto overflow-hidden px-4 sm:px-8 md:px-16 lg:px-28">
        <div className="flex flex-col items-center justify-center lg:flex-row mt-4 sm:mt-6">
          <div className="flex-1 p-4 sm:p-6 md:p-10 m-4 sm:m-6">
            <div>
              <h2 className="text-4xl sm:text-6xl mt-2 sm:mt-4">
                Easiest Way For React State Management
              </h2>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-[6%]">
                <img className="w-full h-full" src={growthImg} alt="" />
              </div>
              <div>
                <h1 className="text-sm font-light">Martin Brewer</h1>
                <p className="text-xs font-light">21-08-2023</p>
              </div>
            </div>
          </div>
          <div className="w-4/5 lg:w-2/6">
            <img
              className="w-full drop-shadow-lg"
              src={bannerImg}
              alt="bannerimage"
            />
          </div>
        </div>
      </div>

      <div className="container px-4 xl:px-40 mx-auto flex my-16">
        <div className="flex-[3]">
          <div className="flex flex-col justify-center items-center lg:items-start px-8 text-justify  w-full lg:w-11/12 gap-5">
            {/* <div className="">
              <img className="w-full" src={bannerImg} alt="bannerimage" />
            </div> */}
            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi quod ullam alias sint impedit omnis facere repellat!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              veniam earum possimus. Molestias, possimus odit aperiam ut magnam
              quod in! Obcaecati nemo doloremque vero sequi tempore dicta at
              iure quo quibusdam fugiat, dolorum veniam totam quidem tempora
              numquam corporis accusantium odit pariatur ad deleniti ducimus qui
              similique explicabo delectus. Mollitia.
            </p>
            <h1>Why you should learn Zustand?</h1>
            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi quod ullam alias sint impedit omnis facere repellat!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              veniam earum possimus. Molestias, possimus odit aperiam ut magnam
              quod in! Obcaecati nemo doloremque vero sequi tempore dicta at
              iure quo quibusdam fugiat, dolorum veniam totam quidem tempora
              numquam corporis accusantium odit pariatur ad deleniti ducimus qui
              similique explicabo delectus. Mollitia.
            </p>
            <img
              className="w-4/5 sm:w-1/2 my-4"
              src={bannerImg}
              alt="bannerimage"
            />
            <h1>Is Zustand Better than Redux?</h1>
            <p className="font-light">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi quod ullam alias sint impedit omnis facere repellat!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              veniam earum possimus. Molestias, possimus odit aperiam ut magnam
              quod in! Obcaecati nemo doloremque vero sequi tempore dicta at
              iure quo quibusdam fugiat, dolorum veniam totam quidem tempora
              numquam corporis accusantium odit pariatur ad deleniti ducimus qui
              similique explicabo delectus. Mollitia.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
              Comments
            </h1>
            <div className="flex items-center mb-4">
              <input
                className="w-full sm:w-2/3 border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Add a comment..."
              />
              <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md">
                Post
              </button>
            </div>
            <div className="px-5 w-full xl:w-2/3 ">
              <div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-[10%]">
                    <img
                      className="w-full h-full rounded-full"
                      src={growthImg}
                      alt="ProfileImage"
                    />
                  </div>
                  <div>
                    <h1 className="text-base sm:text-base font-semibold">
                      Martin Brewer
                    </h1>
                    <p className="text-xs sm:text-xs text-gray-500">
                      21-08-2023
                    </p>
                  </div>
                </div>
                <h2 className="text-sm sm:text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  suscipit quod, vitae molestias reprehenderit sapiente!
                </h2>
              </div>

              <div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-[10%]">
                    <img
                      className="w-full h-full rounded-full"
                      src={graphicImg}
                      alt="ProfileImage"
                    />
                  </div>
                  <div>
                    <h1 className="text-base sm:text-base font-semibold">
                      Martin Brewer
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-500">
                      21-08-2023
                    </p>
                  </div>
                </div>
                <h2 className="text-sm sm:text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  suscipit quod, vitae molestias reprehenderit sapiente!lorem5
                  Lorem ipsum dolor sit amet.
                </h2>
              </div>

              <div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-[10%]">
                    <img
                      className="w-full h-full rounded-full"
                      src={businessImg}
                      alt="ProfileImage"
                    />
                  </div>
                  <div>
                    <h1 className="text-base sm:text-base font-semibold">
                      Martin Brewer
                    </h1>
                    <p className="text-xs sm:text-xs text-gray-500">
                      21-08-2023
                    </p>
                  </div>
                </div>
                <h2 className="text-sm sm:text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  suscipit quod, vitae molestias reprehenderit sapiente!
                </h2>
              </div>
              <div>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-[10%]">
                    <img
                      className="w-full h-full rounded-full"
                      src={codingImg}
                      alt="ProfileImage"
                    />
                  </div>
                  <div>
                    <h1 className="text-base sm:text-base font-semibold">
                      Martin Brewer
                    </h1>
                    <p className="text-xs sm:text-xs text-gray-500">
                      21-08-2023
                    </p>
                  </div>
                </div>
                <h2 className="text-sm sm:text-base mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  suscipit quod, vitae molestias reprehenderit sapiente!
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] hidden lg:block">
          <div>
            <div>
              <p className="font-light text-sm">What's hot</p>
              <h1 className="font-semibold text-2xl">Most Popular</h1>
            </div>
            <div className="mt-8">
              <a href="/">
                <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                  coding
                </div>
                <p className="my-2 font-[400]">
                  A Journey Through Bohemian Beauti Exploring The Streets of
                  Prague
                </p>
              </a>

              <div className="flex text-[13px] items-center gap-2 font-light">
                <p>Joseph Owen</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p>02-10-23</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="/">
                <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                  coding
                </div>
                <p className="my-2 font-[400]">
                  A Journey Through Bohemian Beauti Exploring The Streets of
                  Prague
                </p>
              </a>

              <div className="flex text-[13px] items-center gap-2 font-light">
                <p>Joseph Owen</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p>02-10-23</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="/">
                <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                  coding
                </div>
                <p className="my-2 font-[400]">
                  A Journey Through Bohemian Beauti Exploring The Streets of
                  Prague
                </p>
              </a>

              <div className="flex text-[13px] items-center gap-2 font-light">
                <p>Joseph Owen</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p>02-10-23</p>
              </div>
            </div>
            <div className="mt-8">
              <a href="/">
                <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                  coding
                </div>
                <p className="my-2 font-[400]">
                  A Journey Through Bohemian Beauti Exploring The Streets of
                  Prague
                </p>
              </a>

              <div className="flex text-[13px] items-center gap-2 font-light">
                <p>Joseph Owen</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p>02-10-23</p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div>
              <p className="font-light text-sm">Discover by topic</p>
              <h1 className="font-semibold text-2xl">Categories</h1>
            </div>
            <div className="flex justify-center flex-wrap items-center gap-5 m-4">
              {categoryItem.map((item, index) => (
                <button
                  style={{ background: item.color }}
                  key={index}
                  className={`flex justify-between text-[12px] items-center uppercase px-3 py-2 rounded-sm drop-shadow-md hover:drop-shadow-none`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </div>
          <div className="my-10">
            <div>
              <p className="font-light text-sm">Chosen by the editor</p>
              <h1 className="font-semibold text-2xl">Editors Pick</h1>
            </div>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-2/6">
                <img
                  className="w-full h-full"
                  src={codingImg}
                  alt=""
                  srcset=""
                />
              </div>

              <div>
                <a href="/">
                  <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                    coding
                  </div>
                  <p className="my-2 font-[400]">
                    A Journey Through Bohemian Beauti Exploring The Streets of
                    Prague
                  </p>
                </a>
                <div className="flex text-[13px] items-center gap-2 font-light">
                  <p>Joseph Owen</p>
                  <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                  <p>02-10-23</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-2/6">
                <img
                  className="w-full h-full"
                  src={codingImg}
                  alt=""
                  srcset=""
                />
              </div>

              <div>
                <a href="/">
                  <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                    coding
                  </div>
                  <p className="my-2 font-[400]">
                    A Journey Through Bohemian Beauti Exploring The Streets of
                    Prague
                  </p>
                </a>
                <div className="flex text-[13px] items-center gap-2 font-light">
                  <p>Joseph Owen</p>
                  <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                  <p>02-10-23</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-2/6">
                <img
                  className="w-full h-full"
                  src={codingImg}
                  alt=""
                  srcset=""
                />
              </div>

              <div>
                <a href="/">
                  <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                    coding
                  </div>
                  <p className="my-2 font-[400]">
                    A Journey Through Bohemian Beauti Exploring The Streets of
                    Prague
                  </p>
                </a>
                <div className="flex text-[13px] items-center gap-2 font-light">
                  <p>Joseph Owen</p>
                  <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                  <p>02-10-23</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-2/6">
                <img
                  className="w-full h-full"
                  src={codingImg}
                  alt=""
                  srcset=""
                />
              </div>

              <div>
                <a href="/">
                  <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                    coding
                  </div>
                  <p className="my-2 font-[400]">
                    A Journey Through Bohemian Beauti Exploring The Streets of
                    Prague
                  </p>
                </a>
                <div className="flex text-[13px] items-center gap-2 font-light">
                  <p>Joseph Owen</p>
                  <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                  <p>02-10-23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
