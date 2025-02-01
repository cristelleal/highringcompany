import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/candidats", label: "Candidats" },
    { href: "/entreprises", label: "Entreprises" },
    { href: "/nos-marques", label: "Nos marques" },
    { href: "/notre-histoire", label: "Notre histoire" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                src="/img/Logo-HighRing.png"
                alt="HighRing"
                className="h-16"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium transition-colors hover:text-primary
                    ${location === link.href ? "text-primary" : "text-foreground/80"}`}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
            <ThemeToggle />
            <Button variant="default">
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        className={`text-lg font-medium ${
                          location === link.href ? "text-primary" : "text-foreground/80"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </motion.a>
                    </Link>
                  ))}
                  <Button className="mt-4" variant="default">
                    Contactez-nous
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;