import { Code2 } from "lucide-react";

const BrandLogo = ({ onNavigate }: { onNavigate: (href: string) => void }) => (
    <a
        href="#inicio"
        onClick={(e) => {
            e.preventDefault();
            onNavigate("#inicio");
        }}
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
    >
        <Code2 className="h-8 w-8 text-primary" />
        <span className="font-mono font-semibold text-lg bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            avictor.dev
        </span>
    </a>
);

export default BrandLogo