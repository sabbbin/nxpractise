import { render } from '@testing-library/react';

import GoogleLoginFrontend from './GoogleLoginFrontend';

describe('GoogleLoginFrontend', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleLoginFrontend />);
    expect(baseElement).toBeTruthy();
  });
});
