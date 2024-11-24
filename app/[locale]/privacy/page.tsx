"use client";
import { SideBar } from "@/components/nav/SideBar";
import { Footer } from "@/components/footer/Footer";
import styles from "@/components/utils/home.module.scss";
import { SectionHeader } from "@/components/utils/SectionHeader";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main>
          <section className={styles.legal}>
            <SectionHeader title="Privacy" dir="r" />
            <p>
              <strong>Effective Date:</strong> December 1, 2024
            </p>
            <h2>Introduction</h2>
            <p>
              Welcome to{" "}
              <a
                href="https://fvukelic.com"
                target="_blank"
                rel="nofollow"
                aria-label="Send me an email">
                <span>fvukelic.com</span>
              </a>
            </p>
            <p>
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you
              visit our website,{" "}
              <a
                href="https://fvukelic.com"
                target="_blank"
                rel="nofollow"
                aria-label="Send me an email">
                <span>fvukelic.com</span>
              </a>
              . Please read this policy carefully to understand our practices
              regarding your personal data and how we handle it.
            </p>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We do not collect personal information unless you choose to
              contact us. If you send us an email, we may collect the following
              information:
            </p>
            <ul>
              <li>👉 Your email address</li>
              <li>👉 Any other details you include in your email</li>
            </ul>
            <h3>Non-Personal Information</h3>
            <p>
              We do not automatically collect non-personal information such as
              IP addresses, browser details, or usage data.
            </p>
            <h2>How We Use Your Information</h2>
            <p>
              If you contact us via email, we use the information you provide
              solely to:
            </p>
            <ul>
              <li>👉 Respond to your inquiries.</li>
              <li>👉 Provide any requested assistance or information.</li>
            </ul>
            <p>
              We do not use your information for marketing purposes or share it
              with third parties.
            </p>
            <h2>Sharing Your Information</h2>
            <p>
              We do not sell, rent, or share your personal data with any third
              parties. Your information is used exclusively for responding to
              your inquiries.
            </p>
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We do not use cookies or other tracking technologies on our
              website.
            </p>
            <h2>Data Retention</h2>
            <p>
              We retain the information you provide in your emails only as long
              as necessary to respond to your inquiries. Once the information is
              no longer needed, it is securely deleted.
            </p>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                👉 Request access to any information you have provided to us.
              </li>
              <li>
                👉 Request the deletion of your information from our records.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at [Your Email
              Address].
            </p>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated revision date.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our practices, please contact us at:
            </p>
            <a
              href="mailto:fvukelic@proton.me"
              target="_blank"
              rel="nofollow"
              aria-label="Send me an email">
              <span>fvukelic@proton.me</span>
            </a>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
};

export default Home;
