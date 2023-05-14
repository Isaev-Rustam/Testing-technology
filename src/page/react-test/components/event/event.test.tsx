import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Events } from './event';

describe('test <Events/>', () => {
  beforeEach(() => {
    render(<Events />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render <Events/>/> await', async () => {
    const btnPlus = screen.getByRole('button', { name: '+' });
    const btnMinus = screen.getByRole('button', { name: '-' });
    expect(btnMinus).toBeDisabled();
    expect(btnPlus).not.toBeDisabled();
    expect(screen.queryByText(0)).toBeInTheDocument();
    // screen.debug();
    await userEvent.click(btnPlus);
    expect(screen.queryByText(1)).toBeInTheDocument();
    // screen.debug();
  });

  it('render <Events/>/> waitFor', () => {
    const btnPlus = screen.getByRole('button', { name: '+' });
    const btnMinus = screen.getByRole('button', { name: '-' });
    expect(btnMinus).toBeDisabled();
    expect(btnPlus).not.toBeDisabled();
    expect(screen.queryByText(0)).toBeInTheDocument();
    // screen.debug();
    fireEvent.click(btnPlus);
    waitFor(() => {
      expect(screen.queryByText(1)).toBeInTheDocument();
    });
    // screen.debug();
  });
});
