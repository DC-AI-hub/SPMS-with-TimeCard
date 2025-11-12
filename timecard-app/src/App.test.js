import { render, screen } from '@testing-library/react';
import AppWrapper from './App';

test('renders timecard management heading', () => {
  render(<AppWrapper />);
  const headingElement = screen.getByText(/timecard management/i);
  expect(headingElement).toBeInTheDocument();
});
