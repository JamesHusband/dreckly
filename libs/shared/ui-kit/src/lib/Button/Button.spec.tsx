import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render button with correct value', () => {
    render(
      <Button value="Click me" variant="primary" onClick={() => jest.fn()} />
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render primary variant by default', () => {
    render(
      <Button
        value="Primary Button"
        variant="primary"
        onClick={() => jest.fn()}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-orange-500',
      'hover:bg-orange-600',
      'text-white'
    );
  });

  it('should render secondary variant', () => {
    render(
      <Button
        value="Secondary Button"
        variant="secondary"
        onClick={() => jest.fn()}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-gray-500',
      'hover:bg-gray-600',
      'text-white'
    );
  });

  it('should render outline variant', () => {
    render(
      <Button
        value="Outline Button"
        variant="outline"
        onClick={() => jest.fn()}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-transparent',
      'border-2',
      'border-orange-500',
      'text-orange-500'
    );
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button value="Click me" variant="primary" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <Button
        value="Disabled Button"
        variant="primary"
        onClick={() => jest.fn()}
        disabled
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50', 'cursor-not-allowed');
  });
});
