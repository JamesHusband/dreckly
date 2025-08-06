import { Restaurant, Cuisine } from '@dreckly/shared-types';

export interface RestaurantState {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  cuisines: Cuisine[];
  selectedRestaurant: Restaurant | null;
  selectedCuisine: string | null;
  loading: boolean;
  error: string | null;
} 