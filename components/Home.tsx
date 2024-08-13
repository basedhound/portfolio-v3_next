import { Hero } from "./hero/Hero";
import { Heading } from "./nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Certification } from "./certification/Certification";
import { Contact } from "./contact/Contact";
import { SideBar } from "./nav/SideBar";
import styles from "./home.module.scss";

export const Home = () => {

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Heading />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certification />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
