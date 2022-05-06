import type { Component } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type MakeData<IProps, IStates, T> = (
  props: IProps,
  state: IStates,
  args: any
) => T | Promise<T>;

export function createInjectDecorator<IProps, IStates, T>(
  func: MakeData<IProps, IStates, T>
): any {
  return function InjectFunc(__: any, propName: any, descriptor: any) {
    const isArrowFunction = !!descriptor.initializer;
    if (isArrowFunction) {
      return injectFuncInArrow(propName, descriptor, func);
    }

    return injectFuncInMethod(propName, descriptor, func);
  };
}

function injectFuncInArrow<IProps, IStates, T>(
  propName: string,
  descriptor: any,
  func: MakeData<IProps, IStates, T>
) {
  function initializerProp($this: Component<IProps, IStates>) {
    return (...args: any[]) => {
      func($this.props, $this.state, args);
      const result = descriptor.initializer.apply($this)(...args);
      return result;
    };
  }

  return {
    ...descriptor,
    initializer() {
      return (this[propName] = initializerProp(this));
    },
  };
}

function injectFuncInMethod<IProps, IStates, T>(
  propsName: string,
  descriptor: any,
  func: MakeData<IProps, IStates, T>
) {
  return {
    ...descriptor,
    value(...args: any[]) {
      func(this.props, this.state, args);
      const result = descriptor.value.apply(this, args);
      return result;
    },
  };
}
