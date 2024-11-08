import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { CertificationItem } from "./CertificationItem";

export const Certification = () => {

  const t = useTranslations("Certification");

  const certification = [
    {
      title: t("certif1"),
      school: t("school1"),
      date: t("date1"),
      link: "https://drive.google.com/file/d/1CNXBUrmcpHzEprEyA40yxcpp0ogD3Ahy/view?usp=sharing",
      description:t("desc1"),
      tech: [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Sass",
        "Bootstrap",
        "Git",
        "SEO",
      ],
    },
    {
      title: t("certif2"),
      school: t("school2"),
      date: t("date2"),
      link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
      description:t("desc2"),
      tech: [
        "HTML",
        "CSS",
        "Responsive",
        "Design",
        "Flexbox",
        "Grid",
        "SEO",
        "Accessibility",
      ],
    },
    {
      title: t("certif3"),
      school: t("school3"),
      date: t("date3"),
      link: "https://github.com/basedhound/freeCodeCamp_javascript-algorithms-and-data-structures",
      description:t("desc3"),
      tech: [
        "JavaScript",
        "Functions",
        "DOM",
        "OOP",
        "Algorithmic Thinking",
        "API Fetching",
      ],
    },
    {
      title: t("certif4"),
      school: t("school4"),
      date: t("date4"),
      link: "https://github.com/basedhound/freeCodeCamp_frontend-libraries",
      description:t("desc4"),
      tech: [
        "React",
        "Redux",
        "Bootstrap",
        "Sass",
        "Single Page Application",
      ],
    },
/*     {
      title: t("certif5"),
      school: t("school5"),
      date: t("date5"),
      link: "https://github.com/basedhound/freeCodeCamp_data-visualization",
      description:t("desc5"),
      tech: [
        "D3.js",
        "Charts",
        "Graphs",
        "Maps",
        "JSON",
        "API Integration",
      ],
    }, */
/*     {
      title: t("certif6"),
      school: t("school6"),
      date: t("date6"),
      link: "https://github.com/basedhound/freeCodeCamp_relational-database",
      description:t("desc6"),
      tech: [
        "VS Code",
        "PostgreSQL",
        "Linux/Unix Command Line",
        "Bash Commands",
        "SQL",      
      ],
    }, */
/*     {
      title: t("certif7"),
      school: t("school7"),
      date: t("date7"),
      link: "https://github.com/basedhound/freeCodeCamp_backend-and-apis",
      description:t("desc7"),
      tech: [
        "Node.js",
        "npm",
        "Express",
        "MongoDB",
        "Mongoose",
        "Microservices"
      ],
    }, */
/*     {
      title: t("certif8"),
      school: t("school8"),
      date: t("date8"),
      link: "https://github.com/basedhound/freeCodeCamp_quality-assurance",
      description:t("desc8"),
      tech: [
        "Chai",
        "Node.js",
        "Express",
        "Pug",
        "Passport",
        "Socket.io"
      ],
    }, */
  ];
  
  return (
    <section className="section-wrapper" id="certification">
      <SectionHeader title={t("section")} dir="l" />
      {certification.map((item) => (
        <CertificationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

