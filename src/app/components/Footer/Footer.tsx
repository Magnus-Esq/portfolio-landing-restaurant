import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="../img/logo.svg" className={styles.footerLogo} alt="Restaurant logo" />
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Opening Hours</h4>
          <p className={styles.footerText}>Monday – Sunday<br />10AM – 10PM</p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Book a Table</h4>
          <p className={styles.footerText}>
            Urna quam massa urna dolor enim dui<br />
            Tristique dignissim pharetra feugiat<br />
            Vivamus libero feugiat
          </p>
          <p className={styles.footerNumber}>(525) 847-0411</p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Our Address</h4>
          <p className={styles.footerText}>
            8911 Tanglewood Ave.<br />
            Capitol Heights,<br />
            MD 20743
          </p>
        </div>
      </div>
      <p className={styles.footerCopyright}>© Copyright Restaurant 2025. Design by Nikita Slesarenko.</p>
    </footer>
  );
};

export default Footer;