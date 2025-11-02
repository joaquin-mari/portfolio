import type Project from "../projects/ProjectInterface";
import goToLink from "../utils/goToLink";

interface Props {
  project: Project;
}

export default function GitBox({ project }: Props) {
  return (
    <div
      className="flex flex-col relative lg:w-100 lg:h-100 sm:w-120 sm:h-120 px-10 pt-20 pb-15 gap-5 w-100 bg-gray-box align-center rounded-xl cursor-pointer"
      onClick={() => goToLink(project.link)}
    >
      <img
        src="/folderIcon.png"
        alt="folder icon"
        className="absolute left-7 top-5"
      />
      <img
        src="/GitHub.png"
        alt="folder icon"
        className="absolute right-7 top-7"
      />
      <h3 className="font-playfair lg:text-2xl sm:text-4xl font-bold">
        {project.title}
      </h3>
      {project.text.map((segment, index) => (
        <span
          key={index}
          className={
            segment.highlight ? "text-cool-cyan " : "lg:text-md sm:text-xl"
          }
        >
          {segment.content}
        </span>
      ))}
      <ul
        className={
          "flex flex-wrap lg:mt-auto lg:text-sm sm:text-xl gap-3 justify-start font-recursive text-gray-border"
        }
      >
        {project.tags.map((tag, index) => (
          <li key={index} className="px-3 py-1 text-sm font-medium">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
