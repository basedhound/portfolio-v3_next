import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>

          <div className={styles.linkToGallery}>
            <AiOutlineArrowRight size="2rem" />
            <Link href="/gallery">Access Full Gallery</Link>
          </div>
    </section>
  );
};

const projects = [
  {
    title: "iPhone 15",
    imgSrc: "/showcase/iphone.webp",
    code: "https://github.com/basedhound/iPhone-15_ui_react",
    projectLink: "https://iphone15-fv.netlify.app",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Evently",
    imgSrc: "/showcase/evently.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Travel Agency",
    imgSrc: "/showcase/travel.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Sushi Restaurant",
    imgSrc: "/showcase/sushi.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Imaginify",
    imgSrc: "/showcase/imaginify.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Car Hub",
    imgSrc: "/showcase/carhub.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "3D Portfolio",
    imgSrc: "/showcase/portfolio3d.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Podcast AI",
    imgSrc: "/showcase/podcastr.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
];
