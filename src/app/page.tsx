'use client';
import Hero from './components/Hero/Hero';
import SplendidMenu from './components/SplendidMenu/SplendidMenu';
import SushiMeals from './components/SushiMeals/SushiMeals';
import BestPlace from './components/BestPlace/BestPlace';
import PopularDishes from './components/PopularDishes/PopularDishes';
import Promotions from './components/Promotions/Promotions';
import OrderOnline from './components/OrderOnline/OrderOnline';
import ClientSays from './components/ClientSays/ClientSays';
import ChefsSecret from './components/ChefsSecret/ChefsSecret';
import Footer from './components/Footer/Footer';

export default function Page() {
  return (
    <main className="font-inter text-gray-800">
      <Hero />
      <SplendidMenu />
      <SushiMeals />
      <BestPlace />
      <PopularDishes />
      <Promotions />
      <OrderOnline />
      <ClientSays />
      <ChefsSecret />
      <Footer />
    </main>
  );
}