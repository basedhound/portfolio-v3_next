import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/frankdev/"
              target="_blank"
              rel="nofollow"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link href="https://api.whatsapp.com/send?phone=33779134587" target="_blank" rel="nofollow">
              WhatsApp
            </Link>{" "}
            if that's more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:franck.vukelic@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>franck.vukelic@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
