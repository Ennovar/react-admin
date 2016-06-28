import axios from 'axios';


/**
 * getModels - get all of the models that need to be manipulated by the admin panel
 * EXAMPLE JSON EXPECTED FROM THIS ACTION!!!
 *
 * @return {type}  description
 */
export function getModels() {
}

/**
 * getIndex - sends a request to get the specified model that is at the AdminAPI.models array index specified by modelIndex
 *
 * @param  {int} modelIndex index of model to GET index of
 * @return {promise}            promise
 */
export function getIndex(modelIndex) {
  return {
    type: 'MODEL_AT_INDEX',
    index: modelIndex
  }
}

/**
 * getShow - sends a request to get the specified model that is at the AdminAPI.models array index specified by modelIndex and the entry with id
 *
 * @param  {type} modelIndex index of model to GET index of
 * @param  {type} id         id of model to GET
 * @return {promise}            promise
 */
export function getShow(modelIndex, id) {

}

/**
 * postCreate - sends a request to create a new model specified by newModel and the modelIndex in the AdminAPI.models array index
 *
 * @param  {type} modelIndex index of model to POST create
 * @param  {type} newModel   the new model to be created, including attributes
 * @return {promise}            promise
 */
export function postCreate(modelIndex, newModel) {

}

/**
 * putUpdate - sends a request to update an exhisting model specified by id and the modelIndex in the AdminAPI.models array index
 *
 * @param  {type} modelIndex index of model to PUT update
 * @param  {type} updatedModel updated attributes for model
 * @param  {type} id         id of model to PUT
 * @return {promise}            promise
 */
export function putUpdate(modelIndex, updatedModel, id) {

}

/**
 * deleteDelete - sends a request to delete an exhisting model specified by id and the modelIndex in the AdminAPI.models array index
 *
 * @param  {type} modelIndex index of model to DELETE delete
 * @param  {type} id         id of model to DELETE
 * @return {promise}            promise
 */
export function deleteDelete(modelIndex, id) {

}
