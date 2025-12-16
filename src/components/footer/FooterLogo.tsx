import { Code2 } from "lucide-react";

export default function FooterLogo() {
    return (
        <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                avictor.dev
            </span>
        </div>
    );
}