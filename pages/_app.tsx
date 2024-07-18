import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
// import { SideBar } from "@/components/nav/SideBar";
// import styles from "@/components/home.module.scss";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={poppins.className}>
      {/* <div className={styles.home}> */}
        {/* <SideBar /> */}
        <Component {...pageProps} />
      {/* </div> */}
    </div>
  );
}
