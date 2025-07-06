import { CartItemType } from '@dreckly/shared-types';

export const getCartSubtotal = ({
  cartItems,
}: {
  cartItems: CartItemType[];
}) => {
  return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
};
