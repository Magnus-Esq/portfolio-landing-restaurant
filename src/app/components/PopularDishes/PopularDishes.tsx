import React from 'react';
import styles from './PopularDishes.module.css';

const PopularDishes = () => {
  const dishes = [
    {
      id: 1,
      image: '../img/greece-salad.png',
      name: 'Greek Salad',
      description: 'Aliquet egestas gravida orci nulla<br />lacus suspendisse.',
      alt: 'Greek Salad'
    },
    {
      id: 2,
      image: '../img/spicy-seafood.png',
      name: 'Spicy Seafood',
      description: 'Morbi aenean congue leo sit<br />ornare proin dumper a eget felis.',
      alt: 'Spicy Seafood'
    },
    {
      id: 3,
      image: '../img/pepperoni.png',
      name: 'Pizza Pepperoni',
      description: 'A libero purus faucibus massa<br />faucibus.',
      alt: 'Pizza Pepperoni'
    },
    {
      id: 4,
      image: '../img/tuna-salad.png',
      name: 'Tuna Salad',
      description: 'Vel ullamcorperorbi aenean<br />congue leo sit ornare proin.',
      alt: 'Tuna Salad'
    }
  ];

  return (
    <section className={styles.popularDishes}>
      <div className={styles.textBlock}>
        <img 
          src="../img/restaurant.svg" 
          className={styles.restaurantIcon} 
          alt="Restaurant icon" 
        />
        <h4 className={styles.heading}>Most popular dishes</h4>
        <p className={styles.description}>
          Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus id...
        </p>
      </div>
      <div className={styles.dishesContainer}>
        {dishes.map((dish) => (
          <div key={dish.id} className={styles.dishCard}>
            <img 
              src={dish.image} 
              className={styles.dishImage} 
              alt={dish.alt} 
            />
            <h4 className={styles.dishName}>{dish.name}</h4>
            <p 
              className={styles.dishDescription} 
              dangerouslySetInnerHTML={{ __html: dish.description }} 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;