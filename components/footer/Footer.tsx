import Link from "next/link";
import styles from "./footer.module.scss";
import { useTranslations } from "next-intl";


export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer>
      
      <ul className={styles.footer}>
        <li>
          <Link href="/privacy">{t("p1")}</Link>
        </li>
        <li>
          <Link href="/cookies">{t("p2")}</Link>
        </li>
        <li>
          <Link href="/legal-notice">{t("p3")}</Link>
        </li>
      </ul>
    </footer>
  );
};

