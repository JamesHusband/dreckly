import { FoodIcon, ItemCounter } from '@dreckly/shared-ui-kit';

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
                <ItemCounter
                  addItem={() => addToCart(id)}
                  removeItem={() => removeFromCart(id)}
                  quantity={cart[id]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
