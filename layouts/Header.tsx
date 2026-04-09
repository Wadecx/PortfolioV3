'use client';

import { Section } from "@/components";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Link {
  name: string;
  href: string;
}

const Links: Link[] = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "À propos",
    href: "#about",
  },
  {
    name: "Projets",
    href: "#projects",
  },
  {
    name: "Technologies",
    href: "#technologies",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Section size="8/10" className="mt-0 md:mt-0 mb-0 md:mb-0">
      <header>
        <div className="w-full h-20 bg-black/20 backdrop-blur-lg border-b border-white/10 flex items-center justify-between px-6 fixed top-0 left-0 z-50">
          <div className="flex lg:flex-row flex-row-reverse justify-between items-center w-[90vw] lg:w-[75vw] mx-auto">
            <div className="text-xl font-bold text-white">
              <Image
                src="assets/images/logo-t.png"
                width={0}
                height={0}
                alt="Logo du portfolio de Tyron.M"
                className="rounded-sm min-w-[45px] h-auto lg:min-min-[50px]"
              />
            </div>
            <nav className="lg:flex hidden space-x-6">
              {Links.map((link, id)=> (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: id * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Link
                    href={link.href}
                    className="text-white hover:text-violet-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div
              className="lg:hidden flex flex-col gap-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-[25px] h-[2px] bg-white block rounded-xl"/>
              <span className="w-[25px] h-[2px] bg-white block rounded-xl"/>
              <span className="w-[25px] h-[2px] bg-white block rounded-xl"/>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 left-0 w-[50vw] h-full bg-black/20 backdrop-blur-lg border-r border-white/10 z-40 lg:hidden"
            >
              <nav className="flex flex-col items-start ml-4 mt-12 h-full gap-8">
                {Links.map((link, id) => (
                  <Link
                    key={id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-2xl hover:text-violet-500 transition-colors duration-300 text-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </Section>
  );
};

export { Header };
