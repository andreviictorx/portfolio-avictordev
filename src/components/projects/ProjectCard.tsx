import { ExternalLink, Github, Star, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className={`bg-card border rounded-xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full ${project.featured ? "border-primary/30" : "border-border"
                }`}
        >
            <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                {project.urlImg ? (
                    <img
                        src={project.urlImg}
                        alt={`Preview do projeto ${project.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                        <Code2 className="h-10 w-10 text-muted-foreground/50" />
                    </div>
                )}

                {project.featured && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-[10px] font-semibold z-10">
                        <Star className="h-2.5 w-2.5" />
                        Destaque
                    </div>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-foreground mb-2">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-xs mb-3 line-clamp-2 flex-grow">
                    {project.description}
                </p>
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
                <div className="flex gap-2 mt-auto">
                    {project.links.frontend && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 px-2 text-xs gap-1 flex-1"
                            asChild
                        >
                            <a href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                                <Github className="h-3 w-3" />
                                Github
                            </a>
                        </Button>
                    )}
                    {project.links.deploy && (
                        <Button
                            size="sm"
                            className="h-7 px-2 text-xs bg-primary text-primary-foreground hover:bg-primary/90 gap-1 flex-1"
                            asChild
                        >
                            <a href={project.links.deploy} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-3 w-3" />
                                Deploy
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}