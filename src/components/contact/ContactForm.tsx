import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
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
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const phoneNumber = "5598985193088";
        const message = `*Novo Contato do Portfólio* \n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        toast({
            title: "Mensagem enviada!",
            description: "Entrarei em contato em breve.",
        });

        window.open(whatsappUrl, '_blank');

        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
    };

    return (
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
    );
}