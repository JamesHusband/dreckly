import { render, screen } from '@testing-library/react';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('should render with title only', () => {
    render(<SectionHeader title="Order Summary" />);
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
  });

  it('should render with title and subtitle', () => {
    render(
      <SectionHeader 
        title="Your Order" 
        subtitle="From Restaurant Name" 
      />
    );
    expect(screen.getByText('Your Order')).toBeInTheDocument();
    expect(screen.getByText('From Restaurant Name')).toBeInTheDocument();
  });

  it('should render with action', () => {
    render(
      <SectionHeader 
        title="From Restaurant" 
        action={<button>Add more items</button>}
      />
    );
    expect(screen.getByText('From Restaurant')).toBeInTheDocument();
    expect(screen.getByText('Add more items')).toBeInTheDocument();
  });

  it('should render with all props', () => {
    render(
      <SectionHeader 
        title="Order Summary" 
        subtitle="From Restaurant"
        action={<button>Action</button>}
      />
    );
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.getByText('From Restaurant')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('should not render subtitle when not provided', () => {
    render(<SectionHeader title="Order Summary" />);
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.queryByText('From Restaurant')).not.toBeInTheDocument();
  });

  it('should not render action when not provided', () => {
    render(<SectionHeader title="Order Summary" />);
    expect(screen.getByText('Order Summary')).toBeInTheDocument();
    expect(screen.queryByText('Action')).not.toBeInTheDocument();
  });
}); 