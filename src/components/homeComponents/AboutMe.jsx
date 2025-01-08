import { Link } from "react-router";
import aboutImg from "../../assets/images/coding.webp";
import AboutMeText from "./AboutMeText";
const AboutMe = () => {
  return (
    <div className="flex container mx-auto flex-col lg:flex-row  justify-center items-center gap-10 ">
      {/* img */}
      <div className="w-full lg:w-6/12 flex justify-start items-center">
        <img src={aboutImg} alt="" className="w-full  rounded-lg max-h-fit object-cover" />
      </div>
      {/* text */}
      <div className="w-full lg:6/12 ">
        <AboutMeText></AboutMeText>
        <Link to='/aboutMe'>
          <button className="bg-[#1f2125] mt-6 hover:text-[#ff014f] font-semibold rounded-md p-4 px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
