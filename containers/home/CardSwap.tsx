"use client";

import { Section } from "@/components";
import CardSwap, { Card } from "@/components/common/CardSwap";
import { FaCode } from "react-icons/fa6";
import { IoFlashOutline } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const CardSwapper = () => {
  const [cardSize, setCardSize] = useState({ width: 400, height: 250 });

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) {
        setCardSize({ width: 375, height: 220 });
      } else if (window.innerWidth < 768) {
        setCardSize({ width: 450, height: 270 });
      } else {
        setCardSize({ width: 500, height: 300 });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Section className="mb-[150px] md:mb-[200px] scroll-mt-70" id="about">
      <motion.div
        className="flex justify-between max-w-[1200px] lg:flex-row flex-col md:gap-5 gap-[50px] mx-auto lg:items-center items-center px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <h2 className="uppercase font-black  lg:text-5xl text-4xl text-primary">
            Pourquoi moi ?
          </h2>
          <p className="text-white lg:max-w-full text-justify">
            Chaque projet commence par une vraie discussion. Je prends le temps
            de comprendre vos objectifs pour vous proposer des solutions qui
            collent à votre vision. Adaptable et disponible, je m'ajuste aux
            imprévus pour livrer un résultat qui vous ressemble.
          </p>
        </div>
        <div className="h-[300px] relative lg:w-1/2 w-full justify-center items-center lg:flex hidden">
          <CardSwap
            width={cardSize.width}
            height={cardSize.height}
            cardDistance={60}
            verticalDistance={50}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <p className="text-white uppercase font-bold py-2 ml-4 flex items-center gap-2">
                <FaCode /> Site
              </p>
              <div className="p-4">
                <p className="text-white">Sites web rapides et sur mesure</p>
              </div>
            </Card>
            <Card>
              <p className="text-white uppercase font-bold py-2 ml-4 flex items-center gap-2">
                <RiRobot2Fill /> Automatisations
              </p>
              <div className="p-4">
                <p className="text-white">
                  J'automatise vos tâches répétitives grâce a l'automatisation{" "}
                </p>
              </div>
            </Card>
            <Card>
              <p className="text-white uppercase font-bold py-2 ml-4 flex items-center gap-2">
                <IoFlashOutline /> Reactivité
              </p>
              <div className="p-4">
                <p className="text-white">
                  Disponible et réactif sur vos projets
                </p>
              </div>
            </Card>
          </CardSwap>
        </div>
      </motion.div>
    </Section>
  );
};
