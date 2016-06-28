import axios from 'axios';
export default class AdminActions {

  // /**
  //  * initialize - initialize an instance of AdminActions, this requires a base url
  //  *  to help out the functions
  //  *
  //  * @param  {string} baseUrl description
  //  * @return {AdminActions}         instance of AdminActions
  //  */
  // initialize(baseUrl) {
  //   this.baseUrl = baseUrl;
  // }
  /* ******************************** SETTERS ******************************** */
  static setMode(mode) {
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
  static setModel(model) {
    return {
      type: 'SET_MODEL',
      payload: model,
    };
  }

  /*
   * This function accepts a entry id and sends it to the reducer to be converted
   * to an array index and put into the state
   */
  static setEntry(entry) {
    return {
      type: 'SET_ENTRY',
      payload: entry,
    };
  }
  /* ****************************** END SETTERS ****************************** */

  /* ******************************** GETTERS ******************************** */
  static getModels() {
    const payload = axios.get(`${this.baseUrl}/admin`);
    return {
      type: 'GET_MODELS',
      payload,
    };
  }

  static getEntries(model) {
    const url = `${self.baseUrl}/${model}`;
    const payload = axios.get(url);

    return {
      type: 'GET_ENTRIES',
      payload,
      meta: {
        model,
      },
    };
  }

  static getEntry(id, model) {
    const url = `${this.baseUrl}/${model}/${id}`;
    const payload = axios.get(url);

    return {
      type: 'GET_ENTRIES',
      payload,
    };
  }
  /* ****************************** END GETTERS ****************************** */

}
