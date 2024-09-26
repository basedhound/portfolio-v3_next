import { useTranslations } from "next-intl";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Socials } from "@/components/nav/Socials";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  const t = useTranslations("About");

  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title={t("section")} dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            {t("p1")}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            {t("p2")}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            {t("p3")}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            {t("p4")}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            {t("p5")}
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Links</span>
                <AiOutlineArrowRight />
              </div>
              <Socials />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
