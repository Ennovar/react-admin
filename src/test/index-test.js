// import expect from 'expect';
// import ItemList from '../components/ItemList';
// import Admin from '../containers/Admin';
import React from 'react';
import Admin from '../containers/Admin';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from '../reducers';
import 'bootstrap-loader';

const store = createStore(reducer,
  window.devToolsExtension && window.devToolsExtension()
);

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
