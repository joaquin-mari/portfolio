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
];
