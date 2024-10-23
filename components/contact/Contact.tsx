import { useTranslations } from "next-intl";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail, AiFillCalendar } from "react-icons/ai";
import Link from "next/link";
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
            <Link
              href="https://www.linkedin.com/in/frankdev/"
              target="_blank"
              rel="nofollow">
              LinkedIn
            </Link>{" "}
            &{" "}
            <Link
              href="https://api.whatsapp.com/send?phone=33779134587"
              target="_blank"
              rel="nofollow">
              WhatsApp
            </Link>{" "}
            {t("p2")}
          </p>
        </Reveal>
        <Reveal width="100%">
        <div className={styles.contactLinks}>
          <Link
          prefetch={false}
            href="mailto:fvukelic@proton.me"
            target="_blank"
            rel="nofollow"
            className={styles.contactLink}>
            <AiFillMail size="2.4rem" />
            <span>fvukelic@proton.me</span>
          </Link>
          <Link
          prefetch={false}
            href="https://calendly.com/fvukelic/meeting"
            target="_blank"
            rel="nofollow"
            className={styles.contactLink}>
            <AiFillCalendar size="2.4rem" />
            <span>{t("p3")}</span>
          </Link>
        </div>
        </Reveal>
        <Reveal width="100%">
          <Socials />
        </Reveal>
      </div>
    </section>
  );
};
