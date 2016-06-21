import React, { Component } from 'react';
import { getDefaultData, POSTDefault } from 'actions/AdminActions';
import { browserHistory, Router, Route, Link, Navigation } from 'react-router';
import { makeURL, toTitleCase } from 'helpers/globalfunctions';
import { SelectionList } from 'components';
import LoadingPage from '../../partials/LoadingPage';
import '../../../assets/admin.scss';

class AdminAdd extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
      Defaults: {},
      data: {},
      post_data: {}
    }

    this.changeSelection = this.changeSelection.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.saveConfig = this.saveConfig.bind(this);
  }

  componentWillMount() {
      const {dispatch} = ((typeof this.props.route === 'undefined') ? this.props.store: this.props.route.store);
      if (typeof this.props.params === 'undefined') {                 //If passed by props used in testing
        dispatch(getDefaultData(this.props.title, this, 1));
        this.setState({title:this.props.title});
      }
      else {                                                          //If passed by URL: most common way
        dispatch(getDefaultData(this, this.props.params.title));
        this.setState({title:this.props.params.title});
      }
  }

  changeSelection(selection, type) {
    let select = [];
    for (var s in selection)
      if(! (s in this.state.post_data) || type == 'integer' || type == 'string' || type == 'boolean' || type == 'decimal')
      {
        if(type != 'integer' && type != 'string' && type != 'boolean' && type != 'decimal')
        {
          select.push(selection[s]);
          this.setState({post_data:{...this.state.post_data, [s]:select}},()=>{console.log(this.state.post_data)});
        }
        else {
          if(type == 'integer' || type == 'decimal')
          {
            this.setState({post_data:{...this.state.post_data, [s]:Number(selection[s])}},()=>{console.log(this.state.post_data)});
          }
          else {
            this.setState({post_data:{...this.state.post_data, [s]:selection[s]}},()=>{console.log(this.state.post_data)});
          }
        }
      }
      else if (this.state.post_data[s].indexOf(selection[s]) == -1)
      {
        let items = [...this.state.post_data[s], selection[s]];
        this.setState({post_data:{...this.state.post_data, [s]:items}},()=>{console.log(this.state.post_data)});
      }
      else {
        let index = this.state.post_data[s].indexOf(selection[s]);
        let items = [...this.state.post_data[s].slice(0, index), ...this.state.post_data[s].slice(index + 1)];
        this.setState({post_data:{...this.state.post_data, [s]:items}},()=>{console.log(this.state.post_data)});
      }
      //I think we need to validate this stuff
  }

  checkStatus() {
    for (var option in this.state.Defaults) {
      if (this.state.Defaults[option].ready == true){
        return true;
      }
    }
    return false;
  }

  saveConfig() {
    let data = {};
    let name = "";
    let controller = this.props.params.title;

    // Use the title param to create the name of the appropriate object
    switch(controller)
    {
      case "memories":
        name = "memory";
        break;
      case "resiliencies":
        name = "resiliency";
        break;
      default:
        name = controller.slice(0, -1);
        break;
    }
    data[name] = this.state.post_data;

    // TODO: remove operating_systems and memory_ids
    POSTDefault(controller, data).then((data) => {
      if(!data.error) {
        console.log(data);
        browserHistory.push('/admin');
      }
    });
    console.log('done');
  }

  render() {

    return (
      <div className="admin-panel" >
        <div className=" admin-panel-adnew" >
          {(this.checkStatus()) ? (<SelectionList changeSelection={this.changeSelection} data={this.state.Defaults[this.state.title].data} component={this.state.title} />) : <LoadingPage title="Loading" />}
          {(this.checkStatus()) ? (<div onClick={this.saveConfig} className = "btn btn-primary save">Save</div>) : (<div></div>)}
        </div>
      </div>
    );
  }
}

module.exports = AdminAdd
