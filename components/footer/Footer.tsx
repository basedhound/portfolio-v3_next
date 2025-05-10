import Link from "next/link";
import styles from "./footer.module.scss";
import { useTranslations } from "next-intl";
import { TransitionLink } from "../utils/TransitionLink";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <p>©{(new Date()).getFullYear()} {t("copyright")}</p>
      <ul>
        <li>
          <TransitionLink href="/privacy" aria-label="Privacy Policy">
            {t("privacy")}
          </TransitionLink>
        </li>
        <li>
          <TransitionLink href="/legal-notice" aria-label="Legal Notice">
            {t("legalNotice")}
          </TransitionLink>
        </li>
      </ul>
    </footer>
  );
};
