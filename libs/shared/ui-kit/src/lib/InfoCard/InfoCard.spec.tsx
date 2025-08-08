import { render, screen } from '@testing-library/react';
import { InfoCard } from './InfoCard';

describe('InfoCard', () => {
  it('should render with children', () => {
    render(<InfoCard>Test content</InfoCard>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should render with default variant', () => {
    render(<InfoCard>Test content</InfoCard>);
    const infoCard = screen.getByText('Test content').parentElement;
    expect(infoCard).toHaveClass('bg-blue-50', 'text-blue-700');
  });

  it('should render with success variant', () => {
    render(<InfoCard variant="success">Test content</InfoCard>);
    const infoCard = screen.getByText('Test content').parentElement;
    expect(infoCard).toHaveClass('bg-green-50', 'text-green-700');
  });

  it('should render with warning variant', () => {
    render(<InfoCard variant="warning">Test content</InfoCard>);
    const infoCard = screen.getByText('Test content').parentElement;
    expect(infoCard).toHaveClass('bg-yellow-50', 'text-yellow-700');
  });

  it('should render with custom className', () => {
    render(<InfoCard className="custom-class">Test content</InfoCard>);
    const infoCard = screen.getByText('Test content').parentElement;
    expect(infoCard).toHaveClass('custom-class');
  });

  it('should render with flex layout', () => {
    render(<InfoCard>Test content</InfoCard>);
    const flexContainer = screen.getByText('Test content').closest('div');
    expect(flexContainer).toHaveClass('flex', 'items-center', 'gap-2');
  });
}); 