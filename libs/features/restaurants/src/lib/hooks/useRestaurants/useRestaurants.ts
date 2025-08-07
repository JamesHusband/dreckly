import { useEffect } from 'react';
import { Restaurant } from '@dreckly/shared-types';
import { useRestaurantStore } from '@dreckly/state';

export const useRestaurants = () => {
  const { restaurants, setRestaurants, loading, setLoading, error, setError } =
    useRestaurantStore();

  useEffect(() => {
    const fetchRestaurants = async () => {
      if (restaurants) {
        return;
      }

      try {
        setLoading(true);
        const response = await fetch('http://localhost:3333/api/restaurants');

        if (!response.ok) {
          throw new Error('Failed to fetch restaurants');
        }

        const restaurantsData: Restaurant[] = await response.json();
        setRestaurants(restaurantsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, [restaurants, setRestaurants, setLoading, setError]);

  return { restaurants, loading, error };
};
