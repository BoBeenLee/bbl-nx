/* eslint-disable @typescript-eslint/no-empty-function */
import Router from "next/router";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const mockedRouter = {
  push: () => {},
  replace: () => {},
  prefetch: () => {}
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Router.router = mockedRouter as any;
