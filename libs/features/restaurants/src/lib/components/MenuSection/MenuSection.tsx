import { MenuItem } from './MenuItem';

interface MenuItemType {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface MenuSectionProps {
  restaurantName: string;
  categoryName: string;
  items: MenuItemType[];
  cart: Record<string, number>;
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export const MenuSection = ({
  restaurantName,
  categoryName,
  items,
  cart,
  addToCart,
  removeFromCart,
}: MenuSectionProps) => {
  return (
    <div key={categoryName} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            restaurantName={restaurantName}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};
