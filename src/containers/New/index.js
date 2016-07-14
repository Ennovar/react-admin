// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';

// User imports
//  - actions
import { requestCreate } from '../../actions';
import { toObj } from '../../helpers/functions';
//  - components
import TextField from '../../components/TextField';
import NumberField from '../../components/NumberField';
import BooleanField from '../../components/BooleanField';
import SelectField from '../../components/SelectField';
import StringField from '../../components/StringField';
//  - styles
import './style.scss';

class New extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
      mode: 'new',
      postData: {},
    };

    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }

  create() {
    const { entry, requestCreate, selected } = this.props;
    const data = {};
    const type = selected.slice(0, -1);
    data[type] = this.state.postData;

    requestCreate(data).then(() =>
      browserHistory.push(`/${selected}`)
    );
  }

  update(value, key) {
    this.setState({ postData: { ...this.state.postData, [key]: value } });
  }

  renderAttributes() {
    if (this.props.attributes) {
      const { attributes } = this.props;
      const { mode } = this.state;

      // Render each attributes field individually
      const attributeList = Object.keys(attributes).map((key) => {
        if (key !== 'id' && key !== 'created_at' && key !== 'updated_at') {
          const { title, type } = attributes[key];
          if (type === 'boolean') {
            return (
              <BooleanField
                key={key}
                title={title}
                update={this.update}
              />
            );
          } else if (type === 'integer') {
            return (
              <NumberField
                key={key}
                mode={mode}
                title={title}
                update={this.update}
              />
            );
          } else if (type === 'object') {
            return (
              <SelectField
                key={key}
                mode={mode}
                title={title}
                update={this.update}
              />
            );
          } else if (type === 'string') {
            return (
              <StringField
                key={key}
                mode={mode}
                title={title}
                update={this.update}
              />
            );
          } else if (type === 'text') {
            return (
              <TextField
                key={key}
                mode={mode}
                title={title}
                update={this.update}
              />
            );
          }
        }
        return null;
      });
      return attributeList;
    }
    return null;
  }

  // Render method
  render() {
    const { postData } = this.state;
    console.log(this.state.postData);

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">New {this.props.selected}</h3>
        </li>
        {this.renderAttributes()}
        {Object.keys(postData).length !== 0 &&
          <li className="list-group-item clearfix">
            <button
              className="btn btn-primary pull-right"
              onClick={this.create}
            >
              Create
            </button>
          </li>
        }
      </ul>
    );
  }
}

New.propTypes = {
  attributes: React.PropTypes.object,
  selected: React.PropTypes.string,
};

function mapStatetoProps(state) {
  const { models, selectedModel, selectedEntry } = state.reducer;
  const selected = selectedModel;

  if (selectedEntry !== 0 && !models[selected].isFetching) {
    const attributes = toObj(models[selected].attributes, 'tag');
    return {
      attributes,
      selected,
    };
  }
  return {
    selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCreate }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(New);
