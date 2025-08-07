import { useCartStore, useRestaurantStore } from '@dreckly/state';

export const getCartTotal = () => {
  const cartItems = useCartStore.getState().cartItems;
  const selectedRestaurant = useRestaurantStore.getState().selectedRestaurant;
  
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = selectedRestaurant?.deliveryFee || 0;
  const serviceFee = 1.49;
  
  return subtotal + deliveryFee + serviceFee;
}; 