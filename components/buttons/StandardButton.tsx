import { MouseEventHandler } from "react";
import styles from "./standardbutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const StandardButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
};
