import styles from "./mylinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      {/* WHATSAPP */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}>
        <Link
          href="https://api.whatsapp.com/send?phone=33779134587"
          target="_blank"
          rel="nofollow"
          title="WhatsApp">
          <AiOutlineWhatsApp size="2.4rem" />
        </Link>
      </motion.span>

      {/* GITHUB */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Link
          href="https://github.com/basedhound"
          target="_blank"
          rel="nofollow"
          title="GitHub">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      {/* LINKEDIN */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}>
        <Link
          href="https://www.linkedin.com/in/frankdev/"
          target="_blank"
          rel="nofollow"
          title="LinkedIn">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      {/* FACEBOOK */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Link
          href="https://m.me/frank.vkc"
          target="_blank"
          rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span>

           {/* INSTAGRAM */}
           <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Link
          href="https://ig.me/m/frank.vkc"
          target="_blank"
          rel="nofollow">
          <AiFillInstagram size="2.4rem" />
        </Link>
      </motion.span>


    </div>
  );
};
