import { Section } from "@/components";
import { Link } from "next-view-transitions";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Wadecx", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/tyron-morcel-7a31a2300/", icon: "linkedin" },
  ];

  return (
    <Section size="full" className="bg-black/20 mb-0 md:mb-0 py-0">
      <footer className="w-[90vw] lg:w-[80vw] mx-auto">
        <div className="border-t border-white/10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            <div className="flex flex-col space-y-4">
              <div className="flex gap-3 items-center">
                <h2 className="text-white text-2xl font-bold uppercase">Tyron</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Développeur Full Stack passionné par la création d'expériences web modernes et performantes.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white text-lg font-semibold">Navigation</h3>
              <nav className="flex flex-col space-y-3">
                {navigationLinks.map((link, id) => (
                  <Link
                    key={id}
                    href={link.href}
                    className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col space-y-4">
              <h3 className="text-white text-lg font-semibold">Me suivre</h3>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((social, id) => (
                  <a
                    key={id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span>{social.name}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href="mailto:tyronmorcelpro@gmail.com"
                  className="text-gray-400 hover:text-violet-500 transition-colors duration-300 text-sm"
                >
                  tyronmorcelpro@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                {currentYear} Tyron Morcel. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export { Footer };
