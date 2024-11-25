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
          <Link href="/privacy">{t("privacy")}</Link>
        </li>
        <li>
          <Link href="/legal-notice">{t("legalNotice")}</Link>
        </li>
      </ul>
    </footer>
  );
};
