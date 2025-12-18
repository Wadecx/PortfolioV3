import { CardSwapper } from "@/containers/home/CardSwap";
import { Gradual } from "@/containers/home/Gradual";
import { Heroheader } from "@/containers/home/Heroheader";
import { Loop } from "@/containers/home/Loop";
import { Projects } from "@/containers/home/Projects";
import { Sparks } from "@/containers/home/Sparks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function HomePage() {
  return (
    <>
      <Heroheader />
      <CardSwapper />
      <Projects />
      <Loop />
      <Gradual />
    </>
  );
}
