import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { TransitionLink } from "../utils/TransitionLink";

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
        <TransitionLink href="/gallery">
          <AiOutlineArrowRight size="2rem" />
          Full Gallery
        </TransitionLink>
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
        <p>
          ✔ Authentication and Authorization: Secure user access with
          registration, login, and route protection.
        </p>
        <p>
          ✔ Community Image Showcase: Explore user transformations with easy
          navigation using pagination.
        </p>
        <p>
          ✔ Advanced Image Search: Find images by content or objects present
          inside the image quickly and accurately.
        </p>
        <p>✔ Image Restoration: Revive old or damaged images effortlessly.</p>
        <p>
          ✔ Image Recoloring: Customize images by replacing objects with desired
          colors easily.
        </p>
        <p>
          ✔ Image Generative Fill: Fill in missing areas of images seamlessly.
        </p>
        <p>
          ✔ Object Removal: Clean up images by removing unwanted objects with
          precision.
        </p>
        <p>✔ Background Removal: Extract objects from backgrounds with ease.</p>
        <p>
          ✔ Download Transformed Images: Save and share AI-transformed images
          conveniently.
        </p>
        <p>
          ✔ Transformed Image Details: View details of transformations for each
          image.
        </p>
        <p>
          ✔ Transformation Management: Control over deletion and updates of
          transformations.
        </p>
        <p>
          ✔ Profile Page: Access transformed images and credit information
          personally.
        </p>
        <p>
          ✔ Credits Purchase: Securely buy credits via Stripe for uninterrupted
          use.
        </p>
        <p>
          ✔ Responsive UI/UX: A seamless experience across devices with a
          user-friendly interface.
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
        <p>
          ✔ Home Page: Showcases a visually appealing display of cars fetched
          from a third-party API, providing a captivating introduction to the
          diverse range of vehicles available.
        </p>
        <p>
          ✔ Exploration and Filtering: Explore a wide variety of cars from
          around the world, utilizing a search and filter system based on
          criteria such as model, manufacturer, year, fuel type, and make.
        </p>
        <p>
          ✔ Transition to Server-Side Rendering: A seamless transition from
          client-side rendering to server-side rendering, enhancing performance
          and providing a smoother browsing experience.
        </p>
        <p>
          ✔ Pagination: For easy navigation through a large dataset of cars,
          allowing users to explore multiple pages effortlessly.
        </p>
        <p>
          ✔ Metadata Optimization and SEO: Optimize metadata for car listing,
          enhancing search engine optimization (SEO) and ensuring better
          visibility on search engine results pages.
        </p>
        <p>
          ✔ TypeScript Types: Utilize TypeScript to provide robust typing for
          enhanced code quality and better development.
        </p>
        <p>
          ✔ Responsive Website Design: The website is designed to be visually
          pleasing and responsive, ensuring an optimal user experience across
          various devices.
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
        <p>
          ✔ Three.js is a React binding to Three.js, enabling developers to
          integrate powerful 3D graphics and visualizations into React
          applications seamlessly.
        </p>
        <p>
          ✔ Three/Drei is a collection of useful helpers and abstractions for
          React Three.js applications. It provides components like effects,
          shaders, and pre-built 3D objects to simplify development.
        </p>
        <p>
          ✔ Three/Fiber optimizes the React binding for Three.js, utilizing
          React&apos;s reconciliation algorithm (Fiber) to efficiently manage and
          update the 3D scene graph.
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
        <p>
          ✔ Robust Authentication: Secure and reliable user login and
          registration system.
        </p>
        <p>
          ✔ Modern Home Page: Showcases trending podcasts with a sticky podcast
          player for continuous listening.
        </p>
        <p>
          ✔ Discover Podcasts Page: Dedicated page for users to explore new and
          popular podcasts.
        </p>
        <p>
          ✔ Fully Functional Search: Allows users to find podcasts easily using
          various search criteria.
        </p>
        <p>
          ✔ Create Podcast Page: Enables podcast creation with text-to-audio
          conversion, AI image generation, and previews.
        </p>
        <p>
          ✔ Multi Voice AI Functionality: Supports multiple AI-generated voices
          for dynamic podcast creation.
        </p>
        <p>
          ✔ Profile Page: View all created podcasts with options to delete them.
        </p>
        <p>
          ✔ Podcast Details Page: Displays detailed information about each
          podcast, including creator details, number of listeners, and
          transcript.
        </p>
        <p>
          ✔ Podcast Player: Features backward/forward controls, as well as
          mute/unmute functionality for a seamless listening experience.
        </p>
        <p>
          ✔ Responsive Design: Fully functional and visually appealing across
          all devices and screen sizes.
        </p>
      </>
    ),
  },
];
