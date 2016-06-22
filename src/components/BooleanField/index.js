import React from 'react';
import { doSomething } from '../../actions/admin_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './style.css';
// Add bootstrap
require('bootstrap-loader');

class BooleanField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  changeBoolean() {
    this.setState({
      value: this.state.value ? false : true,
    });
  }
  render() {
    return (
      <div>
        <button className={"btn btn-default"} onClick={this.changeBoolean.bind(this)}>
          {this.state.value ? 'True' : 'False'}
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(BooleanField);
