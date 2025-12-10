import { Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import fireguardLogo from "@assets/Alert_Before_the_Fire_version_1_1762970173774.png";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={fireguardLogo} 
                alt="FireGuard Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-foreground">FIREGUARD</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced fire prevention and detection systems protecting homes and businesses 24/7.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-how-it-works"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>7101 72nd Place, Glendale, NY 11385</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:516-283-1459" className="hover:text-primary transition-colors">
                  516-283-1459
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:fireguardny@gmail.com" className="hover:text-primary transition-colors">
                  fireguardny@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <a
              href="http://instagram.com/fireguard_byloa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-instagram"
            >
              <SiInstagram className="w-5 h-5" />
              <span className="text-sm">@fireguard_byloa</span>
            </a>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} FireGuard. All rights reserved. Protecting lives and property through advanced fire prevention technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
