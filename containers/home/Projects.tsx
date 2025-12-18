import { Section } from "@/components"
import Image from "next/image"

const projects = [
    {
        title: "Projet 1",
        description: "Description du projet 1",
        imageUrl: "/assets/images/website.png",
        link: "/projects/1",
    },
    {
        title: "Projet 2",
        description: "Description du projet 2",
        imageUrl: "/assets/images/website.png",
        link: "/projects/2",
    },
    {
        title: "Projet 3",
        description: "Description du projet 3",
        imageUrl: "/assets/images/website.png",
        link: "/projects/3",
    },
]

export const Projects = () => {
    return (
        <Section>
            <div className="flex flex-col gap-12 items-center">
                <h2 className="uppercase font-black text-white text-4xl">mes projets</h2>
                <div className="grid grid-cols-3 space-x-8">
                    {projects.map((project, index) => (
                        <div className="rounded-3xl bg-black/80 p-4 min-w-[400px]" key={index}>
                            <Image src={project.imageUrl} alt="" width={300} height={300} className="rounded-2xl mx-auto"/>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}