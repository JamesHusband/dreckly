import { render, screen, fireEvent } from '@testing-library/react';
import { ItemCounter } from './ItemCounter';

describe('ItemCounter', () => {
  const mockAddItem = jest.fn();
  const mockRemoveItem = jest.fn();

  beforeEach(() => {
    mockAddItem.mockClear();
    mockRemoveItem.mockClear();
  });

  it('should render with correct quantity', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={3}
      />
    );

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should call addItem when plus button is clicked', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={1}
      />
    );

    const buttons = screen.getAllByRole('button');
    const plusButton = buttons[1]; // Second button is the plus button
    fireEvent.click(plusButton);

    expect(mockAddItem).toHaveBeenCalledTimes(1);
  });

  it('should call removeItem when minus button is clicked', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={2}
      />
    );

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0]; // First button is the minus button
    fireEvent.click(minusButton);

    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });

  it('should render with quantity 0', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={0}
      />
    );

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('should render with large quantity', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={99}
      />
    );

    expect(screen.getByText('99')).toBeInTheDocument();
  });

  it('should call functions multiple times when buttons are clicked repeatedly', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={5}
      />
    );

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0]; // First button is the minus button
    const plusButton = buttons[1]; // Second button is the plus button

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(minusButton);

    expect(mockAddItem).toHaveBeenCalledTimes(2);
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  });

  it('should have correct button styling classes', () => {
    render(
      <ItemCounter
        addItem={mockAddItem}
        removeItem={mockRemoveItem}
        quantity={1}
      />
    );

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0];
    const plusButton = buttons[1];

    expect(minusButton).toHaveClass('border', 'border-gray-300');
    expect(plusButton).toHaveClass('bg-orange-500', 'text-white');
  });
});
