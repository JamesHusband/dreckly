import { CartState } from '../../../types/cart-state';

export const clearCart = (set: (state: Partial<CartState>) => void) => () => {
  set({ cartItems: [] });
};
