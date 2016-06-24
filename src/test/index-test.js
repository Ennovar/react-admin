// import expect from 'expect';
// import ItemList from '../components/ItemList';
// import Admin from '../containers/Admin';
import { App, store } from '../index';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap-loader';

describe('ItemList', () => {
  // const router = routerObject()
  // beforeEach() {
  //   //setup our router
  //   render(router)
  // }
  it('should render', () => {
    ReactDOM.render(
      <Provider store={store} key="provider">
        <App />
      </Provider>,
      document.body);
  });
});
