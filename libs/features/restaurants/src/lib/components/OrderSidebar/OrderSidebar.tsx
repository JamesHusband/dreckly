import { Minus, Plus } from 'lucide-react';
import Link from 'next/link';

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface MenuCategoryType {
  name: string;
  items: MenuItemType[];
}

interface OrderSidebarProps {
  name: string;
  cart: Record<string, number>;
  menuCategories: MenuCategoryType[];
  removeFromCart: (id: string) => void;
  addToCart: (id: string) => void;
  getCartTotal: () => number;
  deliveryFee: number;
  minOrder: number;
}

export const OrderSidebar = ({
  name,
  cart,
  menuCategories,
  removeFromCart,
  addToCart,
  getCartTotal,
  deliveryFee,
  minOrder,
}: OrderSidebarProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm sticky top-24">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Your Order</h3>
        <p className="text-sm text-gray-600">From {name}</p>
      </div>
      <div className="p-4">
        {Object.keys(cart).length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              {menuCategories.map((category) =>
                category.items.map((item) => {
                  if (!cart[item.id]) return null;
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          £{item.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="h-6 w-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">
                          {cart[item.id]}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="h-6 w-6 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center justify-center transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>£{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>£{deliveryFee}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>£{(getCartTotal() + 2.99).toFixed(2)}</span>
              </div>
            </div>

            <Link href="/cart">
              <button
                className={`w-full mt-4 py-3 rounded-md font-medium transition-colors ${
                  getCartTotal() < 15
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
                disabled={getCartTotal() < 15}
              >
                {getCartTotal() < 15
                  ? `Minimum order £${minOrder}`
                  : 'Proceed to Checkout'}
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
