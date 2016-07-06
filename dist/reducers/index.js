'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.reducers = reducers;

var _functions = require('../helpers/functions');

var _constants = require('../constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// const initialState = {
//   model: 'no_models',
//   entry: -1,
//   mode: '',
//   baseUrl: 'http://reactadmintestapi.herokuapp.com/api/',
//   adminUrl: 'http://reactadmintestapi.herokuapp.com/api/admin',
//   models: {
//     no_models: {
//       title: 'No Models',
//       entry_selected: 0,
//       entries: {
//         0: {
//           title: 'No Model Selected',
//         },
//       },
//     },
//   },
// };
var initialState = {
  model: '',
  entry: -1,
  mode: '',
  baseUrl: 'http://reactadmintestapi.herokuapp.com/api/',
  adminUrl: 'http://reactadmintestapi.herokuapp.com/api/admin',
  models: {}
};

function getIndex(title, array) {
  for (var i = 0; i < array.length; i++) {
    if (title === (0, _functions.makeURL)(array[i].tag)) {
      return i;
    }
  }
  return -1;
}

function toObj(array, param) {
  var outer = {};
  for (var i = 0; i < array.length; i++) {
    if (param === 'tag') {
      outer[(0, _functions.makeURL)(array[i].tag)] = array[i];
    } else if (param === 'id') {
      outer[array[i].id] = array[i];
    } else {
      // Do nothing
    }
  }
  return outer;
}

function reducers() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  console.log(action);
  switch (action.type) {
    case _constants.REDUX_INIT:

    case 'SET_MODEL':
      return _extends({}, state, { model: action.payload });
    case 'SET_ENTRY':
      return _extends({}, state, { entry: action.payload });
    case 'CHANGE_MODE':
      return _extends({}, state, { mode: action.payload });
    case _constants.RECEIVE_MODELS:
      {
        var newState = _extends({}, state, { models: toObj(action.payload.data.models, 'tag') });
        if (state.model === 'no_models') {
          newState = _extends({}, newState, { model: Object.keys(newState.models)[0] });
        }
        return newState;
      }
    case _constants.RECEIVE_ENTRIES:
      {
        var _newState = _extends({}, state, { model: action.meta.model });
        return Object.assign({}, _newState, { models: Object.assign({}, _newState.models, _defineProperty({}, _newState.model, _extends({}, _newState.models[_newState.model], { entries: toObj(action.payload.data, 'id') }))) });
      }
    default:
      return state;
  }
}