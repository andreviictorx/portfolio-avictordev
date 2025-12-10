import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SIGESTE",
    description:
      "Sistema de gerenciamento acadêmico completo com autenticação, painel administrativo, cadastros e landing page institucional.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth"],
    featured: true,
    links: {
      frontend: "#",
      backend: "#",
      deploy: "#",
    },
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono text-primary text-sm mb-2 block">// trabalhos</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Projetos
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-card border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all ${
                  project.featured ? "border-primary/30 lg:col-span-2" : "border-border"
                }`}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-muted-foreground text-sm">
                      // preview do projeto
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      <Star className="h-3 w-3" />
                      Destaque
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Front-end
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Back-end
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                      asChild
                    >
                      <a href={project.links.deploy} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Ver Deploy
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-card border border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Em breve</h3>
              <p className="text-muted-foreground text-sm">
                Novos projetos estão em desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}