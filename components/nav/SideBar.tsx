import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.scss";
import Link from "next/link";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <div style={{ background: "var(--background-dark)" }}>
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}>
        <Link href="/" className={styles.logo}>
          FV<span>.</span>
        </Link>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "about" ? styles.selected : ""
            }`}
            href="/#about"
            onClick={() => {
              setSelected("about");
            }}>
            About
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "projects" ? styles.selected : ""
            }`}
            href="/#projects"
            onClick={() => setSelected("projects")}>
            Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "experience" ? styles.selected : ""
            }`}
            href="/#experience"
            onClick={() => setSelected("experience")}>
            Exp.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "certification" ? styles.selected : ""
            }`}
            href="/#certification"
            onClick={() => setSelected("certification")}>
            Certif.
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Link
            className={`${styles.sideBarLink} ${
              selected === "contact" ? styles.selected : ""
            }`}
            href="/#contact"
            onClick={() => setSelected("contact")}>
            Contact
          </Link>
        </motion.div>

        


      </motion.nav>
    </div>
  );
};
