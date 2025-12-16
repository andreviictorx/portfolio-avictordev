import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import  contactLinks from "../constants/contact";

export default function SocialLinks() {
    return (
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

            <p className="text-muted-foreground text-sm text-center lg:text-left">
                Ou envie um email para{" "}
                <a
                    href="mailto:contatoavictor.dev@gmail.com"
                    className="text-primary hover:underline"
                >
                    contatoavictor.dev@gmail.com
                </a>
            </p>
        </div>
    );
}