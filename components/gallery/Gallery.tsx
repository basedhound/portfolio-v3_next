import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { TransitionLink } from "../utils/TransitionLink";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import styles from "./gallery.module.scss";
import Filter from "./Filter";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.cat.includes(filter))
      );
    }
  };

  return (
    <>
      <section className={styles.galleryWrapper} id="gallery">
        {/* Back Home */}
        <TransitionLink className={styles.returnLink} href="/#projects">
          <AiOutlineArrowLeft size="3rem" />
        </TransitionLink>

        {/* Filter */}
        <Filter activeFilter={activeFilter} handleFilter={handleFilter} />

        {/* Gallery */}
        <div className={styles.galleryItem}>
        {filteredProjects.map((project) => (
  <GalleryItem key={`${project.title}-${activeFilter}`} {...project} />
))}
        </div>

        {/* Back Home */}
        <TransitionLink className={styles.galleryLink2} href="/#projects">
          <AiOutlineArrowRight size="2rem" />
          Home
        </TransitionLink>
      </section>
    </>
  );
};

const projects = [
  {
    cat: "React, Design",
    title: "Project 1",
    img: "/showcase/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["React", "GSAP", "Three.js"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "React",
    title: "Project 2",
    img: "/showcase/sushi.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["HTML", "CSS", "JS", "Sass"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "Design",
    title: "Project 3",
    img: "/showcase/travel.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["HTML", "CSS", "JS", "Sass"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "App",
    title: "Project 4",
    img: "/showcase/podcastr.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "React, Design",
    title: "Project 5",
    img: "/showcase/iphone.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["React", "GSAP", "Three.js"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "React",
    title: "Project 6",
    img: "/showcase/sushi.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["HTML", "CSS", "JS", "Sass"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "Design",
    title: "Project 7",
    img: "/showcase/travel.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["HTML", "CSS", "JS", "Sass"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
  {
    cat: "App",
    title: "Project 8",
    img: "/showcase/podcastr.webp",
    code: "https://www.github.com",
    link: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: <></>,
  },
];

export default Gallery;
