import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Dev Portfolio",
    projectStart: "Jan 2025",
    projectEnd: "Jan 2025",
    description:
      "A minimal, responsive developer portfolio built with React.js, TypeScript, and Tailwind CSS. It features smooth animations using Framer Motion, clean UI.",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "GSAP",
      "Rough Notation",
    ],
    live: "",
    github: "",
    image: ["/project-1-light.png", "/project-1-dark.png"],
  },
  {
    id: 2,
    title: "Interview-Experience",
    description:
      "An interactive AI-powered interviewer built with Gradio, Google Generative AI (Gemini), and gTTS (Text-to-Speech).",
    techStack: [
      "Python.js",
      "Gradio",
      "Google Generative AI",
      "gTTS",
      "tempfile",
    ],
    live: "https://pairpro.site",
    github: "https://github.com/VipulDub-Cdr/Interview_Experience",
    image: ["/project-2-light.png", "/project-2-dark.png"],
    projectStart: "May 2025",
    projectEnd: "Jun 2025",
  },
];
