'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _ItemList = require('../components/ItemList');

var _ItemList2 = _interopRequireDefault(_ItemList);

var _BooleanField = require('../components/BooleanField');

var _BooleanField2 = _interopRequireDefault(_BooleanField);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../index');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ItemList", function () {
  it("should render", function () {
    _reactDom2.default.render(_react2.default.createElement(
      _reactRedux.Provider,
      { store: _index.store, key: 'provider' },
      _react2.default.createElement(_BooleanField2.default, null)
    ), document.body);
  });
});

describe("BooleanField", function () {
  it("should render", function () {});
});