import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Experience 1",
    position: "React Developer",
    time: "Aug 2022 - October 2023",
    location: "Grand Junction, CO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae iure, provident hic deleniti obcaecati laborum labore eius est ullam et in, ex explicabo veritatis iusto dolor. Corporis, cupiditate explicabo.",
    tech: [
      "Next JS",
      "React",
      "MongoDB",
      "Postgres",
      "Python",
      "Git",
      "Github",
    ],
  },
  {
    title: "Experience 2",
    position: "React Developer",
    time: "Aug 2022 - October 2023",
    location: "Grand Junction, CO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae iure, provident hic deleniti obcaecati laborum labore eius est ullam et in, ex explicabo veritatis iusto dolor. Corporis, cupiditate explicabo.",
    tech: [
      "Next JS",
      "React",
      "MongoDB",
      "Postgres",
      "Python",
      "Git",
      "Github",
    ],
  },
  {
    title: "Experience 3",
    position: "React Developer",
    time: "Aug 2022 - October 2023",
    location: "Grand Junction, CO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo beatae iure, provident hic deleniti obcaecati laborum labore eius est ullam et in, ex explicabo veritatis iusto dolor. Corporis, cupiditate explicabo.",
    tech: [
      "Next JS",
      "React",
      "MongoDB",
      "Postgres",
      "Python",
      "Git",
      "Github",
    ],
  },
];
