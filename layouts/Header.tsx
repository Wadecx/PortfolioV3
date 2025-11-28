import { Section } from "@/components";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Header = () => {
  return (
    <Section size="8/10" className="mt-0 md:mt-0 mb-0 md:mb-0">
      <header>
        <div className="w-full h-20 bg-white/1 backdrop-blur-lg border-b border-white/10 flex items-center justify-between px-6 fixed top-0 left-0 z-50">
          <div className="flex justify-between items-center w-[75vw] mx-auto">
            <div className="text-xl font-bold text-white">
              <Image
                src="assets/images/T.png"
                width={20}
                height={0}
                alt="Logo du portfolio de Tyron.M"
              />
            </div>
            <nav className="space-x-6">
              <Link href="/" className="text-white hover:text-violet-900 transition duration-200">
                À propos
              </Link>
              <Link href="/" className="text-white hover:text-violet-900 transition duration-200">
                Projets
              </Link>
              <Link href="/" className="text-white hover:text-violet-900 transition duration-200">
                Technologies
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </Section>
  );
};

export { Header };
