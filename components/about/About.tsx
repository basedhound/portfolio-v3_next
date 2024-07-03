import { AiOutlineArrowRight } from "react-icons/ai";
//
import { MyLinks } from "@/components/nav/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import styles from "./about.module.scss";
import Link from "next/link";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello there! I&apos;m Frank, a web developer fluent in both French
              and English. I specialize in creating engaging and responsive
              websites that cater to individual and small business needs.
              <br />
              <br />
              Passionate about delivering user-friendly responsive designs and
              optimizing site performance, I also provide <span>
                SEO
              </span> and <span>copyrighting</span> services to enhance online visibility and engagement.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m specialized in <span>React</span> and{" "}
              <span>Next.js</span> frontend frameworks. I&apos;ve also worked
              with backend technologies like Node.js, PostgreSQL and MongoDB,
              allowing me to build full-stack applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              When I&apos;m not coding, I dedicate time to honing my{" "}
              <span>soft skills</span> in autonomy, effective communication,
              adaptability, organization, and resourcefulness.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch!
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
