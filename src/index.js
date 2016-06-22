import { createStore } from 'redux';
import AdminReducer from './reducers/AdminReducer';
const initialState = {};

const store = createStore(AdminReducer, initialState,
      window.devToolsExtension && window.devToolsExtension()
);

export {
  store,
};
