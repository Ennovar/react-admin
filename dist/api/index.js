'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getModels = getModels;
exports.getIndex = getIndex;
exports.getShow = getShow;
exports.postCreate = postCreate;
exports.putUpdate = putUpdate;
exports.deleteDelete = deleteDelete;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base_url = 'http://localhost:3000/api/admin';

/**
 * getModels - get all of the models that need to be manipulated by the admin panel
 * EXAMPLE JSON EXPECTED FROM THIS ACTION!!!
 *
 * @return {type}  description
 */
function getModels() {
  _axios2.default.get(base_url);
  // action.data

  // return {
  //   type: 'SOME_ACTION_TYPE',
  //   data: [
  //     {
  //       title: 'Cars',
  //       crud: {
  //         create: 'url to POST to to create a car',
  //         index: 'url to GET all cars',
  //         show: 'url to GET a specific car EXAMPLE: http://bobscars.com/api/cars/:id with id being a convention to get the car with that id',
  //         update: 'url to PUT an update to a specific car while following the same conventions as #show ^^',
  //         delete: 'url to DELETE a specific car with the id convention above ^^^'
  //       }
  //     }
  //   ]
  // }
  //   action.payload.data

  // return {
  //   type: 'SOME_ACTION_TYPE',
  //   payload: [
  //     {
  //       title: 'Cars',
  //       crud: {
  //         create: 'url to POST to to create a car',
  //         index: 'url to GET all cars',
  //         show: 'url to GET a specific car EXAMPLE: http://bobscars.com/api/cars/:id with id being a convention to get the car with that id',
  //         update: 'url to PUT an update to a specific car while following the same conventions as #show ^^',
  //         delete: 'url to DELETE a specific car with the id convention above ^^^'
  //       }
  //     }
  //   ]
  // }
}

/**
 * getIndex - sends a request to get the specified model that is at the AdminAPI.models array index specified by modelIndex
 *
 * @param  {int} modelIndex index of model to GET index of
 * @return {promise}            promise
 */
function getIndex(modelIndex) {
  return {
    type: 'MODEL_AT_INDEX',
    index: modelIndex
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