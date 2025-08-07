import { useCallback } from 'react';
import { useCartStore } from '@dreckly/state';

export const useUpdateQuantity = () => {
  const { updateItemQuantity } = useCartStore();

  const updateQuantity = useCallback(
    (id: string, newQuantity: number) => {
      updateItemQuantity(id, newQuantity);
    },
    [updateItemQuantity]
  );

  return { updateQuantity };
}; 