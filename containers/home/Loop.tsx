"use client";

import { Section } from "@/components";
import LogoLoop from "@/components/common/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

const techLogos = [
  { node: <SiReact color="#631ECC"/>, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#631ECC"/>, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript color="#631ECC"/>,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color="#631ECC"/>,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <TbBrandCSharp color="#631ECC"/>,
    title: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  }
];

export const Loop = () => {
  return (
    <Section size="full" className="mt-0 md:mt-0 mb-0">
      <h2 className="text-white uppercase font-black text-center mt-8 text-4xl">Stack technique</h2>
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
          fadeOutColor="#000"
          ariaLabel="Technology partners"
        />
      </div>
    </Section>
  );
};
