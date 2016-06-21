import React from 'react';
import { doSomething } from '../actions/admin_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class BooleanField extends React.Component {
  render() {
    return(
      <div>
        <h3>BooleanField</h3>
        <button onClick={doSomething}>
        </button>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch)
}

export default connect(null, mapDispatchToProps)(BooleanField);
