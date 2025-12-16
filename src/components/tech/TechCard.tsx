import { ElementType } from "react";

interface TechCardProps {
    name: string;
    icon: ElementType;
    color: string;
}

export default function TechCard({ name, icon: Icon, color }: TechCardProps) {
    return (
        <div className="bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-all group min-h-[100px]">
            <Icon
                className="h-8 w-8 transition-transform group-hover:scale-110"
                style={{ color: color }}
            />
            <span className="text-xs font-medium text-foreground text-center group-hover:text-primary transition-colors">
                {name}
            </span>
        </div>
    );
}