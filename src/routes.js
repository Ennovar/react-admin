// Libary imports
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// User imports
import Admin from './containers/Admin';
import Items from './containers/Items';
import New from './containers/New';

class SomeComponent extends React.Component {
  render() {
    return(
      <div>
        <h4>Hello Admin</h4>
      </div>
    )
  }
}
export default (
  <Route path="/" component={Admin}>
    <IndexRoute component={SomeComponent} />
    <Route path=":model" component={Items} />
    <Route path=":model/new" component={New} />
    <Route path=":model/edit" component={New} />
    <Route path=":model/:id" component={New} />
  </Route>
);
