// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { doSomething } from '../../actions/admin_actions';

// Components
import './style.scss';

class Options extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };

    this.onSelect = this.onSelect.bind(this);
  }

  // Render method
  render() {
    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading">Options</h3>
        </li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 1</li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 2</li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 3</li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 4</li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 5</li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 6</li>
        <li id="select" className="list-group-item" onClick={this.onSelect}>Option 7</li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(Options);
