import { MessageCircle, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/5500000000000",
    color: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/avictordev",
    color: "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/avictordev",
    color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="font-mono text-primary text-sm mb-2 block">// contato</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          
          {/* CTA */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Vamos transformar sua ideia em um
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient mb-12">
            projeto real.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {contactLinks.map((link, index) => (
              <Button
                key={index}
                size="lg"
                className={`${link.color} border-none font-semibold gap-3 text-base py-6 px-8 transition-all`}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Email Alternative */}
          <p className="text-muted-foreground text-sm">
            Ou envie um email para{" "}
            <a
              href="mailto:contato@avictor.dev"
              className="text-primary hover:underline"
            >
              contato@avictor.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}