import { MouseEventHandler } from "react";
import { AiOutlineDownload} from "react-icons/ai";
import styles from "./resumebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ResumeButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      {children}
      <AiOutlineDownload size="2.4rem" />
    </button>
  );
};
