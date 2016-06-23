// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { doSomething } from '../../actions/admin_actions';

// Components
import InputField from '../../components/InputField';
import BooleanField from '../../components/BooleanField';
import SelectField from '../../components/SelectField';
import './style.scss';

class New extends Component {

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
      <div>
        <ul className="list-group">
          <BooleanField title={'Property 1'} />
          <InputField title={'Property 2'} type={'string'} />
          <SelectField title={'Property 3'} />
        </ul>
        <button id="save" className="btn btn-primary">Save</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(New);
