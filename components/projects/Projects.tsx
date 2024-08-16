import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { Link } from "@/i18n/navigation";

export const Projects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "iPhone 15",
      img: "/showcase/iphone.webp",
      code: "https://github.com/basedhound/iPhone-15_ui_react",
      link: "https://iphone15-fv.netlify.app",
      tech: ["React", "Three.js", "Tailwind", "GSAP"],
      description: t("desc1"),
      modalContent: <>{t("modal1")}</>,
    },
    {
      title: "Evently",
      img: "/showcase/evently.webp",
      code: "https://github.com/basedhound/event-platform_app_next",
      link: "https://evently-fv.vercel.app",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
      description: t("desc2"),
      modalContent: <>{t("modal2")}</>,
    },
    {
      title: "Travel Agency",
      img: "/showcase/travel.webp",
      code: "https://github.com/basedhound/travel-agency-2_ui",
      link: "https://travel-2-fv.netlify.app",
      tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
      description: t("desc3"),
      modalContent: <>{t("modal3")}</>,
    },
    {
      title: "Sushi Restaurant",
      img: "/showcase/sushi.webp",
      code: "https://github.com/basedhound/sushi-restaurant-2_ui",
      link: "https://sushi-2-fv.netlify.app",
      tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
      description: t("desc4"),
      modalContent: <>{t("modal4")}</>,
    },
    {
      title: "Imaginify",
      img: "/showcase/imaginify.webp",
      code: "https://github.com/basedhound/canva-clone_app_next",
      link: "https://imaginify-fv.vercel.app",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
      description: t("desc5"),
      modalContent: <>{t("modal5")}</>,
    },
    {
      title: "Car Hub",
      img: "/showcase/carhub.webp",
      code: "https://github.com/basedhound/car-hub_app_next",
      link: "https://car-hub-fv.vercel.app",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"],
      description: t("desc6"),
      modalContent: <>{t("modal6")}</>,
    },
    {
      title: "3D Portfolio",
      img: "/showcase/portfolio3d.webp",
      code: "https://github.com/basedhound/3d-island_portfolio_react",
      link: "https://3d-island-fv.netlify.app/",
      tech: ["React", "Three.js", "Three Fiber", "Tailwind", "Vite"],
      description: t("desc7"),
      modalContent: <>{t("modal7")}</>,
    },
    {
      title: "Podcast AI",
      img: "/showcase/podcastr.webp",
      code: "https://github.com/basedhound/podcastr-ai_app_next",
      link: "https://podcastr-fv.vercel.app",
      tech: ["OpenAI", "Next.js", "React", "TypeScript", "Tailwind"],
      description: t("desc8"),
      modalContent: <>{t("modal8")}</>,
    },
  ];

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title={t("section")} dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>

      <div className={styles.linkToGallery}>
        <Link href="/gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </Link>
      </div>
    </section>
  );
};
