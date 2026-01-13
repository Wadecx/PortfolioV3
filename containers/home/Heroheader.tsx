"use client";

import { Button, Section } from "@/components";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { GrContact } from "react-icons/gr";
import { NeonGradientCard } from "@/components/common/NeonGradiant";
import Squares from "@/components/common/GridSquare";
import { motion } from "motion/react";

export const Heroheader = () => {
  const [text] = useTypewriter({
    words: [
      "Développeur Fullstack",
      "Créateur de projets web",
      "Créateur de jeux vidéos",
      "Passionné par le code",
      "Heureux de vous rencontrer !",
    ],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <Section
      size="full"
      className="relative p-0 overflow-hidden md:mt-[0px] min-h-[100vh] mb-0 md:mb-0"
    >
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.2}
          squareSize={40}
          direction="diagonal"
          borderColor="#2100a3"
          hoverFillColor="#fff"
        />
      </div>

      <motion.div
        className="relative z-20 max-w-[1200px] w-full mx-auto min-h-[800px] flex flex-col md:flex-row items-center lg:justify-between xl:mt-0 2xl:mt-24 lg:gap-8 md:gap-10 px-4 py-20 md:py-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col max-w-[650px]">
          <h1 className="text-white text-3xl lg:text-4xl md:text-5xl xl:text-6xl font-black uppercase mb-6 leading-tight">
            Bonjour je suis <br />
            <span className="text-violet-900">MORCEL Tyron</span>
          </h1>

          <div className="text-white text-xl sm:text-2xl md:text-3xl flex gap-2 mb-6">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="violet" />
          </div>
        </div>

        <NeonGradientCard borderSize={1}>
          <div className=" md:mt-0 w-fit mx-auto">
            <Image
              src="/assets/images/transparent1.png"
              alt="Photo de Tyron"
              width={500}
              height={520}
              className="shadow-violet-900 rounded-2xl w-[400px] sm:w-[400px] md:w-[500px]"
            />
          </div>
        </NeonGradientCard>
      </motion.div>
    </Section>
  );
};
