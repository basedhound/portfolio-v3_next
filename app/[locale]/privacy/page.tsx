"use client";
import { useTranslations } from "next-intl";
import { SideBar } from "@/components/nav/SideBar";
import { Footer } from "@/components/footer/Footer";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "@/components/utils/home.module.scss";

const Privacy = () => {
  const t = useTranslations("Privacy");

  return (
    <div className={styles.home}>
      <SideBar />
      <main>
        <section className={styles.legal}>
          <SectionHeader title={t("header")} dir="r" />
          <p>
            <strong>{t("date1")}</strong> {t("date2")}
          </p>
          <h2>{t("introTitle")}</h2>
          <p>{t("introWelcome")}     <a
            href="https://fvukelic.com"
            target="_blank"
            rel="nofollow"
            aria-label="Go to Homepage">
            fvukelic.com
          </a></p>
          <p>{t("introBody")}</p>
          <h2>{t("infoTitle")}</h2>
          <h3>{t("personalTitle")}</h3>
          <p>{t("personalBody")}</p>
          <ul>
            <li>👉 {t("personalList1")}</li>
            <li>👉 {t("personalList2")}</li>
          </ul>
          <h3>{t("nonPersonalTitle")}</h3>
          <p>{t("nonPersonalBody")}</p>
          <h2>{t("usageTitle")}</h2>
          <p>{t("usageBody")}</p>
          <ul>
            <li>👉 {t("usageList1")}</li>
            <li>👉 {t("usageList2")}</li>
          </ul>
          <p>{t("usageNote")}</p>
          <h2>{t("sharingTitle")}</h2>
          <p>{t("sharingBody")}</p>
          <h2>{t("cookiesTitle")}</h2>
          <p>{t("cookiesBody")}</p>
          <h2>{t("retentionTitle")}</h2>
          <p>{t("retentionBody")}</p>
          <h2>{t("rightsTitle")}</h2>
          <p>{t("rightsBody")}</p>
          <ul>
            <li>👉 {t("rightsList1")}</li>
            <li>👉 {t("rightsList2")}</li>
          </ul>
          <h2>{t("changesTitle")}</h2>
          <p>{t("changesBody")}</p>
          <h2>{t("contactTitle")}</h2>
          <p>{t("contactBody")}</p>
          <a
            href={`mailto:${t("contactEmail")}`}
            target="_blank"
            rel="nofollow"
            aria-label="Send me an email">
            <span>{t("contactEmail")}</span>
          </a>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Privacy;
