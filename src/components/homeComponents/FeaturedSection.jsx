import { HiMiniBars4 } from "react-icons/hi2";
import FeaturedCard from "../FeaturedCard";
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdSyncProblem } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiCollapse } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";

const FeaturedSection = () => {
  return (
    <div className="container mx-auto mb-20 md:mb-32">
      <div className="mb-14">
        <p className="font-extralight text-center text-xl text-[#ff014f]">Features</p>
        <h1 className="text-4xl text-center md:text-6xl font-bold">Why Choose Me</h1>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FeaturedCard
          logo={<HiMiniBars4 />}
          title={"Full-Stack Expertise"}
          desc={
            "I specialize in MERN stack development, building end-to-end solutions. From crafting responsive frontends with React to designing scalable backends using Node.js and Express, I ensure seamless integration with MongoDB for a complete and robust application."
          }
        ></FeaturedCard>
        <FeaturedCard
          logo={<LuMonitorSmartphone />}
          title={"Clean & Responsive Design"}
          desc={
            "I deliver modern, clean, and fully responsive designs that provide a seamless user experience across all devices. My focus on UI/UX trends ensures your website looks great and functions perfectly, whether on desktop, tablet, or mobile."
          }
        ></FeaturedCard>
        <FeaturedCard
          logo={<MdSyncProblem />}
          title={"Problem-Solving Approach"}
          desc={
            "I excel at tackling complex challenges with innovative solutions. Whether debugging code, improving performance, or streamlining workflows, I bring a strategic and efficient approach to overcome any obstacle in your project."
          }
        ></FeaturedCard>
        <FeaturedCard
          logo={<GrDocumentPerformance />}
          title={"Scalability & Performance"}
          desc={
            "I develop scalable applications designed to grow with your needs. By optimizing both frontend and backend performance, I ensure that your website or app remains fast, efficient, and user-friendly, even as your user base expands."
          }
        ></FeaturedCard>
        <FeaturedCard
          logo={<BiCollapse />}
          title={"Communication & Collaboration"}
          desc={
            "I believe that great development starts with great communication. I keep you updated throughout the project lifecycle and work collaboratively to align my solutions with your goals, ensuring transparency and trust."
          }
        ></FeaturedCard>
        <FeaturedCard
          logo={<FaRegHandshake />}
          title={"Commitment to Excellence"}
          desc={
            "I am dedicated to delivering high-quality work that exceeds expectations. With a focus on detail, reliability, and meeting deadlines, I take pride in providing results that make your project stand out in the competitive digital space."
          }
        ></FeaturedCard>
      </div>
    </div>
  );
};

export default FeaturedSection;
