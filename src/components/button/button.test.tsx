import { render, screen } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import Button from './button';

describe('<Button />', () => {
  it('it should mount', async () => {
    const fn = vi.fn();
    render(<Button handlerBtn={fn}>btn</Button>);
    await userEvent.click(screen.getByRole('button', { name: /btn/i }));
    expect(fn).toBeCalledTimes(1);
  });
});
