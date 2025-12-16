import { ElementType } from "react";

interface HighlightCardProps {
    icon: ElementType;
    title: string;
    description: string;
}

export default function HighlightCard({ icon: Icon, title, description }: HighlightCardProps) {
    return (
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    );
}