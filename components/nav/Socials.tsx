import styles from "./socials.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
  // AiFillInstagram,
  // AiFillFacebook,

} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const Socials = () => {
  return (
    <div className={styles.links}>
      {/* LINKEDIN */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}>
        <Link
        prefetch={false}
          href="https://www.linkedin.com/in/fvukelic"
          target="_blank"
          rel="nofollow"
          title="LinkedIn">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      {/* GITHUB */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Link
        prefetch={false}
          href="https://github.com/basedhound"
          target="_blank"
          rel="nofollow"
          title="GitHub">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      {/* WHATSAPP */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Link
        prefetch={false}
          href="https://api.whatsapp.com/send?phone=33779134587"
          target="_blank"
          rel="nofollow"
          title="WhatsApp">
          <AiOutlineWhatsApp size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <Link
        prefetch={false}
          href="mailto:fvukelic@proton.me"
          target="_blank"
          rel="nofollow"
          title="Email">
          <AiOutlineMail size="2.4rem" />
        </Link>
      </motion.span>

      {/* FACEBOOK */}
      {/*       <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <Link prefetch={false} href="https://m.me/fvukelic" target="_blank" rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span> */}

      {/* INSTAGRAM */}
      {/*       <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <Link prefetch={false} href="https://ig.me/m/frank.vkh" target="_blank" rel="nofollow">
          <AiFillInstagram size="2.4rem" />
        </Link>
      </motion.span> */}
    </div>
  );
};
