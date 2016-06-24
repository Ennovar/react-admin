'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doSomething = doSomething;
exports.changeSelection = changeSelection;
exports.getModels = getModels;
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

function getModels() {
  return {
    type: 'GET_MODEL_TYPES',
    payload: ''
  };
}