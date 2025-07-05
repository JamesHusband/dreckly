import { RestaurantCard } from './RestaurantCard';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  featured: boolean;
}

export const RestaurantList = ({
  restaurants,
}: {
  restaurants: Restaurant[];
}) => {
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
