'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dispatchAndLog;
function dispatchAndLog(action) {
  console.log('dispatching', action);
  var result = next(action);
  console.log('next state', store.getState());
  return result;
}