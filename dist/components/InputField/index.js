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


var InputField = function (_Component) {
  _inherits(InputField, _Component);

  // Constructor

  function InputField(props) {
    _classCallCheck(this, InputField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputField).call(this, props));

    _this.state = {
      value: ''
    };

    _this.onInputChange = _this.onInputChange.bind(_this);
    return _this;
  }

  _createClass(InputField, [{
    key: 'onInputChange',
    value: function onInputChange(e) {
      // String is temporary, will be in props later
      var value = e.target.value;

      if (this.props.type === 'number') {
        if (!isNaN(parseFloat(value)) && isFinite(value) && value >= 0) {
          this.setState({ value: e.target.value });
        } else if (value === '') {
          this.setState({ value: e.target.value });
        }
      } else {
        this.setState({ value: e.target.value });
      }
    }

    // Render method

  }, {
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
              'h3',
              { className: 'list-group-item-heading' },
              this.props.title
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            _react2.default.createElement('input', { value: this.state.value, onChange: this.onInputChange })
          )
        )
      );
    }
  }]);

  return InputField;
}(_react.Component);

InputField.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  type: _react2.default.PropTypes.string.isRequired
};

exports.default = InputField;