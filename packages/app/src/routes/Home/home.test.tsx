import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  test('renders successfully', () => {
    render(<Home />);
    expect(screen.getByText(/test button/i)).toBeInTheDocument();
  });
});
