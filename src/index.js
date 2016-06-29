// Libary imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { reducer } from './reducers';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import AdminActions from './actions';
import { logger } from './middleware';

// AdminActions.baseUrl = 'http://reactadmintestapi.herokuapp.com/api';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);
const store = createStoreWithMiddleware(reducer,
  window.devToolsExtension && window.devToolsExtension()
);
// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(
//       ReduxPromise,
//       logger
//     ),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)} />
  </Provider>
, document.getElementById('main'));

export {
  routes,
  reducer,
};
