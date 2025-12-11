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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-card border rounded-xl overflow-hidden group hover:border-primary/50 transition-all ${
                  project.featured ? "border-primary/30" : "border-border"
                }`}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-muted-foreground text-xs">
                      // preview
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      <Star className="h-2.5 w-2.5" />
                      Destaque
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{project.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.stack.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-secondary text-muted-foreground rounded text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-0.5 bg-secondary text-muted-foreground rounded text-[10px] font-medium">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 px-2 text-xs gap-1"
                      asChild
                    >
                      <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                        Front
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-7 px-2 text-xs gap-1"
                      asChild
                    >
                      <a href={project.links.backend} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3" />
                        Back
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 px-2 text-xs bg-primary text-primary-foreground hover:bg-primary/90 gap-1"
                      asChild
                    >
                      <a href={project.links.deploy} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3" />
                        Deploy
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-card border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center aspect-[4/3]">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Em breve</h3>
              <p className="text-muted-foreground text-[10px]">
                Novos projetos em desenvolvimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}