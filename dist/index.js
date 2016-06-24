'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = require('redux');

var _AdminReducer = require('./reducers/AdminReducer');

var _AdminReducer2 = _interopRequireDefault(_AdminReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_AdminReducer2.default, window.devToolsExtension && window.devToolsExtension());

exports.store = store;