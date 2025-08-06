import { removeFromCart } from './removeFromCart';
import { CartItemType } from '@dreckly/shared-types';

describe('removeFromCart', () => {
  let mockSet: jest.Mock;

  beforeEach(() => {
    mockSet = jest.fn();
  });

  it('should remove item when quantity is 1', () => {
    const item: CartItemType = {
      id: 'item-1',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Test Item',
      price: 10.99,
      image: '/test-image.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 1,
    };

    const initialState = { cartItems: [item] };

    const action = removeFromCart(mockSet);
    action('item-1');

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [],
    });
  });

  it('should decrement quantity when quantity is greater than 1', () => {
    const item: CartItemType = {
      id: 'item-1',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Test Item',
      price: 10.99,
      image: '/test-image.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 3,
    };

    const initialState = { cartItems: [item] };

    const action = removeFromCart(mockSet);
    action('item-1');

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [{ ...item, quantity: 2 }],
    });
  });

  it('should return same state when item does not exist', () => {
    const item: CartItemType = {
      id: 'item-1',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Test Item',
      price: 10.99,
      image: '/test-image.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 1,
    };

    const initialState = { cartItems: [item] };

    const action = removeFromCart(mockSet);
    action('non-existent-item');

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual(initialState);
  });

  it('should handle multiple items correctly', () => {
    const item1: CartItemType = {
      id: 'item-1',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Test Item 1',
      price: 10.99,
      image: '/test-image-1.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 2,
    };

    const item2: CartItemType = {
      id: 'item-2',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Test Item 2',
      price: 5.99,
      image: '/test-image-2.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 1,
    };

    const initialState = { cartItems: [item1, item2] };

    const action = removeFromCart(mockSet);
    action('item-1');

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [{ ...item1, quantity: 1 }, item2],
    });
  });
});
