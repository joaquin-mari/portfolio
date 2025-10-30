import type Project from "../projects/ProjectInterface";

interface Props {
  project: Project;
}

export default function GitBox({ project }: Props) {
  return (
    <div className="flex flex-col relative px-10 pt-20 pb-15 gap-5 w-100 bg-gray-box align-center rounded-xl cursor-pointer">
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
      <h3 className="font-playfair text-2xl font-bold">{project.title}</h3>
      <p className="font-md">{project.text}</p>
      <ul
        className={
          "flex flex-wrap text-sm gap-3 justify-start font-recursive text-gray-border"
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
