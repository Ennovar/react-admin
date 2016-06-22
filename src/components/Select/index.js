// Libary imports
import React, { Component } from 'react';

// User imports
import './style.scss';

class Select extends Component {

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
      <li id="select" className="list-group-item">
        {this.props.title}
      </li>
    );
  }
}

Select.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Select;
