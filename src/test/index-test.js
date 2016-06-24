// import expect from 'expect';
// import ItemList from '../components/ItemList';
// import Admin from '../containers/Admin';
import React from 'react';
import Admin from '../containers/Admin';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { routes } from '../routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../reducers';
import 'bootstrap-loader';

const store = createStore(reducer);

describe('ItemList', () => {
  // const router = routerObject()
  // beforeEach() {
  //   //setup our router
  //   render(router)
  // }
  it('should render', () => {
    ReactDOM.render(
      <Provider store={store} key="provider">
        <Admin />
      </Provider>,
      document.body);
  });
});
