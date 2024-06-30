import { MouseEventHandler } from "react";
import { AiOutlineDownload} from "react-icons/ai";
import styles from "./outlinebutton.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const OutlineButton = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.outlineButton}>
      {children}
      <AiOutlineDownload size="2.4rem" />
    </button>
  );
};
