import styles from "./heading.module.scss";
import { MyLinks } from "./MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <div className={styles.headingButtons}>
      <OutlineButton onClick={() => window.open("pdf/resume.pdf")}>
        CV
      </OutlineButton>
      </div>
    </header>
  );
};

