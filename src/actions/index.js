import axios from 'axios';

import {
  GET_MODELS,
  GET_ENTRIES,
} from '../constants';

const baseUrl = 'http://localhost:8000/api/';

/* ******************************** SETTERS ******************************** */
export function setMode(mode) {
  return {
    type: 'SET_MODE',
    payload: mode,
  };
}

/*
 * This function accepts a model title, in url form and sends it to the reducer
 * to be converted to an array index and put into the state
 *
 * Admin and Model components are the only components that use this function
 */
export function setModel(model) {
  return {
    type: 'SET_MODEL',
    payload: model,
  };
}

/*
 * This function accepts a entry id and sends it to the reducer to be converted
 * to an array index and put into the state
 */
export function setEntry(entry) {
  return {
    type: 'SET_ENTRY',
    payload: entry,
  };
}
/* ****************************** END SETTERS ****************************** */

/* ******************************** GETTERS ******************************** */
export function requestModels() {
  return {
    type: GET_MODELS,
  };
}

export function requestEntries(modelTag) {
  return {
    type: GET_ENTRIES,
    meta: {
      modelTag,
    },
  };
}

export function getEntry(id, model) {
  const url = `${baseUrl}/${model}/${id}`;
  const payload = axios.get(url);

  return {
    type: 'GET_ENTRIES',
    payload,
  };
}
/* ****************************** END GETTERS ****************************** */
