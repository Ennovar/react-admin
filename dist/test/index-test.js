'use strict';

var _Admin = require('../containers/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../index');

var _reactRedux = require('react-redux');

require('bootstrap-loader');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import expect from 'expect';
// import ItemList from '../components/ItemList';


describe('ItemList', function () {
  it('should render', function () {
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: _index.store, key: 'provider' },
      _react2.default.createElement(_Admin2.default, null)
    ), document.body);
  });
});