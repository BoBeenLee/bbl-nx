import { flow, types } from 'mobx-state-tree';

const Store = types.model({}).actions((self) => {
  const initializeApp = flow(function* () {
    // TODO
  });
  return { initializeApp };
});

export type IStore = typeof Store.Type;

let store: IStore | null = null;
const getRootStore = (): IStore => {
  if (store === null) {
    store = Store.create({});
  }
  return store;
};

export default Store;
export { getRootStore };
