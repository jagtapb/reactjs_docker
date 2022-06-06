import { render, screen } from '@testing-library/react';
import App from './App';

test('Bhushan', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bhushan/i);
  expect(linkElement).toBeInTheDocument();
});
