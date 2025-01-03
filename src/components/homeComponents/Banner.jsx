import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import bannerImg from "../../assets/images/orin.png";
import { LuFacebook } from "react-icons/lu";
import js from "../../assets/logo/js.png";
import reactLogo from "../../assets/logo/react.png";
import fireBase from "../../assets/logo/firebase.png";
import nodelogo from "../../assets/logo/nodejs.png";
import Express from "../../assets/logo/express3.webp";
import mongoLogo from "../../assets/logo/mongodb.png";
import tailwind from "../../assets/logo/tailwind.png";
import nextJs from "../../assets/logo/nextjs2.png";

const Banner = () => {
  return (
    <div className="flex justify-center mb-20 md:mb-24 py-10 items-center min-h-[90vh] container mx-auto flex-col lg:flex-row gap-10">
      {/* text */}
      <div className="lg:w-1/2 py-4 md:py-12">
        <div className="">
          <p className="font-medium mb-4">Welcome to my world</p>
          <h1 className="text-7xl text-gray-100 font-bold mb-6">
            Hi, I’m <span className="text-[#ff014f]">Orin</span>
          </h1>
          <h3 className="text-4xl font-semibold mb-6">a Developer</h3>
          <p className="mb-12 font-medium text-xl text-gray-300">
            I am a passionate and dedicated MERN Stack Developer with a knack
            for creating dynamic, responsive, and user-friendly web
            applications. From front-end design to back-end functionality, I
            specialize in building full-stack solutions using MongoDB,
            Express.js, React, and Node.js.
          </p>
        </div>
        <div className="mb-6">
          <p className="uppercase text-[#ff014f] font-extralight">best skill on</p>
          <div className="py-4 flex flex-wrap justify-start items-center gap-6">
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={tailwind} alt="" className="w-8" />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={js} alt="" className="w-8" />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={reactLogo} alt="" className="w-8" />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={fireBase} alt="" className="w-8" />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={nodelogo} alt="" className="w-8" />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3 py-4">
              <img src={Express} alt="" className="w-8 " />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={mongoLogo} alt="" className="w-8" />
            </div>
            <div className="bg-[#1f2125] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
              <img src={nextJs} alt="" className="w-8" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="uppercase text-[#ff014f] font-extralight">find With me</p>
          <div className="flex justify-between items-center">
            <div className="py-4 flex justify-start items-center gap-6">
              <button className="bg-[#1f2125] hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
                <LuFacebook />
              </button>
              <button className="bg-[#1f2125] hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
                <FaGithub />
              </button>
              <button className="bg-[#1f2125] hover:text-[#ff014f] rounded-md shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300 text-2xl p-3">
                <FaLinkedinIn />
              </button>
            </div>
            <div className="">
              <button className="bg-[#1f2125] hover:text-[#ff014f] font-semibold rounded-md p-4 px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">Resume</button>
            </div>
          </div>
        </div>
      </div>
      {/* images */}
      <div className="w-full lg:w-1/2 p-4 md:p-6 flex flex-col justify-end items-center">
        <img src={bannerImg} alt="" className="object-cover  min-w-full h-full" />
      </div>
    </div>
  );
};

export default Banner;
