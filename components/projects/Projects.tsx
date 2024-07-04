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
    img: "/showcase/iphone.webp",
    code: "https://github.com/basedhound/iPhone-15_ui_react",
    link: "https://iphone15-fv.netlify.app",
    tech: ["React", "Three.js", "Tailwind", "GSAP"],
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
    img: "/showcase/evently.webp",
    code: "https://github.com/basedhound/event-platform_app_next",
    link: "https://evently-fv.vercel.app",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
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
    img: "/showcase/travel.webp",
    code: "https://github.com/basedhound/travel-agency-2_ui",
    link: "https://travel-2-fv.netlify.app",
    tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
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
    img: "/showcase/sushi.webp",
    code: "https://github.com/basedhound/sushi-restaurant-2_ui",
    link: "https://sushi-2-fv.netlify.app",
    tech: ["HTML", "CSS", "Sass", "JavaScript", "Figma"],
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
    img: "/showcase/imaginify.webp",
    code: "https://github.com/basedhound/canva-clone_app_next",
    link: "https://imaginify-fv.vercel.app",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Stripe"],
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
    img: "/showcase/carhub.webp",
    code: "https://github.com/basedhound/car-hub_app_next",
    link: "https://car-hub-fv.vercel.app",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
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
    img: "/showcase/portfolio3d.webp",
    code: "https://github.com/basedhound/pf-design_3d-island_react",
    link: "https://portfolio-3d-island-fv.netlify.app",
    tech: ["React", "Three.js", "Three Fiber", "Tailwind", "Vite"],
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
    img: "/showcase/podcastr.webp",
    code: "https://github.com/basedhound/podcastr-ai_app_next",
    link: "https://podcastr-fv.vercel.app",
    tech: ["OpenAI", "Next.js", "React", "TypeScript", "Tailwind"],
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
