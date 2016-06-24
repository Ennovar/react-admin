'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("AdminAPI", function () {
  it("should get models", function () {
    (0, _api.getModels)();
  });
});