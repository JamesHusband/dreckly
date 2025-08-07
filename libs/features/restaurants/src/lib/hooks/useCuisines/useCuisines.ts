import { useEffect } from 'react';
import { Cuisine } from '@dreckly/shared-types';
import { useRestaurantStore } from '@dreckly/state';

export const useCuisines = () => {
  const { cuisines, setCuisines, loading, setLoading, error, setError } =
    useRestaurantStore();

  useEffect(() => {
    const fetchCuisines = async () => {
      if (cuisines) {
        return;
      }

      try {
        setLoading(true);
        const response = await fetch('http://localhost:3333/api/cuisines');

        if (!response.ok) {
          throw new Error('Failed to fetch cuisines');
        }

        const cuisinesData = (await response.json()) as Cuisine[];
        setCuisines(cuisinesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCuisines();
  }, [cuisines, setCuisines, setLoading, setError]);

  return { cuisines, loading, error };
};
