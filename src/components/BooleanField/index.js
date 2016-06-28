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
      mode: '',
    };

    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
  }

  componentWillMount() {
    if (this.props.mode === 'new') {
      this.setState({ mode: 'new' });
    } else {
      this.setState({ mode: 'view' });
    }

    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
    // Set the value if in edit or view mode
  }

  onClickEdit() {
    if (this.state.mode === 'view') {
      this.setState({ mode: 'edit' });
    } else if (this.state.mode === 'edit') {
      this.setState({ mode: 'view' });
    } else {
      // Do nothing
    }
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
    const {
      mode, value,
    } = this.state;
    let btnT = 'default';
    let btnF = 'default';
    let content;
    let icon;

    if (this.state.value) {
      btnT = 'primary';
    } else {
      btnF = 'primary';
    }

    if (mode === 'edit' || mode === 'new') {
      content = (
        <li className="list-group-item">
          <button className={`btn btn-${btnT}`} onClick={this.onClickTrue}>
            True
          </button>
          <button className={`btn btn-${btnF}`} onClick={this.onClickFalse}>
            False
          </button>
        </li>
      );
      icon = 'check';
    } else if (mode === 'view') {
      content = (
        <li className="list-group-item">
          <p className="list-group-item-text">{value ? 'True' : 'False'}</p>
        </li>
      );
      icon = 'pencil';
    } else {
      // Do nothing
    }

    return (
      <li className="list-group-item">
        <ul id="field" className="list-group">
          <li className="list-group-item">
            <h4 className="list-group-item-heading">
              {this.props.title}
              {
                mode !== 'new' &&
                  <i className={`fa fa-${icon} pull-right`} onClick={this.onClickEdit} />
              }
            </h4>
          </li>
          {content}
        </ul>
      </li>
    );
  }
}

BooleanField.propTypes = {
  title: React.PropTypes.string.isRequired,
  mode: React.PropTypes.string,
  value: React.PropTypes.bool,
};

export default BooleanField;
