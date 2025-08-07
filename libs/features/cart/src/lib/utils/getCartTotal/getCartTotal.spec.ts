import { getCartTotal } from './getCartTotal';
import { useCartStore, useRestaurantStore } from '@dreckly/state';

// Mock the stores
jest.mock('@dreckly/state', () => ({
  useCartStore: {
    getState: jest.fn(),
  },
  useRestaurantStore: {
    getState: jest.fn(),
  },
}));

describe('getCartTotal', () => {
  const mockUseCartStore = useCartStore as jest.Mocked<typeof useCartStore>;
  const mockUseRestaurantStore = useRestaurantStore as jest.Mocked<
    typeof useRestaurantStore
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should calculate total with delivery and service fees', () => {
    const mockCartItems = [
      { id: '1', price: 10, quantity: 2 },
      { id: '2', price: 5, quantity: 1 },
    ];

    const mockSelectedRestaurant = {
      id: 1,
      name: 'Test Restaurant',
      deliveryFee: 2.5,
    };

    mockUseCartStore.getState.mockReturnValue({
      cartItems: mockCartItems,
    } as any);

    mockUseRestaurantStore.getState.mockReturnValue({
      selectedRestaurant: mockSelectedRestaurant,
    } as any);

    const total = getCartTotal();

    // Subtotal: (10 * 2) + (5 * 1) = 25
    // Delivery fee: 2.50
    // Service fee: 1.49
    // Total: 25 + 2.50 + 1.49 = 28.99
    expect(total).toBe(28.99);
  });

  it('should handle no selected restaurant', () => {
    const mockCartItems = [{ id: '1', price: 10, quantity: 1 }];

    mockUseCartStore.getState.mockReturnValue({
      cartItems: mockCartItems,
    } as any);

    mockUseRestaurantStore.getState.mockReturnValue({
      selectedRestaurant: null,
    } as any);

    const total = getCartTotal();

    // Subtotal: 10
    // Delivery fee: 0 (no restaurant)
    // Service fee: 1.49
    // Total: 10 + 0 + 1.49 = 11.49
    expect(total).toBe(11.49);
  });
});
