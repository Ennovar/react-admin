// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { changeSelection } from '../../actions/admin_actions';

// Components
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
    this.props.changeSelection(0);
  }

  onSelect(index) {
    this.props.changeSelection(index);
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
          <h3 className="list-group-item-heading">Models</h3>
        </li>
        {models.map((model, index) => {
          let active = '';
          if (selected === index) {
            active = ' active';
          }

          return (
            <li
              id="select"
              key={index}
              className={`list-group-item${active}`}
              onClick={() => this.onSelect(index)}
            >
              {model.title}
              <i className="fa fa-plus" onClick={this.onClickNew}></i>
            </li>
          );
        })}
      </ul>
    );
  }
}

Models.propTypes = {
  changeSelection: React.PropTypes.func.isRequired,
  models: React.PropTypes.array.isRequired,
  selected: React.PropTypes.number,
};

function mapStatetoProps(state) {
  return {
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeSelection }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Models);
