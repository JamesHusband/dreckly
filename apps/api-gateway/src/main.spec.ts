import request from 'supertest';
import { app } from './main';

jest.mock('./routes', () => ({
  restaurants: jest.fn(),
  cuisines: jest.fn(),
}));

describe('API Gateway Integration Tests', () => {
  describe('Health Check', () => {
    it('should return healthy status', async () => {
      const response = await request(app).get('/health').expect(200);

      expect(response.body).toEqual({ status: 'healthy' });
    });
  });

  describe('App Configuration', () => {
    it('should have CORS configured', async () => {
      const response = await request(app).get('/health').expect(200);

      expect(response.headers['access-control-allow-origin']).toBeDefined();
    });

    it('should have routes mounted', () => {
      expect(app._router.stack).toBeDefined();
      const routes = app._router.stack
        .filter((layer: { route?: unknown }) => layer.route)
        .map((layer: { route: { path: string } }) => layer.route.path);

      expect(routes).toContain('/health');
    });
  });
});
