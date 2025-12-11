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

const technologies = [
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

export function TechSection() {
  return (
    <section id="tecnologias" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono text-primary text-sm mb-2 block">// stack</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Tecnologias
            </h2>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all group min-h-[100px]"
                >
                  <IconComponent
                    className="h-8 w-8 transition-transform group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs font-medium text-foreground text-center group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
