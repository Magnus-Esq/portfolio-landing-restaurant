import React from 'react';
import styles from './Promotions.module.css';

const Promotions = () => {
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: './img/image-1.png',
      className: styles.galleryItem1,
      alt: 'Promotion 1'
    },
    {
      id: 2,
      type: 'image',
      src: './img/image-2.png',
      className: styles.galleryItem2,
      alt: 'Promotion 2'
    },
    {
      id: 3,
      type: 'image',
      src: './img/image-3.png',
      className: styles.galleryItem3,
      alt: 'Promotion 3'
    },
    {
      id: 4,
      type: 'image',
      src: './img/image-4.png',
      className: styles.galleryItem4,
      alt: 'Promotion 4'
    },
    {
      id: 5,
      type: 'image',
      src: './img/image-5.png',
      className: styles.galleryItem5,
      alt: 'Promotion 5'
    },
    {
      id: 6,
      type: 'image',
      src: './img/image-6.png',
      className: styles.galleryItem6,
      alt: 'Promotion 6'
    },
    {
      id: 11,
      type: 'content',
      className: `${styles.galleryItem11} ${styles.selfEnd}`,
      content: (
        <>
          <img src="./img/restaurant-right.svg" className={styles.restaurantRightButton} alt="Restaurant icon" />
          <h4 className={styles.offersHeadingLeft}>New offers and promotions</h4>
          <img src="./img/learn-button.svg" className={styles.learnButtonLeft} alt="Learn more" />
        </>
      )
    },
    {
      id: 33,
      type: 'content',
      className: styles.galleryItem33,
      content: (
        <>
          <img src="./img/restaurant.svg" className={styles.restaurantButton} alt="Restaurant icon" />
          <h4 className={styles.offersHeading}>View Full Menu</h4>
          <img src="./img/learn-button.svg" className={styles.learnButton} alt="Learn more" />
        </>
      )
    },
    {
      id: 44,
      type: 'content',
      className: styles.galleryItem44,
      content: (
        <>
          <img src="./img/restaurant.svg" className={styles.restaurantButton} alt="Restaurant icon" />
          <h4 className={styles.offersHeading}>Daily Specials</h4>
          <img src="./img/learn-button.svg" className={styles.learnButton} alt="Learn more" />
        </>
      )
    },
    {
      id: 66,
      type: 'content',
      className: `${styles.galleryItem66} ${styles.selfEnd}`,
      content: (
        <>
          <img src="./img/restaurant.svg" className={styles.restaurantButton} alt="Restaurant icon" />
          <h4 className={styles.offersHeading}>Wine list</h4>
          <img src="./img/learn-button.svg" className={styles.learnButton} alt="Learn more" />
        </>
      )
    }
  ];

  return (
    <section className={styles.promotions}>
      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          {galleryItems.map((item) => (
            <div key={item.id} className={item.className}>
              {item.type === 'image' ? (
                <img src={item.src} className={styles.galleryImg} alt={item.alt} />
              ) : (
                item.content
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;