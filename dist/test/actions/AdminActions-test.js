'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _actions = require('../../actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AdminActions', function () {
  it('should get models', function () {
    _actions2.default.baseUrl = 'http://reactadmintestapi.herokuapp.com/api/';
    _actions2.default.getModels();
  });
});
