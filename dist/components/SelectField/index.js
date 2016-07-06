'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  // Constructor

  function SelectField(props) {
    _classCallCheck(this, SelectField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectField).call(this, props));

    _this.state = {
      selected: ''
    };
    return _this;
  }

  // Render method


  _createClass(SelectField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        { className: 'list-group-item' },
        _react2.default.createElement(
          'ul',
          { id: 'field', className: 'list-group' },
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            _react2.default.createElement(
              'h4',
              { className: 'list-group-item-heading' },
              this.props.title
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            'Item'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            'Item'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            'Item'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            'Item'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            'Item'
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            'Item'
          )
        )
      );
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.propTypes = {
  title: _react2.default.PropTypes.string,
  mode: _react2.default.PropTypes.string
};

exports.default = SelectField;