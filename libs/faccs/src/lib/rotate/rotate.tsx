import React from 'react';
import { isBrowser } from '@bbl-nx/utils';

export interface RotateProps {
  children: ({
    xDeg,
    yDeg,
    zDeg,
  }: {
    xDeg: number;
    yDeg: number;
    zDeg: number;
  }) => React.ReactNode;
}

interface RotateStates {
  alpha: number;
  beta: number;
  gamma: number;
  orientation: number;
}

export class Rotate extends React.Component<RotateProps, RotateStates> {
  constructor(props: RotateProps) {
    super(props);
    this.state = {
      alpha: 0,
      beta: 0,
      gamma: 0,
      orientation: 0,
    };
  }

  public override componentDidMount() {
    if (!this.hasDeviceOrientation()) {
      return;
    }
    const orientation = isBrowser ? Number(window.orientation) : 0;

    if (isBrowser) {
      window.addEventListener(
        'deviceorientation',
        (ev) => {
          const { alpha, beta, gamma } = ev;
          this.setState({
            alpha: alpha ?? 0,
            beta: beta ?? 0,
            gamma: gamma ?? 0,
          });
        },
        false
      );
      window.addEventListener(
        'orientationchange',
        (ev) => {
          this.setState({ orientation: orientation ?? 0 });
        },
        false
      );
    }
  }

  public override render() {
    const xDeg = this.getXDeg();
    const yDeg = this.getYDeg();
    const zDeg = this.getZDeg();
    return this.props.children({ xDeg, yDeg, zDeg });
  }

  private hasDeviceOrientation = () =>
    isBrowser && !!window.DeviceOrientationEvent;

  private getX() {
    return this.state.gamma || 0;
  }

  private getY() {
    return this.state.beta || 0;
  }

  private getOrientZ() {
    return this.state.alpha || 0;
  }

  /**
   * @returns {Number} Value of X in degrees, corrected for device orientation.
   */
  private getXDeg() {
    switch (this.state.orientation) {
      case 90:
        return -this.getX();
      case 0:
        return this.getY();
      case -90:
        return this.getX();
      case 180:
        return this.getY();
      default:
        throw new Error('Not expected XDeg');
    }
  }

  /**
   * @returns {Number} Value of Y in degrees, corrected for device orientation.
   */
  private getYDeg() {
    switch (this.state.orientation) {
      case 90:
        return -this.getY();
      case 0:
        return -this.getX();
      case -90:
        return this.getY();
      case 180:
        return this.getX();
      default:
        throw new Error('Not expected YDeg');
    }
  }

  /**
   * @returns {Number} Value of Z in degrees, corrected for device orientation.
   */
  private getZDeg() {
    return this.getOrientZ();
  }
}

export default Rotate;
