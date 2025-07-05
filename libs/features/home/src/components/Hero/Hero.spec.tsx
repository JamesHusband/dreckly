import { render, screen } from '@testing-library/react';
import { Hero } from '.';

describe('Hero', () => {
  it('should render', () => {
    render(<Hero />);
    expect(screen.getByText('Drecktly to your door')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Discover the best Cornish food delivered straight to your doorstep'
      )
    ).toBeInTheDocument();

});
});
