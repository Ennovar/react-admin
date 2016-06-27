// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { changeModel, getModels } from '../../actions/index';
import { makeURL } from '../../helpers/functions';

// Styles
import './style.scss';

class Models extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      selected: '',
    };

    this.onSelect = this.onSelect.bind(this);
    this.onClickNew = this.onClickNew.bind(this);
  }

  componentWillMount() {
    // this.props.getModels().then(this.props.changeModel(makeURL(this.props.models[0].title)));
    if (this.props.selected === '') {
      this.props.changeModel(makeURL(this.props.models[0].title));
    }
  }

  onSelect(index) {
    this.props.changeModel(makeURL(this.props.models[index].title));
  }

  onClickNew(e) {
    console.log(e.target.className);
  }

  // Render method
  render() {
    console.log(this.props);
    const {
      models,
      selected,
    } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">Models</h3>
        </li>
        {models.map((model, index) => {
          let active = '';
          if (selected === makeURL(model.title)) {
            active = ' active';
          }

          return (
            <li
              id="select"
              key={index}
              className={`list-group-item${active}`}
              onClick={() => this.onSelect(index)}
            >
              <i className="fa fa-plus fa-fw" onClick={this.onClickNew} />
              {model.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

Models.propTypes = {
  changeModel: React.PropTypes.func,
  models: React.PropTypes.array,
  selected: React.PropTypes.string,
  getModels: React.PropTypes.func,
};

function mapStatetoProps(state) {
  return {
    selected: state.selected_model,
    models: state.models,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeModel, getModels }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Models);
