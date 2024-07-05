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
    title: "Freelance",
    role: "Web Developer",
    date: "Since 2022",
    location: "Remote",
    description:
    "I develop custom websites for individuals and small businesses, delivering responsive, user-friendly, and tailored designs. My responsibilities include optimizing site performance, enhancing search engine optimization (SEO) for better search visibility, and providing copyrighting services for unique, legally compliant content. Additionally, I offer logo design and social media assistance to improve brand presence and engage clients across different industries.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "SEO",
    ],
  },
];
