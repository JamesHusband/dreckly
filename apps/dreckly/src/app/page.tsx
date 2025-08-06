'use client';
import { useEffect } from 'react';
import { Hero, CuisineFilter, RestaurantList } from '@dreckly/features-home';
import { Restaurant, Cuisine } from '@dreckly/shared-types';
import { useRestaurantStore } from '@dreckly/state';
import { Status } from '@dreckly/shared-ui-kit';

const Page = () => {
  const {
    restaurants,
    cuisines,
    filteredRestaurants,
    setRestaurants,
    setCuisines,
    loading,
    setLoading,
    error,
    setError,
  } = useRestaurantStore();

  useEffect(() => {
    const fetchData = async () => {
      if (restaurants.length > 0 && cuisines.length > 0) {
        return;
      }

      try {
        const [restaurantsRes, cuisinesRes] = await Promise.all([
          fetch('http://localhost:3000/api/restaurants', { cache: 'no-store' }),
          fetch('http://localhost:3000/api/cuisines', { cache: 'no-store' }),
        ]);

        if (!restaurantsRes.ok || !cuisinesRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const restaurantsData: Restaurant[] = await restaurantsRes.json();
        const cuisinesData: Cuisine[] = await cuisinesRes.json();

        setRestaurants(restaurantsData);
        setCuisines(cuisinesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [
    restaurants.length,
    cuisines.length,
    setRestaurants,
    setCuisines,
    setLoading,
    setError,
  ]);

  if (loading && restaurants.length === 0) {
    return <Status type="loading" message="Loading restaurants..." />;
  }

  if (error) {
    return <Status type="error" message={error} />;
  }

  return (
    <>
      <Hero />
      <CuisineFilter cuisines={cuisines} />
      <RestaurantList restaurants={filteredRestaurants} />
    </>
  );
};

export default Page;
