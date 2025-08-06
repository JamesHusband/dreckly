import { Cuisine } from '@dreckly/shared-types';
import { RestaurantState } from '../../../types/restaurant-state';

export const setCuisines =
  (set: (state: Partial<RestaurantState>) => void) => (cuisines: Cuisine[]) => {
    set({ cuisines });
  };
