"use client";
import { Section } from "@/components";
import DotGrid from "@/components/common/dot";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Heroheader = () => {
  const [text] = useTypewriter({
    words: [
      "Développeur Fullstack",
      "Créateur de projets web",
      "Passionné par le code",
      "Heureux de vous rencontrer !"
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <Section size="full" className="mt-0 md:mt-0 p-0 relative">
      <div className="w-full h-[900px] relative">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#060020"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={300}
          shockStrength={10}
          resistance={750}
          returnDuration={1.5}
        />

        <div className="absolute inset-0 flex flex-col justify-start mt-52 max-w-[75%] mx-auto">
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase mb-6">
            Bonjour je suis <br />
            <span className="text-violet-900">MORCEL Tyron</span>
          </h1>

          <div className="text-white text-2xl md:text-3xl flex justify-start">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="white" />
          </div>
        </div>
      </div>
    </Section>
  );
};
