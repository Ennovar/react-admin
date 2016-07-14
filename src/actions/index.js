// Libary imports
import axios from 'axios';

// User imports
//  - Constants
import {
  GET_ENTRIES,
  GET_MODELS,
  REQUEST_MODELS,
  REQUEST_ENTRIES,
  SET_ADMIN_URL,
  SET_BASE_URL,
  SET_ENTRY,
  SET_MODE,
  SET_MODEL,
} from '../constants';

const baseUrl = 'http://localhost:8000/api/';

/* ******************************** SETTERS ******************************** */

/*
 *
 *
 */
export function setBaseURL(url) {
  return {
    type: SET_BASE_URL,
    url: 'http://reactadmintestapi.herokuapp.com/api',
  };
}

export function setAdminURL(url) {
  return {
    type: SET_ADMIN_URL,
    url: 'http://reactadmintestapi.herokuapp.com/api/admin',
  };
}

/*
 * This function accepts a entry id and sends it to the reducer to be converted
 * to an array index and put into the state
 */
export function setEntry(entry) {
  return {
    type: SET_ENTRY,
    entry,
  };
}


export function setMode(mode) {
  return {
    type: SET_MODE,
    mode,
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
    type: SET_MODEL,
    model,
  };
}
/* ****************************** END SETTERS ****************************** */

/* ******************************** GETTERS ******************************** */

export function getModels() {
  return {
    type: GET_MODELS,
  };
}

export function requestModels() {
  return {
    type: REQUEST_MODELS,
  };
}

export function getEntries(modelTag) {
  return {
    type: GET_ENTRIES,
    meta: {
      modelTag,
    },
  };
}

export function requestEntries(modelTag) {
  return {
    type: REQUEST_ENTRIES,
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

export function setupUpdate(data, id) {
  return {
    type: 'SETUP_UPDATE',
    data,
    id,
  };
}

export function requestCreate(data) {
  return {
    type: 'REQUEST_CREATE',
    data,
  };
}

export function requestDelete(id) {
  return {
    type: 'REQUEST_DELETE',
    id,
  };
}
