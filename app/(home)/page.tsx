import { CardSwapper } from "@/containers/home/CardSwap";
import { Heroheader } from "@/containers/home/Heroheader";
import { Loop } from "@/containers/home/Loop";
import { Sparks } from "@/containers/home/Sparks";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function HomePage() {
  return <>
  <Heroheader />
  <Loop />
  <CardSwapper/>
  </>;
}
