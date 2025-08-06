'use client';

import {
  CartLayout,
  CartMain,
  CartPageHeader,
  CartSummary,
  EmptyCart,
} from '@dreckly/features-cart';
import { useCartStore, useRestaurantStore } from '@dreckly/state';

const CartPage = () => {
  const { cartItems, updateItemQuantity, removeItem } = useCartStore();

  const { selectedRestaurant } = useRestaurantStore();

  const deliveryFee = selectedRestaurant?.deliveryFee || 0;
  const serviceFee = 1.49;

  const subtotal = useCartStore((state) => {
    const { cartItems } = state;
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  });

  const total = useCartStore((state) => {
    const { cartItems } = state;
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return subtotal + deliveryFee + serviceFee;
  });

  const updateQuantity = (id: string, newQuantity: number) => {
    updateItemQuantity(id, newQuantity);
  };

  const removeItemFromCart = (id: string) => {
    removeItem(id);
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <CartLayout>
      <CartPageHeader />
      <div className="grid lg:grid-cols-3 gap-8">
        <CartMain
          cartItems={cartItems}
          userDeliveryAddress={'123 High Street, Truro, TR1 2AB'}
          updateQuantity={updateQuantity}
          removeItem={removeItemFromCart}
        />
        <CartSummary
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          serviceFee={serviceFee}
          total={total}
        />
      </div>
    </CartLayout>
  );
};

export default CartPage;
