import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle Scroll Appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-2xl font-semibold tracking-wider text-foreground hover:text-primary transition-colors duration-300"
          >
            HARIOM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative font-medium text-sm tracking-wide transition-colors duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300",
                    isActive
                      ? "text-primary after:w-full"
                      : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 py-4 border-t border-border/50">
            {navLinks.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-medium text-lg tracking-wide transition-colors duration-300",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </a>
               );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;