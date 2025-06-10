import React from 'react';
import styles from './OrderOnline.module.css';

const OrderOnline = () => {
  return (
    <section className={styles.orderOnline}>
      <div className={styles.orderOnlineTextblock}>
        <img src="../img/restaurant.svg" className={styles.restaurantIcon} alt="Restaurant icon" />
        <h4 className={styles.orderOnlineHeading}>Order online</h4>
        <p className={styles.orderOnlineText}>Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat eni...</p>
      </div>
      <div className={styles.orderMenu}>
        <div className={styles.orderLeft}>
          <img src="./img/menu-header-salads.svg" className={styles.menuHeaderSalads} alt="Salads" />
          
          <div className={styles.orderMenuFood}>
            <img src="./img/greece-salad.png" className={styles.avatarFood1} alt="Greek Salad" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Greek Salad</h4>
                <p className={styles.foodCost}>$6</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/tuna-salad.png" className={styles.avatarFood2} alt="Summer Salad" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Summer Salad</h4>
                <p className={styles.foodCost}>$10</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <img src="./img/menu-header-main.svg" className={styles.menuHeaderMain} alt="Main dishes" />

          <div className={styles.orderMenuFood}>
            <img src="./img/steak.png" className={styles.avatarFood3} alt="Morbi Aenean Steak" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Morbi Aenean Steak</h4>
                <p className={styles.foodCost}>$15</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/volutpat.png" className={styles.avatarFood4} alt="Volutpat Special" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Volutpat Special</h4>
                <p className={styles.foodCost}>$17</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/volutpat-pasta.png" className={styles.avatarFood5} alt="Ultrices Volutpat Pasta" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Ultrices Volutpat Pasta</h4>
                <p className={styles.foodCost}>$12</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>
        </div>
        <div className={styles.orderRight}>
          <img src="./img/menu-header-pizzas.svg" className={styles.menuHeaderPizzas} alt="Pizzas" />
          
          <div className={styles.orderMenuFood}>
            <img src="./img/mexican.png" className={styles.avatarFood6} alt="Mexican Pizza" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Mexican Pizza</h4>
                <p className={styles.foodCost}>$10</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/proscuitto.png" className={styles.avatarFood7} alt="Prosciutto Pizza" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Prosciutto Pizza</h4>
                <p className={styles.foodCost}>$12</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/pepperoni.png" className={styles.avatarFood8} alt="Pepperoni Pizza" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Pepperoni Pizza</h4>
                <p className={styles.foodCost}>$12</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/viennese.png" className={styles.avatarFood9} alt="Viennese Pizza" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Viennese Pizza</h4>
                <p className={styles.foodCost}>$14</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/marinara.png" className={styles.avatarFood10} alt="Marinara Pizza" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Marinara Pizza</h4>
                <p className={styles.foodCost}>$16</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>

          <div className={styles.orderMenuFood}>
            <img src="./img/napoletana.png" className={styles.avatarFood11} alt="Napoletana Pizza" />
            <div className={styles.orderMenuFoodText}>
              <div className={styles.foodHeaderContainer}>
                <h4 className={styles.foodHeader}>Napoletana Pizza</h4>
                <p className={styles.foodCost}>$22</p>
              </div>
              <p className={styles.foodText}>Aliquet egestas, gravida, orci nulla, lacus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;