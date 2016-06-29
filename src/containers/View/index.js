// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { setMode } from '../../actions/index';
import BooleanField from '../../components/BooleanField';
import NumberField from '../../components/NumberField';
import TextField from '../../components/TextField';
import SelectField from '../../components/SelectField';

import './style.scss';

// const entry = {
//   id: 7,
//   title: '500GB 7K RPM',
//   capacity: {
//     title: 'Capacity',
//     value: 500,
//   },
//   rpm: {
//     title: 'RPM',
//     value: 7,
//   },
//   connection_type: {
//     title: 'Connection Type',
//     value: 'SATA',
//   },
//   io: {
//     title: 'I/O',
//     value: 6,
//   },
//   solid_state: {
//     title: 'Solid State',
//     value: true,
//   },
//   phy_size: {
//     title: 'Physical Size',
//     value: 2.5,
//   },
// };

class View extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  componentWillMount() {
    this.props.setMode('edit');
  }

  // Render method
  render() {
    const {
      mode,
      entry,
    } = this.props;

    console.log(entry);

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{entry.title || 'Title'}</h3>
        </li>
        {Object.keys(entry).map((key) => {
          if (typeof entry[key].value === 'boolean') {
            return (
              <BooleanField
                key={entry[key].title}
                mode={this.props.mode}
                title={entry[key].title}
                value={entry[key].value}
              />
            );
          } else if (typeof entry[key].value === 'string') {
            return (
              <TextField
                key={entry[key].title}
                title={entry[key].title}
                mode={this.props.mode}
                value={entry[key].value}
              />
            );
          } else if (typeof entry[key].value === 'number') {
            return (
              <NumberField
                key={entry[key].title}
                title={entry[key].title}
                mode={this.props.mode}
                value={entry[key].value}
              />
            );
          } else if (typeof entry[key].value === 'object') {
            return (
              <SelectField
                key={entry[key].title}
                title={entry[key].title}
                mode={this.props.mode}
                value={entry[key].value}
              />
            );
          }
          return null;
        })}
      </ul>
    );
  }
}

View.propTypes = {
  setMode: React.PropTypes.func,
  entry: React.PropTypes.object,
  mode: React.PropTypes.string,
};

function mapStatetoProps(state) {
  return {
    selected: state.entry,
    mode: state.mode,
    entry: state.models[state.model].entries[state.entry],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMode }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(View);
