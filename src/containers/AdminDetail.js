// Library imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// User imports
import { getDataByID, getDefaultData, UpdateDefault } from 'actions/AdminActions';
import { browserHistory, Router, Route, Link, Navigation } from 'react-router'
import { makeURL, toTitleCase, undoURL } from 'helpers/globalfunctions';
import { DetailList } from 'components';
import LoadingPage from 'components/partials/LoadingPage';

class DellDetailList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      selected: '',
      Defaults: {},
      Options: {},
      data: {}
    }
  }

  /*
    this.props.route/this.props.store is used for selecting dispatch from URL parameters, when link is being called
     and this.props.params, when we call the function manually, mainly used for testing each component individually.
  */
  componentWillMount() {
    var {dispatch} = ((typeof this.props.route === 'undefined')?this.props.store:this.props.route.store);
    this.setState({dispatch:dispatch});
    if (typeof this.props.params === 'undefined'){
      dispatch(getDataByID(this.props.title, this, this.props.params.selected));
      dispatch(getDefaultData(this, this.props.title));
      this.setState({
        title: this.props.title, Options:{...this.state.Options, [this.props.title]:{ready:false}},
        Defaults:{...this.state.Defaults, [this.props.title]: {ready:false}}
      });
    }
    else{
      dispatch(getDataByID(this.props.params.title, this, this.props.params.id));
      dispatch(getDefaultData(this, this.props.params.title));
      this.setState({
        title: this.props.params.title, Options:{...this.state.Options, [this.props.params.title]: {ready:false}},
        Defaults:{...this.state.Defaults, [this.props.params.title]: {ready:false}}
      });
    }
  }

  /*
    Based on option selected in left side pane URL cshould change and this is the function that changes it and replace Title
  */
  changeSelection(selection) {
    browserHistory.push('/admin/'+makeURL(selection.title)+'/'+makeURL(selection.id.toLowerCase()));
    this.setState({selected:toTitleCase(selection.id.replace(new RegExp('_', 'g'),' '))});
  }

  /*
    To make sure URL matches the Title
  */
  componentDidMount() {
    if (typeof this.props.params === 'undefined')
    {
      this.changeSelection(
      {
        title: this.props.title,
        id: this.props.selected
      });
    }
    else
    {
      this.changeSelection(this.props.params);
    }
  }

  /*
    check if the data from server is loaded for selected config and default options available for that selection
  */
  checkStatus() {
    for (var option in this.state.Options){
      if (this.state.Options[option].ready){
        for (var defaultOption in this.state.Defaults){
          if (this.state.Defaults[this.state.title].ready)
            return true;
        }
      }
    }
    return false;
  }

  /*
    Finally render the data only if all of the data is loaded from the server
  */
  render() {
    return (
      <div className="admin-panel">
        <div className="col-xs-12 col-md-12 admin-panel-adopt" >
          {(this.checkStatus())?(<DetailList dispatch={this.state.dispatch} defaultOption={this.state.Defaults[this.state.title].data} data={this.state.Options[this.state.title].data} title={this.state.title} selection={this.state.selected} />): <LoadingPage />}
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDataByID, getDefaultData, UpdateDefault }, dispatch)
}

function mapStateToProps(state) {
  return {
    data: state.admin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DellDetailList);
