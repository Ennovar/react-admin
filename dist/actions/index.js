'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMode = setMode;
exports.setModel = setModel;
exports.setEntry = setEntry;
exports.requestModels = requestModels;
exports.requestEntries = requestEntries;
exports.getEntry = getEntry;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = 'http://localhost:8000/api/';

/* ******************************** SETTERS ******************************** */
function setMode(mode) {
  return {
    type: 'SET_MODE',
    payload: mode
  };
}

/*
 * This function accepts a model title, in url form and sends it to the reducer
 * to be converted to an array index and put into the state
 *
 * Admin and Model components are the only components that use this function
 */
function setModel(model) {
  return {
    type: 'SET_MODEL',
    payload: model
  };
}

/*
 * This function accepts a entry id and sends it to the reducer to be converted
 * to an array index and put into the state
 */
function setEntry(entry) {
  return {
    type: 'SET_ENTRY',
    payload: entry
  };
}
/* ****************************** END SETTERS ****************************** */

/* ******************************** GETTERS ******************************** */
function requestModels() {
  return {
    type: _constants.GET_MODELS
  };
}

function requestEntries(modelTag) {
  return {
    type: _constants.GET_ENTRIES,
    meta: {
      modelTag: modelTag
    }
  };
}

function getEntry(id, model) {
  var url = baseUrl + '/' + model + '/' + id;
  var payload = _axios2.default.get(url);

  return {
    type: 'GET_ENTRIES',
    payload: payload
  };
}
/* ****************************** END GETTERS ****************************** */