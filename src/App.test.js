import { render, screen } from '@testing-library/react';
import App from './App';

test('renders trocadilho awards text', () => {
  render(<App />);
  const linkElement = screen.getByText(/trocadilho awards/i);
  expect(linkElement).toBeInTheDocument();
});
