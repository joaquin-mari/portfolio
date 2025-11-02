import Heading from "../utils/Heading";
import GitBox from "./GitBox";
import gitData from "./GitBoxData";

export default function Other() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full py-40">
      <div className="w-4xl align-left px-5">
        <Heading title={"Other Projects"} />
        <div className="flex gap-10 pt-30 justify-center sm:flex-col sm:items-center lg:flex-row lg:items-start">
          {gitData.map((project, index) => (
            <GitBox key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
