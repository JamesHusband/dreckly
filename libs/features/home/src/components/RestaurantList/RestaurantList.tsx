import { RestaurantCard } from './RestaurantCard';

export const RestaurantList = () => {
  interface Restaurant {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    deliveryFee: string;
    featured: boolean;
  }

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'The Cornish Pasty Co.',
      cuisine: 'Traditional Cornish',
      rating: 4.8,
      deliveryTime: '25-40 min',
      deliveryFee: '£2.99',
      featured: true,
    },
    {
      id: 2,
      name: "Fisherman's Catch",
      cuisine: 'Fish & Chips',
      rating: 4.6,
      deliveryTime: '30-45 min',
      deliveryFee: '£3.49',
      featured: true,
    },
    {
      id: 3,
      name: 'Kernow Kitchen',
      cuisine: 'Modern British',
      rating: 4.7,
      deliveryTime: '35-50 min',
      deliveryFee: '£2.49',
      featured: false,
    },
    {
      id: 4,
      name: 'Seaside Spice',
      cuisine: 'Indian',
      rating: 4.5,
      deliveryTime: '20-35 min',
      deliveryFee: '£2.99',
      featured: false,
    },
    {
      id: 5,
      name: 'Pizza Porthcurno',
      cuisine: 'Italian',
      rating: 4.4,
      deliveryTime: '25-40 min',
      deliveryFee: '£3.99',
      featured: false,
    },
    {
      id: 6,
      name: 'The Cornish Creamery',
      cuisine: 'Desserts',
      rating: 4.9,
      deliveryTime: '15-30 min',
      deliveryFee: '£1.99',
      featured: false,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">All restaurants</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id.toString()}
              name={restaurant.name}
              featured={restaurant.featured}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              deliveryFee={restaurant.deliveryFee}
              cuisine={restaurant.cuisine}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
