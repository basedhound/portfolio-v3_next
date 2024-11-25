"use client";
import { SideBar } from "@/components/nav/SideBar";
import { Footer } from "@/components/footer/Footer";
import styles from "@/components/utils/home.module.scss";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { useTranslations } from "next-intl";

const LegalNotice = () => {
  const t = useTranslations("LegalNotice");

  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <section className={styles.legal}>
            <SectionHeader title={t("header")} dir="r" />
            <h2>{t("responsibleTitle")}</h2>
            <p>
              <strong>{t("companyName")}</strong> VUKELIC FRANCK
            </p>
            <p>
              <strong>{t("legalForm1")}</strong> {t("legalForm2")}
            </p>
            <p>
              <strong>{t("headquarters")}</strong> [Address]
            </p>
            <p>
              <strong>{t("registrationNumber")}</strong> [SIRET/SIREN]
            </p>
            <p>
              <strong>{t("capital")}</strong> [Share Capital, if applicable]
            </p>
            <p>
              <strong>{t("email")}</strong>{" "}
              <a href="mailto:[Your Email]" target="_blank" rel="nofollow">
                [Your Email]
              </a>
            </p>
            <p>
              <strong>{t("phone")}</strong> [Phone Number]
            </p>
            <h2>{t("hostingTitle")}</h2>
            <p>
              <strong>{t("hostingProvider")}</strong> [Hosting Provider Name]
            </p>
            <p>
              <strong>{t("hostingAddress")}</strong> [Address]
            </p>
            <p>
              <strong>{t("hostingPhone")}</strong> [Phone Number]
            </p>
            <h2>{t("intellectualTitle")}</h2>
            <p>{t("intellectualBody")}</p>
            <h2>{t("responsibilityTitle")}</h2>
            <p>{t("responsibilityBody1")}</p>
            <p>{t("responsibilityBody2")}</p>
            <h2>{t("contactTitle")}</h2>
            <p>
              {t("contactBody")}{" "}
              <a href="mailto:[Your Email]" target="_blank" rel="nofollow">
                [Your Email]
              </a>
            </p>
            <h2>{t("internationalTitle")}</h2>
            <p>{t("internationalBody")}</p>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default LegalNotice;
