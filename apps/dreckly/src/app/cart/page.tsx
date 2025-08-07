'use client';

import {
  CartLayout,
  CartMain,
  CartPageHeader,
  CartSummary,
  EmptyCart,
} from '@dreckly/features-cart';
import { useCartStore } from '@dreckly/state';

const CartPage = () => {
  const { cartItems } = useCartStore();

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <CartLayout>
      <CartPageHeader />
      <div className="grid lg:grid-cols-3 gap-8">
        <CartMain />
        <CartSummary />
      </div>
    </CartLayout>
  );
};

export default CartPage;
