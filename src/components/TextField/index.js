import React, { Component } from 'react';
import './style.scss';

class TextField extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      original: '',
      value: null,
      mode: '',
    };

    this.changeText = this.changeText.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
  }

  componentWillMount() {
    const { mode, value } = this.props;
    this.setState({ mode: mode === 'new' ? mode : 'view' });

    if (value) {
      this.setState({ original: value });
    }
  }

  onEditClick() {
    const { mode } = this.state;
    this.setState({ mode: mode === 'view' ? 'edit' : 'view' });
  }

  // Change text value
  changeText(e) {
    const { update, title } = this.props;
    const { original } = this.state;
    const { value } = e.target;

    this.setState({
      value,
    });
    if (original !== '') {
      update(original, value, title);
    } else {
      update(value, title);
    }
  }

  // Render method
  render() {
    const { title } = this.props;
    const { mode, value, original } = this.state;
    let content;
    let icon;

    // if: On edit and new pages, use an input
    // else if: On view page, show value
    // else: show nothing
    if (mode === 'edit' || mode === 'new') {
      content = (
        <textarea
          className="form-control"
          onChange={this.changeText}
          value={value !== null ? value : original}
        />
      );
      icon = 'check';
    } else if (mode === 'view') {
      content = (<p className="list-group-item-text">{value !== null ? value : original}</p>);
      icon = 'pencil';
    } else {
      content = null;
      icon = null;
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
  update: React.PropTypes.func,
};

export default TextField;
