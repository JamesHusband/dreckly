import { render, screen } from '@testing-library/react';
import { MinimumOrderNotice } from './MinimumOrderNotice';

describe('MinimumOrderNotice', () => {
  it('should render the minimum order notice', () => {
    render(<MinimumOrderNotice minOrder={10} />);
    expect(screen.getByText('Minimum order: £10')).toBeInTheDocument();
  });
});
