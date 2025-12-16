import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroContentProps {
  onScrollTo: (id: string) => void;
}

export default function HeroContent({ onScrollTo }: HeroContentProps) {
  return (
    <div className="text-center lg:text-left max-w-2xl">
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
        <span className="text-foreground text-lg sm:text-xl">André Victor</span>
        <span className="text-muted-foreground">|</span>
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-mono text-lg sm:text-xl">
          avictor.dev
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
        Desenvolvedor{" "}
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Full Stack
        </span>
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
          onClick={() => onScrollTo("#projetos")}
        >
          Ver Projetos
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 font-semibold gap-2"
          onClick={() => onScrollTo("#contato")}
        >
          <MessageCircle className="h-4 w-4" />
          Entrar em Contato
        </Button>
      </div>
    </div>
  );
}