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
        <OutlineButton onClick={() => window.open("docs/resume.pdf")}>
          CV
        </OutlineButton>
      </div>
    </header>
  );
};
