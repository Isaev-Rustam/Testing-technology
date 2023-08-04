import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Picture from './picture';

describe('<Picture />', () => {
  it('it should mount', () => {
    render(<Picture />);
  });
});
