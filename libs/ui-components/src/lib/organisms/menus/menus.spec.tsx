import { render } from '@testing-library/react';

import Menus from './menus';

describe('Menus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menus
        open={true}
        data={[]}
        onNavigate={() => {
          // SOMETHING
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
