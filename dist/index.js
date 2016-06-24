'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.routes = undefined;

var _reducers = require('./reducers');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default const App = () => (
//   <Router history={browserHistory} routes={routes} />
// );
// Libary imports
exports.routes = _routes2.default;
exports.reducer = _reducers.reducer;