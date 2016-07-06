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

var _actions = require('../../actions/');

var _functions = require('../../helpers/functions');

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports
// -- Functions
// import { getModels, getEntry, setModel } from '../../actions';

// -- Styles


var Models = function (_Component) {
  _inherits(Models, _Component);

  // Constructor

  function Models(props) {
    _classCallCheck(this, Models);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Models).call(this, props));

    _this.state = {
      selected: ''
    };

    _this.onClickModel = _this.onClickModel.bind(_this);
    _this.onClickNew = _this.onClickNew.bind(_this);
    return _this;
  }

  _createClass(Models, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // this.props.getModels().then(this.props.changeModel(makeURL(this.props.models[0].title)));

      // url == /admin, so set the first model to be the selected model
      if (this.props.selected === 'no_models') {
        this.props.requestModels();
      }
      // if (this.props.selected === '') {
      //   this.props.requestModels().then((data) => {
      //     if (!data.error) {
      //       const title = Object.keys(this.props.models)[0];
      //       this.props.setModel(title);
      //       browserHistory.push(title);
      //     }
      //   });
      // }
    }
  }, {
    key: 'onClickModel',
    value: function onClickModel(model) {
      var url = (0, _functions.makeURL)(model);
      this.props.setModel(model);
      // this.props.requestEntries(url);
      _reactRouter.browserHistory.push('/' + url);
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
        Object.keys(models).map(function (model, index) {
          var active = '';
          if (model === selected) {
            active = ' active';
          }

          return _react2.default.createElement(
            'li',
            {
              id: 'select',
              key: index,
              className: 'list-group-item' + active,
              onClick: function onClick() {
                return _this2.onClickModel(models[model].tag);
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-plus fa-fw', onClick: _this2.onClickNew }),
            models[model].title
          );
        })
      );
    }
  }]);

  return Models;
}(_react.Component);

Models.propTypes = {
  setModel: _react2.default.PropTypes.func,
  models: _react2.default.PropTypes.object,
  selected: _react2.default.PropTypes.string,
  requestModels: _react2.default.PropTypes.func,
  requestEntries: _react2.default.PropTypes.func
};

function mapStatetoProps(state) {
  return {
    // selected: state.model,
    models: state.reducers.models
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    setModel: _actions.setModel,
    requestModels: _actions.requestModels,
    requestEntries: _actions.requestEntries
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Models);