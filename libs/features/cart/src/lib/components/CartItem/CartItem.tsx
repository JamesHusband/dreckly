import { CartItemType } from '@dreckly/shared-types';
import { FoodIcon, ItemCounter } from '@dreckly/shared-ui-kit';
import { Plus, Minus, Trash2 } from 'lucide-react';

export const CartItem = ({
  item,
  updateQuantity,
  removeItem,
}: {
  item: CartItemType;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}) => {
  const handleAddItem = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemoveItem = () => {
    updateQuantity(item.id, item.quantity - 1);
  };
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0">
      <FoodIcon
        restaurantName={item.restaurantName}
        name={item.name}
        width={80}
        height={80}
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-600">£{item.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center gap-3">
        <ItemCounter
          addItem={handleAddItem}
          removeItem={handleRemoveItem}
          quantity={item.quantity}
        />
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
  );
};
