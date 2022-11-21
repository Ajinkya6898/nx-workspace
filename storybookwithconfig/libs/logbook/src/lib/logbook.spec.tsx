import { render } from '@testing-library/react';

import Logbook from './logbook';

describe('Logbook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Logbook />);
    expect(baseElement).toBeTruthy();
  });
});
