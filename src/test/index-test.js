// import expect from 'expect';
// import ItemList from '../components/ItemList';
import Admin from '../containers/Admin';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';
import 'bootstrap-loader';

describe('ItemList', () => {
  it('should render', () => {
    ReactDOM.render(
      <Provider store={store} key="provider">
        <Admin />
      </Provider>,
      document.body);
  });
});
