import Heading from "../utils/Heading";
import ProjectEntry from "./ProjectEntry";
import projects from "./ProjectsData";

export default function Projects() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full">
      <div className="w-6xl align-left px-5">
        <Heading number="3" title={"Some things I've built"} />
        {projects.map((project, index) => (
          <ProjectEntry project={project} isReversed={index % 2 != 0} />
        ))}
      </div>
    </section>
  );
}
