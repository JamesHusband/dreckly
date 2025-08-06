import { addToCart } from './addToCart';
import { CartItemType } from '@dreckly/shared-types';

describe('addToCart', () => {
  let mockSet: jest.Mock;

  beforeEach(() => {
    mockSet = jest.fn();
  });

  it('should add a new item to empty cart', () => {
    const initialState = { cartItems: [] };
    const newItem: CartItemType = {
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

    const action = addToCart(mockSet);
    action(newItem);

    expect(mockSet).toHaveBeenCalledWith(expect.any(Function));

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [newItem],
    });
  });

  it('should increment quantity when item already exists', () => {
    const existingItem: CartItemType = {
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

    const initialState = { cartItems: [existingItem] };
    const newItem: CartItemType = {
      ...existingItem,
      quantity: 1,
    };

    const action = addToCart(mockSet);
    action(newItem);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [{ ...existingItem, quantity: 3 }],
    });
  });

  it('should add new item when item does not exist', () => {
    const existingItem: CartItemType = {
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

    const initialState = { cartItems: [existingItem] };
    const newItem: CartItemType = {
      id: 'item-2',
      restaurantId: 'restaurant-1',
      restaurantName: 'Test Restaurant',
      name: 'Another Item',
      price: 5.99,
      image: '/another-image.jpg',
      deliveryFee: 2.99,
      minimumOrder: 15.0,
      quantity: 1,
    };

    const action = addToCart(mockSet);
    action(newItem);

    const setFunction = mockSet.mock.calls[0][0];
    const result = setFunction(initialState);

    expect(result).toEqual({
      cartItems: [existingItem, newItem],
    });
  });
});
