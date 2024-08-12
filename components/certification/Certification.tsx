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
      "Focused on frontend skills, backend API integration, and building APIs from scratch. Developed responsive web apps, enhanced webpage dynamics, optimized site performance, and managed projects from start to finish under mentorship and examination. Key project: Groupomania, a full-stack social media platform built with the MERN stack.",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Sass",
      "Bootstrap",
      "Git",
      "SEO",
    ],
  },
  {
    title: "Responsive Web Design",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Focused on content structuring with HTML and design principles with CSS. Developed skills in responsive design, Flexbox, CSS Grid, SEO, and accessibility through 20 projects. Emphasized modern techniques and best practices for crafting well-structured and accessible web pages. Key projects: Groupomania, a full-stack social media platform built with the MERN stack.",
    tech: [
      "HTML",
      "CSS",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
      "SEO",
      "Accessibility",
    ],
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_javascript-algorithms-and-data-structures",
    description:
      "Focused on mastering JavaScript fundamentals, including variables, arrays, objects, loops, functions, and the DOM. Developed skills in Object-Oriented Programming (OOP), Functional Programming, and algorithmic thinking. Gained experience in working with local storage and fetching data using APIs. Emphasized practical applications and best practices for creating interactive and efficient web applications.",
    tech: [
      "JavaScript",
      "Functions",
      "DOM",
      "OOP",
      "Algorithmic Thinking",
      "API Fetching",
    ],
  },
  {
    title: "Front End Development Libraries",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_frontend-libraries",
    description:
      "Focused on enhancing front-end skills with popular libraries and frameworks. Gained proficiency in quickly styling websites with Bootstrap and extending CSS styles with Sass. Developed expertise in creating Single Page Applications (SPAs) using React and Redux through practical projects like a shopping cart application. Emphasized integrating advanced styling and state management techniques for dynamic and efficient web applications.",
    tech: [
      "React",
      "Redux",
      "Bootstrap",
      "Sass",
      "Single Page Applications (SPAs)",
    ],
  },
  {
    title: "Data Visualization",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_data-visualization",
    description:
      "Focused on presenting data through charts, graphs, and maps using the D3.js library. Gained skills in working with JSON (JavaScript Object Notation) and integrating data from online sources using APIs. Emphasized practical techniques for visualizing and interpreting data to provide clear insights and context.",
    tech: [
      "D3.js",
      "Charts",
      "Graphs",
      "Maps",
      "JSON",
      "API Integration",
    ],
  },
  {
    title: "Relational Database",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_relational-database",
    description:
      "Focused on using essential developer tools and software, including VS Code, PostgreSQL, and the Linux/Unix command line. Gained skills in basic Bash commands, file system navigation, and scripting. Developed expertise in creating and managing relational databases with PostgreSQL and SQL. Also learned Git for version control, a crucial tool for collaborative development.",
    tech: [
      "VS Code",
      "PostgreSQL",
      "Linux/Unix Command Line",
      "Bash Commands",
      "SQL",      
    ],
  },
  {
    title: "Back End Development & APIs",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_backend-and-apis",
    description:
      "Focused on using JavaScript for server-side development to build full web applications. Learned to write back-end apps with Node.js and npm, and build web applications using the Express framework. Developed a People Finder microservice with MongoDB and the Mongoose library, emphasizing the microservices architecture for creating modular and scalable applications.",
    tech: [
      "Node.js",
      "npm",
      "Express",
      "MongoDB",
      "Mongoose",
      "Microservices"
    ],
  },
  {
    title: "Quality Assurance",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_quality-assurance",
    description:
      "Focused on testing and ensuring the reliability of complex applications. Learned to write tests with Chai to verify that applications function as expected. Built a chat application to explore advanced concepts in Node.js and Express, utilizing Pug as a template engine, Passport for authentication, and Socket.io for real-time communication between the server and clients.",
    tech: [
      "Chai",
      "Node.js",
      "Express",
      "Pug",
      "Passport",
      "Socket.io"
    ],
  },
];
