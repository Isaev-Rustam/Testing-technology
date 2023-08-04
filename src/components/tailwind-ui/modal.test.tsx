import { describe, vi } from 'vitest';
import { screen, render, act } from '@testing-library/react';

import ModalTwUi from './modal';

const ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

vi.stubGlobal('ResizeObserver', ResizeObserver);
describe('', () => {
  it('should ', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(<ModalTwUi closeModal={vi.fn()} isOpen />));
    expect(
      screen.getByRole('button', { name: /Got it, thanks!/i })
    ).toBeInTheDocument();
    // await userEvent.click(screen.getByRole('button', { name: /ModalTwUi/i }));
    //
    // expect(await screen.findByText(/Payment successful/i)).toBeInTheDocument();
    //
    // await userEvent.click(
    //   screen.getByRole('button', { name: /Got it, thanks!/i })
    // );
    //
    // expect(
    //   screen.queryByRole('button', { name: /Payment successful/i })
    // ).not.toBeInTheDocument();
    // screen.debug();
  });
});
