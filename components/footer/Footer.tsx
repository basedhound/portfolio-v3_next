import Link from "next/link";
import styles from "./footer.module.scss";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <p>{t("copyright")}</p>
      <ul>
        <li>
          <a href="/privacy" aria-label="Privacy Policy">{t("privacy")}</a>
        </li>
        <li>
          <a href="/legal-notice" aria-label="Legal Notice">{t("legalNotice")}</a>
        </li>
      </ul>
    </footer>
  );
};
