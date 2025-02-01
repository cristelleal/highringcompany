import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import React from "react";
import img from "../../../public/img/logo-HighRing-simple.png";

const Footer = () => {
  return (
    <footer className="bg-primary/5 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/">
              <img 
                src={img} 
                alt="HighRing Logo" 
                className="h-12 w-auto mb-2 hover-scale bg-primary/10 rounded-xl p-2"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} HighRing. Tous droits réservés.
            </p>
          </div>

          {/* Liens Support */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-sm text-muted-foreground hover:text-primary">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Informations */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Informations</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-2">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/highringfrance/"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Lien vers Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088948220802"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Lien vers Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/highring-france/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                aria-label="Lien vers LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
