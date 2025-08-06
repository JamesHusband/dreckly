import { getCartSubtotal } from './getCartSubtotal';
import { CartItemType } from '@dreckly/shared-types';

describe('getCartSubtotal', () => {
  let mockGet: jest.Mock;

  beforeEach(() => {
    mockGet = jest.fn();
  });

  it('should return 0 for empty cart', () => {
    mockGet.mockReturnValue({ cartItems: [] });

    const action = getCartSubtotal(mockGet);
    const result = action();

    expect(result).toBe(0);
  });

  it('should calculate subtotal for single item', () => {
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
        quantity: 2,
      },
    ];

    mockGet.mockReturnValue({ cartItems: items });

    const action = getCartSubtotal(mockGet);
    const result = action();

    expect(result).toBe(21.98);
  });

  it('should calculate subtotal for multiple items', () => {
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

    const action = getCartSubtotal(mockGet);
    const result = action();

    expect(result).toBe(39.95);
  });

  it('should handle decimal precision correctly', () => {
    const items: CartItemType[] = [
      {
        id: 'item-1',
        restaurantId: 'restaurant-1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item',
        price: 3.33,
        image: '/test-image.jpg',
        deliveryFee: 2.99,
        minimumOrder: 15.0,
        quantity: 3,
      },
    ];

    mockGet.mockReturnValue({ cartItems: items });

    const action = getCartSubtotal(mockGet);
    const result = action();

    expect(result).toBe(9.99);
  });
});
