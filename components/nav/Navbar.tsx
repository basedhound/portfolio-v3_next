import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./navbar.module.scss";
import { Socials } from "./Socials";
import { AiOutlineDownload } from "react-icons/ai";

export const Navbar = () => {
  // Switch
  const currentPath = usePathname();
  const newPath = currentPath.includes("/fr")
    ? currentPath.replace("/fr", "/en")
    : currentPath.replace("/", "/fr");

  return (
    <header className={styles.heading}>
      {/* <- left */}
      <div className={styles.headingLeft}>
        <Socials />

        {/* Switch */}
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <Link href={newPath} className={styles.switch}>
            {currentPath.includes("/fr") ? "FR" : "EN"}
          </Link>
        </motion.span>
      </div>

      {/* right -> */}
      <div className={styles.headingButtons}>
        <motion.span
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}>
          <Link
            href="https://cvdesignr.com/p/63692d868d588"
            target="_blank"
            rel="nofollow"
            title="Resume">
            <button className={styles.outlineButton}>
              CV
              <AiOutlineDownload size="2.4rem" />
            </button>
          </Link>
        </motion.span>
      </div>
    </header>
  );
};
