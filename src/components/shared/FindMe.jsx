import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

const FindMe = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default FindMe;
