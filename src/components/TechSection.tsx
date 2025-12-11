const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Styled Components",
  "HTML5",
  "CSS3",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Neon",
  "NextAuth",
  "BetterAuth",
  "Zod",
  "React Hook Form",
  "TanStack Query",
  "Jest",
  "React Testing Library",
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
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
