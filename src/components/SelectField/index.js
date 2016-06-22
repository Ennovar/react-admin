// Libary imports
import React, { Component } from 'react';

// User imports
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
          <li className="list-group-item">
            Item
          </li>
          <li className="list-group-item">
            Item
          </li>
          <li className="list-group-item">
            Item
          </li>
          <li className="list-group-item">
            Item
          </li>
          <li className="list-group-item">
            Item
          </li>
          <li className="list-group-item">
            Item
          </li>
        </ul>
      </li>
    );
  }
}

SelectField.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default SelectField;
