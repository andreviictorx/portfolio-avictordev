import { projects } from "../constants/project";
import ProjectsHeader from "../projects/ProjectsHeader";
import ProjectCard from "../projects/ProjectCard";
import ComingSoonCard from "../projects/ComingSoonCard";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ProjectsHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
            <ComingSoonCard />
          </div>
        </div>
      </div>
    </section>
  );
}