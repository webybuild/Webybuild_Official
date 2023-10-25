import React from "react";
import { useState, useEffect } from 'react'
import bannerImg from "../assets/images/blog/Rectangle 20.png";
import codingImg from "../assets/images/blog/codingSvg.svg";
import businessImg from "../assets/images/blog/businessSvg.svg";
import websiteImg from "../assets/images/blog/websiteSvg.svg";
import blogImg from "../assets/images/blog/blogsSvg.svg";
import graphicImg from "../assets/images/blog/graphicsSvg.svg";
import growthImg from "../assets/images/blog/growthSvg.svg";
import axios from "axios";
import { useRecoilState } from "recoil";
import hotBlogsAtom from '../atoms/hotBlogsAtom'
import editorBlogsAtom from '../atoms/editorBlogsAtom'
import { Link } from "react-router-dom";
import { url } from "../utils/config";
import MarkdownPreview from '@uiw/react-markdown-preview';
import AddComment from "../components/AddComment";
import avatars from "../utils/avatars";
import serviceLogos from "../utils/serviceLogos";
import fetchData from "../custom_functions/fetchData";

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
  const [ data, setData ] = useState(null)
  const [ hotBlogs, setHotBlogs ] = useRecoilState(hotBlogsAtom)
  const [ editorBlogs, setEditorBlogs ] = useRecoilState(editorBlogsAtom)
  const [ showCommentBox, setShowCommentBox ] = useState(false)
  const [ comment, setComment ] = useState('')
  const [ blogId, setBlogId ] = useState()
  // {title: '', body: [], comments: [], author: '', date: ''}
  useEffect(() => { 
    fetchBlogData();
    fetchEditorBlogs()
  }, [])


  function addComment(name, avatar) {
    const blog = {...data};
    blog.comments.push({comment, name, avatar, date: new Date(Date.now()).toDateString()});
    setData(blog);
    setComment('')
  }


  async function fetchBlogData() {
    const id = window.location.pathname.split('/')[2]
    setBlogId(id)
    try {
      const {data} = await axios.get(`${url}/blog/${id}`) ;
      console.log(data)
      setData(data.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchEditorBlogs() {
    if(editorBlogs.length === 0){
      try {
        const {data} = await axios.get(`${url}/blogs?type=editor&page=1&limit=4`)
        setEditorBlogs(data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  async function fetchNewBlog(id) {
    try {
      fetchData(`${url}/blog/${id}`, console.log, (data) => {setData(data.data)})
    } catch (error) {
      console.log(error)
    }
  }


  return (
    data !== null &&
    <>
      {
        showCommentBox && <AddComment data={{comment, blogId}} addComment={addComment} setShowForm={setShowCommentBox} />
      }
      <div className="container mx-auto overflow-hidden px-4 sm:px-8 md:px-16 lg:px-28">
        <div className="flex flex-col items-center justify-center lg:flex-row mt-4 sm:mt-6">
          <div className="flex-1 p-4 sm:p-6 md:p-10 m-4 sm:m-6">
            <div>
              <h2 className="text-4xl sm:text-6xl mt-2 sm:mt-4">
                {data.title}
              </h2>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="w-[6%]">
                <img className="w-full h-full" src={avatars[data.avatar] || avatars['anon']} alt="" />
              </div>
              <div>
                <h1 className="text-sm font-light">{data.author}</h1>
                <p className="text-xs font-light">{data.date}</p>
              </div>
            </div>
          </div>
          <div className="w-4/5 lg:w-2/6">
            <img
              className="w-full drop-shadow-lg"
              src={data.imageUrl}
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
            {
              data && data.body && data.body.map((body, index) => 
                <p className="font-light" key={index}><MarkdownPreview source={body} /></p>
              )
            }
            
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
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
              <button 
                onClick={() => {if(comment.length > 0) setShowCommentBox(true)}}
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md"
              >
                Post
              </button>
            </div>
            <div className="px-5 w-full xl:w-2/3 ">
              {
                data && data.comments && data.comments.map((comment, index) => 
                <div key={index}>
                  <div className="flex items-center gap-4 mt-8">
                    <div className="w-[10%]">
                      <img
                        className="w-full h-full rounded-full"
                        src={avatars[comment.avatar]  || avatars['anon']}
                        alt="ProfileImage"
                      />
                    </div>
                    <div>
                      <h1 className="text-base sm:text-base font-semibold">
                        {comment.name}
                      </h1>
                      <p className="text-xs sm:text-xs text-gray-500">
                        {new Date(comment.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-sm sm:text-base mt-4">
                    {comment.comment}
                  </h2>
                </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="flex-[1] hidden lg:block">
          <div>
            <div>
              <p className="font-light text-sm">What's hot</p>
              <h1 className="font-semibold text-2xl">Most Popular</h1>
            </div>
            {
              hotBlogs.map((blog, index) =>
                <div className="mt-8" key={index}>
                  <Link to={`/blog/${blog.id}`} onClick={() => fetchNewBlog(blog.id)}>
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
            {
                editorBlogs.map((blog, index) => 
                  <div key={index} className="mt-8 flex justify-center items-center gap-4">
                    <div className="w-2/6">
                      <img
                        className="w-full h-full rounded-full"
                        src={serviceLogos[blog.category]}
                        alt=""
                        srcset=""
                      />
                    </div>
      
                    <div>
                      <Link to={`/blog/${blog.id}`} onClick={() => fetchNewBlog(blog.id)}>
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
                  </div>
                )
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
