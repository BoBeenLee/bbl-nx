import { render } from '@testing-library/react';
import _ from 'lodash';

import Menu from './menu';

describe('Menu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menu isOpen={true} menus={[]} onToggleMenu={_.identity} />
    );
    expect(baseElement).toBeTruthy();
  });
});
