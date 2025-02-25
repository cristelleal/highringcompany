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
            <motion.div
              className="flex-shrink-0 cursor-pointer"
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="130pt"
                height="130pt"
                viewBox="0 0 1280.000000 423.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,423.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="currentColor"
                  className="dark:text-white"
                >
                  <path
                    d="M2364 3499 c-20 -6 -34 -17 -38 -31 -8 -30 -8 -1242 0 -1263 6 -14
26 -16 150 -14 116 1 144 4 148 16 8 19 7 1231 0 1259 -3 12 -17 27 -30 33
-29 13 -185 13 -230 0z"
                  />
                  <path
                    d="M2755 3501 c11 -5 74 -19 140 -31 423 -79 655 -231 655 -431 0 -125
-71 -262 -177 -340 -87 -64 -109 -78 -224 -135 -188 -94 -258 -145 -285 -210
-16 -39 -19 -120 -4 -129 19 -12 216 32 395 87 118 36 158 51 250 93 62 28
163 124 214 202 68 103 93 182 93 298 -1 209 -105 373 -302 474 -168 86 -327
121 -585 127 -117 3 -182 1 -170 -5z"
                  />
                  <path
                    d="M1266 3384 l-136 -115 0 -392 0 -392 153 -61 c182 -73 172 -80 163
111 -3 72 -6 318 -6 548 0 404 -1 417 -19 417 -11 0 -80 -52 -155 -116z"
                  />
                  <path
                    d="M5550 2717 c-52 -26 -52 -105 0 -132 39 -20 54 -19 84 8 41 36 43 71
8 107 -33 33 -54 37 -92 17z"
                  />
                  <path
                    d="M8523 2720 c-47 -19 -57 -87 -18 -125 30 -31 66 -32 100 -2 37 31 37
82 1 114 -29 24 -47 27 -83 13z"
                  />
                  <path
                    d="M6747 2704 c-4 -4 -7 -211 -7 -460 0 -499 -5 -464 65 -464 18 0 37 6
43 13 6 7 12 94 14 217 3 229 8 246 75 297 34 26 43 28 129 28 85 0 95 -2 119
-25 56 -52 59 -68 65 -305 l5 -220 43 -3 c75 -5 74 -8 70 247 -3 214 -4 228
-26 271 -35 66 -79 107 -139 130 -94 35 -218 20 -293 -35 -18 -14 -37 -25 -42
-25 -4 0 -9 75 -10 168 l-3 167 -50 3 c-28 2 -54 0 -58 -4z"
                  />
                  <path
                    d="M4537 2653 c-4 -3 -7 -196 -7 -428 0 -314 3 -424 12 -433 7 -7 31
-12 55 -12 32 0 45 5 53 19 6 12 10 90 9 192 0 94 1 172 3 174 5 4 290 9 400
7 l98 -2 2 -192 3 -193 55 0 55 0 0 435 0 435 -55 0 -55 0 -5 -185 -5 -185
-246 -3 -246 -2 -7 50 c-4 28 -6 109 -5 180 0 71 -2 133 -6 139 -7 12 -97 15
-108 4z"
                  />
                  <path
                    d="M7615 2648 c-9 -25 -12 -823 -4 -846 8 -21 14 -23 61 -20 l53 3 5
130 5 130 137 3 136 3 87 -126 c47 -68 94 -129 105 -135 30 -16 110 -13 110 5
0 8 -41 70 -90 137 -50 67 -89 128 -88 134 2 7 25 27 53 46 91 61 131 148 123
266 -11 148 -109 244 -278 271 -96 16 -409 14 -415 -1z m441 -113 c86 -25 128
-86 127 -186 0 -90 -26 -132 -101 -166 -55 -26 -99 -29 -294 -24 l-58 1 0 188
c0 104 3 192 7 195 13 14 268 7 319 -8z"
                  />
                  <path
                    d="M5535 2437 c-3 -7 -4 -156 -3 -332 l3 -320 43 -3 c75 -5 72 -17 72
334 l0 314 -26 10 c-36 14 -84 12 -89 -3z"
                  />
                  <path
                    d="M6045 2436 c-63 -20 -98 -41 -143 -88 -56 -57 -82 -128 -82 -223 0
-63 4 -82 33 -136 57 -110 158 -169 291 -169 87 0 128 11 189 50 26 16 50 30
52 30 3 0 5 -21 5 -46 0 -110 -50 -182 -141 -204 -93 -23 -248 2 -301 47 -24
21 -49 12 -71 -25 -20 -33 -20 -34 0 -54 66 -66 319 -101 435 -60 75 26 119
62 151 119 40 75 47 143 47 465 l0 298 -24 6 c-13 3 -37 4 -52 2 -26 -3 -29
-7 -32 -45 -2 -24 -8 -43 -13 -43 -6 0 -27 13 -47 29 -72 57 -201 77 -297 47z
m243 -117 c141 -69 137 -300 -7 -376 -57 -30 -166 -32 -226 -4 -52 23 -102 81
-111 126 -11 60 0 152 22 182 31 41 89 84 126 94 50 12 146 2 196 -22z"
                  />
                  <path
                    d="M8505 2437 c-3 -7 -4 -156 -3 -332 l3 -320 43 -3 c75 -5 72 -17 72
334 l0 314 -26 10 c-36 14 -84 12 -89 -3z"
                  />
                  <path
                    d="M8852 2438 c-15 -19 -16 -626 -1 -644 14 -18 93 -19 107 -1 6 7 12
96 14 224 l3 211 30 38 c46 56 87 74 171 74 85 0 128 -23 159 -85 18 -36 20
-62 22 -243 1 -112 4 -210 7 -218 6 -15 44 -18 84 -8 l23 7 -3 236 c-3 229 -4
238 -28 285 -14 27 -40 61 -59 77 -96 79 -273 79 -372 0 -21 -17 -40 -31 -43
-31 -3 0 -6 18 -6 39 0 26 -5 41 -16 45 -27 10 -81 7 -92 -6z"
                  />
                  <path
                    d="M9865 2436 c-65 -21 -98 -42 -147 -94 -101 -108 -105 -289 -9 -411
76 -96 256 -139 382 -92 31 12 64 30 74 41 31 34 45 25 45 -27 0 -154 -88
-224 -264 -210 -72 5 -147 28 -178 54 -24 22 -49 12 -72 -26 l-20 -34 27 -22
c14 -13 56 -34 94 -46 57 -20 88 -24 188 -24 115 0 123 1 186 32 71 35 105 74
135 153 15 39 17 91 18 374 l1 329 -28 10 c-15 5 -39 6 -52 3 -21 -5 -25 -12
-25 -45 0 -21 -3 -41 -6 -44 -4 -3 -24 8 -45 26 -70 60 -207 84 -304 53z m252
-122 c124 -77 127 -274 5 -359 -39 -26 -54 -30 -127 -33 -76 -4 -88 -1 -135
24 -107 58 -141 201 -72 303 51 75 113 103 215 97 53 -3 78 -10 114 -32z"
                  />
                  <path
                    d="M1137 2183 c-4 -3 -7 -235 -7 -514 l0 -508 61 -53 c34 -29 97 -84
141 -122 49 -42 84 -66 93 -62 13 5 15 81 15 579 l0 575 -27 10 c-16 6 -48 18
-73 26 -25 8 -78 28 -119 45 -84 35 -76 33 -84 24z"
                  />
                  <path
                    d="M3175 2010 c-55 -16 -112 -31 -127 -34 -16 -4 -28 -13 -28 -21 0 -8
77 -149 171 -312 95 -164 224 -388 287 -498 125 -219 129 -225 147 -225 10 0
165 187 189 228 5 8 -53 115 -152 280 -87 147 -205 345 -261 440 -56 94 -107
172 -114 171 -7 0 -57 -13 -112 -29z"
                  />
                  <path
                    d="M2332 1906 c-4 -6 -8 -221 -10 -478 -4 -565 -21 -511 158 -506 81 2
123 7 132 16 10 10 14 111 16 465 2 249 0 467 -3 485 l-6 32 -140 -1 c-89 -1
-142 -6 -147 -13z"
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
