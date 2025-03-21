import React from "react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "../../components/ui/button";
import { ThemeToggle } from "../theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";

const Navbar = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/candidats", label: "Candidats" },
    { href: "/entreprises", label: "Entreprises" },
    { href: "/brands/construction", label: "Nos marques" },
    { href: "/notre-histoire", label: "Notre histoire" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-card dark:bg-background/90 dark:backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div className="flex-shrink-0 cursor-pointer w-52">
              <svg
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 2834.65 850.39"
              >
                <defs>
                  <style>{`
      .st0 {
        fill: currentColor;
      }

      .st1 {
        fill: currentColor;
      }

      .st2 {
        fill: url(#Dégradé_sans_nom_245);
      }

      .st3 {
        fill: url(#Dégradé_sans_nom_248);
      }

      .st4 {
        fill: url(#Dégradé_sans_nom_250);
      }

      .st5 {
        fill: url(#Dégradé_sans_nom_104);
      }
    `}</style>
                  <linearGradient
                    id="Dégradé_sans_nom_245"
                    data-name="Dégradé sans nom 245"
                    x1="456.73"
                    y1="432.05"
                    x2="957.91"
                    y2="432.05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#c5a249" />
                    <stop offset=".25" stop-color="#d7c274" />
                    <stop offset=".39" stop-color="#e0d188" />
                    <stop offset=".96" stop-color="#c7a349" />
                  </linearGradient>
                  <linearGradient
                    id="Dégradé_sans_nom_250"
                    data-name="Dégradé sans nom 250"
                    x1="764.89"
                    y1="3943.67"
                    x2="870.97"
                    y2="3943.67"
                    gradientTransform="translate(0 3816.19) scale(1 -.88)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#d6be6d" />
                    <stop offset=".15" stop-color="#d4bb68" />
                    <stop offset="1" stop-color="#ccae56" />
                  </linearGradient>
                  <linearGradient
                    id="Dégradé_sans_nom_248"
                    data-name="Dégradé sans nom 248"
                    x1="533.13"
                    y1="4129.97"
                    x2="686.23"
                    y2="4129.97"
                    gradientTransform="translate(0 3656.14) scale(1 -.8)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#ceb35f" />
                    <stop offset=".08" stop-color="#d2ba68" />
                    <stop offset=".25" stop-color="#d7c374" />
                    <stop offset=".47" stop-color="#dbc87b" />
                    <stop offset="1" stop-color="#dcca7e" />
                  </linearGradient>
                  <linearGradient
                    id="Dégradé_sans_nom_104"
                    data-name="Dégradé sans nom 104"
                    x1="765.25"
                    y1="326.77"
                    x2="765.25"
                    y2="326.77"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#c39a47" />
                    <stop offset=".24" stop-color="#c7a14e" />
                    <stop offset="1" stop-color="#d3b461" />
                  </linearGradient>
                </defs>
                <path
                  className="st2"
                  d="M966.9,419.37c.08,4.05-2.24,7.97-6.47,10.26-53.8,29.23-244.5,107.84-497.55-1.27-3.03-1.31-4.61-3.89-4.61-6.45l.03-27.35c0-6.7-.03-14.82-.03-14.91,29.1,13.14,81.89,34.62,149.49,47.74,123.82,24.02,219.56,1.9,238.39-2.48,52.08-12.11,93.14-29.84,120.75-43.72v38.17Z"
                />
                <path
                  className="st4"
                  d="M832.48,368.27c-14.25-2.42-32.7-4.18-67.24-6.02v-36.75c24.15,1.34,53.46,4.74,76.71,8.69,6.97,1.18,14.14,2.6,20.88,3.91,6.19,1.2,13.72,2.6,19.96,4.16-8.36,4.54-15.24,8.04-20.01,10.42-6.32,3.15-10.45,5.07-17.75,8.86-5.37,2.79-9.71,5.16-12.55,6.73Z"
                />
                <path
                  className="st3"
                  d="M692.24,325.5c-49.47,2.16-106.86,9.58-165.5,24.76v36.75c23.27-6.07,51.23-12.02,81.01-16.64,29.05-4.5,59.15-7.1,84.48-8.2v-36.67Z"
                />
                <path className="st5" d="M765.25,326.77" />
                <path
                  className="st1"
                  d="M934.58,390.29c26.95-11.91,63.99-49.36,63.99-98.72,0-145.25-226.18-122.78-226.18-122.78,0,0,172.01,19.61,171.94,92.54-.11,107.76-158.19,89.93-139.19,165.94,0,0,65.09-8.53,129.44-36.97Z"
                />
                <path
                  className="st1"
                  d="M759.86,488.49v178.4q0,23.65-31.12,23.65t-31.12-23.65v-177.69c8.79.28,17.87.41,27.23.35,12.14-.07,23.82-.45,35.02-1.06Z"
                />
                <path
                  className="st1"
                  d="M697.62,432.54v-240.29q0-23.64,31.12-23.63t31.12,23.63c0,79.9,0,159.8,0,239.69-10.02.6-20.53.99-31.49,1.09-10.69.1-20.95-.09-30.75-.49Z"
                />
                <path
                  className="st1"
                  d="M458.28,219.18c0-1.59.69-3.1,1.9-4.14l52.48-45.22c3.6-2.74,8.77-.17,8.77,4.35v224.76c-31.58-10.6-63.15-25.04-63.15-25.04,0-42.24,0-112.46,0-154.7Z"
                />
                <path
                  className="st1"
                  d="M894.27,463.07l104.3,176.63c1.19,2.02.96,4.57-.57,6.34l-34.7,42.78c-2.43,2.82-6.91,2.44-8.83-.76l-120.45-209.12c10.24-2.08,21-4.57,32.19-7.56,9.85-2.63,19.21-5.43,28.06-8.32Z"
                />
                <path
                  className="st1"
                  d="M458.27,431.91c9.91,4.49,20.46,8.94,31.64,13.26,10.88,4.21,21.41,7.92,31.51,11.2v228.69c0,4.51-5.15,7.08-8.75,4.36l-52.22-44.86c-1.37-1.03-2.17-2.65-2.17-4.36,0-69.43,0-138.86,0-208.29"
                />
                <g>
                  <path
                    className="st0"
                    d="M1156.1,512.97h-26.44v-185.06h26.44v185.06ZM1264.75,430.49h-111.3v-23h111.3v23ZM1262.37,327.92h26.44v185.06h-26.44v-185.06Z"
                  />
                  <path
                    className="st0"
                    d="M1353.32,345.89c-4.94,0-9.03-1.59-12.29-4.76-3.26-3.17-4.89-7.05-4.89-11.63s1.63-8.72,4.89-11.9c3.26-3.17,7.36-4.76,12.29-4.76s9.03,1.54,12.29,4.63c3.26,3.09,4.89,6.92,4.89,11.5s-1.59,8.77-4.76,12.03c-3.17,3.26-7.32,4.89-12.43,4.89ZM1340.63,512.97v-140.11h25.38v140.11h-25.38Z"
                  />
                  <path
                    className="st0"
                    d="M1472.54,507.16c-13.57,0-25.69-2.86-36.35-8.59-10.67-5.72-19.12-13.7-25.38-23.92-6.26-10.22-9.38-22.03-9.38-35.43s3.13-25.42,9.38-35.56c6.25-10.13,14.71-18.02,25.38-23.66,10.66-5.64,22.78-8.46,36.35-8.46,11.98,0,22.91,2.42,32.78,7.27,9.87,4.85,17.75,12.29,23.66,22.34,5.9,10.05,8.86,22.74,8.86,38.07s-2.95,27.76-8.86,37.8c-5.91,10.05-13.79,17.58-23.66,22.6-9.87,5.02-20.8,7.53-32.78,7.53ZM1475.72,565.85c-12.87,0-25.34-1.81-37.41-5.42-12.07-3.61-21.9-8.77-29.48-15.47l12.16-19.56c6.52,5.64,14.54,10.09,24.06,13.35,9.52,3.26,19.47,4.89,29.87,4.89,16.56,0,28.72-3.88,36.48-11.63,7.75-7.76,11.63-19.56,11.63-35.42v-29.61l2.64-27.76-1.32-28.02v-38.33h24.06v121.08c0,24.67-6.17,42.83-18.51,54.46-12.34,11.63-30.4,17.45-54.2,17.45ZM1475.45,484.95c9.34,0,17.62-1.94,24.85-5.82,7.22-3.88,12.91-9.25,17.05-16.13,4.14-6.87,6.21-14.8,6.21-23.79s-2.07-16.92-6.21-23.79c-4.14-6.87-9.83-12.2-17.05-15.99-7.23-3.79-15.51-5.68-24.85-5.68s-17.67,1.9-24.98,5.68c-7.32,3.79-13.04,9.12-17.18,15.99-4.14,6.87-6.21,14.8-6.21,23.79s2.07,16.92,6.21,23.79c4.14,6.87,9.87,12.25,17.18,16.13,7.31,3.88,15.64,5.82,24.98,5.82Z"
                  />
                  <path
                    className="st0"
                    d="M1671.61,371.54c11.46,0,21.55,2.21,30.27,6.61,8.72,4.41,15.55,11.1,20.49,20.09,4.93,8.99,7.4,20.36,7.4,34.1v80.63h-25.38v-77.72c0-13.57-3.3-23.79-9.91-30.67s-15.91-10.31-27.89-10.31c-8.99,0-16.83,1.76-23.53,5.29-6.7,3.53-11.85,8.72-15.46,15.6-3.61,6.87-5.42,15.42-5.42,25.64v72.17h-25.38v-196.16h25.38v93.85l-5.02-10.05c4.58-9.16,11.63-16.3,21.15-21.41,9.52-5.11,20.62-7.67,33.31-7.67Z"
                  />
                  <path
                    className="st0"
                    d="M1780.53,512.97v-185.06h72.17c16.21,0,30.05,2.56,41.51,7.67,11.45,5.11,20.27,12.52,26.44,22.21,6.17,9.69,9.25,21.24,9.25,34.63s-3.09,24.9-9.25,34.5c-6.17,9.61-14.98,16.96-26.44,22.08-11.46,5.11-25.29,7.67-41.51,7.67h-57.63l11.9-12.16v68.47h-26.44ZM1806.96,447.15l-11.9-12.95h56.84c16.92,0,29.74-3.66,38.46-10.97,8.72-7.31,13.09-17.58,13.09-30.8s-4.36-23.44-13.09-30.67c-8.72-7.22-21.55-10.84-38.46-10.84h-56.84l11.9-13.22v109.45ZM1904.25,512.97l-47.06-67.15h28.29l47.59,67.15h-28.82Z"
                  />
                  <path
                    className="st0"
                    d="M1981.71,345.89c-4.94,0-9.03-1.59-12.29-4.76-3.26-3.17-4.89-7.05-4.89-11.63s1.63-8.72,4.89-11.9c3.26-3.17,7.36-4.76,12.29-4.76s9.03,1.54,12.29,4.63c3.26,3.09,4.89,6.92,4.89,11.5s-1.59,8.77-4.76,12.03c-3.17,3.26-7.32,4.89-12.42,4.89ZM1969.02,512.97v-140.11h25.38v140.11h-25.38Z"
                  />
                  <path
                    className="st0"
                    d="M2117.59,371.54c11.46,0,21.55,2.21,30.27,6.61,8.72,4.41,15.55,11.1,20.49,20.09,4.93,8.99,7.4,20.36,7.4,34.1v80.63h-25.38v-77.72c0-13.57-3.3-23.79-9.91-30.67s-15.91-10.31-27.89-10.31c-8.99,0-16.83,1.76-23.53,5.29-6.7,3.53-11.85,8.72-15.46,15.6-3.61,6.87-5.42,15.42-5.42,25.64v72.17h-25.38v-140.11h24.32v37.8l-3.96-10.05c4.58-9.16,11.63-16.3,21.15-21.41,9.52-5.11,20.62-7.67,33.31-7.67Z"
                  />
                  <path
                    className="st0"
                    d="M2280.97,507.16c-13.57,0-25.69-2.86-36.35-8.59-10.67-5.72-19.12-13.7-25.38-23.92-6.26-10.22-9.38-22.03-9.38-35.43s3.13-25.42,9.38-35.56c6.25-10.13,14.71-18.02,25.38-23.66,10.66-5.64,22.78-8.46,36.35-8.46,11.98,0,22.91,2.42,32.78,7.27,9.87,4.85,17.75,12.29,23.66,22.34,5.9,10.05,8.86,22.74,8.86,38.07s-2.95,27.76-8.86,37.8c-5.91,10.05-13.79,17.58-23.66,22.6-9.87,5.02-20.8,7.53-32.78,7.53ZM2284.14,565.85c-12.87,0-25.34-1.81-37.41-5.42-12.07-3.61-21.9-8.77-29.48-15.47l12.16-19.56c6.52,5.64,14.54,10.09,24.06,13.35,9.52,3.26,19.47,4.89,29.87,4.89,16.56,0,28.72-3.88,36.48-11.63,7.75-7.76,11.63-19.56,11.63-35.42v-29.61l2.64-27.76-1.32-28.02v-38.33h24.06v121.08c0,24.67-6.17,42.83-18.51,54.46-12.34,11.63-30.4,17.45-54.2,17.45ZM2283.88,484.95c9.34,0,17.62-1.94,24.85-5.82,7.22-3.88,12.91-9.25,17.05-16.13,4.14-6.87,6.21-14.8,6.21-23.79s-2.07-16.92-6.21-23.79c-4.14-6.87-9.83-12.2-17.05-15.99-7.23-3.79-15.51-5.68-24.85-5.68s-17.67,1.9-24.98,5.68c-7.32,3.79-13.04,9.12-17.18,15.99-4.14,6.87-6.21,14.8-6.21,23.79s2.07,16.92,6.21,23.79c4.14,6.87,9.87,12.25,17.18,16.13,7.31,3.88,15.64,5.82,24.98,5.82Z"
                  />
                </g>
              </svg>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.a
                  className={`text-sm font-medium hover:text-primary
                    ${
                      location === link.href
                        ? "dark:text-primary"
                        : "text-muted-foreground dark:text-foreground"
                    }`}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="https://app.highring.fr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Accéder à la plateforme"
            >
              <Button size="lg" className="hover-scale">
                Se connecter
              </Button>
            </a>
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
                          location === link.href
                            ? "text-primary"
                            : "text-foreground/80"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </motion.a>
                    </Link>
                  ))}
                  <a
                    href="https://app.highring.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Accéder à la plateforme"
                  >
                    <Button size="lg" className="hover-scale">
                      Accéder à la plateforme
                    </Button>
                  </a>
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
