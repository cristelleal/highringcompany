"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/img/Logo-HighRing.png"
              alt="HighRing"
              className="h-12 w-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-8">
              <li className="relative group">
                <Link
                  href="/candidats"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/candidats"
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  Candidats
                </Link>
                <ul className="absolute left-0 top-full mt-2 w-48 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li>
                    <Link
                      href="/emplois"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Offres d'emplois
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/candidats"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Proposer ma candidature
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  href="/entreprises"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/entreprises"
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  Entreprises
                </Link>
                <ul className="absolute left-0 top-full mt-2 w-48 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li>
                    <Link
                      href="/profils"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Profils disponibles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/entreprises"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Travailler avec HighRing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link
                  href="/nos-marques"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/nos-marques"
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  Nos marques
                </Link>
                <ul className="absolute left-0 top-full mt-2 w-48 bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <li>
                    <Link
                      href="/construction"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sales"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Sales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consulting"
                      className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      Consulting
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/notre-histoire"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/notre-histoire"
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === "/contact"
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="default">Contactez-nous</Button>
            </div>
          </nav>

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
                <nav className="mt-8">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/candidats"
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium ${
                          pathname === "/candidats"
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        Candidats
                      </Link>
                      <ul className="mt-2 ml-4 space-y-2">
                        <li>
                          <Link
                            href="/emplois"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Offres d'emplois
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/candidats"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Proposer ma candidature
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/entreprises"
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium ${
                          pathname === "/entreprises"
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        Entreprises
                      </Link>
                      <ul className="mt-2 ml-4 space-y-2">
                        <li>
                          <Link
                            href="/profils"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Profils disponibles
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/entreprises"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Travailler avec HighRing
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/nos-marques"
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium ${
                          pathname === "/nos-marques"
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        Nos marques
                      </Link>
                      <ul className="mt-2 ml-4 space-y-2">
                        <li>
                          <Link
                            href="/construction"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Construction
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/sales"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Sales
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/consulting"
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-primary"
                          >
                            Consulting
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/notre-histoire"
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium ${
                          pathname === "/notre-histoire"
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        Notre histoire
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium ${
                          pathname === "/contact"
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <Button className="w-full mt-8" variant="default">
                    Contactez-nous
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
