import { render } from '@testing-library/react';

import SharedGetData from './shared-get-data';

describe('SharedGetData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedGetData />);
    expect(baseElement).toBeTruthy();
  });
});
