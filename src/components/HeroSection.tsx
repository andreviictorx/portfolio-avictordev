import { ArrowRight, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary glow-primary overflow-hidden bg-secondary flex items-center justify-center">
              <User className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-muted-foreground" />
            </div>
            {/* Online Indicator */}
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-6 h-6 bg-accent rounded-full border-4 border-background" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="text-foreground text-lg sm:text-xl">André Victor</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary font-mono text-lg sm:text-xl">avictor.dev</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
              Desenvolvedor{" "}
              <span className="text-gradient">Full Stack</span>
            </h1>

            <p className="font-mono text-muted-foreground text-sm sm:text-base mb-6 px-4 py-2 bg-secondary/50 rounded-lg inline-block">
              // Transformando ideias em código
            </p>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed">
              Crio soluções web completas, do front ao back, com foco em
              <strong className="text-foreground"> performance</strong>,
              <strong className="text-foreground"> experiência do usuário</strong> e
              <strong className="text-foreground"> código limpo</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2"
                onClick={() => scrollTo("#projetos")}
              >
                Ver Projetos
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold gap-2"
                onClick={() => scrollTo("#contato")}
              >
                <MessageCircle className="h-4 w-4" />
                Entrar em Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}