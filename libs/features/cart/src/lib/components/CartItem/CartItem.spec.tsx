import { render, screen, fireEvent } from '@testing-library/react';
import { CartItem } from './CartItem';

jest.mock('@dreckly/shared-ui-kit', () => ({
  FoodIcon: ({ name }: { name: string }) => (
    <div data-testid="food-icon">Food Icon</div>
  ),
  ItemCounter: ({ quantity, addItem, removeItem }: any) => (
    <div data-testid="item-counter">
      <button data-testid="add-item" onClick={addItem}>
        Add
      </button>
      <span data-testid="quantity">{quantity}</span>
      <button data-testid="remove-item" onClick={removeItem}>
        Remove
      </button>
    </div>
  ),
}));

describe('CartItem', () => {
  const mockItem = {
    id: '1',
    restaurantId: '1',
    restaurantName: 'Test Restaurant',
    name: 'Test Item',
    price: 10.99,
    quantity: 2,
    image: '/test.jpg',
  };

  const mockUpdateQuantity = jest.fn();
  const mockRemoveItem = jest.fn();

  beforeEach(() => {
    mockUpdateQuantity.mockClear();
    mockRemoveItem.mockClear();
  });

  it('should render cart item with correct information', () => {
    render(
      <CartItem
        item={mockItem}
        updateQuantity={mockUpdateQuantity}
        removeItem={mockRemoveItem}
      />
    );

    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('£10.99 each')).toBeInTheDocument();
    expect(screen.getByText('£21.98')).toBeInTheDocument();
    expect(screen.getByTestId('food-icon')).toBeInTheDocument();
    expect(screen.getByTestId('item-counter')).toBeInTheDocument();
  });

  it('should call updateQuantity when add item is clicked', () => {
    render(
      <CartItem
        item={mockItem}
        updateQuantity={mockUpdateQuantity}
        removeItem={mockRemoveItem}
      />
    );

    const addButton = screen.getByTestId('add-item');
    fireEvent.click(addButton);

    expect(mockUpdateQuantity).toHaveBeenCalledWith('1', 3);
  });

  it('should call updateQuantity when remove item is clicked', () => {
    render(
      <CartItem
        item={mockItem}
        updateQuantity={mockUpdateQuantity}
        removeItem={mockRemoveItem}
      />
    );

    const removeButton = screen.getByTestId('remove-item');
    fireEvent.click(removeButton);

    expect(mockUpdateQuantity).toHaveBeenCalledWith('1', 1);
  });

  it('should call removeItem when trash button is clicked', () => {
    render(
      <CartItem
        item={mockItem}
        updateQuantity={mockUpdateQuantity}
        removeItem={mockRemoveItem}
      />
    );

    const buttons = screen.getAllByRole('button');
    const trashButton = buttons[buttons.length - 1];
    fireEvent.click(trashButton);

    expect(mockRemoveItem).toHaveBeenCalledWith('1');
  });

  it('should display correct total price', () => {
    const itemWithQuantity = { ...mockItem, quantity: 3 };

    render(
      <CartItem
        item={itemWithQuantity}
        updateQuantity={mockUpdateQuantity}
        removeItem={mockRemoveItem}
      />
    );

    expect(screen.getByText('£32.97')).toBeInTheDocument();
  });
});
