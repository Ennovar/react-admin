import React, { Component } from 'react';
import { getDataByID } from 'actions/AdminActions';
import { browserHistory, Router, Route, Link, Navigation } from 'react-router'
import { makeURL, undoURL, toTitleCase, makeLabel } from 'helpers/globalfunctions';

function makeNew(str)
{
  switch(str)
  {
    case 'servers':
      return 'Server';
    case 'memories':
      return 'Memory';
    case 'storage_enclosures':
      return 'Storage Enclosure';
    case 'operating_systems':
      return 'Operating System';
    case 'boot_drives':
      return 'Boot Drive';
    default:
      return '';
  }
}


// Props:
//  component: the type of component we are creating, ie. server, boot drive, etc.
//  data: data returned that tells us about a new configuration of the selected component

class SelectionList extends Component {

  constructor() {
    super();
    this.changeSelection = this.changeSelection.bind(this);
  }

  changeSelection(event) {
    if (event.target.className.indexOf('btn-primary') !== -1)
      event.target.className = event.target.className.replace('btn-primary','');
    else{
      event.target.className += ' btn-primary';
    }
  }

  getOptionsList() {
    let OptionList = [];

    if (this.props.component !== '') {
      let component = this.props.component;
      let data = this.props.data;
      let multilist = false;

      let index = 0;
      for (var option in data) {
        multilist = false;

        // Model is handled outside of the selection list
        if(option === "model")
        {
          continue;
        }

        if(data[option].constructor === Array)
        {
          multilist = true;
        }

        // Add Category (Darker Box)
        OptionList.push(
          <tr className="admin-panel-adnew-tblrowttl" key={option}>
            <td name={option}>
              {toTitleCase(undoURL(option))}
              <div className="right">
                {multilist && <Link to={"/admin/"+makeURL(component)+'/new/'+makeURL(option)+'/edit'}><i className = "fa fa-plus"></i></Link>}
              </div>
            </td>
          </tr>
        );


        // Add Categories Options
        var options = this.props.data[option];

        if(options !== null)
        {
          // Category has multiple elements ie. CPUs, Boot Drive, etc.
          if (typeof options === "object")
          {
            for (var i in options) {
              var key = option + "_" + options[i].id;
              OptionList.push(
                <tr onClick={this.props.changeSelection.bind(null,{[option]:options[i].id})} key={key}>
                  <td onClick={this.changeSelection}>{makeLabel(option, options[i])}</td>
                </tr>
              );
            }
          }
          // True or False / Yes or No
          else if (options == "boolean")
          {
            OptionList.push(
              <tr onClick={this.props.changeSelection.bind(null, {[option]:true}, options)} key={option + "_true"}>
                <td onClick={this.changeSelection}>Yes</td>
              </tr>
            );
            OptionList.push(
              <tr onClick={this.props.changeSelection.bind(null,{ [option]:false}, options)} key={option + "_false"}>
                <td onClick={this.changeSelection}>No</td>
              </tr>
            );
          }
          // User input is needed
          else if(options == "string" || options == "integer" || options == "decimal")
          {
            OptionList.push(
              <tr key={option + "_input"}>
                <td onClick={this.changeSelection}>
                  <input onBlur={this.handleBlur.bind(this, option, options)} placeholder={option} style={{'width':'100%'}} />
                </td>
              </tr>
            );
          }
          // Category has one element
          else if (typeof options !== 'undefined')
          {
            OptionList.push(
              <tr onClick={this.props.changeSelection.bind(null, {[option]:options})} key={option + "_singleton"}>
                <td onClick={this.changeSelection}>{makeLabel(option, options)}</td>
              </tr>
            );
          }
          else {
            // Do nothing
          }
        }
        // Category has 0 elements
        else
        {
          OptionList.push(
            <tr>
              <td>{'No Options Available, Please consider adding one..'}</td>
            </tr>
          );
        }
      }
    }
    // No categories to add / Something wrong
    else {
      OptionList.push(
        <tr key={"server_optionlist_null"}>
          <td colSpan={"12"}>
            Somethings wrong, Please report to admin
          </td>
        </tr>
      );
    }
    return OptionList;
  }

  handleBlur(option, type, event) {
    console.log(event.target.value);
    this.props.changeSelection({[option]: event.target.value}, type);
  }

  render() {
    let model;
    if('model' in this.props.data)
    {
      model = <input type = "text" className="admin-panel-adnew-txt" ref="model" onBlur={this.handleBlur.bind(this, 'model', 'string')} placeholder={'New ' + makeNew(this.props.component) + ' Configuration'}/>
    }

    return (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="jumbotron text-center admin-panel-adnew-tblhdr">
                <Link to="/admin"><i className="fa fa-chevron-left admin-panel-adnew-tblhdr-icn"/></Link>
                {model}
            </th>
          </tr>
        </thead>
        <tbody>
          {this.getOptionsList()}
        </tbody>
      </table>
    );
  }
}

module.exports = SelectionList
