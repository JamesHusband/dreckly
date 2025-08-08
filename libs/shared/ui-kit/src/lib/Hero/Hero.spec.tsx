import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('should render heading and content', () => {
    render(
      <Hero heading="Welcome to our app" content="This is the hero content" />
    );

    expect(screen.getByText('Welcome to our app')).toBeInTheDocument();
    expect(screen.getByText('This is the hero content')).toBeInTheDocument();
  });
});
