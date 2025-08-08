import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('should render with required props', () => {
    render(<PageHeader title="Your Order" size="medium" />);
    expect(screen.getByText('Your Order')).toBeInTheDocument();
  });

  it('should render with small size', () => {
    render(<PageHeader title="Small Header" size="small" />);
    expect(screen.getByText('Small Header')).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    render(<PageHeader title="Medium Header" size="medium" />);
    expect(screen.getByText('Medium Header')).toBeInTheDocument();
  });

  it('should render with large size', () => {
    render(<PageHeader title="Large Header" size="large" />);
    expect(screen.getByText('Large Header')).toBeInTheDocument();
  });

  it('should render centered', () => {
    render(<PageHeader title="Centered Header" centered />);
    expect(screen.getByText('Centered Header')).toBeInTheDocument();
  });

  it('should render with all props', () => {
    render(
      <PageHeader 
        title="Complete Header" 
        size="large" 
        centered 
      />
    );
    expect(screen.getByText('Complete Header')).toBeInTheDocument();
  });
}); 