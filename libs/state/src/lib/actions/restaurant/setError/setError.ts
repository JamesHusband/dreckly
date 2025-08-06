import { RestaurantState } from '../../../types/restaurant-state';

export const setError =
  (set: (state: Partial<RestaurantState>) => void) =>
  (error: string | null) => {
    set({ error });
  };
