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

var _New = require('../New');

var _New2 = _interopRequireDefault(_New);

var _Models = require('../Models');

var _Models2 = _interopRequireDefault(_Models);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libary imports


// User imports


// Components

// import Items from '../Items';
/*
// Query Sidebar options

{
  models: [
    {
      title: 'Cars',
      crud: {
        create: 'url to POST to to create a car',
        index: 'url to GET all cars',
        show: 'url to GET a specific car EXAMPLE: http://bobscars.com/api/cars/:id with id being a convention to get the car with that id',
        update: 'url to PUT an update to a specific car while following the same conventions as #show ^^',
        delete: 'url to DELETE a specific car with the id convention above ^^^',
        new: 'url///'
      }
    },
    {
      ect...
    }
  ]
}
// New Model
{
title: 'Hard Drives',
  attributes: {
    base_frequency: {
    type: 'string',
    readable_title: 'Base Frequency',
    }
  }
}
*/


var models = [{
  title: 'Boot Drives',
  id: 1,
  data: [{
    title: '500GB 7K RPM',
    id: 1,
    capacity: 500,
    rpm: 7,
    connection_type: 'SATA',
    io: 6,
    solid_state: false,
    phy_size: 2.5
  }, {
    title: '500GB 7K RPM',
    id: 2
  }, {
    title: '300GB 15K RPM',
    id: 3
  }, {
    title: '600GB 15K RPM',
    id: 4
  }, {
    title: '300GB 10K RPM',
    id: 5
  }, {
    title: '600GB 10K RPM',
    id: 6
  }, {
    title: '1200GB 150 RPM',
    id: 7
  }, {
    title: '200GB 10K RPM',
    id: 8
  }, {
    title: '400GB 10K RPM',
    id: 9
  }]
}, {
  title: 'Cables',
  id: 2,
  data: [{
    title: 'Item 1',
    id: 1
  }, {
    title: 'Item 2',
    id: 2
  }]
}, {
  title: 'CPUs',
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
  title: 'IOPS',
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
  title: 'Operating Systems',
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
  title: 'Memories',
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
  title: 'Raid Controllers',
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
  title: 'Resiliencies',
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
}, {
  title: 'SAS Host Adapters',
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
}, {
  title: 'Servers',
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
}, {
  title: 'Storage Drives',
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
}, {
  title: 'Storage Enclosures',
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
}, {
  title: 'Users',
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


      console.log(models[0]);
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { id: 'menu', className: 'col-xs-6 col-sm-3' },
            _react2.default.createElement(_Models2.default, { models: models })
          ),
          _react2.default.createElement(
            'div',
            { id: 'content', className: 'col-xs-6 col-sm-9' },
            this.props.children
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