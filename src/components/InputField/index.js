// Libary imports
import React, { Component } from 'react';

// User imports
import './style.scss';

class InputField extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    // String is temporary, will be in props later
    const value = e.target.value;

    if (this.props.type === 'number') {
      if (!isNaN(parseFloat(value)) && isFinite(value) && value >= 0) {
        this.setState({ value: e.target.value });
      } else if (value === '') {
        this.setState({ value: e.target.value });
      }
    } else {
      this.setState({ value: e.target.value });
    }
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
            <input value={this.state.value} onChange={this.onInputChange} />
          </li>
        </ul>
      </li>
    );
  }
}

InputField.propTypes = {
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
};

export default InputField;
