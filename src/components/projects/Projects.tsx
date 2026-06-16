import Heading from "../utils/Heading";
import ProjectEntry from "./ProjectEntry";
import ProjectEntryMobile from "./ProjectEntryMobile";
import { projects } from "./ProjectsData";

export default function Projects() {
  return (
    <section
      id="work"
      className="flex items-center justify-center min-h-screen w-full py-40 sm:px-10 lg:pg-0"
    >
      <div className="w-6xl align-left px-5">
        <Heading number="3" title={"Some things I've built"} />
        {projects.map((project, index) => (
          <>
            <ProjectEntry
              key={index}
              project={project}
              isReversed={index % 2 != 0}
            />
            <ProjectEntryMobile
              key={index}
              project={project}
              isReversed={index % 2 != 0}
            />
            <ProjectEntryMobile
              key={index}
              project={project}
              isReversed={index % 2 != 0}
            />
          </>
        ))}
      </div>
    </section>
  );
}
