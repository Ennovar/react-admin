// Libary imports
import React, { Component } from 'react';

// User imports
import Select from '../Select';
import './style.scss';

class SelectField extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
    };
  }

  // Render method
  render() {
    return (
      <li className="list-group-item">
        <ul id="field" className="list-group">
          <li className="list-group-item">
            <h3 className="list-group-item-heading">{this.props.title}</h3>
          </li>
          <Select title={'Item 1'} />
          <Select title={'Item 2'} />
          <Select title={'Item 3'} />
          <Select title={'Item 4'} />
          <Select title={'Item 5'} />
          <Select title={'Item 6'} />
          <Select title={'Item 7'} />
          <Select title={'Item 8'} />
        </ul>
      </li>
    );
  }
}

SelectField.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default SelectField;
