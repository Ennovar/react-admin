// Libary imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { reducer } from './reducers';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes(store)} />
  </Provider>
, document.getElementById('main'));

export {
  routes,
  reducer,
};
