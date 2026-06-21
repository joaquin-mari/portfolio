import CyanButton from "../utils/CyanButton";
import goToLink from "../utils/goToLink";
import ProjectTitle from "../utils/ProjectTitle";
import type Project from "./ProjectInterface";
import BlueTag from "../utils/BlueTag";
import StackList from "../utils/StackList";

interface Props {
  project: Project;
  isReversed: boolean;
}

export default function ProjectEntry({ project, isReversed }: Props) {
  return (
    <div
      className={`sm:hidden lg:flex items-center gap-10 mt-20 ${
        isReversed ? "flex-row-reverse text-left" : "flex-row md:text-right"
      }`}
    >
      <div className="md:w-1/2 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
      <div
        className={`md:w-1/2 max-w-xl space-y-5 ${
          isReversed ? "ml-0 md:mr-auto" : "ml-auto"
        }`}
      >
        <BlueTag tag={project.description || ""}></BlueTag>

        <ProjectTitle title={project.title}></ProjectTitle>
        <div className="bg-gray-box p-5 text-md rounded-xl text-gray-border">
          <p>
            {project.text.map((segment, index) => (
              <span
                key={index}
                className={segment.highlight ? "text-cool-cyan" : ""}
              >
                {segment.content}
              </span>
            ))}
          </p>
        </div>
        <StackList tags={project.tags} isReversed={isReversed} />
        <CyanButton text="Learn More" onClick={() => goToLink(project.link)} />
      </div>
    </div>
  );
}
