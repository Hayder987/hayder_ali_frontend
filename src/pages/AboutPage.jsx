import { useState } from "react";
import aboutImg from "../assets/images/AboutGithub.jpg";
import Skill from "../components/skillComponents/Skill";
import Passion from "../components/skillComponents/Passion";
import Values from "../components/skillComponents/Values";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";

const AboutPage = () => {
  const [skill, setSkill] = useState("skill");

  return (
    <div className="p-4 md:p-8 lg:p-12 mb-20">
      <div className="flex lg:max-w-[1200px] mx-auto flex-col  justify-center items-center gap-14 ">
        {/* img */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" lg:w-1/2 flex justify-center items-center">
            <img src={aboutImg} alt="" className="h-[450px]" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-3">Hi! I’m Hayder,</h3>
            <p className="text-base font-medium text-gray-300 mb-10">
              My journey into development began with a deep-seated curiosity
              about technology and problem-solving. I was fascinated by the way
              software could solve real-world problems, streamline processes,
              and connect people across the globe. Over the years, I have honed
              my skills by working on various hands-on projects, solving coding
              challenges, and building real-world applications. What excites me
              the most is the creative problem-solving aspect of development.
              Turning an idea into a functional, impactful solution is my
              driving force. Whether it’s developing a feature-packed web app,
              optimizing performance, or ensuring accessibility, my focus is
              always on delivering exceptional results.
            </p>
            <p className="flex items-center text-xl mb-3 gap-4">
                <span className="font-bold"><FaEnvelope /> </span>
                <span className="text-gray-400"> hayderbd4290@gmail.com </span>
            </p>
            <p className="flex items-center text-xl mb-3 gap-4">
                <span className="font-bold"><IoHome /> </span>
                <span className="text-gray-400">Pabna, Dhaka, Bangladesh </span>
            </p>
            <p className="flex items-center text-xl gap-4">
                <span className="font-bold"><FaPhoneAlt /> </span>
                <span className="text-gray-400">+8801771814597 </span>
            </p>
          </div>
        </div>
        <div className="border-b-2 border-black/40 w-full"></div>
        {/* text */}
        <div className="">
          <div className="">
            <div className="py-4 flex justify-center items-center ">
              <div className="flex flex-wrap mb-6 justify-center items-center gap-6">
                <button
                  onClick={() => {
                    setSkill("skill");
                  }}
                  className={`bg-[#1f2125] hover:text-[#ff014f] rounded-md ${
                    skill === "skill"
                      ? "shadow-[0_4px_24px_rgba(255,1,79,0.8)]"
                      : "shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] "
                  }  duration-300 text-xl p-3`}
                >
                  Skills Overview
                </button>
                <button
                  onClick={() => {
                    setSkill("passion");
                  }}
                  className={`bg-[#1f2125] hover:text-[#ff014f] rounded-md ${
                    skill === "passion"
                      ? "shadow-[0_4px_24px_rgba(255,1,79,0.8)]"
                      : "shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] "
                  }  duration-300 text-xl p-3`}
                >
                  Journey & Passion
                </button>
                <button
                  onClick={() => {
                    setSkill("values");
                  }}
                  className={`bg-[#1f2125] hover:text-[#ff014f] rounded-md ${
                    skill === "values"
                      ? "shadow-[0_4px_24px_rgba(255,1,79,0.8)]"
                      : "shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] "
                  }  duration-300 text-xl p-3`}
                >
                  Core Beliefs & Values
                </button>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="">
            {skill === "skill" && <Skill></Skill>}
            {skill === "passion" && <Passion></Passion>}
            {skill === "values" && <Values></Values>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
