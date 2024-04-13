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
    </section>
  );
};

const projects = [
  {
    title: "Classified",
    imgSrc: "/project-imgs/agency-listing.png",
    code: "#",
    projectLink: "#",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description: "An Insurance Agency Listing Web Application.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and created dynamic reusable
          components and base layout from a mock-up.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom tailwind components,
          connected to a Prisma backend.
        </p>
      </>
    ),
  },
  {
    title: "Elancerz",
    imgSrc: "/project-imgs/elancerz.png",
    code: "https://www.github.com",
    projectLink: "https://elancerz.com/",
    tech: ["React", "Nextjs", "Sytled Components", "Firebase Auth", "Laravel"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and created dynamic reusable
          components, integrated calendly, messaging and project management
          features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          connected to a Laravel backend, with data stored in Mysql.
        </p>
      </>
    ),
  },
  {
    title: "Agency Iron Admin",
    imgSrc: "/project-imgs/agency-iron-crm.png",
    code: "https://www.github.com",
    // projectLink: "https://agency-iron-crm.herokuapp.com/",
    projectLink: "#",
    tech: ["React", "MUI", "MongoDB", "Postgres", "Python"],
    description:
      "A Dashboard for clients and admin of Rocky Mountain West Insurance LLC. using Vuejs and re-worked using Reactjs.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer for this web application. Integrated
          api&apos;s, Created dynamic and reusable components.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and
          integrating api.
        </p>
        <p>
          The team in total consists of 3 developers. This is a passion project
          for all of us.
        </p>
      </>
    ),
  },
  {
    title: "WorshipHIM",
    imgSrc: "/project-imgs/wh_app.png",
    code: "https://www.github.com",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US",
    tech: ["React", "React Native", "Styled Components", "Android"],
    description:
      "WorshipHIM is a chord and lyrics app developed to help ease everyone in their worship to God.",
    modalContent: (
      <>
        <p>
          WorshipHIM is a chord and lyrics app developed to help ease everyone
          in their worship to God. So that all may know, from the rising of the
          sun to its setting, That there is none besides God. He is the Lord and
          there&apos;s no other! Praise Him, Worship Him!
        </p>
        <p>This is a very fun project that i made using React Native.</p>
      </>
    ),
  },
  {
    title: "WorshipHIM Landing Page",
    imgSrc: "/project-imgs/worshiphim.png",
    code: "https://www.github.com",
    projectLink: "https://worshiphim.vercel.app/",
    tech: ["React", "Nextjs", "Tailwind", "Google Play Scrapper", "Ko-Fi"],
    description:
      "Landing Page of WorshipHIM mobile application for showcasing feature rich and tools of the app.",
    modalContent: (
      <>
        <p>
          This is another self project that i made to showcase our mobile app.
        </p>
        <p>
          I integrated ko-fi donation and uses Template for this Nextjs Project.
          I also use a plugin for scrapping data from our google play to display
          directly on the landing page.
        </p>
      </>
    ),
  },
  {
    title: "Portfolio v.2",
    imgSrc: "/project-imgs/portfolio-01.png",
    code: "https://github.com/jcdevz-dev/portfolio",
    projectLink: "#",
    tech: ["React", "Styled Components", "Typescript", "Gatsby"],
    description: "First Portfolio Made with React JS",
    modalContent: (
      <>
        <p>
          This is my second version of my portfolio that i made to showcase my
          projects.
        </p>
        <p>Trying out gatsby and creating my second version of portfolio</p>
      </>
    ),
  },
  {
    title: "Portfolio v.1",
    imgSrc: "/project-imgs/portfolio-00.png",
    code: "https://github.com/jcdevz-dev/jc-portfolio",
    projectLink: "https://jc-devera.vercel.app/",
    tech: ["React", "Styled Components", "Typescript"],
    description: "First Portfolio Made with React JS",
    modalContent: (
      <>
        <p>
          This is my first version of my portfolio that i made to showcase my
          projects.
        </p>
        <p>First step for learning React JS and creating my portfolio</p>
      </>
    ),
  },
];
