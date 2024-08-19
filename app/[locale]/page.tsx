'use client'
import { About } from '@/components/about/About';
import { Certification } from '@/components/certification/Certification';
import { Contact } from '@/components/contact/Contact';
import { Experience } from '@/components/experience/Experience';
import { Hero } from '@/components/hero/Hero';
import { Heading } from '@/components/nav/Heading';
import { SideBar } from '@/components/nav/SideBar';
import { Projects } from '@/components/showcase/Showcase';
import styles from "@/components/utils/home.module.scss";

const Home = () => {
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


export default Home

