"use client";
import { SideBar } from "@/components/nav/SideBar";
import { Footer } from "@/components/footer/Footer";
import styles from "@/components/utils/home.module.scss";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/nav/Navbar";

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
              <strong>{t("headquarters")}</strong> 25 rue Guillaume Lekeu, 49100
              Angers, France
            </p>
            <p>
              <strong>{t("registrationNumber")}</strong> 921995775 (SIREN)
            </p>
            <p>
              <strong>{t("email")}</strong>{" "}
              <a
                href="mailto:fvukelic@proton.me"
                target="_blank"
                rel="nofollow"
                aria-label="Send me an email"
                >
                fvukelic@proton.me
              </a>
            </p>
            {/* <p>
              <strong>{t("phone")}</strong>{" "}
              <a
                href="https://api.whatsapp.com/send?phone="
                target="_blank"
                rel="nofollow"
                aria-label="Contact me on WhatsApp">
                
              </a>{" "}
              (WhatsApp)
            </p> */}
            <h2>{t("hostingTitle")}</h2>
            <p>
              <strong>{t("hostingProvider")}</strong> Vercel
            </p>
            <p>
              <strong>{t("hostingAddress")}</strong> 440 N Barranca Ave #4133,
              Covina, CA 91723
            </p>
            <p>
              <strong>{t("hostingPhone")}</strong> (559) 288-7060
            </p>
            <p>
              <strong>{t("hostingEmail")}</strong>{" "}
              <a href="mailto:dmca@vercel.com" target="_blank" rel="nofollow" aria-label="Contact Vercel by Email">
                dmca@vercel.com
              </a>
            </p>
            <h2>{t("intellectualTitle")}</h2>
            <p>{t("intellectualBody")}</p>
            <h2>{t("responsibilityTitle")}</h2>
            <p>{t("responsibilityBody1")}</p>
            <p>{t("responsibilityBody2")}</p>
              <h2>{t("internationalTitle")}</h2>
              <p>{t("internationalBody")}</p>
            <h2>{t("contactTitle")}</h2>
            <p>
              {t("contactBody")}{" "}
            </p>
              <a
                href="mailto:fvukelic@proton.me"
                target="_blank"
                rel="nofollow"
                aria-label="Send me an Email"
                >
                fvukelic@proton.me
              </a>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default LegalNotice;
