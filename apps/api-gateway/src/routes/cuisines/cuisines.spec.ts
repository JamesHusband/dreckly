import request from 'supertest';
import express from 'express';
import cuisinesRouter from './cuisines';
import { getCuisines } from '@dreckly/data-access';

const mockGetCuisines = getCuisines as jest.MockedFunction<typeof getCuisines>;

const app = express();
app.use('/api/cuisines', cuisinesRouter);

describe('Cuisine Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/cuisines', () => {
    it('should return all cuisines', async () => {
      const mockCuisines = [
        {
          id: 1,
          name: 'Cornish',
          description: 'Traditional Cornish cuisine',
          icon: 'PieChart' as const,
        },
        {
          id: 2,
          name: 'Fish & Chips',
          description: 'Classic British fish and chips',
          icon: 'Fish' as const,
        },
      ];

      mockGetCuisines.mockResolvedValue(mockCuisines);

      const response = await request(app).get('/api/cuisines').expect(200);

      expect(response.body).toEqual(mockCuisines);
      expect(mockGetCuisines).toHaveBeenCalledTimes(1);
    });

    it('should return 500 when getCuisines throws an error', async () => {
      const error = new Error('Database error');
      mockGetCuisines.mockRejectedValue(error);

      const response = await request(app).get('/api/cuisines').expect(500);

      expect(response.body).toEqual({ error: 'Failed to fetch cuisines' });
      expect(mockGetCuisines).toHaveBeenCalledTimes(1);
    });
  });
});
