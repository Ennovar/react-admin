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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  // Constructor

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextField).call(this, props));

    _this.state = {
      value: '',
      mode: ''
    };

    _this.changeText = _this.changeText.bind(_this);
    _this.onEditClick = _this.onEditClick.bind(_this);
    return _this;
  }

  _createClass(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.mode === 'new') {
        this.setState({ mode: this.props.mode });
      } else {
        this.setState({ mode: 'view' });
      }

      if (this.props.value) {
        this.setState({ value: this.props.value });
      }
    }
  }, {
    key: 'onEditClick',
    value: function onEditClick() {
      if (this.state.mode === 'edit') {
        this.setState({ mode: 'view' });
      } else if (this.state.mode === 'view') {
        this.setState({ mode: 'edit' });
      } else {
        // Do nothing
      }
    }

    // Change text value

  }, {
    key: 'changeText',
    value: function changeText(e) {
      this.setState({
        value: e.target.value
      });
    }

    // Render method

  }, {
    key: 'render',
    value: function render() {
      var title = this.props.title;
      var _state = this.state;
      var mode = _state.mode;
      var value = _state.value;

      var content = void 0;
      var icon = void 0;

      // if: On edit and new pages, use an input
      // else if: On view page, show value
      // else: show nothing
      if (mode === 'edit' || mode === 'new') {
        content = _react2.default.createElement('input', {
          className: 'form-control',
          onChange: this.changeText,
          value: this.state.value
        });
        icon = 'check';
      } else if (mode === 'view') {
        content = _react2.default.createElement(
          'p',
          { className: 'list-group-item-text' },
          value
        );
        icon = 'pencil';
      } else {
        content = null;
      }

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
              title,
              mode !== 'new' && _react2.default.createElement('i', { className: 'fa fa-' + icon + ' pull-right', onClick: this.onEditClick })
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'list-group-item' },
            content
          )
        )
      );
    }
  }]);

  return TextField;
}(_react.Component);

TextField.propTypes = {
  title: _react2.default.PropTypes.string,
  mode: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.string,
  changeMode: _react2.default.PropTypes.func
};

exports.default = TextField;