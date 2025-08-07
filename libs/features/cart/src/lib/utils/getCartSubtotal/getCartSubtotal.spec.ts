import { getCartSubtotal } from './getCartSubtotal';
import { useCartStore } from '@dreckly/state';

// Mock the store
jest.mock('@dreckly/state', () => ({
  useCartStore: {
    getState: jest.fn(),
  },
}));

describe('getCartSubtotal', () => {
  it('should return the subtotal of the cart', () => {
    const mockCartItems = [
      {
        id: '1',
        restaurantId: '1',
        restaurantName: 'Test Restaurant',
        name: 'Test Item',
        price: 10,
        quantity: 2,
        image: 'test.jpg',
        deliveryFee: 2.99,
        minimumOrder: 15.0,
      },
    ];

    (useCartStore.getState as jest.Mock).mockReturnValue({
      cartItems: mockCartItems,
    });

    expect(getCartSubtotal()).toBe(20);
  });
});
