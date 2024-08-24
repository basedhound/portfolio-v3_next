import Image from "next/image";
import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { Modal } from "../showcase/Modal";
import styles from "./gallery.module.scss";

interface Props {
  modal: JSX.Element;
  link: string;
  img: string;
  tech: string[];
  title: string;
  code: string;
}

export const GalleryItem = ({ modal, link, img, title, code, tech }: Props) => {
  // Image Animation
  const [hovered, setHovered] = useState(false);
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  // Else
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Reveal Animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Body Scroll Lock
  // https://www.jayfreestone.com/writing/locking-body-scroll-ios/
  // Try : cleaner way -> conditional CSS using global state (context)
  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.itemCover}>
          <Image
            priority
            src={img}
            alt={`An image of the ${title} project.`}
            width={1000}
            height={0}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.itemCopy}>
          <Reveal width="100%">
            <div className={styles.itemTitle}>
              <h4>{title}</h4>
              <div className={styles.itemTitleLine} />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </Link>

              <Link href={link} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.itemTech}>{tech.join(" - ")}</div>
          </Reveal>
        </div>
      </motion.div>
      <Modal
        modal={modal}
        link={link}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        img={img}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
