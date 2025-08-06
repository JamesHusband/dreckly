import { Restaurant } from '@dreckly/shared-types';
import { RestaurantState } from '../../../types/restaurant-state';

export const setSelectedRestaurant =
  (set: (state: Partial<RestaurantState>) => void) =>
  (restaurant: Restaurant | null) => {
    set({ selectedRestaurant: restaurant });
  };
