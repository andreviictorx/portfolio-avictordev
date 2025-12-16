import  technologies from "../constants/technologies";
import TechHeader from "../tech/TechHeader";
import TechCard from "../tech/TechCard";

export default function TechSection() {
  return (
    <section id="tecnologias" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <TechHeader />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <TechCard
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}