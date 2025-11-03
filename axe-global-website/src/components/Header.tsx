import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <img src="/images/logo.svg" alt="AXE Global" />
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('home')} className={styles.navLink}>Home</button>
          <button onClick={() => scrollToSection('social-proof')} className={styles.navLink}>Team</button>
          <button onClick={() => scrollToSection('process')} className={styles.navLink}>Process</button>
          <button onClick={() => scrollToSection('services')} className={styles.navLink}>Infrastructure</button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button>
        </nav>

        {/* CTA Button */}
        <div className={styles.headerCta}>
          <button onClick={() => scrollToSection('contact')} className={styles.ctaButton}>Get in touch</button>
        </div>

        {/* Mobile Menu Toggle (Placeholder) */}
        <button className={styles.mobileMenuToggle}>
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;