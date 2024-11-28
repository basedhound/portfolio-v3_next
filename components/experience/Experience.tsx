import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  const t = useTranslations("Experience");

  const experiences = [
    {
      title: t("exp1"),
      role: t("role1"),
      date: t("date1"),
      location: t("loca1"),
      description: t("desc1"),
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "MongoDB",
        "Node.js",
        "SEO",
        "WordPress",
      ],
    },
    {
      title: t("exp2"),
      role: t("role2"),
      date: t("date2"),
      location: t("loca2"),
      description: t("desc2"),
      tech: [
        "AI Prompt Engineering",
        "User Testing",
        "Performance Analysis",
        "Prompt Optimization",
      ],
    },
  ];

  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={t("section")} dir="l" />
      {experiences.map((experience) => (
        <ExperienceItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
