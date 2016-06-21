var ReactDOM = require('react-dom');
var React = require('react');
import { AdminList } from './AdminList';
import { browserHistory, Router, Route, Link, Navigation } from 'react-router'
import { getData } from 'actions/AdminActions';


var AdminPanel = React.createClass({
  getInitialState:function(){
    return {
      // Options that show up in Left Panel of Main Admin Page
      Options:{
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
    };
  },

  componentWillMount:function(){
    var {dispatch} = (typeof this.props.route === 'undefined'?this.props.store:this.props.route.store);
    for (var obj in this.state.Options){
      dispatch(getData(obj,this));
    }
  },

  componentWillUnmount:function() {

  },

  componentDidMount:function(){
    var {dispatch, getState} = (typeof this.props.route === 'undefined'?this.props.store:this.props.route.store);
  },

  checkStatus:function(){
    for (var option in this.state.Options){
      if (!this.state.Options[option].ready)
        return false;
    }
      return true;
    //return (this.state.Options['servers'].ready && this.state.Options['storage_enclosures'].ready && this.state.Options['boot_drives'].ready)
  },

  render: function(){
    var loading_html = (
      <div className="container">
        <h3>Initializing...</h3>
	      <div className="h4"><span className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>Please wait</div>
      </div>
    );
    return(
      <div id="content" className="container-fluid" >
        <div className = "row">
          {
           (this.checkStatus())?(this.props.children || <AdminList Options={this.state.Options} />):loading_html
          }
        </div>
      </div>
    );
  }
})
module.exports = AdminPanel
