import Link from "next/link";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Frank<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <span>Web Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              Proficient in React and Next.js, I&apos;ve spent the last 3 years
              building websites. <br className={styles.breakline} />
              In my free time, I dive into side projects to broaden my
              technological skills. <br className={styles.breakline} />
              Let&apos;s bring your projects to life.
            </p>
          </Reveal>
          <Reveal>
            <StandardButton>
              <Link href={"#contact"}>Contact</Link>
            </StandardButton>
          </Reveal>
        </div>
      </div>
      <DotGrid />
    </section>
  );
};
