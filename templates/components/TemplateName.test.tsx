import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TemplateName from './templateName';

describe('<TemplateName />', () => {
  it('it should mount', () => {
    render(<TemplateName />);
  });
});
