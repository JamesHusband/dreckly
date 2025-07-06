'use client';

import { getRestaurantImage } from '@dreckly/features-home';
import { CustomerAddress, EmptyCart } from '@dreckly/features-cart';
import { BackToRestaurants } from '@dreckly/shared-ui-kit';
import { Plus, Minus, Trash2, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const CartPage = () => {
  const [cartContents, setCartContents] = useState({
    restaurantId: '1',
    restaurantName: 'The Cornish Pasty Co.',
    deliveryFee: 2.99,
    items: [
      {
        id: '1',
        restaurantId: '1',
        restaurantName: 'The Cornish Pasty Co.',
        name: 'Traditional Pasty',
        price: 4.5,
        quantity: 2,
      },
      {
        id: '2',
        restaurantId: '1',
        restaurantName: 'The Cornish Pasty Co.',
        name: 'Cheese & Onion Pasty',
        price: 4.25,
        quantity: 1,
      },
    ],
  });
  // const [cartContents, setCartContents] = useState([]);

  const [promoCode, setPromoCode] = useState('');
  const [userDeliveryAddress, setUserDeliveryAddress] = useState(
    '123 High Street, Truro, TR1 2AB'
  );

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartContents((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartContents((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartContents((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartContents.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const serviceFee = 1.49;
  const total = subtotal + cartContents.deliveryFee + serviceFee;

  if (cartContents.items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <BackToRestaurants />
          <h1 className="text-3xl font-bold mb-8">Your Order</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {/* Delivery Address */}
              <CustomerAddress customerAddress={userDeliveryAddress} />

              {/* Cart Items by Restaurant */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">
                    From {cartContents.items[0]?.restaurantName}
                  </h3>
                  <Link
                    href={`/restaurant/${cartContents.items[0]?.restaurantId}`}
                    className="text-orange-600 hover:text-orange-500 text-sm"
                  >
                    Add more items
                  </Link>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {cartContents.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0"
                      >
                        <Image
                          src={getRestaurantImage(
                            'menu',
                            item.restaurantName,
                            item.name
                          )}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            £{item.price.toFixed(2)} each
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="h-8 w-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="h-8 w-8 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center justify-center transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <div className="w-20 text-right font-medium">
                            £{(item.price * item.quantity).toFixed(2)}
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm sticky top-24">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">Order Summary</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>£{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery fee</span>
                      <span>£{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>£{serviceFee.toFixed(2)}</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 rounded-md font-medium transition-colors">
                      Proceed to Checkout
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      By placing your order, you agree to our Terms of Service
                      and Privacy Policy
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 text-green-700">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Estimated delivery: 25-40 minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
