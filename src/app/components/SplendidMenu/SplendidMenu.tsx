import React from 'react';
import styles from './SplendidMenu.module.css';

const SplendidMenu = () => {
  return (
    <section className={styles.splendidMenu}>
      <div className={styles.splendidMenuTextblock}>
        <img 
          src="../img/restaurant.svg" 
          className={styles.restaurantIcon} 
          alt="Restaurant icon"
        />
        <h4 className={styles.splendidMenuHeading}>Explore our splendid menu</h4>
      </div>
      <div className={styles.splendidMenuCards}>
        <div className={styles.splendidMenuCard1}>
          <h4 className={styles.splendidMenuCardHeading}>Sweet Desserts</h4>
          <img 
            src="../img/view-menu-button.svg" 
            className={styles.viewMenuButton} 
            alt="View menu"
          />
        </div>
        <div className={styles.splendidMenuCard2}>
          <h4 className={styles.splendidMenuCardHeading}>Amazing Coffee</h4>
          <img 
            src="../img/view-menu-button.svg" 
            className={styles.viewMenuButton} 
            alt="View menu"
          />
        </div>
        <div className={styles.splendidMenuCard3}>
          <h4 className={styles.splendidMenuCardHeading}>Best Breakfasts</h4>
          <img 
            src="../img/view-menu-button.svg" 
            className={styles.viewMenuButton} 
            alt="View menu"
          />
        </div>
        <div className={styles.splendidMenuCard4}>
          <h4 className={styles.splendidMenuCardHeading}>Great Cocktails</h4>
          <img 
            src="../img/view-menu-button.svg" 
            className={styles.viewMenuButton} 
            alt="View menu"
          />
        </div>
      </div>
    </section>
  );
};

export default SplendidMenu;