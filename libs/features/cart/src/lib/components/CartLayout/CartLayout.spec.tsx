import { render, screen } from '@testing-library/react';
import { CartLayout } from './CartLayout';

describe('CartLayout', () => {
  it('should render', () => {
    render(<CartLayout>Test</CartLayout>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
