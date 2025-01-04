import bannerImg from "../../assets/images/bannerPhotomy.png";
import js from "../../assets/logo/js.png";
import reactLogo from "../../assets/logo/react.png";
import fireBase from "../../assets/logo/firebase.png";
import nodelogo from "../../assets/logo/nodejs.png";
import Express from "../../assets/logo/express3.webp";
import mongoLogo from "../../assets/logo/mongodb.png";
import tailwind from "../../assets/logo/tailwind.png";
import nextJs from "../../assets/logo/nextjs2.png";
import FindMe from "../shared/FindMe";

const Banner = () => {
  return (
    <div className="flex justify-center mb-20 md:mb-24 py-10 items-center min-h-[90vh] container mx-auto flex-col-reverse lg:flex-row gap-10">
      {/* text */}
      <div className="lg:w-1/2 py-4 md:py-12">
        <div className="">
          <p className="font-medium mb-4">Welcome to my world</p>
          <h1 className="text-7xl text-gray-100 font-bold mb-6">
            Hi, I’m <span className="text-[#ff014f]">Hayder</span>
          </h1>
          <h3 className="text-4xl font-semibold mb-6">a MERN Stack Developer</h3>
          <p className="mb-12 font-medium text-xl text-gray-300">
            I am a passionate and dedicated MERN Stack Developer with a knack
            for creating dynamic, responsive, and user-friendly web
            applications. From front-end design to back-end functionality, I
            specialize in building full-stack solutions using MongoDB,
            Express.js, React, and Node.js.
          </p>
        </div>
        <div className="mb-6">
          <p className="uppercase mb-3 text-[#ff014f] font-normal">
            best skill on
          </p>
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
          <p className="uppercase text-[#ff014f] mb-3 font-normal">
            find With me
          </p>
          <div className="flex justify-between items-center">
            <FindMe></FindMe>
            <div className="">
              <button
              onClick={()=>window.open("https://docs.google.com/document/d/1N4bwCFQT80JMLPASGraRBaM7g6iWj_uyPbPfFAewqSc/edit?usp=sharing", "_blank", "noopener,noreferrer")}
               className="bg-[#1f2125] hover:text-[#ff014f] font-semibold rounded-md p-4 px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* images */}
      <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-16 flex flex-col justify-end items-center">
        <img
          src={bannerImg}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
