import { Hero, CuisineFilter, RestaurantList } from '@dreckly/features-home';
import { Restaurant } from '@dreckly/shared-types';

import {
  Utensils,
  Fish,
  UtensilsCrossed,
  Soup,
  Pizza,
  Hamburger,
  Cake,
  Salad,
} from 'lucide-react';

const Page = async () => {
  const res = await fetch('http://localhost:3000/api/restaurants', {
    cache: 'no-store',
  });
  const restaurants: Restaurant[] = await res.json();

  console.info('restaurants from page', restaurants);
  const cuisineTypes = [
    { name: 'Cornish', icon: Utensils },
    { name: 'Fish & Chips', icon: Fish },
    { name: 'Indian', icon: UtensilsCrossed },
    { name: 'Chinese', icon: Soup },
    { name: 'Italian', icon: Pizza },
    { name: 'Burgers', icon: Hamburger },
    { name: 'Desserts', icon: Cake },
    { name: 'Healthy', icon: Salad },
  ];

  return (
    <>
      <Hero />
      <CuisineFilter cuisineTypes={cuisineTypes} />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Page;
