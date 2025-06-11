import React from 'react';
import styles from './ClientSays.module.css';

const ClientSays = () => {
  return (
    <section className={styles.clientsSays}>
      <div className={styles.clientSaysHeadingBox}>
        <img src="../img/quotes.svg" className={styles.quotesIcon} alt="Quotes icon" />
        <h4 className={styles.clientsSaysHeading}>What our clients say about us</h4>
      </div>
      <div className={styles.clientSaysReviewsBox}>
        <div className={styles.clientSaysReview}>
          <img src="./img/avatars.svg" className={styles.clientSaysAvatars} alt="Client avatar" />
          <p className={styles.clientSaysText}>
            Eu id cras morbi consectetur viverra eleifend pellentesque dui. Senectus commodo morbi aliquet eget quis<br />
            gravida. Ut vel curabitur ut a id tempor. Viverra non commodo vel ac aliquet. Ac euismod tincidunt sed quam<br />
            pharetra laoreet nisl mollis vitae.
          </p>
        </div>
        <div className={styles.clientSaysReviewAuthor}>
          <h4 className={styles.clientSaysReviewAuthorName}>Dale Petersen</h4>
          <p className={styles.clientSaysReviewAuthorRole}>Guest</p>
        </div>
        <img src="./img/rewiew-list.svg" className={styles.reviewList} alt="Review indicators" />
      </div>
    </section>
  );
};

export default ClientSays;