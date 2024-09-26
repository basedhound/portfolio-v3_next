import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./navbar.module.scss";
import { Socials } from "./Socials";
import { Switch } from "./Switch";
import { ResumeButton } from "./ResumeButton";

export const Navbar = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.headingLeft}>
        <Socials />
        <Switch />
      </div>
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
            <ResumeButton>CV</ResumeButton>
          </Link>
        </motion.span>
      </div>
    </header>
  );
};
