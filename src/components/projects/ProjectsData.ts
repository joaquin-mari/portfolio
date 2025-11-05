import type Project from "./ProjectInterface";

export const projects: Project[] = [
  {
    description: "Bachelor Thesis",
    title: "ML in the Health Sector",
    text: [
      { content: "Training of Machine Learning to help identify " },
      { content: "dangerous electrical signals", highlight: true },
      { content: " in muscles in order to help diagnose " },
      { content: "Neurological illnesses", highlight: true },
      {
        content:
          ". This project is being performed in cooperation with Augsburgs Hospital and is the work of my bachelor thesis",
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
          "Building of Chat Assistant for the website of Augsburgs University of Applied Sciences. Help answer ",
      },
      { content: "student questions", highlight: true },
      {
        content:
          " and retrieve important information found in the website. Collection of data from the website and design, building and testing of ",
      },
      { content: "RAG system", highlight: true },
      { content: " for correct answering of questions." },
    ],
    tags: ["RAG", "Python", "NLP", "Langchain"],
    image: "/BYOVA.png",
    link: "https://github.com/joaquin-mari/new_at_the_tha",
  },
];
