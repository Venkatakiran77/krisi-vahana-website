import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Contact Us</h1>
        <p>
          For partnerships, investor discussions, or farmer enquiries, reach out
          to us through the following channels.
        </p>
        <div className={styles.quickContact}>
          📞 <a href="tel:+917674038283">+91 7674038283</a>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <h3>Email</h3>
          <p>
            <a href="krisivahana2909@gmail.com">krisivahana2909@gmail.com</a>
          </p>
        </div>

        <div className={styles.contactCard}>
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/company/krisi-vahana"
              target="_blank"
              rel="noopener noreferrer">
              https://www.linkedin.com/company/krisi-vahana/
            </a>
          </p>
        </div>

        <div className={styles.contactCard}>
          <h3>Social Media</h3>
          <p>
            <a
              href="https://x.com/KrisiVahana"
              target="_blank"
              rel="noopener noreferrer">
              Follow us on X
            </a>
          </p>

          <p>
            <a
              href="https://www.instagram.com/krisi_vahana?igsh=MWpzOGJ2YnlwNDQ2eA%3D%3D"
              target="_blank"
              rel="noopener noreferrer">
              Follow us on Instagram
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
