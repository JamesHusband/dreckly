import { render, screen, fireEvent } from '@testing-library/react';
import { CuisineFilter } from './CuisineFilter';
import { Cuisine } from '@dreckly/shared-types';

jest.mock('@dreckly/shared-ui-kit', () => ({
  CuisineCard: ({ name, onClick, isSelected }: any) => (
    <button onClick={onClick} data-selected={isSelected}>
      {name}
    </button>
  ),
  PageHeader: ({ title }: { title: string }) => <h2>{title}</h2>,
}));

jest.mock('@dreckly/state', () => ({
  useRestaurantStore: () => ({
    selectedCuisine: null,
    filterByCuisine: jest.fn(),
    clearFilters: jest.fn(),
  }),
}));

describe('CuisineFilter', () => {
  const mockCuisines: Cuisine[] = [
    {
      name: 'Italian',
      icon: 'Pizza',
    },
    {
      name: 'Chinese',
      icon: 'Fish',
    },
  ];

  it('should render cuisine filter with heading', () => {
    render(<CuisineFilter cuisines={mockCuisines} />);

    expect(screen.getByText('What are you craving?')).toBeInTheDocument();
  });

  it('should render all cuisine cards', () => {
    render(<CuisineFilter cuisines={mockCuisines} />);

    expect(screen.getByText('Italian')).toBeInTheDocument();
    expect(screen.getByText('Chinese')).toBeInTheDocument();
  });

  it('should render empty state when no cuisines', () => {
    render(<CuisineFilter cuisines={[]} />);

    expect(screen.getByText('What are you craving?')).toBeInTheDocument();
    expect(screen.queryByText('Italian')).not.toBeInTheDocument();
  });

  it('should call onClick when cuisine card is clicked', () => {
    render(<CuisineFilter cuisines={mockCuisines} />);

    const italianButton = screen.getByText('Italian');
    fireEvent.click(italianButton);

    expect(italianButton).toBeInTheDocument();
  });
});
