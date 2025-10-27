import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li>
                <button onClick={() => scrollToSection('social-proof')} className={styles.linkButton}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className={styles.linkButton}>
                  Our Approach
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className={styles.linkButton}>
                  Infrastructure
                </button>
              </li>
              <li className={styles.comingSoonItem}>
                <div className={styles.comingSoonBadge}>Coming Soon</div>
                <span className={styles.disabledLink}>Careers</span>
              </li>
            </ul>
          </div>

          {/* Brands Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Brands</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.comingSoonItem}>
                <div className={styles.comingSoonBadge}>Coming Soon</div>
                <span className={styles.disabledLink}>Brand Portfolio</span>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className={styles.linkButton}>
                  Launch Process
                </button>
              </li>
              <li className={styles.comingSoonItem}>
                <div className={styles.comingSoonBadge}>Coming Soon</div>
                <span className={styles.disabledLink}>Case Studies</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="mailto:info@axeglobal.com" className={styles.emailLink}>
                  Email: info@axeglobal.com
                </a>
              </li>
            </ul>
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