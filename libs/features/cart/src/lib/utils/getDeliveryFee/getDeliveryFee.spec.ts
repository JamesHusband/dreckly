import { getDeliveryFee } from './getDeliveryFee';
import { useRestaurantStore } from '@dreckly/state';

// Mock the store
jest.mock('@dreckly/state', () => ({
  useRestaurantStore: {
    getState: jest.fn(),
  },
}));

describe('getDeliveryFee', () => {
  const mockUseRestaurantStore = useRestaurantStore as jest.Mocked<
    typeof useRestaurantStore
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return delivery fee from selected restaurant', () => {
    const mockSelectedRestaurant = {
      id: 1,
      name: 'Test Restaurant',
      deliveryFee: 2.5,
    };

    mockUseRestaurantStore.getState.mockReturnValue({
      selectedRestaurant: mockSelectedRestaurant,
    } as any);

    const deliveryFee = getDeliveryFee();

    expect(deliveryFee).toBe(2.5);
  });

  it('should return 0 when no restaurant is selected', () => {
    mockUseRestaurantStore.getState.mockReturnValue({
      selectedRestaurant: null,
    } as any);

    const deliveryFee = getDeliveryFee();

    expect(deliveryFee).toBe(0);
  });
});
