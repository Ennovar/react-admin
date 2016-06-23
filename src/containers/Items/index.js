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
    const {
      items,
    } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading">{items.title || 'Title'}</h3>
        </li>
        {items.data.map((item) =>
          <li id="select" key={item.id} className="list-group-item">{item.title}</li>
        )}
      </ul>
    );
  }
}

Items.propTypes = {
  items: React.PropTypes.object,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(null, mapDispatchToProps)(Items);
