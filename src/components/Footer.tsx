import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Top Section */}
        <div className={styles.footerTop}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerLogo}>AXE Global</h3>
            <p className={styles.footerDescription}>
              Building the next generation of performance D2C brands through proven Direct Response marketing and eCommerce infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#brands">Our Brands</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><a href="#insights">Insights</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              <a href="#linkedin" className={styles.socialLink}>LinkedIn</a>
              <a href="#twitter" className={styles.socialLink}>Twitter</a>
              <a href="#instagram" className={styles.socialLink}>Instagram</a>
            </div>
            <p className={styles.contactEmail}>
              <a href="mailto:hello@axeglobal.com">hello@axeglobal.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AXE Global. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;