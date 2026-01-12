import { Button, Section } from "@/components";
import { NeonGradientCard } from "@/components/common/NeonGradiant";
import Image from "next/image";

const projects = [
  {
    title: "StopWatch",
    description:
      "Maquette de boutique de vente de montre moderne et responsive développée avec React. Interface intuitive permettant de simuler un achat de montre. Design minimaliste et performant.",
    imageUrl: "/assets/images/stopwatch.png",
    link: "/projects/1",
  },
  {
    title: "Valorant Tracker",
    description:
      "Plateforme de suivi de statistiques pour Valorant intégrant l'API officielle de Riot Games. Permet aux joueurs de consulter leurs performances, leur historique de matchs, et leurs progressions. Interface élégante et données en temps réel.",
    imageUrl: "/assets/images/vt.png",
    link: "/projects/2",
  },
  {
    title: "Godaim",
    description:
      "Outil d'entraînement pour améliorer sa précision et ses réflexes dans les jeux FPS. Propose différents modes d'exercice et un système de tracking de progression. Conçu pour optimiser les performances des joueurs compétitifs.",
    imageUrl: "/assets/images/godaim.png",
    link: "/projects/3",
  },
];

export const Projects = () => {
  return (
    <Section id="projects" className="scroll-mt-30">
      <div className="flex flex-col gap-12 items-center">
        <h2 className="uppercase font-black text-white text-4xl">
          mes projets
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 space-x-8 gap-8">
          {projects.map((project, index) => (
            <NeonGradientCard
              borderSize={2}
              borderRadius={20}
              className="!h-full !w-full"
            >
              <div className="p-4 bg-white/1 flex flex-col gap-2 rounded-xl h-full">
                <Image
                  src={project.imageUrl}
                  alt={project.description}
                  width={400}
                  height={0}
                  className="rounded-2xl p-0"
                />
                <div className="flex flex-col gap-2 my-4 px-2 flex-1">
                  <h3 className="text-2xl uppercase font-black text-white">
                    {project.title}
                  </h3>
                  <p className="text-justify text-sm text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
