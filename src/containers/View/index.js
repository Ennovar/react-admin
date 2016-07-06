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

  renderAttributes() {
    // Make sure there is an entry with attributes to render
    if (this.props.entry) {
      const { entry } = this.props;

      const attributeList = Object.keys(entry).map((key) => {
        if (typeof entry[key] === 'boolean') {
          return (
            <BooleanField
              key={entry[key].title}
              mode={this.props.mode}
              title={entry[key].title}
              value={entry[key].value}
            />
          );
        } else if (typeof entry[key] === 'string') {
          return (
            <TextField
              key={key}
              title={key}
              mode={this.props.mode}
              value={entry[key]}
            />
          );
        } else if (typeof entry[key] === 'number') {
          return (
            <NumberField
              key={key}
              title={key}
              mode={this.props.mode}
              value={entry[key]}
            />
          );
        } else if (typeof entry[key] === 'object') {
          return (
            <SelectField
              key={key}
              title={key}
              mode={this.props.mode}
              value={entry[key]}
            />
          );
        }
      });
      return attributeList;
    }
    return null;
  }

  // Render method
  render() {
    const {
      mode,
    } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{this.props.entry ? this.props.entry.title : 'Title'}</h3>
        </li>
        {this.renderAttributes()}
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
  const { models, model } = state.reducers;
  const selected = state.reducers.entry;
  let entry = {};

  if (selected !== -1) {
    console.log(models[model]);
    entry = models[model].entries[selected];
    return {
      selected,
      entry,
    };
  }
  return {
    selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMode }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(View);
