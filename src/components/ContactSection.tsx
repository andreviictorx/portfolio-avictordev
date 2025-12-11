import { useState } from "react";
import { MessageCircle, Instagram, Linkedin, ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio - integrar com backend depois
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="font-mono text-primary text-sm mb-2 block">// contato</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Vamos conversar?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Vamos transformar sua ideia em um{" "}
              <span className="text-gradient font-bold">projeto real.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center lg:text-left">
                Ou entre em contato direto
              </h3>
              <div className="flex flex-col gap-4 mb-8">
                {contactLinks.map((link, index) => (
                  <Button
                    key={index}
                    size="lg"
                    className={`${link.color} border-none font-semibold gap-3 text-base py-6 justify-start transition-all`}
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5" />
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                ))}
              </div>

              {/* Email Alternative */}
              <p className="text-muted-foreground text-sm text-center lg:text-left">
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
        </div>
      </div>
    </section>
  );
}
