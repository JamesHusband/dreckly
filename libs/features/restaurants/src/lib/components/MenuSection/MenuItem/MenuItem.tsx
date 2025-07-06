import { Minus, Plus } from 'lucide-react';
import { FoodIcon } from '@dreckly/shared-ui-kit';

interface MenuItemProps {
  id: string;
  restaurantName: string;
  name: string;
  description: string;
  price: number;
  cart: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const MenuItem = ({
  restaurantName,
  id,
  name,
  description,
  price,
  cart,
  addToCart,
  removeFromCart,
}: MenuItemProps) => {
  return (
    <div
      key={id}
      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
    >
      <div className="p-4">
        <div className="flex gap-4">
          <FoodIcon
            restaurantName={restaurantName}
            name={name}
            width={80}
            height={80}
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">{name}</h3>
            <p className="text-gray-600 text-sm mb-2">{description}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">£{price.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                {cart[id] > 0 && (
                  <>
                    <button
                      onClick={() => removeFromCart(id)}
                      className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {cart[id]}
                    </span>
                  </>
                )}
                <button
                  onClick={() => addToCart(id)}
                  className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
