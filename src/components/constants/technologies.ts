import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiZod,
  SiReacthookform,
  SiReactquery,
  SiJest,
  SiTestinglibrary,
} from "react-icons/si";
import { Database, KeyRound, Shield } from "lucide-react";
import { Technology } from "../../types/tech";

 const technologies: Technology[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Neon", icon: Database, color: "#00E599" },
  { name: "NextAuth", icon: KeyRound, color: "#9333EA" },
  { name: "BetterAuth", icon: Shield, color: "#10B981" },
  { name: "Zod", icon: SiZod, color: "#3E67B1" },
  { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
  { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "React Testing Library", icon: SiTestinglibrary, color: "#E33332" },
];
export default technologies