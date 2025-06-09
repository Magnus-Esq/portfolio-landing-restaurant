// app/page.tsx
'use client';
import React, { useState } from 'react';

export default function Home() {
  
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    persons: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Add logic here for backend submission
  };

  return (
    <main className="font-inter text-gray-800">
      {/* Hero */}     
      <section className="hero">
        <div className="hero-header flex items-end justify-between">
          <img src="../img/logo.svg" className="header-logo"></img>
          <div className="hero-nav flex items-start justify-between">
            <p className="header-text">Home</p>
            <p className="header-text">Menu</p>
            <p className="header-text">About us</p>
            <p className="header-text">Contact us</p>
          </div>
        </div>
        <div className="hero-main flex items-center justify-between">
          <div className="hero-main-left">
            <h4 className="hero-main-heading">Best place to find your food love</h4>
            <p className="hero-main-text">Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna<br />dolor enim dui lectus idristique dignissim pharetra </p>
            <div className="hero-buttons flex gap-8">
              <img src="../img/main-menu-button.svg"></img>
              <img src="../img/seasonal-menu-button.svg"></img>
            </div>
          </div>
          <div className="hero-main-right">
            <div className="reservation-box">
              <p className="reservation-label">RESERVATION</p>
              <h2 className="reservation-title">Book a table</h2>
              <form onSubmit={handleSubmit}>
                <label>Your name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />

                <label>Select date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required />

                <label>Select time</label>
                <input type="time" name="time" value={form.time} onChange={handleChange} required />

                <label>Number of persons</label>
                <select name="persons" value={form.persons} onChange={handleChange} required>
                  <option value="">Number of persons</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                  
                </select>
                <label> </label>
                <button type="submit">Book now</button>
              </form>
            </div>
          </div>
        </div>
        <div className="hero-lower-textblock absolute right-[72px] h-full">
          <div className="hero-lower-textblock-upper absolute top-0 right-0">
            <div className="flex items-center">
              <p className="hero-lower-textblock-book pr-6">Book a table by phone</p>
              <p className="hero-lower-textblock-number">(525) 847-0411</p>
            </div>
          </div>
          <p className="hero-lower-textblock-lower absolute bottom-0 right-0">
            Vel ullamcorper ultrices volutpat enim dignissim id purusrnav
          </p>
        </div>
      </section>

      {/* Splendid menu */} 
      <section className="splendid-menu">
        <div className="splendid-menu-textblock">
          <img src="../img/restaurant.svg" className="restaurant-icon"></img>
          <h4 className="splendid-menu-heading">Explore our splendid menu</h4>
        </div>
        <div className="splendid-menu-cards flex justify-center gap-18">
          <div className="splendid-menu-card1 flex flex-col items-center justify-end">
            <h4 className="splendid-menu-card-heading">Sweet Desserts</h4>
            <img src="../img/view-menu-button.svg" className="view-menu-button"></img>
          </div>
          <div className="splendid-menu-card2 flex flex-col items-center justify-end">
            <h4 className="splendid-menu-card-heading">Amazing Coffee</h4>
            <img src="../img/view-menu-button.svg" className="view-menu-button"></img>
          </div>
          <div className="splendid-menu-card3 flex flex-col items-center justify-end">
            <h4 className="splendid-menu-card-heading">Best Breakfasts</h4>
            <img src="../img/view-menu-button.svg" className="view-menu-button"></img>
          </div>
          <div className="splendid-menu-card4 flex flex-col items-center justify-end">
            <h4 className="splendid-menu-card-heading">Great Cocktails</h4>
            <img src="../img/view-menu-button.svg" className="view-menu-button"></img>
          </div>
        </div>
      </section>       
      
      {/* Sushi Meals */} 
      <section className="sushi-meals">
        <div className="sushi-meals-textblock">
          <img src="../img/restaurant.svg" className="restaurant-icon"></img>
          <h4 className="sushi-meals-heading">Most popular sushi meals</h4>
          <p className="sushi-meals-text">Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus id...</p>
        </div>
        <div className="sushi-cards flex items-center justify-center">
          <div className="sushi-cards-group">
            <div className="sushi-card1 flex flex-col items-center justify-end">
              <img src="../img/sushi-uramaki.png" className="sushi-uramaki"></img>
              <h4 className="sushi-card-heading">Uramaki sushi</h4>
              <p className="sushi-card-text">Aliquet egestas gravida orci nulla lacus<br />suspendisse...</p>
            </div>
            <div className="sushi-card2 flex flex-col items-center justify-end">
              <img src="../img/sushi-maki.png" className="sushi-maki"></img>
              <h4 className="sushi-card-heading">Maki Sushi</h4>
              <p className="sushi-card-text">Vel ullamcorper ultrices volutpat enim<br />dignissim id purus.</p>
            </div>
          </div>
          <div className="sushi-card3 flex flex-col items-center justify-end">
            <img src="../img/sushi-set.png" className="sushi-set"></img>
            <h4 className="sushi-card-heading">Sushi set “Samurai”</h4>
            <p className="sushi-card-text">Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices<br />volutpat enim dignissim id purus. Urna quam massa urna...</p>
          </div>
        </div>
      </section> 

      {/* Best place */} 
      <section className="best-place flex items-center justify-center">
        <div className="best-place-pics">
          <div className="best-place-pic1"></div>
          <div className="best-place-pic2"></div>
        </div>
        <div className="best-place-textbox">
          <img src="../img/restaurant-right.svg" className="best-place-icon"></img>
          <h4 className="best-place-heading">Best place to find your<br />food love</h4>
          <p className="best-place-text">Aliquet egestas gravida orci nulla lacus suspendisse. Vel<br />ullamcorper ultrices volutpat enim dignissim id purus. Urna quam<br />massa urna dolor enim dui lectus id...</p>
          <img src="../img/reservation-button.svg" className="best-place-button"></img>
        </div>
      </section>

      {/* Popular Dishes */} 
      <section className="popular-dishes">
        <div className="popular-dishes-textblock">
          <img src="../img/restaurant.svg" className="restaurant-icon"></img>
          <h4 className="popular-dishes-heading">Most popular dishes</h4>
          <p className="popular-dishes-text">Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna dolor enim dui lectus id...</p>
        </div>
        <div className="popular-dishes-cards flex justify-center gap-24">
          <div className="popular-dishes-card1 flex flex-col items-center justify-end">
            <img src="../img/greece-salad.png" className="greece-salad"></img>
            <h4 className="popular-dishes-card-heading">Greek Salad</h4>
            <p className="popular-dishes-card-text">Aliquet egestas gravida orci nulla<br />lacus suspendisse.</p>
          </div>
          <div className="popular-dishes-card2 flex flex-col items-center justify-end">
            <img src="../img/spicy-seafood.png" className="spicy-seafood"></img>
            <h4 className="popular-dishes-card-heading">Spicy Seafood</h4>
            <p className="popular-dishes-card-text">Morbi aenean congue leo sit<br />ornare proin dumper a eget felis.</p>
          </div>
          <div className="popular-dishes-card3 flex flex-col items-center justify-end">
            <img src="../img/pepperoni.png" className="pepperoni"></img>
            <h4 className="popular-dishes-card-heading">Pizza Pepperoni</h4>
            <p className="popular-dishes-card-text">A libero purus faucibus massa<br />faucibus.</p>
          </div>
          <div className="popular-dishes-card4 flex flex-col items-center justify-end">
            <img src="../img/tuna-salad.png" className="tuna-salad"></img>
            <h4 className="popular-dishes-card-heading">Tuna Salad</h4>
            <p className="popular-dishes-card-text">Vel ullamcorperorbi aenean<br />congue leo sit ornare proin.</p>
          </div>
        </div>
      </section> 

      {/* Offers and promotions */} 
      <section className="promotions">
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <img src="./img/image-1.png" className="gallery__img"></img>
          </div>
          <div className="gallery__item gallery__item--2">
            <img src="./img/image-2.png" className="gallery__img"></img>
          </div>
          <div className="gallery__item gallery__item--3">
            <img src="./img/image-3.png" className="gallery__img"></img>
          </div>
          <div className="gallery__item gallery__item--4">
            <img src="./img/image-4.png" className="gallery__img"></img>
          </div>
          <div className="gallery__item gallery__item--5">
            <img src="./img/image-5.png" className="gallery__img"></img>
          </div>
          <div className="gallery__item gallery__item--6">
            <img src="./img/image-6.png" className="gallery__img"></img>
          </div>

          <div className="gallery__item gallery__item--11 self-end">
            <img src="./img/restaurant-right.svg" className="restaurant-right-button"></img>
            <h4 className="offers-heading-left">New offers and promotions</h4>
            <img src="./img/learn-button.svg" className="learn-button-left"></img>
          </div>
          <div className="gallery__item gallery__item--33">
            <img src="./img/restaurant.svg" className="restaurant-button"></img>
            <h4 className="offers-heading">View Full Menu</h4>
            <img src="./img/learn-button.svg" className="learn-button"></img>
          </div>
          <div className="gallery__item gallery__item--44">
            <img src="./img/restaurant.svg" className="restaurant-button"></img>
            <h4 className="offers-heading">Daily Specials</h4>
            <img src="./img/learn-button.svg" className="learn-button"></img>
          </div>
          <div className="gallery__item gallery__item--66 self-end">
            <img src="./img/restaurant.svg" className="restaurant-button"></img>
            <h4 className="offers-heading">Wine list</h4>
            <img src="./img/learn-button.svg" className="learn-button"></img>
          </div>
        </div>
      </section>

      {/* Order online */} 
      <section className="order-online">
        <div className="order-online-textblock">
          <img src="../img/restaurant.svg" className="restaurant-icon"></img>
          <h4 className="order-online-heading">Order online</h4>
          <p className="order-online-text">Aliquet egestas gravida orci nulla lacus suspendisse. Vel ullamcorper ultrices volutpat eni...</p>
        </div>
        <div className='order-menu flex items-start justify-center'>
          <div className='order-left'>
            <img src="./img/menu-header-salads.svg" className='menu-header-salads'></img>
            
            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/greece-salad.png" className='avatar-food-1'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Greek Salad</h4>
                  <p className='food-cost'>$6</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/tuna-salad.png" className='avatar-food-2'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Summer Salad</h4>
                  <p className='food-cost'>$10</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <img src="./img/menu-header-main.svg" className='menu-header-main'></img>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/steak.png" className='avatar-food-3'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Morbi Aenean Steak</h4>
                  <p className='food-cost'>$15</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/volutpat.png" className='avatar-food-4'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Volutpat Special</h4>
                  <p className='food-cost'>$17</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/volutpat-pasta.png" className='avatar-food-5'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Ultrices Volutpat Pasta</h4>
                  <p className='food-cost'>$12</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>
          </div>
          <div className='order-right'>
            <img src="./img/menu-header-pizzas.svg" className='menu-header-pizzas'></img>
            
            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/mexican.png" className='avatar-food-6'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Mexican Pizza</h4>
                  <p className='food-cost'>$10</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/proscuitto.png" className='avatar-food-7'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Prosciutto Pizza</h4>
                  <p className='food-cost'>$12</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/pepperoni.png" className='avatar-food-8'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Pepperoni Pizza</h4>
                  <p className='food-cost'>$12</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/viennese.png" className='avatar-food-9'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Viennese Pizza</h4>
                  <p className='food-cost'>$14</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/marinara.png" className='avatar-food-10'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Marinara Pizza</h4>
                  <p className='food-cost'>$16</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>

            <div className='order-menu-food flex items-center justify-between'>
              <img src="./img/napoletana.png" className='avatar-food-11'></img>
              <div className='order-menu-food-text items-start'>
                <div className='flex items-start justify-between'>
                  <h4 className='food-header'>Napoletana Pizza</h4>
                  <p className='food-cost'>$22</p>
                </div>
                <p className='food-text'>Aliquet egestas, gravida, orci nulla, lacus</p>
              </div>
            </div>
          </div>
        </div>
      </section>      
      
      {/* What clients says */} 
      <section className="clients-says">
        <div className="client-says-heading">
          <img src="../img/quotes.svg" className="quotes-icon"></img>
          <h4 className="clients-says-heading">What our clients say about us</h4>
        </div>
        <div className="client-says-rewiewsbox">
          <div className="client-says-rewiew">
            <img src="./img/avatars.svg" className="client-says-avatars"></img>
            <p className="client-says-text">Eu id cras morbi consectetur viverra eleifend pellentesque dui. Senectus commodo morbi aliquet eget quis<br />gravida. Ut vel curabitur ut a id tempor. Viverra non commodo vel ac aliquet. Ac euismod tincidunt sed quam<br />pharetra laoreet nisl mollis vitae.</p>
          </div>
          <div className="client-says-rewiew-author">
            <h4 className="client-says-rewiew-author-name">Dale Petersen</h4>
            <p className="client-says-rewiew-author-role">Guest</p>
          </div>
          <img src="./img/rewiew-list.svg" className="rewiew-list"></img>
        </div>
      </section>

      {/* Chefs secret */}     
      <section className="chefs-secret">
        <div className="chefs-container">
          <img src="../img/play-button.svg" className="play-button"></img>
          <h4 className="chefs-heading">Our chef's secrets</h4>
          <p className="chefs-text">Lectus sit a quam viverra ridiculus scelerisque dapibus sed. Id nisl parturient adipiscing<br />sit lectus tempor. Sagittis sed aliquam laoreet dignissim.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="../img/logo.svg" className="footer-logo"></img>
        <div className="flex gap-10 justify-between">
          <div className="flex-1">
            <h4 className="footer-heading">Opening Hours</h4>
            <p className="footer-text">Monday – Sunday<br />10AM – 10PM</p>
          </div>
          <div className="flex-1">
            <h4 className="footer-heading">Book a Table</h4>
            <p className="footer-text"> Urna quam massa urna dolor enim dui<br />Tristique dignissim pharetra feugiat<br />Vivamus libero feugiat</p>
            <p className="footer-number">(525) 847-0411</p>
          </div>
          <div className="flex-1">
            <h4 className="footer-heading">Our Address</h4>
            <p className="footer-text">8911 Tanglewood Ave.<br />Capitol Heights,<br />MD 20743</p>
          </div>
        </div>
        <p className="footer-copyright">© Copyright Restaurant 2025. Design by Nikita Slesarenko.</p>
      </footer>
    </main>
  )
}
