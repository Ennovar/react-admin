// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { doSomething, changeMode } from '../../actions/index';

// Components
import TextField from '../../components/TextField';
import NumberField from '../../components/NumberField';
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
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">New {this.props.selected}</h3>
        </li>
        <BooleanField title={'Property 1'} mode={'view'} changeMode={this.props.changeMode} />
        <TextField title={'Property 2'} mode={'new'} />
        <NumberField title={'Property 2'} mode={'new'} />
        <SelectField title={'Property 3'} mode={'edit'} />
        <li className="list-group-item clearfix">
          <button id="save" className="btn btn-primary">Save</button>
        </li>
      </ul>
    );
  }
}

New.propTypes = {
  selected: React.PropTypes.number,
  changeMode: React.PropTypes.func,
};

function mapStatetoProps(state) {
  return {
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething, changeMode }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(New);
