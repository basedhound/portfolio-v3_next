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
          <Link href="/privacy" aria-label="Privacy Policy" prefetch={false}>{t("privacy")}</Link>
        </li>
        <li>
          <Link href="/legal-notice" aria-label="Legal Notice" prefetch={false}>{t("legalNotice")}</Link>
        </li>
      </ul>
    </footer>
  );
};
