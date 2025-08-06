import { useRestaurantStore } from './restaurant-store';

jest.mock('../../actions/restaurant', () => ({
  setRestaurants: jest.fn(() => jest.fn()),
  setCuisines: jest.fn(() => jest.fn()),
  setSelectedRestaurant: jest.fn(() => jest.fn()),
  setSelectedCuisine: jest.fn(() => jest.fn()),
  setLoading: jest.fn(() => jest.fn()),
  setError: jest.fn(() => jest.fn()),
  filterByCuisine: jest.fn(() => jest.fn()),
  clearFilters: jest.fn(() => jest.fn()),
  getRestaurantById: jest.fn(() => jest.fn()),
}));

describe('Restaurant Store', () => {
  beforeEach(() => {
    useRestaurantStore.setState({
      restaurants: [],
      cuisines: [],
      selectedRestaurant: null,
      selectedCuisine: null,
      loading: false,
      error: null,
    });
    jest.clearAllMocks();
  });

  it('should initialize with empty state', () => {
    const state = useRestaurantStore.getState();
    expect(state.restaurants).toEqual([]);
    expect(state.cuisines).toEqual([]);
    expect(state.selectedRestaurant).toBeNull();
    expect(state.selectedCuisine).toBeNull();
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('should have all required methods', () => {
    const state = useRestaurantStore.getState();
    expect(typeof state.setRestaurants).toBe('function');
    expect(typeof state.setCuisines).toBe('function');
    expect(typeof state.setSelectedRestaurant).toBe('function');
    expect(typeof state.setSelectedCuisine).toBe('function');
    expect(typeof state.setLoading).toBe('function');
    expect(typeof state.setError).toBe('function');
    expect(typeof state.filterByCuisine).toBe('function');
    expect(typeof state.clearFilters).toBe('function');
    expect(typeof state.getRestaurantById).toBe('function');
  });
});
