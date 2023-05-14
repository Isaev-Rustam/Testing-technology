import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import userEvent from '@testing-library/user-event';

import Yup from './yup';

describe('test <Yup/> component', () => {
  it('should firstName error', async () => {
    render(<Yup />);

    await userEvent.type(screen.getByPlaceholderText(/firstName/i), '123');
    fireEvent.blur(screen.getByPlaceholderText(/firstName/i));
    expect(
      await screen.findByText(/Please enter valid name/i)
    ).toBeInTheDocument();
  });
  it('should age error', async () => {
    render(<Yup />);
    await userEvent.type(screen.getByPlaceholderText(/age/i), 'adc');
    fireEvent.blur(screen.getByPlaceholderText(/age/i));
    expect(await screen.findByText(/Enter the number/i)).toBeInTheDocument();
    await userEvent.clear(screen.getByPlaceholderText(/age/i));

    await userEvent.type(screen.getByPlaceholderText(/age/i), '-656');
    fireEvent.blur(screen.getByPlaceholderText(/age/i));
    expect(await screen.findByText(/positive number/i)).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
  });
  it('should screen error message', async () => {
    render(<Yup />);
    await userEvent.click(screen.getByRole('button', { name: /btn/i }));
    expect(screen.getByText(/is required/i)).toBeInTheDocument();
    expect(screen.getByText(/enter the number/i)).toBeInTheDocument();
  });
  it('should screen error message findBy', async () => {
    render(<Yup />);
    fireEvent.click(screen.getByRole('button', { name: /btn/i }));
    expect(await screen.findByText(/is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/enter the number/i)).toBeInTheDocument();
  });
});
