// Libary imports
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// User imports
import Admin from './containers/Admin';
import Index from './containers/Index';
import New from './containers/New';
import View from './containers/View';

class SomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>Hello Admin</h4>
      </div>
    );
  }
}

export default (store) => (
  <Route path="/" component={Admin} store={store}>
    <IndexRoute component={Index} />
    <Route path=":model" component={Index} />
    <Route path=":model/new" component={New} />
    <Route path=":model/:entry/edit" component={View} />
    <Route path=":model/:entry" component={View} />
  </Route>
);
