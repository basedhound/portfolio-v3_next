import { SectionHeader } from "@/components/utils/SectionHeader";
import { CertificationItem } from "./CertificationItem";

export const Certification = () => {
  return (
    <section className="section-wrapper" id="certification">
      <SectionHeader title="Certification" dir="l" />
      {certification.map((item) => (
        <CertificationItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const certification = [
  {
    title: "Certification 1",
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
    title: "Certification 2",
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
    title: "Certification 3",
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
