import axios from "axios";
import { useEffect, useState } from "react";
import LoaderSpinner from "../components/shared/LoaderSpinner";
import ProjectCard from "../components/homeComponents/ProjectCard";

const ProjectPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_Server_URL}/allProject`)
        .then((res) => {
          setPosts(res.data);
          setLoading(false);
        });
    }, []);

    return (
        <div className="p-4 md:p-8 lg:p-12">
           <div className="container mx-auto">
            {loading? <LoaderSpinner></LoaderSpinner>:
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                <ProjectCard key={post._id} post={post}></ProjectCard>
              ))}
            </div>
            }
           </div>
        </div>
    );
};

export default ProjectPage;