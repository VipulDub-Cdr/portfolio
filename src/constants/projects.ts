import { ProjectType } from "../types";

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Interview Experience Platform and CI/CD on AWS",
    description:
      "Streamlit-Based Interview Experience Platform with Generative AI and DevOps Pipeline",
    techStack: [
      "Python",
      "Gradio",
      "Google Generative AI",
      "AWS CodePipeline",
      "AWS CodeBuild",
      "IAM Roles",
    ],
    live: "",
    github: "https://github.com/VipulDub-Cdr/Interview_Experience",
    image: ["/Interview.png", "/Interview.png"],
    projectStart: "June 2025",
    projectEnd: "July 2025",
  },
  {
    id: 2,
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
    github: "https://github.com/VipulDub-Cdr/portfolio",
    image: ["/project-1-light.png", "/project-1-dark.png"],
  },
  {
    id: 3,
    title: "Microservices Based Architecture",
    description:
      "A containerized microservices setup with APIs for user write/read, using PostgreSQL for storage and Redis for caching.",
    techStack: [
      "Python",
      "Docker-Compose",
      "Postgres",
      "Redis",
      "Flask",
    ],
    live: "",
    github: "https://github.com/VipulDub-Cdr/Microservices-Arch",
    image: ["/microservicesLight.png", "/microservicesDark.png"],
    projectStart: "July 2025",
    projectEnd: "July 2025",
  },
  {
    id: 4,
    title: "S3 UI (In Progress)",
    description:
      "A simple UI built with Next.js to browse, download, and manage files and folders stored in an Amazon S3 bucket.",
    techStack: [
      "Next.js",
      "S3 Bucket",
      "Clerk",
      "MongoDB",
      "Amazon Web Services",
    ],
    live: "",
    github: "https://github.com/VipulDub-Cdr/S3UI",
    image: ["/s3ui.png", "/s3ui.png"],
    projectStart: "July 2025",
    projectEnd: "July 2025",
  },
];
