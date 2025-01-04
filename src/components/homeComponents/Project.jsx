import ProjectCard from "./ProjectCard";

const Project = () => {
    return (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           <ProjectCard></ProjectCard>
           <ProjectCard></ProjectCard>
           <ProjectCard></ProjectCard>
        </div>
    );
};

export default Project;