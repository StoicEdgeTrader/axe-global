import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Main Headline */}
        <h1 className={styles.headline}>
          Building the next generation of{' '}
          <span className={styles.gradientText}>
            performance D2C brands
          </span>
          .
        </h1>

        {/* Subheadline */}
        <div className={styles.subheadline}>
          <p>Launching profitably. Scaling systematically.</p>
        </div>

        {/* Description */}
        <p className={styles.description}>
          AXE Global is a D2C brand incubator creating profitable health & wellness brands
          from the ground up — powered by Direct Response marketing and proven eCommerce infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaContainer}>
          <button className={`${styles.ctaButton} ${styles.primaryButton}`}>
            Partner with us
          </button>
          <button className={`${styles.ctaButton} ${styles.secondaryButton}`}>
            View our approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;