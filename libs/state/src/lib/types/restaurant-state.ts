import { Restaurant, Cuisine } from '@dreckly/shared-types';

export interface RestaurantState {
  restaurants: Restaurant[] | null;
  filteredRestaurants: Restaurant[];
  cuisines: Cuisine[] | null;
  selectedRestaurant: Restaurant | null;
  selectedCuisine: string | null;
  loading: boolean;
  error: string | null;
}
