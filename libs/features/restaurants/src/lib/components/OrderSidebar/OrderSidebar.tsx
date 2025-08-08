import {
  ItemCounter,
  Card,
  SectionHeader,
  PriceRow,
  Button,
} from '@dreckly/shared-ui-kit';
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
      <SectionHeader title="Your Order" subtitle={`From ${name}`} />
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
              <PriceRow label="Subtotal" amount={cartTotal} />
              <PriceRow label="Delivery" amount={deliveryFee} />
              <hr className="border-gray-200" />
              <PriceRow label="Total" amount={totalWithDelivery} isTotal />
            </div>

            <Link href="/cart" className="block mt-4">
              <Button
                value={
                  cartTotal < minOrder
                    ? `Minimum order £${minOrder}`
                    : 'Proceed to Checkout'
                }
                variant={cartTotal < minOrder ? 'secondary' : 'primary'}
                disabled={cartTotal < minOrder}
              />
            </Link>
          </>
        )}
      </div>
    </Card>
  ); 
};
