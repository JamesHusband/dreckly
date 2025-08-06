import { updateQuantity } from './updateQuantity';
import { CartItemType } from '@dreckly/shared-types';

describe('updateQuantity', () => {
  let mockSet: jest.Mock;

  beforeEach(() => {
    mockSet = jest.fn();
  });

  it('should update quantity when quantity is greater than 0', () => {
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

    const action = updateQuantity(mockSet);
    action('item-1', 3);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [{ ...item, quantity: 3 }],
    });
  });

  it('should remove item when quantity is 0', () => {
    const item: CartItemType = {
      id: 'item-1',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Test Item',
      price: 10.99,
      image: '/test-image.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 2,
    };

    const initialState = { cartItems: [item] };

    const action = updateQuantity(mockSet);
    action('item-1', 0);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [],
    });
  });

  it('should remove item when quantity is negative', () => {
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

    const action = updateQuantity(mockSet);
    action('item-1', -1);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [],
    });
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

    const action = updateQuantity(mockSet);
    action('item-1', 5);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [{ ...item1, quantity: 5 }, item2],
    });
  });

  it('should not affect other items when updating quantity', () => {
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

    const action = updateQuantity(mockSet);
    action('item-2', 3);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [item1, { ...item2, quantity: 3 }],
    });
  });
});
