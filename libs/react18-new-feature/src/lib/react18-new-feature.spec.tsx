import { render } from '@testing-library/react';

import React18NewFeature from './react18-new-feature';

describe('React18NewFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<React18NewFeature />);
    expect(baseElement).toBeTruthy();
  });
});
