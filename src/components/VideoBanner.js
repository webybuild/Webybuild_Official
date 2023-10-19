import React from "react";
// import ReactPlayer from "react-player";

const VideoBanner = () => {
  return (
    <div className="relative w-full h-auto lg:h-[50vh] bg-[#ffffff]">
      {/* <ReactPlayer
        className="absolute -z-10"
        width={"100%"}
        height={"100%"}
        url={
          "https://dl.dropboxusercontent.com/scl/fi/to3fvjz31ahmwzaavaqt0/22a93189-49fa-444e-912a-c7cba483dc7a.mp4?rlkey=msu7fnia78nsdvtxbql6j0jbu&dl=0"
        }
        playing={true}
        loop={true}
        muted={true}
      /> */}
      <div className="w-full h-full flex flex-col justify-center items-center text-black  px-4 text-center">
        <div className="px-9 py-4 uppercase text-lg lg:text-5xl bg-[#ffffff9e] backdrop-blur-xl border rounded-md">
          <h1 className="mb-2 text-base lg:text-4xl multi_color_heading font-semibold">
            Ready to get started ?
          </h1>
          <p className="text-xs lg:text-base font-light">
            Let’s craft your next digital story
          </p>
          <button className="uppercase border gradient-border-button mt-5 text-xs lg:text-base bg-[#ffffff95] px-5 py-2">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
