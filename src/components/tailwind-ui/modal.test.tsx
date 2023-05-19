import { describe, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ModalTwUi from './modal';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);
describe('', () => {
  it('should ', async () => {
    render(<ModalTwUi />);
    expect(
      screen.getByRole('button', { name: /ModalTwUi/i })
    ).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /ModalTwUi/i }));

    expect(await screen.findByText(/Payment successful/i)).toBeInTheDocument();

    await userEvent.click(
      screen.getByRole('button', { name: /Got it, thanks!/i })
    );

    expect(
      screen.queryByRole('button', { name: /Payment successful/i })
    ).not.toBeInTheDocument();
    // screen.debug();
  });
});
