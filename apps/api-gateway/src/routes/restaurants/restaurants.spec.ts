import request from 'supertest';
import express from 'express';
import restaurantsRouter from './restaurants';
import { getRestaurants } from '@dreckly/data-access';

const mockGetRestaurants = getRestaurants as jest.MockedFunction<
  typeof getRestaurants
>;

const app = express();
app.use('/api/restaurants', restaurantsRouter);

describe('Restaurant Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/restaurants', () => {
    it('should return all restaurants', async () => {
      const mockRestaurants = [
        {
          id: 1,
          name: 'Test Restaurant',
          cuisine: 'Test Cuisine',
          rating: 4.5,
          deliveryTime: '30-45 min',
          deliveryFee: 2.99,
          minimumOrder: 10.0,
          featured: true,
          address: 'Test Address',
          description: 'Test Description',
          reviewCount: 50,
          menu: [],
        },
      ];

      mockGetRestaurants.mockResolvedValue(mockRestaurants);

      const response = await request(app).get('/api/restaurants').expect(200);

      expect(response.body).toEqual(mockRestaurants);
      expect(mockGetRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should return 500 when getRestaurants throws an error', async () => {
      const error = new Error('Database error');
      mockGetRestaurants.mockRejectedValue(error);

      const response = await request(app).get('/api/restaurants').expect(500);

      expect(response.body).toEqual({ error: 'Failed to fetch restaurants' });
      expect(mockGetRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('GET /api/restaurants/:id', () => {
    it('should return a specific restaurant by ID', async () => {
      const mockRestaurants = [
        {
          id: 1,
          name: 'Test Restaurant',
          cuisine: 'Test Cuisine',
          rating: 4.5,
          deliveryTime: '30-45 min',
          deliveryFee: 2.99,
          minimumOrder: 10.0,
          featured: true,
          address: 'Test Address',
          description: 'Test Description',
          reviewCount: 50,
          menu: [],
        },
      ];

      mockGetRestaurants.mockResolvedValue(mockRestaurants);

      const response = await request(app).get('/api/restaurants/1').expect(200);

      expect(response.body).toEqual(mockRestaurants[0]);
      expect(mockGetRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should return 404 when restaurant is not found', async () => {
      const mockRestaurants = [
        {
          id: 1,
          name: 'Test Restaurant',
          cuisine: 'Test Cuisine',
          rating: 4.5,
          deliveryTime: '30-45 min',
          deliveryFee: 2.99,
          minimumOrder: 10.0,
          featured: true,
          address: 'Test Address',
          description: 'Test Description',
          reviewCount: 50,
          menu: [],
        },
      ];

      mockGetRestaurants.mockResolvedValue(mockRestaurants);

      const response = await request(app)
        .get('/api/restaurants/999')
        .expect(404);

      expect(response.body).toEqual({ error: 'Restaurant not found' });
      expect(mockGetRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should return 500 when getRestaurants throws an error', async () => {
      const error = new Error('Database error');
      mockGetRestaurants.mockRejectedValue(error);

      const response = await request(app).get('/api/restaurants/1').expect(500);

      expect(response.body).toEqual({ error: 'Failed to fetch restaurant' });
      expect(mockGetRestaurants).toHaveBeenCalledTimes(1);
    });
  });
});
