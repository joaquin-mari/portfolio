import CyanButton from "../utils/CyanButton";
import goToLink from "../utils/goToLink";
import type Project from "./ProjectInterface";

interface Props {
  project: Project;
  isReversed: boolean;
}

export default function ProjectEntryMobile({ project, isReversed }: Props) {
  return (
    <div
      className={`sm:flex lg:hidden relative flex flex-col items-center gap-2 0 mt-20 text-center
      }`}
    >
      <div className="max-w-2xl space-y-10">
        <span className="text-cool-cyan font-recursive text-3xl ">
          {project.description}
        </span>

        <h3 className="font-playfair text-6xl font-bold mt-4">
          {project.title}
        </h3>

        <div className="bg-gray-box p-5 text-2xl rounded-4xl text-gray-border">
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

        <ul className="flex items-center justify-center flex-wrap text-md gap-4 py-4">
          {project.tags.map((tag, index) => (
            <li
              key={index}
              className="px-4 py-2 text-lg font-medium font-recursive rounded-lg text-gray-border"
            >
              {tag}
            </li>
          ))}
        </ul>
        <CyanButton text="Learn More" onClick={() => goToLink(project.link)} />
      </div>
      <div className="md:w-2/3 relative my-20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
}
