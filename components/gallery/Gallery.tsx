import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Project } from "@/components/projects/Project";
import styles from "./gallery.module.scss";
import Search from "./Search";
import { TransitionLink } from "../utils/TransitionLink";

const Gallery = () => {
  return (
    <section className="section-wrapper" id="gallery">
      {/* Back Home */}
      <TransitionLink className={styles.galleryLink1} href="/#projects">
        <AiOutlineArrowLeft size="3rem" />
      </TransitionLink>

      {/* Search */}
      <Search/>

      {/* Gallery */}
      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>

      {/* Back Home */}
      <TransitionLink className={styles.galleryLink2} href="/#projects">
        <AiOutlineArrowRight size="2rem" />
        Home
      </TransitionLink>
    </section>
  );
};

const projects = [
  {
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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
    title: "Project",
    img: "/projects/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
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

export default Gallery;
