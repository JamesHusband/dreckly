import { clearCart } from './clearCart';

describe('clearCart', () => {
  let mockSet: jest.Mock;

  beforeEach(() => {
    mockSet = jest.fn();
  });

  it('should clear all items from cart', () => {
    const action = clearCart(mockSet);
    action();

    expect(mockSet).toHaveBeenCalledWith({ cartItems: [] });
  });

  it('should clear empty cart', () => {
    const action = clearCart(mockSet);
    action();

    expect(mockSet).toHaveBeenCalledWith({ cartItems: [] });
  });
});
