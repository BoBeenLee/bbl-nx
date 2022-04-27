import React from "react";
import { Rotate } from "~/faccs";

function withRotate<P>(TargetComponent: any) {
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

export default withRotate;
