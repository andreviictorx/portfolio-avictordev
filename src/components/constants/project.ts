import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "SIGESTE",
    description:
      "Sistema de gerenciamento acadêmico completo com autenticação, painel administrativo, cadastros e landing page institucional.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "React",
    ],
    urlImg: "",
    featured: true,
    links: {
      frontend: "https://github.com/andreviictorx/SIGEST",
      deploy: "#",
    },
  },
  {
    title: "Instituto doralice",
    description:
      "Site para o Instituto de responsabilidade social, onde houve um aumento em 45% da sua visibilidade em seu municipio.",
    stack: ["Javascript", "HTML", "CSS"],
    featured: false,
    urlImg: "/photoInstituto.png",
    links: {
      deploy: "https://institutodoralice.vercel.app/",
    },
  },
];
