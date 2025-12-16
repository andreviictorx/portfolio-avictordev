import { navItems } from "../constants/navigation";

const MobileMenu = ({
    isOpen,
    items,
    onNavigate
}: {
    isOpen: boolean;
    items: typeof navItems;
    onNavigate: (href: string) => void;
}) => {
    if (!isOpen) return null;

    return (
        <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigate(item.href);
                        }}
                        className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};
export default MobileMenu