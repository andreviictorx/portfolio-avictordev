
import { useEffect, useState } from "react";
import BrandLogo from "../header/BrandLogo";
import DesktopNav from "../header/DesktopNav.";
import MobileMenu from "../header/MobileMenu";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <BrandLogo onNavigate={handleNavClick} />
          <DesktopNav items={navItems} onNavigate={handleNavClick} />
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>


        <MobileMenu
          isOpen={isOpen}
          items={navItems}
          onNavigate={handleNavClick}
        />
      </div>
    </header>
  );
}
export default Header