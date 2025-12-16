import { navItems } from "../constants/navigation";
import { ThemeToggle } from "../ThemeToggle";

const DesktopNav = ({ items, onNavigate }: { items: typeof navItems, onNavigate: (href: string) => void }) => (
    <nav className="hidden lg:flex items-center gap-8">
        {items.map((item) => (
            <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
                {item.label}
            </a>
        ))}
        <ThemeToggle />
    </nav>
);

export default DesktopNav