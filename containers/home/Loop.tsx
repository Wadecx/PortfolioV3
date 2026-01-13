"use client";

import { Section } from "@/components";
import LogoLoop from "@/components/common/LogoLoop";
import CountUp from "@/components/common/Counter";
import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiUnity,
  SiN8N,
  SiMake,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

const techLogos = [
  {
    node: <SiReact color="#631ECC" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs color="#631ECC" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color="#631ECC" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color="#631ECC" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <TbBrandCSharp color="#631ECC" />,
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    node: <SiUnity color="#631ECC" />,
    title: "Unity",
    href: "https://unity.com/fr",
  },
  {
    node: <SiN8N color="#631ECC" />,
    title: "N8N",
    href: "https://n8n.io/",
  },
  {
    node: <SiMake color="#631ECC" />,
    title: "Make",
    href: "https://www.make.com/en",
  },
];

export const Loop = () => {
  return (
    <Section size="full" className="mt-0 md:mt-0 mb-0" id="technologies">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-white uppercase font-black text-center mt-8 text-4xl">
          Stack technique
        </h2>
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
          className="flex items-center"
        >
          <LogoLoop
            logos={techLogos}
            speed={50}
            direction="right"
            logoHeight={70}
            gap={90}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#060010"
            ariaLabel="Technology partners"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-8 mb-24 md:mb-8">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              +<CountUp to={55} duration={2.5} />
            </div>
            <p className="text-white/70 text-lg md:text-xl mt-2">Projets</p>
          </div>

          <div className="text-center">
            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
              +<CountUp to={12} duration={2.5} />
            </div>
            <p className="text-white/70 text-lg md:text-xl mt-2">Clients déjà satisfaits</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
