import { Restaurant } from '@dreckly/shared-types';
import { RestaurantState } from '../../../types/restaurant-state';

export const setRestaurants =
  (set: (state: Partial<RestaurantState>) => void) =>
  (restaurants: Restaurant[]) => {
    set({ restaurants, filteredRestaurants: restaurants });
  };
