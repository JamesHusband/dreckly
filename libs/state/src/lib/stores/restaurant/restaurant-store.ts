import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Restaurant, Cuisine } from '@dreckly/shared-types';
import {
  setRestaurants,
  setCuisines,
  setSelectedRestaurant,
  setSelectedCuisine,
  setLoading,
  setError,
  filterByCuisine,
  clearFilters,
  getRestaurantById,
} from '../../actions/restaurant';

interface RestaurantState {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  cuisines: Cuisine[];
  selectedRestaurant: Restaurant | null;
  selectedCuisine: string | null;
  loading: boolean;
  error: string | null;
}

interface RestaurantStore extends RestaurantState {
  setRestaurants: (restaurants: Restaurant[]) => void;
  setCuisines: (cuisines: Cuisine[]) => void;
  setSelectedRestaurant: (restaurant: Restaurant | null) => void;
  setSelectedCuisine: (cuisine: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  filterByCuisine: (cuisine: string) => void;
  clearFilters: () => void;
  getRestaurantById: (id: string) => Restaurant | undefined;
}

export const useRestaurantStore = create<RestaurantStore>()(
  persist(
    (set, get) => ({
      restaurants: [],
      filteredRestaurants: [],
      cuisines: [],
      selectedRestaurant: null,
      selectedCuisine: null,
      loading: true,
      error: null,
      setRestaurants: setRestaurants(set),
      setCuisines: setCuisines(set),
      setSelectedRestaurant: setSelectedRestaurant(set),
      setSelectedCuisine: setSelectedCuisine(set),
      setLoading: setLoading(set),
      setError: setError(set),
      filterByCuisine: filterByCuisine(set, get),
      clearFilters: clearFilters(set),
      getRestaurantById: getRestaurantById(get),
    }),
    {
      name: 'dreckly-restaurant-storage',
      partialize: (state) => ({
        selectedRestaurant: state.selectedRestaurant,
        selectedCuisine: state.selectedCuisine,
      }),
    }
  )
);
