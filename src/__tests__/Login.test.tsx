
import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../components/Login';

test('login success', async () => {
  render(<Login />);
  fireEvent.click(screen.getByText(/login/i));
});
