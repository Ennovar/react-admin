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


var BooleanField = function (_Component) {
  _inherits(BooleanField, _Component);

  // Constructor

  function BooleanField(props) {
    _classCallCheck(this, BooleanField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanField).call(this, props));

    _this.state = {
      value: false,
      mode: ''
    };

    _this.onClickTrue = _this.onClickTrue.bind(_this);
    _this.onClickFalse = _this.onClickFalse.bind(_this);
    _this.onClickEdit = _this.onClickEdit.bind(_this);
    return _this;
  }

  _createClass(BooleanField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.mode === 'new') {
        this.setState({ mode: 'new' });
      } else {
        this.setState({ mode: 'view' });
      }

      if (this.props.value) {
        this.setState({ value: this.props.value });
      }
      // Set the value if in edit or view mode
    }
  }, {
    key: 'onClickEdit',
    value: function onClickEdit() {
      if (this.state.mode === 'view') {
        this.setState({ mode: 'edit' });
      } else if (this.state.mode === 'edit') {
        this.setState({ mode: 'view' });
      } else {
        // Do nothing
      }
    }

    // User selects false

  }, {
    key: 'onClickTrue',
    value: function onClickTrue() {
      this.setState({ value: true });
    }

    // User selects True

  }, {
    key: 'onClickFalse',
    value: function onClickFalse() {
      this.setState({ value: false });
    }

    // Render method

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var mode = _state.mode;
      var value = _state.value;

      var btnT = 'default';
      var btnF = 'default';
      var content = void 0;
      var icon = void 0;

      if (this.state.value) {
        btnT = 'primary';
      } else {
        btnF = 'primary';
      }

      if (mode === 'edit' || mode === 'new') {
        content = _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-' + btnT, onClick: this.onClickTrue },
            'True'
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-' + btnF, onClick: this.onClickFalse },
            'False'
          )
        );
        icon = 'check';
      } else if (mode === 'view') {
        content = _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'p',
            { className: 'list-group-item-text' },
            value ? 'True' : 'False'
          )
        );
        icon = 'pencil';
      } else {
        // Do nothing
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
              this.props.title,
              mode !== 'new' && _react2.default.createElement('i', { className: 'fa fa-' + icon + ' pull-right', onClick: this.onClickEdit })
            )
          ),
          content
        )
      );
    }
  }]);

  return BooleanField;
}(_react.Component);

BooleanField.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  mode: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.bool
};

exports.default = BooleanField;