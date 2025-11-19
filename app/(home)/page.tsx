import { Heroheader } from "@/containers/home/Heroheader";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function HomePage() {
  return <>
  <Heroheader />
  </>;
}
