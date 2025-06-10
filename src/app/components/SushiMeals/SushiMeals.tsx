import React from 'react';
import styles from './SushiMeals.module.css';

const SushiMeals = () => {
  return (
    <section className={styles.sushiMeals}>
      <div className={styles.sushiMealsTextblock}>
        <img 
          src="../img/restaurant.svg" 
          className={styles.restaurantIcon} 
          alt="Restaurant icon" 
        />
        <h4 className={styles.sushiMealsHeading}>Most popular sushi meals</h4>
        <p className={styles.sushiMealsText}>
          Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus id...
        </p>
      </div>
      <div className={styles.sushiCards}>
        <div className={styles.sushiCardsGroup}>
          <div className={styles.sushiCard1}>
            <img 
              src="../img/sushi-uramaki.png" 
              className={styles.sushiUramaki} 
              alt="Uramaki sushi" 
            />
            <h4 className={styles.sushiCardHeading}>Uramaki sushi</h4>
            <p className={styles.sushiCardText}>
              Aliquet egestas gravida orci nulla lacus<br />suspendisse...
            </p>
          </div>
          <div className={styles.sushiCard2}>
            <img 
              src="../img/sushi-maki.png" 
              className={styles.sushiMaki} 
              alt="Maki sushi" 
            />
            <h4 className={styles.sushiCardHeading}>Maki Sushi</h4>
            <p className={styles.sushiCardText}>
              Vel ullamcorper ultrices volutpat enim<br />dignissim id purus.
            </p>
          </div>
        </div>
        <div className={styles.sushiCard3}>
          <img 
            src="../img/sushi-set.png" 
            className={styles.sushiSet} 
            alt="Samurai sushi set" 
          />
          <h4 className={styles.sushiCardHeading}>Sushi set "Samurai"</h4>
          <p className={styles.sushiCardText}>
            Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices<br />
            volutpat enim dignissim id purus. Urna quam massa urna...
          </p>
        </div>
      </div>
    </section>
  );
};

export default SushiMeals;