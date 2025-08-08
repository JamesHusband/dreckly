import { render, screen } from '@testing-library/react';
import { Status } from './Status';

describe('Status', () => {
  it('should render loading status', () => {
    render(<Status type="loading" message="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error status', () => {
    render(<Status type="error" message="Failed to fetch data" />);
    expect(screen.getByText('Error: Failed to fetch data')).toBeInTheDocument();
  });

  it('should have correct styling for error status', () => {
    render(<Status type="error" message="Error message" />);
    const messageElement = screen.getByText('Error: Error message');
    expect(messageElement).toHaveClass('text-lg', 'text-red-600');
  });
});
