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
      company: "Adesso",
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
      company: "THA",
      title: "Web Developer",
      period: "July 2025 - March 2026",
      details: [
        "Working on a dashboard for display of flight data",
        "Live data integration",
        "AI smart search feature",
        "Stack: FastAPI, React, PostgreSQL, Web Sockets, Pandas, Tailwind",
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
