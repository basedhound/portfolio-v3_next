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
          title="LinkedIn">
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
          title="GitHub">
          <AiFillGithub size="2.4rem" />
        </a>
      </motion.span>

      {/* WHATSAPP */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <a
          href="https://api.whatsapp.com/send?phone=33779134587"
          target="_blank"
          rel="nofollow"
          title="WhatsApp">
          <AiOutlineWhatsApp size="2.4rem" />
        </a>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <a
          href="mailto:fvukelic@proton.me"
          target="_blank"
          rel="nofollow"
          title="Email">
          <AiOutlineMail size="2.4rem" />
        </a>
      </motion.span>

      {/* FACEBOOK */}
      {/*       <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <a href="https://m.me/fvukelic" target="_blank" rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </a>
      </motion.span> */}

      {/* INSTAGRAM */}
      {/*       <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <a href="https://ig.me/m/frank.vkh" target="_blank" rel="nofollow">
          <AiFillInstagram size="2.4rem" />
        </a>
      </motion.span> */}
    </div>
  );
};
