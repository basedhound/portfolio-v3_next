
import { AiOutlineArrowRight } from "react-icons/ai";
//
import { MyLinks } from "@/components/nav/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello there! I&apos;m Frank, Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam itaque at dicta voluptate.
              <br/><br/>
              I have experience working in both the mobile and web development worlds, with a focus on frontend development. I&apos;m passionate about creating beautiful, responsive websites that provide a great user experience.
             </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include HTML, CSS, JavaScript, and I&apos;m specialized in React and Next.js frontend frameworks.
              I&apos;ve also worked with backend technologies like Node.js, Firebase, MongoDB and PHP/Laravel , allowing me to build full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I enjoy Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem cum quaerat assumenda labore sequi repudiandae nihil reiciendis modi.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer. 
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!              
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Socials</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
