import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./ShowcaseItem";
import { TransitionLink } from "../utils/TransitionLink";
import styles from "./showcase.module.scss";

export const Projects = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      title: "iPhone 15",
      img: "/gallery/iphone.webp",
      code: "https://github.com/basedhound/iPhone-15_ui_react",
      link: "https://iphone15-fv.netlify.app",
      tech: ["React", "Three.js", "Tailwind", "GSAP"],
      desc: t("desc1"),
      modal: <>{t("modal1")}</>,
    },
    {
      title: "Evently",
      img: "/gallery/evently.webp",
      code: "https://github.com/basedhound/event-platform_app_next",
      link: "https://evently-fv.vercel.app",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
      desc: t("desc2"),
      modal: <>{t("modal2")}</>,
    },
    {
      title: "Travel Agency",
      img: "/gallery/travel2.webp",
      code: "https://github.com/basedhound/travel-agency-2_ui",
      link: "https://travel-2-fv.netlify.app",
      tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
      desc: t("desc3"),
      modal: <>{t("modal3")}</>,
    },
    {
      title: "Sushi Restaurant",
      img: "/gallery/sushi2.webp",
      code: "https://github.com/basedhound/sushi-restaurant-2_ui",
      link: "https://sushi-2-fv.netlify.app",
      tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
      desc: t("desc4"),
      modal: <>{t("modal4")}</>,
    },
    {
      title: "Imaginify",
      img: "/gallery/canva.webp",
      code: "https://github.com/basedhound/canva-clone_app_next",
      link: "https://imaginify-fv.vercel.app",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
      desc: t("desc5"),
      modal: <>{t("modal5")}</>,
    },
    {
      title: "Car Hub",
      img: "/gallery/carhub.webp",
      code: "https://github.com/basedhound/car-hub_app_next",
      link: "https://car-hub-fv.vercel.app",
      tech: ["Next.js", "React", "TypeScript", "Tailwind"],
      desc: t("desc6"),
      modal: <>{t("modal6")}</>,
    },
    {
      title: "3D Portfolio",
      img: "/gallery/island3d.webp",
      code: "https://github.com/basedhound/3d-island_portfolio_react",
      link: "https://3d-island-fv.netlify.app/",
      tech: ["React", "Three.js", "Three Fiber", "Tailwind", "Vite"],
      desc: t("desc7"),
      modal: <>{t("modal7")}</>,
    },
    {
      title: "Podcast AI",
      img: "/gallery/podcast.webp",
      code: "https://github.com/basedhound/podcastr-ai_app_next",
      link: "https://podcastr-fv.vercel.app",
      tech: ["OpenAI", "Next.js", "React", "TypeScript", "Tailwind"],
      desc: t("desc8"),
      modal: <>{t("modal8")}</>,
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
        <TransitionLink href="/gallery">
          <AiOutlineArrowRight size="2rem" />
          {t("gallery")}
        </TransitionLink>
      </div>
    </section>
  );
};
