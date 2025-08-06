import { CartState } from '../../../types/cart-state';

export const getCartItemCount = (get: () => CartState) => () => {
  const { cartItems } = get();
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};
