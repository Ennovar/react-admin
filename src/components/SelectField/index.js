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
            <h4 className="list-group-item-heading">{this.props.title}</h4>
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
  title: React.PropTypes.string,
  mode: React.PropTypes.string,
};

export default SelectField;
