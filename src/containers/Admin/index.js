// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';

// User imports
import { doSomething } from '../../actions/admin_actions';

// Components
// import New from '../New';
import Options from '../Options';
import Items from '../Items';
import './style.scss';

class Admin extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  // Render method
  render() {
    return (
      <div className="container-fluid">
        <div className="col-xs-3">
          <Options />
        </div>
        <div className="col-xs-9">
          <Items />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(Admin);
