export default class SomeClass {
  static someFunction() {
    console.log("Hello World");
  }
}

import { createStore } from 'redux'
import AdminReducer from './reducers/AdminReducer';

let store = createStore(AdminReducer)

export {
  store,
};
