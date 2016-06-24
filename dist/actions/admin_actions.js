'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doSomething = doSomething;
exports.changeSelection = changeSelection;
function doSomething() {
  return {
    type: 'SOME_TYPE'
  };
}

function changeSelection(selection) {

  return {
    type: 'CHANGE_SELECTION',
    payload: selection
  };
}