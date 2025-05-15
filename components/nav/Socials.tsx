import styles from "./socials.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
  // AiFillInstagram,
  // AiFillFacebook,
} from "react-icons/ai";
import { motion } from "framer-motion";

export const Socials = () => {
  return (
    <div className={styles.links}>
      {/* LINKEDIN */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}>
        <a
          href="https://www.linkedin.com/in/fvukelic"
          target="_blank"
          rel="nofollow"
          title="LinkedIn"
          aria-label="Contact me on LinkedIn">
          <AiFillLinkedin size="2.4rem" />
        </a>
      </motion.span>

      {/* GITHUB */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <a
          href="https://github.com/basedhound"
          target="_blank"
          rel="nofollow"
          title="GitHub"
          aria-label="View my GitHub Profile">
          <AiFillGithub size="2.4rem" />
        </a>
      </motion.span>

      {/* WHATSAPP */}
      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <a
          href="https://api.whatsapp.com/send?phone="
          target="_blank"
          rel="nofollow"
          title="WhatsApp"
          aria-label="Contact me on WhatApp">
          <AiOutlineWhatsApp size="2.4rem" />
        </a>
      </motion.span> */}

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <a
          href="mailto:fvukelic@proton.me"
          target="_blank"
          rel="nofollow"
          title="Email"
          aria-label="Send me an Email">
          <AiOutlineMail size="2.4rem" />
        </a>
      </motion.span>
    </div>
  );
};
