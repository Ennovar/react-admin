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

var _admin_actions = require('../../actions/admin_actions');

var _Models = require('../Models');

var _Models2 = _interopRequireDefault(_Models);

var _Items = require('../Items');

var _Items2 = _interopRequireDefault(_Items);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


// Components
// import New from '../New';


var models = [{
  title: 'Model 1',
  id: 1,
  data: [{
    title: 'Item 1',
    id: 1
  }]
}, {
  title: 'Model 2',
  id: 2,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }]
}, {
  title: 'Model 3',
  id: 3,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }, {
    title: 'Item 3',
    id: 3
  }]
}, {
  title: 'Model 4',
  id: 4,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }, {
    title: 'Item 3',
    id: 3
  }, {
    title: 'Item 4',
    id: 4
  }]
}, {
  title: 'Model 5',
  id: 5,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }, {
    title: 'Item 3',
    id: 3
  }, {
    title: 'Item 4',
    id: 4
  }, {
    title: 'Item 5',
    id: 5
  }]
}, {
  title: 'Model 6',
  id: 6,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }, {
    title: 'Item 3',
    id: 3
  }, {
    title: 'Item 4',
    id: 4
  }, {
    title: 'Item 5',
    id: 5
  }, {
    title: 'Item 6',
    id: 6
  }]
}, {
  title: 'Model 7',
  id: 7,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }, {
    title: 'Item 3',
    id: 3
  }, {
    title: 'Item 4',
    id: 4
  }, {
    title: 'Item 5',
    id: 5
  }, {
    title: 'Item 6',
    id: 6
  }, {
    title: 'Item 7',
    id: 7
  }]
}, {
  title: 'Model 8',
  id: 8,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }, {
    title: 'Item 3',
    id: 3
  }, {
    title: 'Item 4',
    id: 4
  }, {
    title: 'Item 5',
    id: 5
  }, {
    title: 'Item 6',
    id: 6
  }, {
    title: 'Item 7',
    id: 7
  }, {
    title: 'Item 8',
    id: 8
  }]
}];

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

  // Render method


  _createClass(Admin, [{
    key: 'render',
    value: function render() {
      var selected = this.props.selected;


      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3' },
            _react2.default.createElement(_Models2.default, { models: models })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-9' },
            _react2.default.createElement(_Items2.default, { items: models[selected] })
          )
        )
      );
    }
  }]);

  return Admin;
}(_react.Component);

Admin.propTypes = {
  selected: _react2.default.PropTypes.number
};

function mapStatetoProps(state) {
  return {
    selected: state.selected
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ doSomething: _admin_actions.doSomething }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Admin);