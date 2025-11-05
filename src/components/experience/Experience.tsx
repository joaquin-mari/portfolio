import Heading from "../utils/Heading";
import ClickableList from "./ClickableList";
import type Item from "./ItemInterface";

export default function Experience() {
  const propItems: Item[] = [
    {
      company: "Airbus",
      title: "Web Developer",
      period: "July 2025 - March 2026",
      details: [
        "Developed a dashboard for visualizing flight data",
        "Integrated live data streams for real-time updates",
        "Implemented an AI-powered smart filtering feature",
        "Stack: React, PostgreSQL, FastAPI, Kafka, Pandas, Tailwind, TypeScript",
      ],
    },
    {
      company: "Adesso SE",
      title: "Software Developer",
      period: "September 2024 - February 2025",
      details: [
        "Developed an internal AI chat application using a RAG approach",
        "Collaborated in a Scrum software development team",
        "Stack: Langchain, Ollama, Python, Spring Boot, React",
      ],
    },
    {
      company: "THA",
      title: "Teaching Assistant",
      period: "October 2023 - July 2024",
      details: [
        "Assisted students in Programming 1 and 2 at Augsburg University of Applied Sciences",
        "Explained programming concepts including Object-Oriented Programming, Algorithms, and Data Structures",
        "Language used: Java",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="flex items-center justify-center min-h-screen w-full py-20"
    >
      <div className="w-4xl px-5 ">
        <Heading number="2" title="Where I've worked" />
        <ClickableList items={propItems} />
      </div>
    </section>
  );
}
