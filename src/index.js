// Libary imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import reducer from './reducers';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { setAdminURL, setBaseURl } from './actions';
import { logger } from './middleware';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { syncHistory, syncParams, routeParamsReducer } from 'react-router-redux-params'
// AdminActions.baseUrl = 'http://reactadmintestapi.herokuapp.com/api';


const rootReducer = combineReducers({
  routing: routeParamsReducer,
  reducer,
});

// Sync dispatched route actions to the history
const createStoreWithMiddleware = applyMiddleware(
  syncHistory(browserHistory)
)(createStore);

// const store = createStoreWithMiddleware(reducer);
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      ReduxPromise,
      logger
    ),
    window.devToolsExtension && window.devToolsExtension()
  )
);
const finalRoutes = routes(store);
syncParams(store, finalRoutes, browserHistory);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={finalRoutes} />
  </Provider>
, document.getElementById('main'));

export {
  routes,
  reducer,
};
