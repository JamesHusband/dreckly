import { Restaurant } from '@dreckly/shared-types';
import { RestaurantState } from '../../../types/restaurant-state';

export const filterByCuisine =
  (set: (fn: (state: RestaurantState) => Partial<RestaurantState>) => void) =>
  (cuisine: string) => {
    set((state: RestaurantState) => {
      const filtered =
        cuisine && state.restaurants
          ? state.restaurants.filter(
              (restaurant: Restaurant) =>
                restaurant.cuisine.toLowerCase() === cuisine.toLowerCase()
            )
          : state.restaurants || [];

      return {
        filteredRestaurants: filtered,
        selectedCuisine: cuisine,
      };
    });
  };
