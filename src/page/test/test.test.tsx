import { describe, vi } from 'vitest';

import { square } from './test';

describe('Base Test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('square', () => {
    const spy = vi.spyOn(Math, 'sqrt');
    expect(square(3)).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('square', () => {
    const spy = vi.spyOn(Math, 'sqrt');
    expect(square(4)).toBe(2);
    expect(spy).toHaveBeenCalled();
    expect(square(4)).toMatchSnapshot();
  });
});
