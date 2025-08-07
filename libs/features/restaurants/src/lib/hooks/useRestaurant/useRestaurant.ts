import { useEffect, useState } from 'react';
import { Restaurant } from '@dreckly/shared-types';

export const useRestaurant = (id: string) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3333/api/restaurants/${id}`)
      .then((response) => {
        if (!response.ok) return null;
        return response.json();
      })
      .then((data) => setRestaurant(data))
      .finally(() => setLoading(false));
  }, [id]);

  return { restaurant, loading };
}; 