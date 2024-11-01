import { useTranslations } from "next-intl";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail, AiFillCalendar } from "react-icons/ai";
import { Socials } from "../nav/Socials";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            {t("section")}
            <span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            {t("p1")}{" "}
            <a
              href="https://www.linkedin.com/in/frankdev/"
              target="_blank"
              rel="nofollow"
              aria-label="Contact me on LinkedIn">
              LinkedIn
            </a>{" "}
            &{" "}
            <a
              href="https://api.whatsapp.com/send?phone=33779134587"
              target="_blank"
              rel="nofollow"
              aria-label="Contact me on LinkedIn">
              WhatsApp
            </a>{" "}
            {t("p2")}
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactLinks}>
            <a
              className={styles.contactLink}
              href="mailto:fvukelic@proton.me"
              target="_blank"
              rel="nofollow"
              aria-label="Send me an email">
              <AiFillMail size="2.4rem" />
              <span>fvukelic@proton.me</span>
            </a>
            <a
              className={styles.contactLink}
              href="https://calendly.com/fvukelic/meeting"
              target="_blank"
              rel="nofollow"
              aria-label="Schedule a meeting with me on Calendly"
              >
              <AiFillCalendar size="2.4rem" />
              <span>{t("p3")}</span>
            </a>
          </div>
        </Reveal>
        <Reveal width="100%">
          <Socials />
        </Reveal>
      </div>
    </section>
  );
};
