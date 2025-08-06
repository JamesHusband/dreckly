import { useCartStore } from './cart-store';

jest.mock('../../actions/cart', () => ({
  addToCart: jest.fn(() => jest.fn()),
  removeFromCart: jest.fn(() => jest.fn()),
  updateQuantity: jest.fn(() => jest.fn()),
  clearCart: jest.fn(() => jest.fn()),
  getCartItemCount: jest.fn(() => jest.fn()),
  getCartSubtotal: jest.fn(() => jest.fn()),
}));

describe('Cart Store', () => {
  beforeEach(() => {
    useCartStore.setState({ cartItems: [] });
    jest.clearAllMocks();
  });

  it('should initialize with empty cart', () => {
    const state = useCartStore.getState();
    expect(state.cartItems).toEqual([]);
  });

  it('should have all required methods', () => {
    const state = useCartStore.getState();
    expect(typeof state.addItem).toBe('function');
    expect(typeof state.removeItem).toBe('function');
    expect(typeof state.updateItemQuantity).toBe('function');
    expect(typeof state.clearCartItems).toBe('function');
    expect(typeof state.getCartItemCount).toBe('function');
    expect(typeof state.getCartSubtotal).toBe('function');
  });
});
