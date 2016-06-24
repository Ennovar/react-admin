// Libary imports
import React from 'react';
import { Route } from 'react-router';

// User imports
import Admin from './containers/Admin';
import Items from './containers/Items';
import New from './containers/New';

export default (store) => (
  <Route path="admin" component={Admin} store={store}>
    <Route path=":model" component={Items} />
    <Route path=":model/new" component={New} />
    <Route path=":model/edit" component={New} />
    <Route path=":model/:id" component={New} />
  </Route>
);
