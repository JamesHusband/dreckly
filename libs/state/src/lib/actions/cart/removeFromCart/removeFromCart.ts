import { CartState } from '../../../types/cart-state';

export const removeFromCart =
  (set: (fn: (state: CartState) => Partial<CartState>) => void) =>
  (itemId: string) => {
    set((state: CartState) => {
      const existingItem = state.cartItems.find((item) => item.id === itemId);

      if (!existingItem) {
        return state;
      }

      if (existingItem.quantity <= 1) {
        return {
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        };
      } else {
        return {
          cartItems: state.cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
          ),
        };
      }
    });
  };
