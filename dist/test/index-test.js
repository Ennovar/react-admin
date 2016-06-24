'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Admin = require('../containers/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _reactRouter = require('react-router');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('../routes');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reducers = require('../reducers');

require('bootstrap-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.reducer); // import expect from 'expect';
// import ItemList from '../components/ItemList';
// import Admin from '../containers/Admin';


describe('ItemList', function () {
  // const router = routerObject()
  // beforeEach() {
  //   //setup our router
  //   render(router)
  // }
  it('should render', function () {
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store, key: 'provider' },
      _react2.default.createElement(_Admin2.default, null)
    ), document.body);
  });
});