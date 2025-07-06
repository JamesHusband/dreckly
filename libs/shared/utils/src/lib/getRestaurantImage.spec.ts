import { getRestaurantImage } from './getRestaurantImage';

describe('getRestaurantImage', () => {
  it('should return the correct image path', () => {
    const image = getRestaurantImage('logo', 'Example Restaurant');
    expect(image).toBe(
      '/images/restaurant/example-restaurant/logo/example-restaurant.webp'
    );
  });
});
