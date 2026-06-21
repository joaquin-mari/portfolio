import type Project from "./ProjectInterface";

export const projects: Project[] = [
  {
    description: "Bachelor Thesis",
    title: "ML in the Health Sector",
    text: [
      { content: "Training machine learning models to help detect " },
      { content: "dangerous electrical signals", highlight: true },
      { content: " in muscles, with the goal of supporting the diagnosis of " },
      { content: "neurological disorders", highlight: true },
      {
        content:
          ". This project is carried out in collaboration with Augsburg Hospital as part of my bachelor thesis.",
      },
    ],
    tags: ["ML", "Data Engineering", "Pandas", "Signal Processing"],
    image: "/Thesis-Image.png",
    link: "https://github.com/joaquin-mari/EMG-Thesis",
  },
  {
    description: "Featured Project",
    title: "Chat Assistant for University Website",
    text: [
      {
        content:
          "Developed a chat assistant for the Augsburg University website to help answer ",
      },
      { content: "student questions", highlight: true },
      {
        content:
          " and provide important information from the website. The project involved data collection, design, implementation, and testing of a ",
      },
      { content: "RAG system", highlight: true },
      { content: " to ensure accurate responses." },
    ],
    tags: ["RAG", "Python", "NLP", "Langchain"],
    image: "/BYOVA.png",
    link: "https://github.com/joaquin-mari/new_at_the_tha",
  },
  {
    description: "DevOps Project",
    title: "GuitarHero - DevOps Learning Platform",
    text: [
      {
        content:
          "Built a full-stack guitar practice tracking application designed primarily as a ",
      },
      { content: "DevOps learning project", highlight: true },
      {
        content:
          ". The system focuses on deploying and operating a complete infrastructure on a Linux VPS server, including containerized services, CI/CD pipelines, and production monitoring with ",
      },
      { content: "Prometheus and Grafana", highlight: true },
      {
        content: " to track application and system metrics in real time.",
      },
    ],
    tags: ["Docker", "CI/CD", "Prometheus", "Grafana", "Linux"],
    image: "/GuitarHero.png",
    link: "https://github.com/joaquin-mari/GuitarHero",
  },
];
