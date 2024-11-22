import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      
      <ul className={styles.footer}>
        <li>
          <Link href="/">Legal Notice</Link>
        </li>
        <li>
          <Link href="/">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/">Cookie Policy</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
