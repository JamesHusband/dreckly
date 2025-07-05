import { render, screen } from '@testing-library/react';
import { CuisineFilter } from '.';

describe('CuisineFilter', () => {
  it('should render', () => {
    render(<CuisineFilter cuisineTypes={[]} />);
    expect(screen.getByText('What are you craving?')).toBeInTheDocument();
  });
});
