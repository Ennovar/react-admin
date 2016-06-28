import axios from 'axios';

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
export function getModels() {
  const url = `${AdminActions.baseUrl}/admin`;
  console.log(url);
  const payload = axios.get(`${AdminActions.baseUrl}/admin`);
  return {
    type: 'GET_MODELS',
    payload,
  };
}

export function getEntries(model) {
  const url = `${this.baseUrl}/${model}`;
  const payload = axios.get(url);

  return {
    type: 'GET_ENTRIES',
    payload,
    meta: {
      model,
    },
  };
}

export function getEntry(id, model) {
  const url = `${this.baseUrl}/${model}/${id}`;
  const payload = axios.get(url);

  return {
    type: 'GET_ENTRIES',
    payload,
  };
}
/* ****************************** END GETTERS ****************************** */
