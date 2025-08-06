import { CartItemType } from '@dreckly/shared-types';
import { CartState } from '../../../types/cart-state';

export const addToCart =
  (set: (fn: (state: CartState) => Partial<CartState>) => void) =>
  (item: CartItemType) => {
    set((state: CartState) => {
      const existingItem = state.cartItems.find(
        (cartItem: CartItemType) => cartItem.id === item.id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem: CartItemType) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
    });
  };
