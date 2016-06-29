'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatchAndLog;
function dispatchAndLog(action) {
  var result = next(action);
  return result;
}
