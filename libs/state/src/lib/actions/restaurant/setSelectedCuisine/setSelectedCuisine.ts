import { RestaurantState } from '../../../types/restaurant-state';

export const setSelectedCuisine =
  (set: (state: Partial<RestaurantState>) => void) =>
  (cuisine: string | null) => {
    set({ selectedCuisine: cuisine });
  };
