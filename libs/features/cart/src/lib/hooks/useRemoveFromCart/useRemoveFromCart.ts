import { useCallback } from 'react';
import { useCartStore } from '@dreckly/state';

export const useRemoveFromCart = () => {
  const { removeItem } = useCartStore();

  const removeFromCart = useCallback(
    (itemId: string) => {
      removeItem(itemId);
    },
    [removeItem]
  );

  return { removeFromCart };
};
