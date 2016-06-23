import { createStore } from 'redux';
import AdminReducer from './reducers/AdminReducer';

const store = createStore(AdminReducer,
      window.devToolsExtension && window.devToolsExtension()
);

export {
  store,
};
