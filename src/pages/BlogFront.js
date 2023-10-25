import React from "react";
import bannerImg from "../assets/images/blog/Rectangle 20.png";
import codingImg from "../assets/images/blog/codingSvg.svg";
import businessImg from "../assets/images/blog/businessSvg.svg";
import websiteImg from "../assets/images/blog/websiteSvg.svg";
import blogImg from "../assets/images/blog/blogsSvg.svg";
import graphicImg from "../assets/images/blog/graphicsSvg.png";
import growthImg from "../assets/images/blog/growthSvg.svg";
import { Link } from "react-router-dom";

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

const BlogFront = () => {
  return (
    <>
      <div className="container mx-auto overflow-hidden px-4 sm:px-8 md:px-16 lg:px-28 mt-8 sm:mt-8 md:mt-12 lg:mt-16">
        <div className="w-full xl:w-2/3">
          <h1 className="text-2xl text-center lg:text-left sm:text-4xl md:text-5xl tracking-wider">
            Hey, Folks!
            <span className="font-light ml-2 sm:ml-5">
              Discover my Stories and creative ideas
            </span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row mt-4 sm:mt-8">
          <div className="w-4/5 lg:w-2/6">
            <img
              className="w-full drop-shadow-lg"
              src={bannerImg}
              alt="bannerimage"
            />
          </div>
          <div className="flex-1 p-4 sm:p-6 md:p-10 m-4 sm:m-6">
            <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
              <p className="font-light flex items-center">2023-09-28</p>
              <div className=" flex items-center w-2 h-2 bg-red-600 rounded-full"></div>
              <p className="font-semibold uppercase flex items-center">
                Coding
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4">
                Why you should do Blogging
              </h2>
              <p className="mt-2 sm:mt-3 font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quod ullam alias sint impedit omnis facere repellat!
                Eum maiores dolorum vitae cum odit possimus blanditiis nostrum,
                maxime dolorem excepturi sint iure autem, assumenda laudantium
                expedita consequuntur at saepe optio fugit, nobis voluptates
                exercitationem? Eveniet provident saepe iusto, dolorum
                voluptatem numquam.
              </p>
              <p className="mt-2 sm:mt-3 font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi quod ullam alias sint impedit omnis facere repellat!
                Eum maiores dolorum vitae cum odit possimus blanditiis nostrum,
                maxime dolorem excepturi sint iure autem, assumenda laudantium
                expedita consequuntur at saepe optio fugit, nobis voluptates
                exercitationem? Eveniet provident saepe iusto, dolorum
                voluptatem numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-8 m-4">
        <h1 className="text-2xl">Popular Categories</h1>
        {categoryItem.map((item, index) => (
          <button
            style={{ background: item.color }}
            key={index}
            className={`flex w-3/4 justify-center sm:w-fit sm:justify-between text-sm items-center uppercase px-7 py-2 rounded-sm drop-shadow-md hover:drop-shadow-none`}
          >
            <img className="w-10 h-10 mr-2" src={item.icon} alt="" />
            {item.text}
          </button>
        ))}
      </div>

      <div className="container px-4 xl:px-40 mx-auto flex my-16">
        <div className="flex-[3]">
          <h1 className="text-center md:text-left text-2xl">Recent Posts</h1>
          <div className="flex flex-col justify-center items-center sm:flex-row mt-4 sm:mt-8">
            <div className="w-4/5 sm:w-2/6">
              <img className="w-full" src={bannerImg} alt="bannerimage" />
            </div>
            <div className="flex-1 p-4 m-4">
              <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
                <p className="font-light">2023-09-28</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p className="font-[400] uppercase text-red-900">Coding</p>
              </div>
              <div>
                <Link to="/blog/blog-detail">
                  <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4">
                    Why you should do Blogging
                  </h2>
                </Link>
                <p className="my-3 sm:my-3 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quod ullam alias sint impedit omnis facere repellat!
                </p>
                <button className="border-b-2 border-red-800">Read More</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row mt-4 sm:mt-8">
            <div className="w-4/5 sm:w-2/6">
              <img className="w-full" src={bannerImg} alt="bannerimage" />
            </div>
            <div className="flex-1 p-4 m-4">
              <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
                <p className="font-light">2023-09-28</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p className="font-[400] uppercase text-red-900">Coding</p>
              </div>
              <div>
                <a href="/">
                  <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4">
                    Why you should do Blogging
                  </h2>
                </a>
                <p className="my-3 sm:my-3 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quod ullam alias sint impedit omnis facere repellat!
                </p>
                <button className="border-b-2 border-red-800">Read More</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row mt-4 sm:mt-8">
            <div className="w-4/5 sm:w-2/6">
              <img className="w-full" src={bannerImg} alt="bannerimage" />
            </div>
            <div className="flex-1 p-4 m-4">
              <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
                <p className="font-light">2023-09-28</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p className="font-[400] uppercase text-red-900">Coding</p>
              </div>
              <div>
                <a href="/">
                  <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4">
                    Why you should do Blogging
                  </h2>
                </a>
                <p className="my-3 sm:my-3 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quod ullam alias sint impedit omnis facere repellat!
                </p>
                <button className="border-b-2 border-red-800">Read More</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row mt-4 sm:mt-8">
            <div className="w-4/5 sm:w-2/6">
              <img className="w-full" src={bannerImg} alt="bannerimage" />
            </div>
            <div className="flex-1 p-4 m-4">
              <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
                <p className="font-light">2023-09-28</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p className="font-[400] uppercase text-red-900">Coding</p>
              </div>
              <div>
                <a href="/">
                  <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4">
                    Why you should do Blogging
                  </h2>
                </a>
                <p className="my-3 sm:my-3 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quod ullam alias sint impedit omnis facere repellat!
                </p>
                <button className="border-b-2 border-red-800">Read More</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row mt-4 sm:mt-8">
            <div className="w-4/5 sm:w-2/6">
              <img className="w-full" src={bannerImg} alt="bannerimage" />
            </div>
            <div className="flex-1 p-4 m-4">
              <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
                <p className="font-light">2023-09-28</p>
                <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                <p className="font-[400] uppercase text-red-900">Coding</p>
              </div>
              <div>
                <a href="/">
                  <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4">
                    Why you should do Blogging
                  </h2>
                </a>
                <p className="my-3 sm:my-3 font-light">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quod ullam alias sint impedit omnis facere repellat!
                </p>
                <button className="border-b-2 border-red-800">Read More</button>
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

export default BlogFront;
