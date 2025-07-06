import { CartItemType } from '@dreckly/shared-types';
import { CartHeader, CartItem, CustomerAddress } from '../';

export const CartMain = ({
  cartItems,
  userDeliveryAddress,
  updateQuantity,
  removeItem,
}: {
  cartItems: CartItemType[];
  userDeliveryAddress: string;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
}) => {
  return (
    <div className="lg:col-span-2 space-y-6">
      <CustomerAddress customerAddress={userDeliveryAddress} />
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <CartHeader
          restaurantName={cartItems[0]?.restaurantName}
          id={cartItems[0]?.restaurantId}
        />
        <div className="p-4">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
