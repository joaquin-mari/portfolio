import Title from "../utils/Title";
import NumberSpan from "../utils/NumberSpan";
import HorizontalLine from "../utils/HorizontalLine";
import Paragraph from "../utils/Paragraph";

const AboutMe = () => {
  const paragraph_text = `Hello! My name is Joaquin and I am a senior student of International Information Systems at Augsburgs University of Applied Sciences. In my free time I love building cool projects and learning about fun topics such as Web development, Machine Learning and Data Engineering.

Fast Forward to today, I have had the opportunity to leave my home country Spain in order to start my personal journey and study my bachelors in Germany, tutor first year students as a teaching assistant, intern as a full-time Software Developer and attend a lot of Hackathons, where I built together with my friends very cool software solutions.

My main focus today are working on my bachelor thesis and work part time as a Web Developer.`;

  return (
    <section className="flex items-center justify-center min-h-screen w-full">
      <div className="w-4xl align-left px-5">
        <div className="flex items-center gap-15 text-left">
          <div className="flex gap-5 items-baseline">
            <NumberSpan text="1" size="4xl" />
            <Title text="About Me" />
          </div>
          <HorizontalLine width="w-full" />
        </div>
        <Paragraph text={paragraph_text} />
      </div>
    </section>
  );
};

export default AboutMe;
