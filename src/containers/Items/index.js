// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { doSomething } from '../../actions/admin_actions';

// Components
import './style.scss';

class Items extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  // Render method
  render() {
    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading">Option 1</h3>
        </li>
        <li id="select" className="list-group-item">Item 1</li>
        <li id="select" className="list-group-item">Item 2</li>
        <li id="select" className="list-group-item">Item 3</li>
        <li id="select" className="list-group-item">Item 4</li>
        <li id="select" className="list-group-item">Item 5</li>
        <li id="select" className="list-group-item">Item 6</li>
        <li id="select" className="list-group-item">Item 7</li>
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(Items);
