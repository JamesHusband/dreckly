import { ItemCounter, Card } from '@dreckly/shared-ui-kit';
import Link from 'next/link';
import { getCartSubtotal } from '@dreckly/features-cart';

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
  deliveryFee: number;
  minOrder: number;
}

export const OrderSidebar = ({
  name,
  cart,
  menuCategories,
  removeFromCart,
  addToCart,
  deliveryFee,
  minOrder,
}: OrderSidebarProps) => {
  const cartTotal = getCartSubtotal();
  const totalWithDelivery = cartTotal + deliveryFee;

  return (
    <Card sticky>
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
                        <ItemCounter
                          addItem={() => addToCart(item.id)}
                          removeItem={() => removeFromCart(item.id)}
                          quantity={cart[item.id]}
                        />
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
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>£{deliveryFee.toFixed(2)}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>£{totalWithDelivery.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/cart">
              <button
                className={`w-full mt-4 py-3 rounded-md font-medium transition-colors ${
                  cartTotal < minOrder
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
                disabled={cartTotal < minOrder}
              >
                {cartTotal < minOrder
                  ? `Minimum order £${minOrder}`
                  : 'Proceed to Checkout'}
              </button>
            </Link>
          </>
        )}
      </div>
    </Card>
  );
};
