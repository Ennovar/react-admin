// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux'

// User functions
import { getItems, changeSelection } from 'actions/AdminActions';
import { undoURL, toTitleCase, makeTitle, makeURL } from 'helpers/globalfunctions';

// Components
import OptionList from './OptionList';
import ItemList from './ItemList';
import LoadingPage from 'components/partials/LoadingPage';

// Stylesheet
import 'assets/admin.scss';

class AdminList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      options: {
        'boot_drives': {ready: false},
        'cables': {ready: false},
        'cpus': {ready: false},
        'iops': {ready: false},
        'operating_systems': {ready: false},
        'memories': {ready: false},
        'raid_controllers': {ready: false},
        'resiliencies': {ready: false},
        'sas_host_adapters':{ready: false},
        'servers': {ready: false},
        'storage_drives':{ready: false},
        'storage_enclosures': {ready: false},
        'users': {ready: false}
      }
    }
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(selection) {
    browserHistory.push('/admin/' + selection);
    this.props.changeSelection(makeTitle(selection));
  }

  componentWillMount() {
    let selected = Object.keys(this.state.options)[0];

    // Get data for all options
    for (let option in this.state.options) {
      this.props.getItems(option, this).then((data) => {
        if(!data.error) {
          this.setState({options: {...this.state.options,[option]: {ready: true}}})
        }
      })
    }

    // Set selected to the first item in the options list
    this.props.changeSelection(makeTitle(selected));
    browserHistory.push('/admin/' + selected)
  }

  checkStatus(){
    let components = this.state.options;

    for (var component in components)
    {
      // Make sure that every component is ready/loaded
      if(!components[component].ready)
        return false;
    }
    return true;
  }

  // Render Method
  render() {
    const options = this.state.options;
    const selected = this.props.data.selected;

    return (
      this.props.children ||
      (
        <div className="admin">
          <div id="options_list" className="col-xs-4">
            <OptionList options={options} selected={selected} changeSelection={this.changeSelection} />
          </div>
          <div id="item_list" className="col-xs-8">
            {
              (this.checkStatus()) ?
              <ItemList items={this.props.data[makeURL(selected)]} selected={selected} /> :
              <LoadingPage title="Loading"/>
            }
          </div>
        </div>
      )
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getItems, changeSelection }, dispatch)
}

function mapStateToProps(state) {
  return {
    data: state.admin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
