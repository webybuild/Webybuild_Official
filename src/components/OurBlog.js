import React from "react";
import { useState, useEffect }  from 'react'
import blogOne from "../assets/images/Web-Interface/backgroundBanner.jpg";
import codingImg from "../assets/images/blog/codingSvg.svg";
import businessImg from "../assets/images/blog/businessSvg.svg";
import websiteImg from "../assets/images/blog/websiteSvg.svg";
import blogImg from "../assets/images/blog/blogsSvg.svg";
import graphicImg from "../assets/images/blog/graphicsSvg.svg";
import growthImg from "../assets/images/blog/growthSvg.svg";
import HeadTitle from "./HeadTitle";
import { useRecoilState } from "recoil";
import hotBlogsAtom from '../atoms/hotBlogsAtom';
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../utils/config";

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

const OurBlog = () => {
  const [ blogs, setBlogs ] = useState([])
  const [ hotBlogs, setHotBlogs ] = useRecoilState(hotBlogsAtom)

  useEffect(() => {
      fetchBlogs()
  }, [])


  async function fetchBlogs() {
    try {
      const [ blgs, htblgs, edtrblgs ] = await Promise.all([
        axios.get(`${url}/blogs?type=recent&page=1&limit=4`),
        axios.get(`${url}/blogs?type=hot&page=1&limit=4`)
      ])
      console.log(blgs, htblgs, edtrblgs);
      setBlogs(blgs.data.data);
      setHotBlogs(htblgs.data.data);
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto-sm text-center lg:mb-16 mb-8">
            <HeadTitle
              titleOne="Our"
              highlight="Blog"
              subTitle="We use an agile approach to test assumptions and connect with the
              needs of our audience early and often."
            />
          </div>
          <div className="flex gap-16">
            <div className="flex-[2] flex flex-wrap gap-4">
              <div className="grid grid-cols-2 gap-4 lg:flex-row">
                {
                  blogs.copyWithin(1,0).map((blog, index) => 
                    <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md col-span-1">
                      <div className="flex justify-between items-center mb-5 text-gray-500">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                          <svg
                            className="mr-1 w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                          </svg>
                          {blog.category.toUpperCase()}
                        </span>
                        <span className="text-sm">{blog.date}</span>
                      </div>
                      <div>
                        <img src={blogOne} alt="" />
                      </div>
                      <div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          <a href="/">{blog.title}</a>
                        </h2>
                        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                          {blog.body[0]}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <img
                              className="w-7 h-7 rounded-full"
                              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                              alt="Jese Leos avatar"
                            />
                            <span className="font-medium">{blog.author}</span>
                          </div>
                          <Link
                            to={`/blog/${blog.id}`}
                            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                          >
                            Read more
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }    
              </div>
              <div className="flex gap-8 flex-col lg:flex-row">
              </div>
            </div>
            <div className="flex-[1] hidden lg:block">
              <div className="">
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
              <div>
                <div>
                  <p className="font-light text-sm">What's hot</p>
                  <h1 className="font-semibold text-2xl">Most Popular</h1>
                </div>
                {
                  hotBlogs.map((blog, index) => 
                    <div className="mt-8" key={index}>
                      <Link to={`/blog/${blog.id}`}>
                        <div className="bg-red-400 w-[30%] flex justify-center items-center p-1 text-white font-light text-xs tracking-wider capitalize rounded-md">
                          {blog.category}
                        </div>
                        <p className="my-2 font-[400]">
                          {blog.title}
                        </p>
                      </Link>

                      <div className="flex text-[13px] items-center gap-2 font-light">
                        <p>{blog.author}</p>
                        <div className="w-1 h-1 bg-red-900 rounded-full"></div>
                        <p>{blog.date}</p>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBlog;
