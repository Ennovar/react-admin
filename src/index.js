// Libary imports
import React from 'react';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux'; // *


import reducer from './reducers/index';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer,
  window.devToolsExtension && window.devToolsExtension()
);

// export default const App = () => (
//   <Router history={browserHistory} routes={routes} />
// );
export default routes
