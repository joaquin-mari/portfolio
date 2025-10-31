export default interface Project {
  description?: string;
  title: string;
  text: { content: string; highlight?: boolean }[];
  tags: string[];
  image?: string;
}
