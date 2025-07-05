import { Hero, CuisineFilter, RestaurantList } from '@dreckly/features-home';
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

const Page = () => {
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
      <RestaurantList />
    </>
  );
};

export default Page;
