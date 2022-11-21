import { render } from '@testing-library/react';

import Uibtn from './uibtn';

describe('Uibtn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Uibtn />);
    expect(baseElement).toBeTruthy();
  });
});
