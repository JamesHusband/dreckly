import { Router } from 'express';
import { getCuisines } from '@dreckly/data-access';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const cuisines = await getCuisines();
    res.json(cuisines);
  } catch {
    res.status(500).json({ error: 'Failed to fetch cuisines' });
  }
});

export default router;
