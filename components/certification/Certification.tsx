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
    title: "Web Developer",
    school: "OpenClassrooms",
    date: "November 2022 – 600 hours",
    link: "pdf/openclassrooms.pdf",
    description:
      "I gained proficiency in web interface development, focusing on frontend skills while also including backend API integration and building APIs from scratch. Under mentorship and examination, I developed skills in creating responsive web apps, enhancing webpage dynamics, optimizing site performance, and managing projects from start to finish.",
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
    title: "Responsive Web Design",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "I honed my skills in HTML and CSS through 20 projects, focusing on content structuring, design principles, modern techniques like CSS variables, best practices for accessibility, and crafting responsive designs.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  },
/*   {
    title: "JavaScript Algorithms & Data Structures",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error eveniet quis repudiandae, earum atque, numquam quos consequatur exercitationem quo explicabo. Fuga iure dolorem suscipit ipsum itaque, illo corporis repellat.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  }, */
/*   {
    title: "Front End Development Libraries",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error eveniet quis repudiandae, earum atque, numquam quos consequatur exercitationem quo explicabo. Fuga iure dolorem suscipit ipsum itaque, illo corporis repellat.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  }, */
/*   {
    title: "Data Visualization",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error eveniet quis repudiandae, earum atque, numquam quos consequatur exercitationem quo explicabo. Fuga iure dolorem suscipit ipsum itaque, illo corporis repellat.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  }, */
/*   {
    title: "Relational Database",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error eveniet quis repudiandae, earum atque, numquam quos consequatur exercitationem quo explicabo. Fuga iure dolorem suscipit ipsum itaque, illo corporis repellat.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  }, */
/*   {
    title: "Back End Development & APIs",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error eveniet quis repudiandae, earum atque, numquam quos consequatur exercitationem quo explicabo. Fuga iure dolorem suscipit ipsum itaque, illo corporis repellat.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  }, */
];
