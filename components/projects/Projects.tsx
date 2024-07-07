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
          This is a clone of Apple's iPhone 15 Pro website using React.js and
          TailwindCSS. It highlights the effective use of GSAP (Greensock
          Animations) and Three.js for displaying iPhone 15 Pro models in
          various colors and shapes.
        </p>
        <p>
          ✔ Beautiful Subtle Smooth Animations using GSAP: Enhanced user
          experience with seamless and captivating animations powered by GSAP.
        </p>
        <p>
          ✔ 3D Model Rendering with Different Colors and Sizes: Explore the
          iPhone 15 Pro from every angle with dynamic 3D rendering, offering
          various color and size options.
        </p>
        <p>
          ✔ Custom Video Carousel (made with GSAP): Engage users with a unique
          and interactive video carousel developed using GSAP for a personalized
          browsing experience.
        </p>
        <p>
          ✔ Completely Responsive: Consistent access and optimal viewing on any
          device with a fully responsive design that adapts to different screen
          sizes.
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
        <p>
          ✔ Authentication (CRUD) with Clerk: User management through Clerk,
          ensuring secure and efficient authentication.
        </p>
        <p>
          ✔ Events (CRUD): Comprehensive functionality for creating, reading,
          updating, and deleting events, giving users full control over event
          management.
        </p>
        <p>
          ✔ Related Events: Smartly connects events that are related and
          displaying on the event details page, making it more engaging for
          users.
        </p>
        <p>
          ✔ Organized Events: Efficient organization of events, ensuring a
          structured and user-friendly display for the audience, showing events
          created by the user on the user profile.
        </p>
        <p>
          ✔ Search & Filter: Empowering users with a robust search and filter
          system, enabling them to easily find the events that match their
          preferences.
        </p>
        <p>
          ✔ New Category: Dynamic categorization allows for the seamless
          addition of new event categories, keeping your platform adaptable.
        </p>
        <p>
          ✔ Checkout and Pay with Stripe: Smooth and secure payment transactions
          using Stripe, enhancing user experience during the checkout process.
        </p>
        <p>
          ✔ Event Orders: Comprehensive order management system, providing a
          clear overview of all event-related transactions.
        </p>
        <p>
          ✔ Search Orders: Quick and efficient search functionality for orders,
          facilitating easy tracking and management.
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
