import { CartState } from '../../../types/cart-state';

export const getCartSubtotal = (get: () => CartState) => () => {
  const { cartItems } = get();
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
