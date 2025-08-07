import { useRestaurantStore } from '@dreckly/state';

export const getDeliveryFee = () => {
  const selectedRestaurant = useRestaurantStore.getState().selectedRestaurant;
  return selectedRestaurant?.deliveryFee || 0;
};
