"use client";

import { Button, Section } from "@/components";
import DotGrid from "@/components/common/dot";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GrContact } from "react-icons/gr";
import { NeonGradientCard } from "@/components/common/NeonGradiant";
NeonGradientCard;

export const Heroheader = () => {
  const [text] = useTypewriter({
    words: [
      "Développeur Fullstack",
      "Créateur de projets web",
      "Passionné par le code",
      "Heureux de vous rencontrer !",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <Section size="full" className="relative p-0 overflow-hidden md:mt-[0px] mb-0 md:mb-0">
      <div className="absolute inset-0 -z-10">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#2100a3"
          activeColor="#6a46fa"
          proximity={120}
          shockRadius={300}
          shockStrength={10}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="relative z-20 max-w-[1200px] w-full mx-auto min-h-[900px] flex flex-col md:flex-row items-center justify-between gap-10 mt-10 px-4">
        <div className="flex flex-col max-w-[650px]">
          <h1 className="text-white xl:text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Bonjour je suis <br />
            <span className="text-violet-900">MORCEL Tyron</span>
          </h1>

          <div className="text-white text-2xl md:text-3xl flex gap-2">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="violet" />
          </div>
          <Button href="/" className="flex items-center gap-2">
            <GrContact /> Me contacter
          </Button>
        </div>

        <NeonGradientCard 
        borderSize={1}
        
        >
          <div className="mt-12 md:mt-0 w-fit mx-auto">
            <Image
              src="/assets/images/moi.png"
              alt="Photo de Tyron"
              width={500}
              height={520}
              className="shadow-lg shadow-violet-900/40 rounded-2xl"
            />
          </div>
        </NeonGradientCard>
      </div>
    </Section>
  );
};
