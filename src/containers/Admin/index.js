// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';
import 'font-awesome-sass-loader';

// User imports
import { requestModels } from '../../actions/';
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

  componentWillMount() {
    // url contains a model title
    // this.props.requestModels().then((data) =>{
    //   if (this.props.params.model && !data.error) {
    //     this.props.setModel(makeURL(this.props.params.model));
    //   }
    // })

    // url contains an entry id
    if (this.props.params.entry) {
      // this.props.getEntries();
      // Select a model
    }
  }

  componentWillReceiveProps() {
  }

  // Render method
  render() {
    console.log();
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
    }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Admin);
