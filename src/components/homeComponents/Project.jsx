import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import LoaderSpinner from "../shared/LoaderSpinner";
import { Link } from "react-router";

const Project = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_Server_URL}/recentProject`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div
    data-aos="fade-up"
    data-aos-duration="1400"
     className="">
      {loading ? (
        <LoaderSpinner></LoaderSpinner>
      ) : (
        <div className="">
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ProjectCard key={post._id} post={post}></ProjectCard>
            ))}
          </div>
          <div className="flex justify-center items-center mt-16">
            <Link to='/project'><button className="bg-[#1f2125] hover:text-[#ff014f] font-semibold rounded-md p-4 px-12 shadow-[0_4px_10px_rgba(33,31,32,0.8),_0_1px_16px_rgba(89,88,89,0.8)] hover:shadow-[0_4px_24px_rgba(255,1,79,0.8)] duration-300">
              View More
            </button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
