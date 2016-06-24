'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _admin_actions = require('../../actions/admin_actions');

var _InputField = require('../../components/InputField');

var _InputField2 = _interopRequireDefault(_InputField);

var _BooleanField = require('../../components/BooleanField');

var _BooleanField2 = _interopRequireDefault(_BooleanField);

var _SelectField = require('../../components/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


// Components


var New = function (_Component) {
  _inherits(New, _Component);

  // Constructor

  function New(props) {
    _classCallCheck(this, New);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(New).call(this, props));

    _this.state = {
      value: false
    };
    return _this;
  }

  // Render method


  _createClass(New, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'list-group' },
          _react2.default.createElement(_BooleanField2.default, { title: 'Property 1' }),
          _react2.default.createElement(_InputField2.default, { title: 'Property 2', type: 'string' }),
          _react2.default.createElement(_SelectField2.default, { title: 'Property 3' })
        ),
        _react2.default.createElement(
          'button',
          { id: 'save', className: 'btn btn-primary' },
          'Save'
        )
      );
    }
  }]);

  return New;
}(_react.Component);

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ doSomething: _admin_actions.doSomething }, dispatch);
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(New);