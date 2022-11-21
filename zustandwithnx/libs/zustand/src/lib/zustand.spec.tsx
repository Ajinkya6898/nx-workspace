import { render } from '@testing-library/react';

import Zustand from './zustand';

describe('Zustand', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Zustand />);
    expect(baseElement).toBeTruthy();
  });
});
