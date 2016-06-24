'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reduxPromise = require('redux-promise');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _redux = require('redux');

var _index = require('./reducers/index');

var _index2 = _interopRequireDefault(_index);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// *

// Libary imports


var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxPromise2.default)(_redux.createStore);
var store = createStoreWithMiddleware(_index2.default, window.devToolsExtension && window.devToolsExtension());

// export default const App = () => (
//   <Router history={browserHistory} routes={routes} />
// );
exports.default = _routes2.default;