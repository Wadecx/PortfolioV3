import { Button, Section } from "@/components";
import { NeonGradientCard } from "@/components/common/NeonGradiant";
import Image from "next/image";

const projects = [
  {
    title: "Projet 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum accusantium eum unde, officia totam neque provident illo quam ad deleniti doloribus sequi, vel reprehenderit corporis tenetur quaerat quia qui cumque!",
    imageUrl: "/assets/images/website.png",
    link: "/projects/1",
  },
  {
    title: "Projet 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vero assumenda voluptate accusantium itaque aliquid mollitia sunt fugiat quibusdam quod porro cupiditate, excepturi tempora blanditiis minus! Vero accusantium saepe praesentium.",
    imageUrl: "/assets/images/website.png",
    link: "/projects/2",
  },
  {
    title: "Projet 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime eos tenetur pariatur illo amet ullam sunt magnam reprehenderit minima. Quasi amet aut itaque consequuntur exercitationem molestias dolores corrupti blanditiis!",
    imageUrl: "/assets/images/website.png",
    link: "/projects/3",
  },
];

export const Projects = () => {
  return (
    <Section>
      <div className="flex flex-col gap-12 items-center">
        <h2 className="uppercase font-black text-white text-4xl">
          mes projets
        </h2>
        <div className="grid grid-cols-3 space-x-8">
          {projects.map((project, index) => (
            <NeonGradientCard borderSize={2} borderRadius={20}>
              <div className="p-4 bg-white/20 rounded-xl">
                <Image
                  src={project.imageUrl}
                  alt={project.description}
                  width={300}
                  height={0}
                  className="rounded-2xl"
                />
                <div className="flex flex-col gap-2 my-4 px-2 max-w-[300px] max-h-[">
                  <h3 className="text-2xl uppercase font-black text-white">
                    {project.title}
                  </h3>
                  <p className="text-justify text-sm text-white">
                    {project.description}
                  </p>
                  <Button href={project.link} className="w-full mt-2">
                    {project.title}
                  </Button>
                </div>
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </Section>
  );
};
