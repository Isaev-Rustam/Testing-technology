import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import VirtualScroll from './virtualScroll';

describe('<VirtualScroll />', () => {
  it('it should mount', () => {
    render(<VirtualScroll />);
  });
});
