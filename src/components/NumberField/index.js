// Library imports
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// User imports
//  - styles
import './style.css';


class NumberField extends Component {

  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      original: '',
      value: -1,
      mode: '',
    };

    this.onEditClick = this.onEditClick.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  componentWillMount() {
    const { mode, value } = this.props;
    this.setState({ mode: mode === 'new' ? mode : 'view' });

    if (value) {
      this.setState({ original: value });
    }
  }

  onNumberChange(e) {
    const { value } = e.target;
    const { update } = this.props;
    const { original } = this.state;

    // if: Make sure that the value is a number
    // else if: Make sure that the user can clear out the input
    if (!isNaN(parseFloat(value)) && isFinite(value) && value >= 0) {
      this.setState({ value: Number(value) });
      update(original, Number(value));
    } else if (value === '') {
      this.setState({ value });
    } else {
      // Do nothing
    }
  }

  onEditClick() {
    const { mode } = this.state;
    this.setState({ mode: mode === 'view' ? 'edit' : 'view' });
  }

  // Render method
  render() {
    const {
      title,
    } = this.props;
    const {
      mode, value,
      original,
    } = this.state;
    let content;
    let icon;

    // if: On edit and new pages, use an input
    // else if: On view page, show value
    // else: show nothing
    if (mode === 'edit' || mode === 'new') {
      content = (
        <input
          className="form-control"
          onChange={this.onNumberChange}
          value={value !== -1 ? value : original}
        />
      );
      icon = 'check';
    } else if (mode === 'view') {
      content = (<p className="list-group-item-text">{value !== -1 ? value : original}</p>);
      icon = 'pencil';
    } else {
      content = null;
    }

    return (
      <li className="list-group-item">
        <ul id="field" className="list-group">
          <li className="list-group-item">
            <h4 className="list-group-item-heading">
              {title}
              {
                mode !== 'new' &&
                  <i className={`fa fa-${icon} pull-right`} onClick={this.onEditClick} />
              }
            </h4>
          </li>
          <li className="list-group-item">
            {content}
          </li>
        </ul>
      </li>
    );
  }
}

NumberField.propTypes = {
  mode: React.PropTypes.string,
  title: React.PropTypes.string,
  update: React.PropTypes.func,
  value: React.PropTypes.number,
};

export default NumberField;
