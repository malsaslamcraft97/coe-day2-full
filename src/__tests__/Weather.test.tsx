
import { render, screen, waitFor } from '@testing-library/react';
import { Weather } from '../components/Weather';

test('shows loading', () => {
  render(<Weather />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('shows data', async () => {
  render(<Weather />);
  await waitFor(() => {
    expect(screen.getByText(/°C/)).toBeInTheDocument();
  });
});
