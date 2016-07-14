// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';
import 'font-awesome-sass-loader';

// User imports
import { requestModels, setBaseURL, setAdminURL } from '../../actions/';
// import { getModels, setModel, getEntries } from '../../actions/index';
import { makeURL } from '../../helpers/functions';

// Components
// import New from '../New';
// import Index from '../Index';
import Models from '../Models';
// import View from '../View';
import './style.scss';


class Admin extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  componentWillReceiveProps() {
  }

  // Render method
  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="menu" className="col-xs-6 col-sm-3">
            <Models />
          </div>
          <div id="content" className="col-xs-6 col-sm-9">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  model: React.PropTypes.string,
  requestModels: React.PropTypes.func,
  setBaseURL: React.PropTypes.func,
  setAdminURL: React.PropTypes.func,
  children: React.PropTypes.object,
  // getEntries: React.PropTypes.func,
  // setModel: React.PropTypes.func,
  params: React.PropTypes.object,
};

function mapStatetoProps(state) {
  return {
    selected: state.model,
    models: state.models,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      requestModels,
      setBaseURL,
      setAdminURL,
    }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Admin);
