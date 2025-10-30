import type Project from "./ProjectInterface";

export const projects: Project[] = [
  {
    description: "Bachelor Thesis",
    title: "ML in the Health Sector",
    text: "Training ML models to identify dangerous electrical signals in muscles...",
    tags: ["ML", "Pandas", "Signal Processing"],
    image: "/Thesis-Image.png",
  },
  {
    description: "Featured Project",
    title: "Chat Assistant for University Website",
    text: "Building of Chat Assistant for the website of Augsburg’s University of Applied Sciences, Help answer student questions and retrieve important information found in the website Collection of data from the website and design,building and testing of RAG system for correct answering of questions",
    tags: ["RAG", "Python", "NLP", "Langchain"],
    image: "/BYOVA.png",
  },
];

export default projects;
