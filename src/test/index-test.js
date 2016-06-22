// import expect from 'expect';
// import ItemList from '../components/ItemList';
import AdminNew from '../components/AdminNew';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../index';
import { Provider } from 'react-redux';
import 'bootstrap-loader';

describe('ItemList', () => {
  it('should render', () => {
    ReactDOM.render(
      <Provider store={store} key="provider">
        <AdminNew />
      </Provider>,
      document.body);
  });
});
