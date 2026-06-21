import Heading from "../utils/Heading";
import ProjectTitle from "../utils/ProjectTitle";
import BlueTag from "../utils/BlueTag";
import StackList from "../utils/StackList";
import CyanButton from "../utils/CyanButton";

export default function Other() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full py-40">
      <div className="w-4xl align-left px-5">
        <Heading title={"Beyond Development"} />
        <div className="py-40 items-center text-center gap-1 flex flex-col">
          <BlueTag tag={"Certification"} />
          <ProjectTitle title={"Google Cybersecurity Certification"} />
          <div className="text-center lg:text-xl max-w-170 sm:text-3xl ">
            <p>
              An online training program designed to prepare beginners for
              entry-level roles in cybersecurity
            </p>
          </div>
          <div className="lg:w-100 sm:w-120">
            <img
              className="w-full"
              src="/google-certificate.png"
              alt="google cybersecurity certificate"
            />
          </div>
          <StackList
            tags={[
              "SIEM Tools",
              "Linux",
              "Threat Detection",
              "Bash",
              "Network Analysis",
            ]}
          />
          <a
            className="mt-5"
            href="/Google Cybersecurity Certificate Joaquin Mari.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CyanButton text={"Learn More"} />
          </a>{" "}
        </div>
      </div>
    </section>
  );
}
