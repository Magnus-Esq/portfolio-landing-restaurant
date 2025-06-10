import React from 'react';
import styles from './BestPlace.module.css';

const BestPlace = () => {
  return (
    <section className={styles.bestPlace}>
      <div className={styles.bestPlacePics}>
        <div className={styles.bestPlacePic1}></div>
        <div className={styles.bestPlacePic2}></div>
      </div>
      <div className={styles.bestPlaceTextbox}>
        <img 
          src="../img/restaurant-right.svg" 
          className={styles.bestPlaceIcon} 
          alt="Restaurant icon"
        />
        <h4 className={styles.bestPlaceHeading}>
          Best place to find your<br />food love
        </h4>
        <p className={styles.bestPlaceText}>
          Aliquet egestas gravida orci nulla lacus suspendisse. Vel<br />
          ullamcorper ultrices volutpat enim dignissim id purus. Urna quam<br />
          massa urna dolor enim dui lectus id...
        </p>
        <img 
          src="../img/reservation-button.svg" 
          className={styles.bestPlaceButton} 
          alt="Make reservation"
        />
      </div>
    </section>
  );
};

export default BestPlace;