import { Link } from "react-router";

const ProjectCard = ({ post }) => {
  return (
    <div 
    data-aos="zoom-in"
    data-aos-duration="1200"
    className="bg-[#1f2125] group p-6 rounded-lg shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.5)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
      <div className="overflow-hidden duration-300 rounded-lg">
        <img
          src={post?.allImage?.photo1}
          alt=""
          className="w-full duration-300 group-hover:scale-110  rounded-md object-cover h-[350px]"
        />
      </div>
      <p className="uppercase font-normal my-4 text-[#ff014f]">{post?.type}</p>
      <h3 className="text-2xl font-medium text-gray-400 mb-6">{post?.title}</h3>
      <div className="flex justify-between items-center">
        <button
          onClick={() =>
            window.open(
              `${post?.liveUrl}`,
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="bg-[#1f2125] hover:text-[#ff014f] font-semibold rounded-md p-4 px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300"
        >
          Live Url
        </button>

        <Link to={`/details/${post?._id}`}>
        <button
          className="bg-[#1f2125] hover:text-[#ff014f] font-semibold rounded-md p-4 px-8 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300"
        >
          Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
