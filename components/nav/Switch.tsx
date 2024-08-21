import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import styles from "./switch.module.scss";

export const Switch = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <motion.span
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}>
      <Link
        href={
          currentPath.includes("/en")
            ? currentPath.replace("/en", "/fr")
            : currentPath.replace("/fr", "/en")
        }
        className={styles.switch}>
        {/* Button */}
        {currentPath.includes("/fr") ? "FR" : "EN"}
      </Link>
    </motion.span>
  );
};
