import { useTranslations } from "next-intl";
import Link from "next/link";
import { StandardButton } from "@/components/hero/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className={`section-wrapper ${styles.hero}`} id="hero">
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              {t("title")}
              <span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              <span>{t("subtitle")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              {t("text1")}
              <br className={styles.breakline} /> {t("text2")}
              <br className={styles.breakline} /> {t("text3")}
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
