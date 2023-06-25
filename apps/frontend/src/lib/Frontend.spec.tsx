import { render } from '@testing-library/react';

import Frontend from './Frontend';

describe('Frontend', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Frontend />);
    expect(baseElement).toBeTruthy();
  });
});
