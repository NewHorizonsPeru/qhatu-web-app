import { createStore } from 'redux';
import qhatuReducer from '../reducers/qhatuReducer';

const qhatuState = {};

const qhatuStore = createStore(
  qhatuReducer,
  qhatuState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default qhatuStore;
