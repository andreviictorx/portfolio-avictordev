import { Code, Zap, Palette, Target } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Código Limpo",
    description: "Escrevo código legível, organizado e de fácil manutenção.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas para a melhor experiência.",
  },
  {
    icon: Palette,
    title: "UX/UI",
    description: "Interfaces intuitivas e visualmente atraentes.",
  },
  {
    icon: Target,
    title: "Soluções Reais",
    description: "Foco em resolver problemas e entregar valor ao cliente.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono text-primary text-sm mb-2 block">// sobre mim</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Quem sou eu
            </h2>
          </div>

          {/* Bio */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 lg:mb-16">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
              Sou um desenvolvedor <strong className="text-foreground">Front-end</strong> em 
              transição para <strong className="text-primary">Full Stack</strong>, apaixonado 
              por criar experiências digitais que fazem a diferença. Com experiência em tecnologias 
              modernas como React, Next.js e TypeScript, busco constantemente expandir meus 
              conhecimentos para entregar soluções completas.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Meu objetivo é transformar ideias em produtos digitais que não apenas funcionem, 
              mas que <strong className="text-foreground">encantem os usuários</strong> e 
              <strong className="text-foreground"> gerem resultados reais</strong> para os negócios. 
              Acredito que um bom desenvolvedor não é apenas alguém que escreve código, mas alguém 
              que entende as necessidades do cliente e as traduz em soluções eficientes.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}