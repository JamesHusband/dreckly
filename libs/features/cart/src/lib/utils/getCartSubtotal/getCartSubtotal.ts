import { useCartStore } from '@dreckly/state';

export const getCartSubtotal = () => {
  const cartItems = useCartStore.getState().cartItems;
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
}; 