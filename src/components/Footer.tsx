import { Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">avictor.dev</span>
          </div>
          <p className="text-muted-foreground text-sm text-center">
            Desenvolvido por{" "}
            <span className="text-primary ">André Victor</span> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}