// Libary imports
import React, { Component } from 'react';

// User imports
import './style.scss';

class BooleanField extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };

    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
  }

  // User selects false
  onClickTrue() {
    this.setState({ value: true });
  }

  // User selects True
  onClickFalse() {
    this.setState({ value: false });
  }

  // Render method
  render() {
    let btnT = 'default';
    let btnF = 'default';

    if (this.state.value) {
      btnT = 'primary';
    } else {
      btnF = 'primary';
    }

    return (
      <li className="list-group-item">
        <ul id="field" className="list-group">
          <li className="list-group-item">
            <h3 className="list-group-item-heading">{this.props.title}</h3>
          </li>
          <li className="list-group-item">
            <button className={`btn btn-${btnT}`} onClick={this.onClickTrue}>
              True
            </button>
            <button className={`btn btn-${btnF}`} onClick={this.onClickFalse}>
              False
            </button>
          </li>
        </ul>
      </li>
    );
  }
}

BooleanField.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default BooleanField;
