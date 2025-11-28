"use client";

import { Button, Section } from "@/components";
import DotGrid from "@/components/common/dot";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GrContact } from "react-icons/gr";

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
    <Section size="full" className="relative p-0 overflow-hidden md:mt-[0px]">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
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
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-[75%] mx-auto min-h-[900px] flex flex-col md:flex-row items-center justify-between mt-10">

        {/* TEXT */}
        <div className="flex flex-col max-w-[650px]">
          <h1 className="text-white text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Bonjour je suis <br />
            <span className="text-violet-900">MORCEL Tyron</span>
          </h1>

          <div className="text-white text-2xl md:text-3xl flex gap-2">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="violet" />
          </div>
          <Button href="/" className="flex items-center gap-2"><GrContact /> Me contacter</Button>
        </div>

        {/* IMAGE */}
        <div className="mt-12 md:mt-0">
          <Image
            src="/assets/images/pose4.jpg"
            alt="Photo de Tyron"
            width={500}
            height={520}
            className="object-cover rounded-xl shadow-2xl shadow-violet-900/40"
          />
        </div>

      </div>
    </Section>
  );
};
