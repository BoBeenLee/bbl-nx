import { Rotate } from '@bbl-nx/faccs';
import React from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WithRotateProps {}

export function WithRotate<P>(
  TargetComponent: React.ComponentType<{
    motion: { xDeg: number; yDeg: number; zDeg: number };
  }>
) {
  return function WithRotate(props: P) {
    return (
      <Rotate>
        {({ xDeg, yDeg, zDeg }) => (
          <TargetComponent motion={{ xDeg, yDeg, zDeg }} {...props} />
        )}
      </Rotate>
    );
  };
}

export default WithRotate;
