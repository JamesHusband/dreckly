import { Restaurant } from '@dreckly/shared-types';
import { RestaurantState } from '../../../types/restaurant-state';

export const getRestaurantById =
  (get: () => RestaurantState) => (id: string) => {
    const { restaurants } = get();
    return restaurants.find(
      (restaurant: Restaurant) => restaurant.id === parseInt(id)
    );
  };
