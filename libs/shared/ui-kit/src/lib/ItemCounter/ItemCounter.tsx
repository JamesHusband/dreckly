import { Minus, Plus } from 'lucide-react';

export const ItemCounter = ({
  addItem,
  removeItem,
  quantity,
}: {
  addItem: () => void;
  removeItem: () => void;
  quantity: number;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {quantity > 0 ? (
          <>
            <button
              onClick={removeItem}
              className="h-8 w-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <button
              onClick={addItem}
              className="h-8 w-8 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center justify-center transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </>
        ) : (
          <button
            onClick={addItem}
            className="h-8 w-8 bg-orange-500 hover:bg-orange-600 text-white rounded flex items-center justify-center transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};
