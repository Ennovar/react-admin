'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

require('bootstrap-loader');

require('font-awesome-sass-loader');

var _actions = require('../../actions/');

var _functions = require('../../helpers/functions');

var _Models = require('../Models');

var _Models2 = _interopRequireDefault(_Models);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports

// import { getModels, setModel, getEntries } from '../../actions/index';


// Components
// import New from '../New';
// import Index from '../Index';

// import View from '../View';


var Admin = function (_Component) {
  _inherits(Admin, _Component);

  // Constructor

  function Admin(props) {
    _classCallCheck(this, Admin);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Admin).call(this, props));

    _this.state = {
      value: false
    };
    return _this;
  }

  _createClass(Admin, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // url contains a model title
      // this.props.requestModels().then((data) =>{
      //   if (this.props.params.model && !data.error) {
      //     this.props.setModel(makeURL(this.props.params.model));
      //   }
      // })

      // url contains an entry id
      if (this.props.params.entry) {
        // this.props.getEntries();
        // Select a model
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {}

    // Render method

  }, {
    key: 'render',
    value: function render() {
      console.log();
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { id: 'menu', className: 'col-xs-6 col-sm-3' },
            _react2.default.createElement(_Models2.default, { models: this.props.models, selected: this.props.params.model })
          ),
          _react2.default.createElement('div', { id: 'content', className: 'col-xs-6 col-sm-9' })
        )
      );
    }
  }]);

  return Admin;
}(_react.Component);

Admin.propTypes = {
  model: _react2.default.PropTypes.string,
  requestModels: _react2.default.PropTypes.func,
  // getEntries: React.PropTypes.func,
  // setModel: React.PropTypes.func,
  params: _react2.default.PropTypes.object
};

function mapStatetoProps(state) {
  return {
    selected: state.model,
    models: state.models
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    requestModels: _actions.requestModels
  }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Admin);