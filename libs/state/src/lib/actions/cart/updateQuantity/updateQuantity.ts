import { CartState } from '../../../types/cart-state';

export const updateQuantity =
  (set: (fn: (state: CartState) => Partial<CartState>) => void) =>
  (itemId: string, quantity: number) => {
    set((state: CartState) => {
      if (quantity <= 0) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        };
      }

      return {
        cartItems: state.cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        ),
      };
    });
  };
