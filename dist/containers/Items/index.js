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

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


// Components


var Items = function (_Component) {
  _inherits(Items, _Component);

  // Constructor

  function Items(props) {
    _classCallCheck(this, Items);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Items).call(this, props));

    _this.state = {
      value: false
    };
    return _this;
  }

  // Render method


  _createClass(Items, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;


      return _react2.default.createElement(
        'ul',
        { id: 'field', className: 'list-group' },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'h3',
            { className: 'list-group-item-heading text-center' },
            items.title || 'Title'
          )
        ),
        items.data.map(function (item) {
          return _react2.default.createElement(
            'li',
            { id: 'select', key: item.id, className: 'list-group-item' },
            _react2.default.createElement('i', { className: 'fa fa-pencil fa-fw', onClick: _this2.onClickNew }),
            item.title
          );
        })
      );
    }
  }]);

  return Items;
}(_react.Component);

Items.propTypes = {
  items: _react2.default.PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ doSomething: _admin_actions.doSomething }, dispatch);
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Items);