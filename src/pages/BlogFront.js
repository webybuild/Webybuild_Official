import React from "react";
import { useState, useEffect } from "react";
import bannerImg from "../assets/images/blog/Rectangle 20.png";
import codingImg from "../assets/images/blog/codingSvg.svg";
import businessImg from "../assets/images/blog/businessSvg.svg";
import websiteImg from "../assets/images/blog/websiteSvg.svg";
import blogImg from "../assets/images/blog/blogsSvg.svg";
import graphicImg from "../assets/images/blog/graphicsSvg.png";
import growthImg from "../assets/images/blog/growthSvg.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../utils/config";
import MarkdownPreview from "@uiw/react-markdown-preview";
import serviceLogos from "../utils/serviceLogos";

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
  const [blogs, setBlogs] = useState([]);
  const [hotBlogs, setHotBlogs] = useState([]);
  const [editorBlogs, setEditorBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const [blgs, htblgs, edtrblgs] = await Promise.all([
        axios.get(`${url}/blogs?type=recent&page=1&limit=5`),
        axios.get(`${url}/blogs?type=hot&page=1&limit=4`),
        axios.get(`${url}/blogs?type=editor&page=1&limit=4`),
      ]);
      console.log(blgs, htblgs, edtrblgs);
      setBlogs(blgs.data.data);
      setHotBlogs(htblgs.data.data);
      setEditorBlogs(edtrblgs.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    }
    const truncatedText = words.slice(0, maxWords).join(" ");
    return truncatedText + "...";
  }

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
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center sm:flex-row mt-4 sm:mt-8"
            >
              <div className="w-4/5 sm:w-2/6">
                <img className="w-full" src={blog.imageUrl} alt="bannerimage" />
              </div>
              <div className="flex-1 p-4 m-4">
                <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-3">
                  <p className="font-light">{blog.date}</p>
                  <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                  <p className="font-[400] uppercase text-red-900">
                    {blog.category}
                  </p>
                </div>
                <div>
                  <Link
                    to={`/blog/${blog.title.replace(/ /g, "-").toLowerCase()}`}
                  >
                    <h2 className="text-2xl sm:text-3xl mt-2 sm:mt-4 capitalize">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="my-3 sm:my-3 font-light">
                    <MarkdownPreview source={truncateText(blog.body[0], 25)} />
                  </p>
                  <Link
                    to={`/blog/${blog.title.replace(/ /g, "-").toLowerCase()}`}
                    className="border-b-2 border-red-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-[1] hidden lg:block">
          <div>
            <div>
              <p className="font-light text-sm">What's hot</p>
              <h1 className="font-semibold text-2xl">Most Popular</h1>
            </div>
            {hotBlogs.map((blog, index) => (
              <div className="mt-8" key={index}>
                <Link
                  to={`/blog/${blog.title.replace(/ /g, "-").toLowerCase()}`}
                >
                  <div className="bg-gray-600 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                    {blog.category}
                  </div>
                  <p className="my-2 font-[400] capitalize">{blog.title}</p>
                  <p className="text-gray-700 text-sm">
                    {truncateText(blog.body[0], 15)}
                  </p>
                </Link>

                <div className="flex text-[13px] items-center gap-2 mt-4 font-light">
                  <p>{blog.author}</p>
                  <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                  <p>{blog.date}</p>
                </div>
              </div>
            ))}
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
            {editorBlogs.map((blog, index) => (
              <div key={index} className="mt-8 flex w-full gap-4">
                <div className="full">
                  <img
                    className="w-[4rem] h-[4rem] max-w-none"
                    src={serviceLogos[blog.category]}
                    alt=""
                    srcSet=""
                  />
                </div>

                <div>
                  <Link
                    to={`/blog/${blog.title.replace(/ /g, "-").toLowerCase()}`}
                  >
                    <div className="bg-gray-600 w-[6.5rem] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                      {blog.category}
                    </div>
                    <p className="my-2 font-[400] capitalize">{blog.title}</p>
                    <p className="text-gray-700 text-sm">
                      {truncateText(blog.body[0], 10)}
                    </p>
                  </Link>
                  <div className="flex text-[13px] items-center gap-2 font-light mt-4">
                    <p>{blog.author.split(" ")[0]}</p>
                    <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                    <p>{blog.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogFront;
