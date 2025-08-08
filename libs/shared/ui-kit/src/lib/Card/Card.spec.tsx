import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('should render with children', () => {
    render(<Card>Test content</Card>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should render with default variant', () => {
    render(<Card>Test content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-sm');
  });

  it('should render with elevated variant', () => {
    render(<Card variant="elevated">Test content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-md');
  });

  it('should render with outlined variant', () => {
    render(<Card variant="outlined">Test content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-none');
  });

  it('should render with sticky positioning', () => {
    render(<Card sticky>Test content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('sticky', 'top-24');
  });

  it('should render with hidden overflow', () => {
    render(<Card overflow="hidden">Test content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('overflow-hidden');
  });

  it('should render with visible overflow by default', () => {
    render(<Card>Test content</Card>);
    const card = screen.getByTestId('card');
    expect(card).not.toHaveClass('overflow-hidden');
  });
});
