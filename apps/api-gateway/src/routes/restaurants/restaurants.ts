import { Router } from 'express';
import { getRestaurants } from '@dreckly/data-access';
import { Restaurant } from '@dreckly/shared-types';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const restaurants = await getRestaurants();
    res.json(restaurants);
  } catch {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const restaurantsData = await getRestaurants();
    const restaurant = restaurantsData.find(
      (r: Restaurant) => r.id.toString() === id
    );

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    return res.json(restaurant);
  } catch {
    return res.status(500).json({ error: 'Failed to fetch restaurant' });
  }
});

export default router;
