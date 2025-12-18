import { Section } from "@/components";
import CardSwap, { Card } from "@/components/common/CardSwap";
import Image from "next/image";
import { FaCode } from "react-icons/fa6";
import { IoFlashOutline } from "react-icons/io5";
import { RiRobot2Fill } from "react-icons/ri";

export const CardSwapper = () => {
  return (
    <Section className="mb-[150px] md:mb-[200px]">
      <div className="flex justify-between max-w-[1200px] mx-auto items-center">
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-black  text-5xl text-primary">
            Pourquoi moi ?
          </h2>
          <p className="text-white max-w-[50%] text-justify">
            Je suis à l’écoute des besoins de chaque client et je prends le
            temps de comprendre leurs objectifs afin de proposer des solutions
            réellement adaptées. Flexible et réactif, je m’adapte facilement aux
            contraintes et aux changements tout au long du projet pour garantir
            un résultat en parfaite adéquation avec leurs attentes.
          </p>
        </div>
        <div className="h-[300px] relative">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <p className="text-white uppercase font-bold py-2 ml-4 flex items-center gap-2">
                <FaCode /> Site
              </p>
              <div>
                <Image
                  src="/assets/images/site.png"
                  alt="Code Image"
                  width={150}
                  height={150}
                  className="w-full max-h-[258px] object-cover rounded-b-[10px] opacity-80"
                />
              </div>
            </Card>
            <Card>
              <p className="text-white uppercase font-bold py-2 ml-4 flex items-center gap-2">
                <RiRobot2Fill /> Automatisations
              </p>
              <div>
                <Image
                  src="/assets/images/automatisation.png"
                  alt="Code Image"
                  width={150}
                  height={150}
                  className="w-full max-h-[258px] object-cover rounded-b-[10px] opacity-80"
                />
              </div>
            </Card>
            <Card>
              <p className="text-white uppercase font-bold py-2 ml-4 flex items-center gap-2">
                <IoFlashOutline /> Reactivité
              </p>
              <div>
                <Image
                  src="/assets/images/reactivite.png"
                  alt="Code Image"
                  width={150}
                  height={150}
                  className="w-full max-h-[258px] object-cover rounded-b-[10px] opacity-80"
                />
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </Section>
  );
};
