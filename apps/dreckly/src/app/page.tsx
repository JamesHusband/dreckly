'use client';
import { Hero, CuisineFilter, RestaurantList } from '@dreckly/features-home';
import { useRestaurantStore } from '@dreckly/state';
import { Status } from '@dreckly/shared-ui-kit';
import { useRestaurants, useCuisines } from '@dreckly/features-restaurants';

const Page = () => {
  const { filteredRestaurants } = useRestaurantStore();
  const {
    restaurants,
    loading: restaurantsLoading,
    error: restaurantsError,
  } = useRestaurants();
  const {
    cuisines,
    loading: cuisinesLoading,
    error: cuisinesError,
  } = useCuisines();

  const loading = restaurantsLoading || cuisinesLoading;
  const error = restaurantsError || cuisinesError;

  if (loading || !restaurants || !cuisines) {
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
