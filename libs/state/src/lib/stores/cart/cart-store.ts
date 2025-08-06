import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItemType } from '@dreckly/shared-types';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  getCartItemCount,
  getCartSubtotal,
} from '../../actions/cart';

interface CartState {
  cartItems: CartItemType[];
}

interface CartStore extends CartState {
  addItem: (item: CartItemType) => void;
  removeItem: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCartItems: () => void;
  getCartItemCount: () => number;
  getCartSubtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addItem: addToCart(set),
      removeItem: removeFromCart(set),
      updateItemQuantity: updateQuantity(set),
      clearCartItems: clearCart(set),
      getCartItemCount: getCartItemCount(get),
      getCartSubtotal: getCartSubtotal(get),
    }),
    {
      name: 'dreckly-cart-storage',
      partialize: (state) => ({ cartItems: state.cartItems }),
    }
  )
);
