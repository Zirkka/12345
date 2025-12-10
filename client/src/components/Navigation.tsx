import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@assets/New FG LOGO WHITE NO BG_1762971952335.png";
import logoBlack from "@assets/New FG LOGO BLACK NO BG_1762971952336.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHomePage = location === "/";
  const shouldShowDarkNav = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Team", path: "/our-team" },
    { label: "Benefits", path: "/benefits" },
    { label: "Pricing", path: "/pricing" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldShowDarkNav
          ? "bg-background/95 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link
            href="/"
            className="select-none"
            data-testid="link-home"
          >
            <img
              src={shouldShowDarkNav ? logoBlack : logoWhite}
              alt="FireGuard - Protecting Your World"
              className="h-20 w-auto object-contain transition-all duration-300 origin-left select-none"
              style={{ transform: "scale(1.8)" }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors font-medium cursor-pointer ${
                  shouldShowDarkNav
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
                data-testid={`link-${link.path.replace("/", "")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors ${
              shouldShowDarkNav ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-2 text-foreground hover:bg-accent rounded-md transition-colors cursor-pointer"
                data-testid={`mobile-link-${link.path.replace("/", "")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
