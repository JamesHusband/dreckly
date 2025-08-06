import { getCartItemCount } from './getCartItemCount';
import { CartItemType } from '@dreckly/shared-types';

describe('getCartItemCount', () => {
  let mockGet: jest.Mock;

  beforeEach(() => {
    mockGet = jest.fn();
  });

  it('should return 0 for empty cart', () => {
    mockGet.mockReturnValue({ cartItems: [] });

    const action = getCartItemCount(mockGet);
    const result = action();

    expect(result).toBe(0);
  });

  it('should count total items in cart', () => {
    const items: CartItemType[] = [
      {
        id: 'item-1',
        restaurantId: 'restaurant-1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item 1',
        price: 10.99,
        image: '/test-image-1.jpg',
        deliveryFee: 2.99,
        minimumOrder: 15.0,
        quantity: 2,
      },
      {
        id: 'item-2',
        restaurantId: 'restaurant-1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item 2',
        price: 5.99,
        image: '/test-image-2.jpg',
        deliveryFee: 2.99,
        minimumOrder: 15.0,
        quantity: 3,
      },
    ];

    mockGet.mockReturnValue({ cartItems: items });

    const action = getCartItemCount(mockGet);
    const result = action();

    expect(result).toBe(5);
  });

  it('should handle single item', () => {
    const items: CartItemType[] = [
      {
        id: 'item-1',
        restaurantId: 'restaurant-1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item',
        price: 10.99,
        image: '/test-image.jpg',
        deliveryFee: 2.99,
        minimumOrder: 15.0,
        quantity: 1,
      },
    ];

    mockGet.mockReturnValue({ cartItems: items });

    const action = getCartItemCount(mockGet);
    const result = action();

    expect(result).toBe(1);
  });

  it('should handle large quantities', () => {
    const items: CartItemType[] = [
      {
        id: 'item-1',
        restaurantId: 'restaurant-1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item',
        price: 10.99,
        image: '/test-image.jpg',
        deliveryFee: 2.99,
        minimumOrder: 15.0,
        quantity: 10,
      },
    ];

    mockGet.mockReturnValue({ cartItems: items });

    const action = getCartItemCount(mockGet);
    const result = action();

    expect(result).toBe(10);
  });
});
