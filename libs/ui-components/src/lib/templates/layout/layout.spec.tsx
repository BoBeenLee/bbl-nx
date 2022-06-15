import { render } from '@testing-library/react';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Layout>
        <div>test</div>
      </Layout>
    );
    expect(baseElement).toBeTruthy();
  });
});
