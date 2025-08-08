import { CartHeader, CartItem, CustomerAddress } from '../';
import { useCartStore } from '@dreckly/state';
import { useUpdateQuantity, useRemoveFromCart } from '../../hooks';
import { Card } from '@dreckly/shared-ui-kit';

export const CartMain = () => {
  const { cartItems } = useCartStore();
  const { updateQuantity } = useUpdateQuantity();
  const { removeFromCart } = useRemoveFromCart();

  // TODO: Get from API/user preferences later
  const userDeliveryAddress = '123 High Street, Truro, TR1 2AB';
  return (
    <div className="lg:col-span-2 space-y-6">
      <CustomerAddress customerAddress={userDeliveryAddress} />
      <Card>
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
                removeItem={removeFromCart}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
