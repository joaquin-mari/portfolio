import Heading from "../utils/Heading";
import ProjectEntry from "./ProjectEntry";

export default function Projects() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full">
      <div className="w-4xl align-left px-5">
        <Heading number="3" title={"Some things I've built"} />
        <ProjectEntry />
      </div>
    </section>
  );
}
