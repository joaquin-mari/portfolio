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
        "Working on a dashboard for display of flight data",
        "Live data integration",
        "AI smart search feature",
        "Stack: FastAPI, React, PostgreSQL, Web Sockets, Pandas, Tailwind",
      ],
    },
    {
      company: "Adesso SE",
      title: "Software Developer",
      period: "September 2024 - February 2024",
      details: [
        "Development of an internal AI chat application using RAG",
        "Working in a software development team using Scrum",
        "Stack: Langchain, Ollama, Python, Spring Boot, React",
      ],
    },
    {
      company: "THA",
      title: "Programming Teaching Assistant",
      period: "October 2023 - July 2024",
      details: [
        "Assisted students in subjects of Programming 1 and 2 at Augsburg's University of Applied Sciences",
        "Explanation of Programming concepts such as Object Oriented Programmin, Algorithms and Data Structures",
        "Language: Java",
      ],
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen w-full">
      <div className="w-4xl align-left px-5">
        <Heading number="2" title="Where I've worked" />
        <ClickableList items={propItems} />
      </div>
    </section>
  );
}
