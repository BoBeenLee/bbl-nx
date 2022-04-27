/* eslint-disable react/display-name */
import { Provider } from "mobx-react";
import React, { Component } from "react";

import { IStore } from "~/stores/Store";

const withStore = (store: IStore) => (element: any): any => {
  return <Provider store={store}>{element}</Provider>;
};

export default withStore;
