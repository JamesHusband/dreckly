import { render } from '@testing-library/react';

import SharedLayout from './ClientLayout';

describe('SharedLayout', () => {
  it('should render successfully', () => {
    const { getByText } = render(<SharedLayout>Hello</SharedLayout>);
    expect(getByText('Hello')).toBeInTheDocument();
  });
});
