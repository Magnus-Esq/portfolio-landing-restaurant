import React from 'react';
import styles from './ChefsSecret.module.css';

const ChefsSecret = () => {
  return (
    <section className={styles.chefsSecret}>
      <div className={styles.chefsContainer}>
        <img src="../img/play-button.svg" className={styles.playButton} alt="Play button" />
        <h4 className={styles.chefsHeading}>Our chef's secrets</h4>
        <p className={styles.chefsText}>
          Lectus sit a quam viverra ridiculus scelerisque dapibus sed. Id nisl parturient adipiscing<br />
          sit lectus tempor. Sagittis sed aliquam laoreet dignissim.
        </p>
      </div>
    </section>
  );
};

export default ChefsSecret;