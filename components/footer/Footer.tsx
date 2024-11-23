import Link from "next/link";
import styles from "./footer.module.scss";
import { useTranslations } from "next-intl";


const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer>
      
      <ul className={styles.footer}>
        <li>
          <Link href="/">{t("p1")}</Link>
        </li>
        <li>
          <Link href="/">{t("p2")}</Link>
        </li>
        <li>
          <Link href="/">{t("p3")}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
