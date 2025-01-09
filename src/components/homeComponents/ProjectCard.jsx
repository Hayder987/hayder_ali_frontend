import { useState } from "react";
import { Link } from "react-router";

const ProjectCard = ({ post }) => {
  const [shadow, setShadow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShadow(true)}
      onMouseLeave={() => setShadow(false)}
      data-aos="zoom-in"
      data-aos-duration="1200"
      className="bg-[#1f2125] relative group p-6 rounded-lg shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300"
    >
      <div className="overflow-hidden duration-300 rounded-lg">
        <img
          src={post?.allImage?.photo1}
          alt=""
          className="w-full duration-300 group-hover:scale-110  rounded-md object-cover h-[350px]"
        />
      </div>
      <p className="uppercase font-normal my-4 text-[#ff014f]">{post?.type}</p>
      <h3 className="text-2xl font-medium text-gray-400 mb-6">{post?.title}</h3>

      <div
        className={`p-24 ${
          shadow ? "flex" : "hidden"
        } bg-[#1f2125] w-full h-full bg-opacity-70 absolute top-0 left-0 z-10 rounded-lg`}
      >
        <div className="flex justify-between gap-6 items-center">
          <button
            onClick={() =>
              window.open(`${post?.liveUrl}`, "_blank", "noopener,noreferrer")
            }
            className="bg-[#1f2125] bg-opacity-80 hover:text-[#ff014f] font-semibold rounded-md py-2 lg:py-4 px-4 lg:px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300"
          >
            Live Url
          </button>

          <Link to={`/details/${post?._id}`}>
            <button className="bg-[#1f2125] bg-opacity-80 hover:text-[#ff014f] font-semibold rounded-md py-2 lg:py-4 px-4 lg:px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
