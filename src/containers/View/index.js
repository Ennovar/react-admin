// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { doSomething, changeMode } from '../../actions/index';
import './style.scss';

const entry = {
  id: 7,
  title: '500GB 7K RPM',
  capacity: {
    title: 'Capacity',
    value: 500,
  },
  rpm: {
    title: 'RPM',
    value: 7,
  },
  connection_type: {
    title: 'Connection Type',
    value: 'SATA',
  },
  io: {
    title: 'IO',
    value: 6,
  },
  solid_state: {
    title: 'Solid State',
    value: false,
  },
  phy_size: {
    title: 'Physical Size',
    value: 2.5,
  },
};

class View extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  componentWillMount() {
    this.props.changeMode('edit');
  }

  // Render method
  render() {
    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{entry.title || 'Title'}</h3>
        </li>
      </ul>
    );
  }
}

View.propTypes = {
  changeMode: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething, changeMode }, dispatch);
}

export default connect(null, mapDispatchToProps)(View);
