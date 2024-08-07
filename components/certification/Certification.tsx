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
      "I gained proficiency in web interface development, focusing on frontend skills while also including backend API integration and building APIs from scratch. Under mentorship and examination, I developed skills in creating responsive web apps, enhancing webpage dynamics, optimizing site performance, and managing projects from start to finish.",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Sass",
      "Bootstrap",
      "Git",
      "SEO"
  ],
  },
  {
    title: "Responsive Web Design",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "I honed my skills in HTML and CSS through 20 projects, focusing on content structuring, design principles, modern techniques like CSS variables, best practices for accessibility, and crafting responsive designs.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
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
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Developers use HTML and CSS to control the content and styling of a page. And they use JavaScript to make that page interactive. In this JavaScript Algorithm and Data Structures Certification, you'll learn the JavaScript fundamentals like variables, arrays, objects, loops, functions, the DOM and more. You'll also learn about Object Oriented Programming (OOP), Functional Programming, algorithmic thinking, how to work with local storage, and how to fetch data using an API.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  },
  {
    title: "Front End Development Libraries",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Now that you're familiar with HTML, CSS, and JavaScript, level up your skills by learning some of the most popular front end libraries in the industry. In the Front End Development Libraries Certification, you'll learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass. Later, you'll build a shopping cart and other applications to learn how to create powerful Single Page Applications (SPAs) with React and Redux.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  },
  {
    title: "Data Visualization",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Data is all around us, but it doesn't mean much without shape or context. In the Data Visualization Certification, you'll build charts, graphs, and maps to present different types of data with the D3.js library. You'll also learn about JSON (JavaScript Object Notation), and how to work with data online using an API (Application Programming Interface).",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  },
  {
    title: "Relational Database",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "For these courses, you will use real developer tools and software including VS Code, PostgreSQL, and the Linux / Unix command line to complete interactive tutorials and build projects. These courses start off with basic Bash commands. Using the terminal, you will learn everything from navigating and manipulating a file system, scripting in Bash, all the way to advanced usage. Next, you will learn how to create and use a relational database with PostgreSQL, a database management system, and SQL, the language of these databases. Finally, you will learn Git, the version control system, an essential tool of every developer.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  },
  {
    title: "Back End Development & APIs",
    school: "freeCodeCamp",
    date: "January 2024 – 300 hours",
    link: "https://github.com/basedhound/freeCodeCamp_responsive-web-design",
    description:
      "Until this point, you've only used JavaScript on the front end to add interactivity to a page, solve algorithm challenges, or build an SPA. But JavaScript can also be used on the back end, or server, to build entire web applications. Today, one of the popular ways to build applications is through microservices, which are small, modular applications that work together to form a larger whole. In the Back End Development and APIs Certification, you'll learn how to write back end apps with Node.js and npm. You'll also build web applications with the Express framework, and build a People Finder microservice with MongoDB and the Mongoose library.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "Design",
      "Flexbox",
      "Grid",
    ],
  },
];
