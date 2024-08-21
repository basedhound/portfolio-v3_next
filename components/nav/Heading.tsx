import { motion } from "framer-motion";
import styles from "./heading.module.scss";
import { MyLinks } from "./MyLinks";
import { Switch } from "./Switch";
import { OutlineButton } from "./OutlineButton";


export const Heading = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.headingLeft}>
        <MyLinks />
        <Switch />
      </div>
      <div className={styles.headingButtons}>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <OutlineButton onClick={() => window.open("docs/resume.pdf")}>
          CV
        </OutlineButton>
      </motion.span>


      </div>
    </header>
  );
};
