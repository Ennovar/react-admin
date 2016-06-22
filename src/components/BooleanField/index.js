// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';

// User imports
import { doSomething } from '../../actions/admin_actions';
import './style.css';

class BooleanField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };

    this.changeBoolean = this.changeBoolean.bind(this);
  }

  changeBoolean() {
    this.setState({
      value: !this.state.value,
    });
  }
  
  // Render method
  render() {
    return (
      <div>
        <button className="btn btn-default" onClick={this.changeBoolean}>
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
