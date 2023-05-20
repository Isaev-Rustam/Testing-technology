import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Act from './act';

describe('test <Act/>', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('render <Act/> act()', () => {
    render(<Act />);
    fireEvent.click(screen.getByRole('button', { name: /btn/i }));
    act(() => vi.advanceTimersByTime(2000));
    expect(screen.getByText(/lorem/i)).toBeInTheDocument();
    screen.getByRole('button', { name: /XbtnX/i });
  });
});
