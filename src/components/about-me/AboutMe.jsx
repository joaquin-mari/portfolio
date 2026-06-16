import Heading from "../utils/Heading";
import Paragraph from "../utils/Paragraph";

const AboutMe = () => {
  const paragraph_text = `Hello! My name is Joaquin and I am graduate of International Information Systems at Augsburg University of Applied Sciences. In my free time I love building cool projects and learning about fun topics such as Software Engineering, DevOps and Cyber Security.

Fast forward to today, I have had the opportunity to leave my home country, Spain, to start my personal journey and pursue my bachelor's degree in Germany, tutor first year students as a teaching assistant, intern as a full-time Software Developer, word part time as a developer for an international company and attend a lot of Hackathons, where I built together with my friends very cool software solutions.

I just finished my bachelors and now I am looking for an opportunity to start my full time career!`;

  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen w-full py-20"
    >
      <div className="w-4xl align-left px-5">
        <Heading number="1" title="About Me" />
        <Paragraph text={paragraph_text} />
      </div>
    </section>
  );
};

export default AboutMe;
