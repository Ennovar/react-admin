'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AdminReducer;
var initialState = {
  selected: 0
};

function AdminReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  console.log(action);
  switch (action.type) {
    case 'CHANGE_SELECTION':
      return _extends({}, state, { selected: action.payload });
    default:
      return state;
  }
}