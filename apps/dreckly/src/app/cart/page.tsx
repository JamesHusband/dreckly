'use client';

import {
  CartLayout,
  CartMain,
  CartPageHeader,
  CartSummary,
  EmptyCart,
  getCartSubtotal,
} from '@dreckly/features-cart';

import { useState } from 'react';

// TODO: Get from Zustand store
const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      restaurantId: '1',
      restaurantName: 'The Cornish Pasty Co.',
      name: 'Traditional Pasty',
      price: 4.5,
      quantity: 2,
      image: '/placeholder.svg?height=80&width=80',
    },
    {
      id: '2',
      restaurantId: '1',
      restaurantName: 'The Cornish Pasty Co.',
      name: 'Cheese & Onion Pasty',
      price: 4.25,
      quantity: 1,
      image: '/placeholder.svg?height=80&width=80',
    },
  ]);

  // TODO: Get from user profile
  const [userDeliveryAddress, setUserDeliveryAddress] = useState(
    '123 High Street, Truro, TR1 2AB'
  );

  const deliveryFee = 2.99; // TODO: Get from current restaurant
  const serviceFee = 1.49; // TODO: get from Dreckly settings

  const subtotal = getCartSubtotal({ cartItems });
  const total = subtotal + deliveryFee + serviceFee;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
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
          userDeliveryAddress={userDeliveryAddress}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
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
