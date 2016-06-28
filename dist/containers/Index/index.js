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


var entries = [{
  id: 1,
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}, {
  id: 2,
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}, {
  id: 3,
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}, {
  id: 4,
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}, {
  id: 5,
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}, {
  id: 6,
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}, {
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
    title: 'IO',
    value: 6
  },
  solid_state: {
    title: 'Solid State',
    value: false
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5
  }
}];

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
      this.props.getEntries(this.props.model);
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
      var items = _props.items;
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
        entries.map(function (entry) {
          return _react2.default.createElement(
            'li',
            {
              id: 'select',
              key: entry.id,
              className: 'list-group-item',
              onClick: function onClick() {
                return _this2.onClickEntry(entry.id);
              }
            },
            _react2.default.createElement('i', { className: 'fa fa-pencil fa-fw', onClick: _this2.onClickNew }),
            entry.title
          );
        })
      );
    }
  }]);

  return Index;
}(_react.Component);

Index.propTypes = {
  items: _react2.default.PropTypes.object,
  entries: _react2.default.PropTypes.object,
  title: _react2.default.PropTypes.string
};

function mapStatetoProps(state) {
  return {
    model: state.model,
    entries: state.models[state.model].entries,
    title: state.models[state.model].title
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setEntry: _index.setEntry, getEntries: _index.getEntries }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchToProps)(Index);