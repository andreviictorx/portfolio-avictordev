const techCategories = [
  {
    title: "Front-end",
    techs: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Back-end & Banco",
    techs: ["PostgreSQL", "Prisma", "Supabase", "Neon"],
  },
  {
    title: "Autenticação",
    techs: ["NextAuth", "BetterAuth"],
  },
  {
    title: "Validação, Forms & Requisições",
    techs: ["Zod", "React Hook Form", "TanStack Query"],
  },
  {
    title: "Testes",
    techs: ["Jest", "React Testing Library"],
  },
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

          {/* Tech Categories */}
          <div className="space-y-8">
            {techCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.techs.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}