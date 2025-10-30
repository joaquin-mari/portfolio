import type Project from "../projects/ProjectInterface";

interface Props {
  project: Project;
}

export default function GitBox({ project }: Props) {
  return (
    <div className="p-15 w-100 bg-soft-gray align-center">
      <h3 className="font-playfair text-2xl">{project.title}</h3>
      <p className="font-lg">{project.text}</p>
      <ul className={"flex flex-wrap text-md gap-3 justify-start"}>
        {project.tags.map((tag, index) => (
          <li key={index} className="px-3 py-1 text-sm font-medium">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
