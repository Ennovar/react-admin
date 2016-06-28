import React, { Component } from 'react';
import './style.scss';

class TextField extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      mode: '',
    };

    this.changeText = this.changeText.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }

  componentWillMount() {
    if (this.props.mode === 'new') {
      this.setState({ mode: this.props.mode });
    } else {
      this.setState({ mode: 'view' });
    }

    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  onEditClick() {
    if (this.state.mode === 'edit') {
      this.setState({ mode: 'view' });
    } else if (this.state.mode === 'view') {
      this.setState({ mode: 'edit' });
    } else {
      // Do nothing
    }
  }

  // Change text value
  changeText(e) {
    this.setState({
      value: e.target.value,
    });
  }

  // Render method
  render() {
    const {
      title,
    } = this.props;
    const {
      mode, value,
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
          onChange={this.changeText}
          value={this.state.value}
        />
      );
      icon = 'check';
    } else if (mode === 'view') {
      content = (<p className="list-group-item-text">{value}</p>);
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

TextField.propTypes = {
  title: React.PropTypes.string,
  mode: React.PropTypes.string,
  value: React.PropTypes.string,
  changeMode: React.PropTypes.func,
};

export default TextField;
