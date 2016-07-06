'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _index = require('../../actions/index');

var _functions = require('../../helpers/functions');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


var Index = function (_Component) {
  _inherits(Index, _Component);

  // Constructor

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this, props));

    _this.state = {
      value: false
    };

    _this.onClickEntry = _this.onClickEntry.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.model) {
        this.props.requestEntries();
      }
    }
  }, {
    key: 'onClickEntry',
    value: function onClickEntry(id) {
      this.props.setEntry(id);
      _reactRouter.browserHistory.push((0, _functions.makeURL)(this.props.title) + '/' + id);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {}

    // Render method

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var entries = _props.entries;
      var title = _props.title;


      return _react2.default.createElement(
        'ul',
        { id: 'field', className: 'list-group' },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item' },
          _react2.default.createElement(
            'h3',
            { className: 'list-group-item-heading text-center' },
            title || 'Title'
          )
        ),
        Object.keys(entries).map(function (entry) {
          return _react2.default.createElement(
            'li',
            {
              id: 'select',
              key: entries[entry].id,
              className: 'list-group-item',
              onClick: function onClick() {
                return _this2.onClickEntry(entries[entry].id);
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-pencil fa-fw', onClick: _this2.onClickNew }),
            entries[entry].title
          );
        })
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  items: _react2.default.PropTypes.object,
  mode: _react2.default.PropTypes.string,
  entries: _react2.default.PropTypes.object,
  title: _react2.default.PropTypes.string,
  requestEntries: _react2.default.PropTypes.func
};

function mapStatetoProps(state) {
  return {
    model: state.model,
    entries: state.models[state.model].entries,
    title: state.models[state.model].title
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ requestEntries: _index.requestEntries }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Index);