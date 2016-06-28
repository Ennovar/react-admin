// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

// User imports
// -- Functions
import { setModel, getModels, getEntries } from '../../actions/index';
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

  componentWillMount() {
    // this.props.getModels().then(this.props.changeModel(makeURL(this.props.models[0].title)));

    // url == /admin, so set the first model to be the selected model
    if (this.props.selected === -1) {
      const title = this.props.models[0].title;
      this.props.setModel(makeURL(title));
      browserHistory.push(makeURL(title));
    }
  }

  onClickModel(model) {
    const url = makeURL(model);
    this.props.setModel(url);
    this.props.getEntries(url);
    browserHistory.push(`/${url}`);
  }

  onClickNew(e) {
    console.log(e.target.className);
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
        {Object.keys(models).map((model, index) => {
          let active = '';
          if (model === selected) {
            active = ' active';
          }

          return (
            <li
              id="select"
              key={index}
              className={`list-group-item${active}`}
              onClick={() => this.onClickModel(models[model].title)}
            >
              <i className="fa fa-plus fa-fw" onClick={this.onClickNew} />
              {models[model].title}
            </li>
          );
        })}
      </ul>
    );
  }
}

Models.propTypes = {
  setModel: React.PropTypes.func,
  models: React.PropTypes.object,
  selected: React.PropTypes.string,
  getModels: React.PropTypes.func,
  getEntries: React.PropTypes.func,
};

function mapStatetoProps(state) {
  return {
    selected: state.model,
    models: state.models,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setModel, getModels, getEntries }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Models);
