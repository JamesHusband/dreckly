import { RestaurantState } from '../../../types/restaurant-state';

export const setLoading =
  (set: (state: Partial<RestaurantState>) => void) => (loading: boolean) => {
    set({ loading });
  };
