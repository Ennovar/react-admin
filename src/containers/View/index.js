// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

// User imports
import { toObj } from '../../helpers/functions';
import { setMode, setupUpdate, requestDelete } from '../../actions/index';
import BooleanField from '../../components/BooleanField';
import NumberField from '../../components/NumberField';
import TextField from '../../components/TextField';
import StringField from '../../components/StringField';
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
      updated: false,
      putData: {},
    };

    this.update = this.update.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {
    this.props.setMode('view');
  }

  onUpdateClick() {
    const { entry, setupUpdate, model } = this.props;
    const data = {};
    const type = model.slice(0, -1);
    data[type] = this.state.putData;

    setupUpdate(data, entry.id).then(() =>
      browserHistory.push(`/${model}`)
    );
  }

  update(prev, curr, key) {
    this.setState({ updated: prev !== curr });
    this.setState({ putData: { ...this.state.putData, [key]: curr } });
  }

  delete() {
    const { entry, requestDelete, model } = this.props;
    requestDelete(entry.id).then(() =>
      browserHistory.push(`/${model}`)
    );
  }

  renderAttributes() {
    // Make sure there is an entry with attributes to render
    if (this.props.entry) {
      const { attributes, entry, mode, model } = this.props;

      const attributeList = Object.keys(entry).map((key) => {
        if (key !== 'id' && key !== 'created_at' && key !== 'updated_at') {
          if (attributes[key].type === 'boolean') {
            return (
              <BooleanField
                url={`${model}/${entry.id}`}
                key={`${key}${entry.id}`}
                mode={mode}
                title={attributes[key].title}
                value={entry[key].value}
              />
            );
          } else if (attributes[key].type === 'string') {
            return (
              <StringField
                key={`${key}${entry.id}`}
                title={attributes[key].title}
                mode={mode}
                value={entry[key]}
                update={this.update}
              />
            );
          } else if (attributes[key].type === 'text') {
            return (
              <TextField
                key={`${key}${entry.id}`}
                title={attributes[key].title}
                mode={mode}
                value={entry[key]}
                update={this.update}
              />
            );
          } else if (attributes[key].type === 'number') {
            return (
              <NumberField
                key={`${key}${entry.id}`}
                title={attributes[key].title}
                mode={mode}
                value={entry[key]}
                update={this.update}
              />
            );
          } else if (attributes[key].type === 'object') {
            return (
              <SelectField
                key={`${key}${entry.id}`}
                title={attributes[key].title}
                mode={mode}
                value={entry[key]}
                update={this.update}
              />
            );
          }
          return null;
        }
      });
      return attributeList;
    }
    return null;
  }

  renderButtons() {
    const { updated } = this.state;
    return (
      <li className="list-group-item clearfix">
        <button
          className="btn btn-danger pull-right"
          onClick={this.delete}
        >
          Delete
        </button>
        {updated &&
          <button
            className="btn btn-primary pull-right"
            onClick={this.onUpdateClick}
          >
            Update
          </button>
        }
      </li>
    );
  }

  // Render method
  render() {
    const { entry } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{entry ? entry.title : 'Title'}</h3>
        </li>
        {this.renderAttributes()}
        {this.renderButtons()}
      </ul>
    );
  }
}

View.propTypes = {
  attributes: React.PropTypes.object,
  setMode: React.PropTypes.func,
  entry: React.PropTypes.object,
  mode: React.PropTypes.string,
  model: React.PropTypes.string,
};

function mapStatetoProps(state) {
  const { models, selectedModel, selectedEntry } = state.reducer;
  const selected = selectedEntry;
  const model = selectedModel;
  let entry = {};

  if (selectedEntry !== 0 && !models[selectedModel].isFetching) {
    entry = models[selectedModel].entries[selectedEntry];
    const attributes = toObj(models[selectedModel].attributes, 'tag');
    return {
      attributes,
      selected,
      entry,
      model,
    };
  }
  return {
    selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMode, setupUpdate, requestDelete }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(View);
