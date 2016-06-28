'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../../actions/index');

var _BooleanField = require('../../components/BooleanField');

var _BooleanField2 = _interopRequireDefault(_BooleanField);

var _NumberField = require('../../components/NumberField');

var _NumberField2 = _interopRequireDefault(_NumberField);

var _TextField = require('../../components/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _SelectField = require('../../components/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


var entry = {
  id: 7,
  title: '500GB 7K RPM',
  capacity: {
    title: 'Capacity',
    value: 500
  },
  rpm: {
    title: 'RPM',
    value: 7
  },
  connection_type: {
    title: 'Connection Type',
    value: 'SATA'
  },
  io: {
    title: 'I/O',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: true
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
};

var View = function (_Component) {
  _inherits(View, _Component);

  // Constructor

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this, props));

    _this.state = {
      value: false
    };
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.setMode('edit');
    }

    // Render method

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mode = this.props.mode;
      // console.log(this.props.entry);

      return _react2.default.createElement(
        'ul',
        { id: 'field', className: 'list-group' },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'h3',
            { className: 'list-group-item-heading text-center' },
            entry.title || 'Title'
          )
        ),
        Object.keys(entry).map(function (key) {
          console.log(_typeof(entry[key].value));
          if (typeof entry[key].value === 'boolean') {
            return _react2.default.createElement(_BooleanField2.default, {
              key: entry[key].title,
              mode: _this2.props.mode,
              title: entry[key].title,
              value: entry[key].value
            });
          } else if (typeof entry[key].value === 'string') {
            return _react2.default.createElement(_TextField2.default, {
              key: entry[key].title,
              title: entry[key].title,
              mode: _this2.props.mode,
              value: entry[key].value
            });
          } else if (typeof entry[key].value === 'number') {
            return _react2.default.createElement(_NumberField2.default, {
              key: entry[key].title,
              title: entry[key].title,
              mode: _this2.props.mode,
              value: entry[key].value
            });
          } else if (_typeof(entry[key].value) === 'object') {
            return _react2.default.createElement(_SelectField2.default, {
              key: entry[key].title,
              title: entry[key].title,
              mode: _this2.props.mode,
              value: entry[key].value
            });
          }
          return null;
        })
      );
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  setMode: _react2.default.PropTypes.func,
  entry: _react2.default.PropTypes.object,
  mode: _react2.default.PropTypes.string
};

function mapStatetoProps(state) {
  return {
    selected: state.entry,
    mode: state.mode
  };
}

//  entry: state.models[state.model].entries[state.entry],
function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setMode: _index.setMode }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(View);