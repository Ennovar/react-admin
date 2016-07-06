'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModels = getModels;
exports.getEntries = getEntries;
exports.getShow = getShow;
exports.postCreate = postCreate;
exports.putUpdate = putUpdate;
exports.deleteDelete = deleteDelete;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * getModels - get all of the models that need to be manipulated by the admin panel
 * EXAMPLE JSON EXPECTED FROM THIS ACTION!!!
 *
 * @return {type}  description
 */
function getModels(url) {
  console.log(url);
  var payload = _axios2.default.get(url);
  return {
    type: _constants.RECEIVE_MODELS,
    payload: payload
  };
}

/**
 * getIndex - sends a request to get the specified model that is at the AdminAPI.models array index specified by modelIndex
 *
 * @param  {int} modelIndex index of model to GET index of
 * @return {promise}            promise
 */
function getEntries(url, model) {
  console.log(url);
  var payload = _axios2.default.get(url);
  return {
    type: _constants.RECEIVE_ENTRIES,
    payload: payload,
    meta: {
      model: model
    }
  };
}

/**
 * getShow - sends a request to get the specified model that is at the AdminAPI.models array index specified by modelIndex and the entry with id
 *
 * @param  {type} modelIndex index of model to GET index of
 * @param  {type} id         id of model to GET
 * @return {promise}            promise
 */
function getShow(modelIndex, id) {}

/**
 * postCreate - sends a request to create a new model specified by newModel and the modelIndex in the AdminAPI.models array index
 *
 * @param  {type} modelIndex index of model to POST create
 * @param  {type} newModel   the new model to be created, including attributes
 * @return {promise}            promise
 */
function postCreate(modelIndex, newModel) {}

/**
 * putUpdate - sends a request to update an exhisting model specified by id and the modelIndex in the AdminAPI.models array index
 *
 * @param  {type} modelIndex index of model to PUT update
 * @param  {type} updatedModel updated attributes for model
 * @param  {type} id         id of model to PUT
 * @return {promise}            promise
 */
function putUpdate(modelIndex, updatedModel, id) {}

/**
 * deleteDelete - sends a request to delete an exhisting model specified by id and the modelIndex in the AdminAPI.models array index
 *
 * @param  {type} modelIndex index of model to DELETE delete
 * @param  {type} id         id of model to DELETE
 * @return {promise}            promise
 */
function deleteDelete(modelIndex, id) {}