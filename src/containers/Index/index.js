// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

// User imports
import {  requestEntries } from '../../actions/index';
import { makeURL } from '../../helpers/functions';
import './style.scss';

// const entries = [
//   {
//     id: 1,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   }, {
//     id: 2,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   }, {
//     id: 3,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   }, {
//     id: 4,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   }, {
//     id: 5,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   }, {
//     id: 6,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   }, {
//     id: 7,
//     title: '500GB 7K RPM',
//     capacity: {
//       title: 'Capacity',
//       value: 500,
//     },
//     rpm: {
//       title: 'RPM',
//       value: 7,
//     },
//     connection_type: {
//       title: 'Connection Type',
//       value: 'SATA',
//     },
//     io: {
//       title: 'IO',
//       value: 6,
//     },
//     solid_state: {
//       title: 'Solid State',
//       value: false,
//     },
//     phy_size: {
//       title: 'Physical Size',
//       value: 2.5,
//     },
//   },
// ];

class Index extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };

    this.onClickEntry = this.onClickEntry.bind(this);
  }

  componentWillMount() {
    console.log()
    this.props.requestEntries(this.props.model);
  }

  onClickEntry(id) {
    this.props.setEntry(id);
    browserHistory.push(makeURL(this.props.title) + '/' + id);
  }

  componentWillReceiveProps() {
  }

  // Render method
  render() {
    const {
      entries,
      title
    } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{title || 'Title'}</h3>
        </li>
        {Object.keys(entries).map((entry) =>
          <li
            id="select"
            key={entries[entry].id}
            className="list-group-item"
            onClick={() => this.onClickEntry(entries[entry].id)}
          >
            <i className="fa fa-pencil fa-fw" onClick={this.onClickNew} />
            {entries[entry].title}
          </li>
        )}
      </ul>
    );
  }
}

Index.propTypes = {
  items: React.PropTypes.object,
  mode: React.PropTypes.string,
  entries: React.PropTypes.object,
  title: React.PropTypes.string,
  requestEntries: React.PropTypes.func,
};

function mapStatetoProps(state) {
  console.log('MODEL', state.model);
  console.log('ENTRIES', state.models[state.model]);
  return {
    model: state.model,
    entries: state.models[state.model].entries,
    title: state.models[state.model].title,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestEntries }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Index);
