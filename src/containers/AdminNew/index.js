// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';

// User imports
import { doSomething } from '../../actions/admin_actions';
import InputField from '../../components/InputField';
import BooleanField from '../../components/BooleanField';
import SelectField from '../../components/SelectField';
import './style.scss';

class AdminNew extends Component {

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
      <ul className="list-group">
        <BooleanField title={'Property 1'} />
        <InputField title={'Property 2'} type={'string'} />
        <SelectField title={'Property 3'} />
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(AdminNew);
