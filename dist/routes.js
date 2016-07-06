'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Admin = require('./containers/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _Index = require('./containers/Index');

var _Index2 = _interopRequireDefault(_Index);

var _New = require('./containers/New');

var _New2 = _interopRequireDefault(_New);

var _View = require('./containers/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


var SomeComponent = function (_React$Component) {
  _inherits(SomeComponent, _React$Component);

  function SomeComponent() {
    _classCallCheck(this, SomeComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SomeComponent).apply(this, arguments));
  }

  _createClass(SomeComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          'Hello Admin'
        )
      );
    }
  }]);

  return SomeComponent;
}(_react2.default.Component);

exports.default = function (store) {
  return _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _Admin2.default, store: store },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':model', component: _Index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':model/new', component: _New2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':model/:entry', component: _View2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':model/:entry/edit', component: _View2.default })
  );
};