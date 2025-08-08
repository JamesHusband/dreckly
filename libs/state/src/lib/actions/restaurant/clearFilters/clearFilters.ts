import { RestaurantState } from '../../../types/restaurant-state';

export const clearFilters =
  (set: (fn: (state: RestaurantState) => Partial<RestaurantState>) => void) =>
  () => {
    set((state: RestaurantState) => ({
      filteredRestaurants: state.restaurants || [],
      selectedCuisine: null,
    }));
  };
