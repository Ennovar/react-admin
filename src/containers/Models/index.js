// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

// User imports
// -- Functions
// import { getModels, getEntry, setModel } from '../../actions';
import { setModel, requestModels, requestEntries } from '../../actions/';
import { makeURL } from '../../helpers/functions';
// -- Styles
import './style.scss';

class Models extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
    };

    this.onClickModel = this.onClickModel.bind(this);
    this.onClickNew = this.onClickNew.bind(this);
  }

  onClickModel(model) {
    const url = makeURL(model);
    this.props.setModel(model);
    browserHistory.push(`/${url}`);
  }

  onClickNew(e) {
    console.log(e.target.className);
  }

  renderModels() {
    const modelList = [];

    if (this.props.models) {
      const { models, selected } = this.props;
      Object.keys(models).map((model, index) => {
        const active = model === selected ? ' active' : '';
        modelList.push(
          <li
            id="select"
            key={index}
            className={`list-group-item${active} clearfix`}
            onClick={() => this.onClickModel(models[model].tag)}
          >
            <i className="fa fa-plus fa-fw" onClick={this.onClickNew} />
            {models[model].title}
          </li>
        );
      });
    }
    return modelList;
  }

  // Render method
  render() {
    const {
      models,
      selected,
    } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">Models</h3>
        </li>
        {this.renderModels()}
      </ul>
    );
  }
}

Models.propTypes = {
  setModel: React.PropTypes.func,
  models: React.PropTypes.object,
  selected: React.PropTypes.string,
  requestModels: React.PropTypes.func,
  requestEntries: React.PropTypes.func,
};

function mapStatetoProps(state) {
  return {
    selected: state.reducers.model,
    models: state.reducers.models,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setModel,
      requestModels,
      requestEntries,
    }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Models);
