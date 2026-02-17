import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>
          For partnerships, investor discussions, or farmer enquiries,
          reach out to us through the following channels.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className={styles.contactSection}>

        <div className={styles.contactCard}>
          <h3>Email</h3>
          <p>
            <a href="krisivahana2909@gmail.com">
              krisivahana2909@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.contactCard}>
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/company/krisi-vahana"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/company/krisi-vahana/
            </a>
          </p>
        </div>

        <div className={styles.contactCard}>
          <h3>Social Media</h3>
          <p>
            <a href="https://x.com/KrisiVahana" target="_blank" rel="noopener noreferrer">
              https://x.com/KrisiVahana
            </a>
          </p>
        </div>

      </section>

    </div>
  );
}
