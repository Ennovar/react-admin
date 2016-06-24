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

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


// Components


var Models = function (_Component) {
  _inherits(Models, _Component);

  // Constructor

  function Models(props) {
    _classCallCheck(this, Models);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Models).call(this, props));

    _this.state = {
      selected: ''
    };

    _this.onSelect = _this.onSelect.bind(_this);
    _this.onClickNew = _this.onClickNew.bind(_this);
    return _this;
  }

  _createClass(Models, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.changeSelection(0);
    }
  }, {
    key: 'onSelect',
    value: function onSelect(index) {
      this.props.changeSelection(index);
    }
  }, {
    key: 'onClickNew',
    value: function onClickNew(e) {
      console.log(e.target.className);
    }

    // Render method

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var models = _props.models;
      var selected = _props.selected;


      return _react2.default.createElement(
        'ul',
        { id: 'field', className: 'list-group' },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'h3',
            { className: 'list-group-item-heading text-center' },
            'Models'
          )
        ),
        models.map(function (model, index) {
          var active = '';
          if (selected === index) {
            active = ' active';
          }

          return _react2.default.createElement(
            'li',
            {
              id: 'select',
              key: index,
              className: 'list-group-item' + active,
              onClick: function onClick() {
                return _this2.onSelect(index);
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-plus fa-fw', onClick: _this2.onClickNew }),
            model.title
          );
        })
      );
    }
  }]);

  return Models;
}(_react.Component);

Models.propTypes = {
  changeSelection: _react2.default.PropTypes.func.isRequired,
  models: _react2.default.PropTypes.array.isRequired,
  selected: _react2.default.PropTypes.number
};

function mapStatetoProps(state) {
  return {
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ changeSelection: _admin_actions.changeSelection }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Models);