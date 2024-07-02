import styles from "./projectmodal.module.scss";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}>
        <Link href={projectLink}>
          <Image
            priority
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            width={0}
            height={0}
            sizes="100vw"
            className={styles.modalImage}
          />
        </Link>
        <div className={styles.modalContent}>
          <h4>{title}</h4>
          <div className={styles.modalTech}>{tech.join(" - ")}</div>
          <div className={styles.suppliedContent}>{modalContent}</div>
          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Links<span>.</span>
            </p>
            <div className={styles.spaceBetween}>
              <div className={styles.links}>
                <Link target="_blank" rel="nofollow" href={code}>
                  <AiFillGithub />
                  Code
                </Link>
                <Link target="_blank" rel="nofollow" href={projectLink}>
                  <AiOutlineExport />
                  Demo
                </Link>
              </div>
              <button
                className={styles.closeModalBtn}
                onClick={() => setIsOpen(false)}>
                <MdClose />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
