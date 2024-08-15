import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { Link } from "@/navigation";



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
        <Link href="/gallery">
          <AiOutlineArrowRight size="2rem" />
          Full Gallery
        </Link>
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
      "A clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of Three.js and GSAP for 3D and animations.",
    modalContent: (
      <>
        <p>
          This is a clone of Apple&apos;s iPhone 15 Pro website using React.js
          and TailwindCSS. It highlights the effective use of GSAP (Greensock
          Animations) and Three.js for displaying iPhone 15 Pro models in
          various colors and shapes.
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
      "Event management platform built on Next.js. This app serves as a hub for showcasing events and features secure payment through Stripe.",
    modalContent: (
      <>
        <p>
          Evently is an event management platform, built on Next.js. It serves
          as a hub for showcasing events, features payment through Stripe, the
          capability to purchase tickets and manage your own events.
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
      "Landing page design for a travel agency featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.",
    modalContent: (
      <>
        <p>
          Landing page design for a travel agency featuring a modern and
          minimalist aesthetic, crafted using HTML, CSS, and JavaScript.
          Enhanced with smooth animations powered by ScrollReveal.js library.
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
      "Landing page for a sushi restaurant featuring a modern and minimalist aesthetic, crafted using HTML, CSS, and JavaScript.",
    modalContent: (
      <>
        <p>
          Landing page design for a sushi restaurant featuring a modern and
          minimalist aesthetic, crafted using HTML, CSS, and JavaScript.
          Enhanced with smooth animations powered by ScrollReveal.js library.
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
      "AI image platform featuring advanced image processing: restoration, recoloring, object removal, generative filling, and background removal.",
    modalContent: (
      <>
        <p>
          An AI image SaaS platform with advanced image processing, secure
          payments and powerful search. Features: restoration, recoloring,
          object removal, generative filling, and background removal.
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
      "CarHub presents various car types, showcasing comprehensive information with advanced filtering and pagination support.",
    modalContent: (
      <>
        <p>
          CarHub presents various car types, showcasing comprehensive
          information with advanced filtering and pagination support. Built with
          Next.js and leveraging its server-side rendering capabilities.
        </p>
      </>
    ),
  },
  {
    title: "3D Portfolio",
    img: "/showcase/portfolio3d.webp",
    code: "https://github.com/basedhound/3d-island_portfolio_react",
    link: "https://3d-island-fv.netlify.app/",
    tech: ["React", "Three.js", "Three Fiber", "Tailwind", "Vite"],
    description:
      "3D website powered by Three.js featuring interactive elements. Navigate aboard a small plane and explore a floating island.",
    modalContent: (
      <>
        <p>
          This 3D website, built with React and powered by Three.js, features
          engaging interactive elements. Navigate aboard a small plane to
          explore a floating island and discover various information. On the
          contact page, a fox will dynamically react as you fill out the fields!
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
      "AI platform that enables users to create podcasts with features like text-to-audio conversion, image generation and seamless playback.",
    modalContent: (
      <>
        <p>
          A cutting-edge AI SaaS platform that empowers users to create,
          discover, and enjoy podcasts with advanced features such as
          text-to-audio conversion using multi-voice AI powered by OpenAI API,
          podcast thumbnail image generation, and seamless playback. The
          platform includes secure authentication using Clerk, ensuring a safe
          and personalized user experience.
        </p>
      </>
    ),
  },
];
