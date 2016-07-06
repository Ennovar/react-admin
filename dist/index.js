'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reducers = require('./reducers');

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _redux = require('redux');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _middleware = require('./middleware');

var _reactRouterRedux = require('react-router-redux');

var _reactRouterReduxParams = require('react-router-redux-params');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// AdminActions.baseUrl = 'http://reactadmintestapi.herokuapp.com/api';

// Libary imports
var reducer = (0, _redux.combineReducers)(Object.assign({}, _reducers.reducers, {
  routing: _reactRouterReduxParams.routeParamsReducer,
  reducers: _reducers.reducers
}));

// Sync dispatched route actions to the history
var createStoreWithMiddleware = (0, _redux.applyMiddleware)((0, _reactRouterReduxParams.syncHistory)(_reactRouter.browserHistory))(_redux.createStore);

// const store = createStoreWithMiddleware(reducer);
var store = (0, _redux.createStore)(reducer, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxPromise2.default, _middleware.logger), window.devToolsExtension ? window.devToolsExtension() : function (f) {
  return f;
}));
var finalRoutes = (0, _routes2.default)(store);
(0, _reactRouterReduxParams.syncParams)(store, finalRoutes, _reactRouter.browserHistory);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: finalRoutes })
), document.getElementById('main'));

exports.routes = _routes2.default;
exports.reducer = reducer;