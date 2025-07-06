import { Hero, CuisineFilter, RestaurantList } from '@dreckly/features-home';
import { Restaurant, Cuisine } from '@dreckly/shared-types';

const Page = async () => {
  const [restaurantsRes, cuisinesRes] = await Promise.all([
    fetch('http://localhost:3000/api/restaurants', { cache: 'no-store' }),
    fetch('http://localhost:3000/api/cuisines', { cache: 'no-store' }),
  ]);

  const restaurants: Restaurant[] = await restaurantsRes.json();
  const cuisines: Cuisine[] = await cuisinesRes.json();

  return (
    <>
      <Hero />
      <CuisineFilter cuisines={cuisines} />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Page;
