import { render } from '@testing-library/react';

import LayoutTemplate from './layout-template';

describe('LayoutTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LayoutTemplate asPath="" onNavigate={() => {
        // SOMETHING
      }}>
        <div>hello</div>
      </LayoutTemplate>
    );
    expect(baseElement).toBeTruthy();
  });
});
