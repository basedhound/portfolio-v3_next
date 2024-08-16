import { useTranslations } from "next-intl";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { MyLinks } from "../nav/MyLinks";

export const Contact = () => {
  const t = useTranslations("Contact");

  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
          {t("section")}<span>.</span>
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
          <Link
            href="mailto:franck.vukelic@gmail.com"
            className={styles.contactEmail}>
            <AiFillMail size="2.4rem" />
            <span>franck.vukelic@gmail.com</span>
          </Link>
        </Reveal>
        <Reveal width="100%">
          <MyLinks />
        </Reveal>
      </div>
    </section>
  );
};
