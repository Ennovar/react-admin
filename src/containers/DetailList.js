import React, { Component } from 'react';
import { getDataByID, getDefaultData, UpdateDefault, deleteComponent} from 'actions/AdminActions';
import { browserHistory, Router, Route, Link, Navigation } from 'react-router'
import { makeURL, toTitleCase, undoURL, makeListLabel } from 'helpers/globalfunctions';
const $ = require('jquery');
import LoadingPage from '../../partials/LoadingPage';

class DetailList extends Component
{

  /*
    isEdit is an object of all listings each one with either true or false depending on user selection of
    isEdit for particular listing,
    updatedConfiguration stores the default data from server, and whenever user changes the data, it gets replaced,
    isUpdated is a boolean whether the data in updatedConfiguration is changed or not
    isUpdating is changed to true whenever data is posted to server
    updateComplete is issued by the post action and to tell the page give feedback to user about data is
    successfully posted.
  */
  constructor() {
    super();

    this.state = {
      isEdit: {},
      updatedConfiguration: {},
      postConfiguration: {},
      isUpdated: false,
      isUpdating: false,
      updateComplete: false
    };
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onBooleanClick = this.onBooleanClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteConfig = this.deleteConfig.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.updateConfig1 = this.updateConfig1.bind(this);
    this.updateConfig2 = this.updateConfig2.bind(this);
    this.hideChildren = this.hideChildren.bind(this);
  }

  /*
    Copies data from server passed from DellAdminList as props to this.state.updatedConfiguration
    Also initializes isEdit to all the options available.
  */
  componentWillMount() {
    let post_data = {};
    let config= {};
    let item = this.props.data;
    let index = 0;

    // No properties have been edited
    for (var property in item) {
      this.setState({isEdit:{...this.state.isEdit, [index]:false}});
      if(property != 'boot_drives' && property != 'cpus' && property != 'operating_systems' && property != 'memories')
      {
        post_data[property] = item[property];
        config[property] = item[property];
      }
      else
      {
        config[property] = item[property];
        let newProperty;
        switch(property)
        {
          case 'cpus':
            newProperty = 'cpu_ids';
            break;
          case 'boot_drives':
            newProperty = 'boot_drive_ids';
            break;
          case 'operating_systems':
            newProperty = 'operating_system_ids';
            break;
          case 'memories':
            newProperty = 'memory_ids';
            break;
          default:
            newProperty = property;
            break;
        }
        post_data[newProperty] = [];
        for(var indice in item[property])
        {
          post_data[newProperty].push(item[property][indice].id);
        }
      }
      index++;
    }
    this.setState({updatedConfiguration: config, postConfiguration: post_data});
  }

  /*
    updateConfig actually dispatches action to post data to server, shows the updating page to user
  */
  updateConfig() {
    event.preventDefault();

    let data = {};
    let name = "";
    let controller = this.props.title

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

    if (this.state.isUpdated){
      let newState = this.state.postConfiguration;
      delete newState['created_at'];
      delete newState['updated_at'];
      data[name] = newState;

      this.setState({isUpdating:true});
      this.props.dispatch(UpdateDefault(controller, data, this.props.selection)).then((data) => {
        if(!data.error) {
          browserHistory.push('/admin');
        }
      });
    }
  }

  deleteConfig() {
    event.preventDefault();

    let name = "";
    let controller = this.props.title

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

    this.props.dispatch(deleteComponent(controller, this.props.selection)).then((data) => {
      if(!data.error) {
        browserHistory.push('/admin');
      }
    })
  }

  /*
    For Objects and Array datatypes
    Two updateConfig methods are provided one for checkbox selection
    and other for single value input
    Just replaces the old values with newely selected values in updatedConfiguration
    ***Need To Test*** remove this line after testing with data
  */
  updateConfig1(event) {
    console.log(event.target)
    let fullID = event.target.id.split('-');
    console.log(fullID);
    let type = fullID[0];
    let newType = '';
    let value = Number(fullID[1]) - 1;
    let bool = event.target.checked;

    switch(type)
    {
      case 'cpus':
        newType = 'cpu_ids';
        break;
      case 'boot_drives':
        newType = 'boot_drive_ids';
        break;
      case 'operating_systems':
        newType = 'operating_system_ids';
        break;
      case 'memories':
        newType = 'memory_ids'
      default:
        newType = type;
        break;
    }
    let obj = this.props.defaultOption[newType][value];

    // If the id is already in the configuration, don't readd it
    if (bool && (this.state.postConfiguration[newType].indexOf(obj.id) == -1)){                                                       //  if the selection is checked
      if (obj.length !== 0)
      {
        let items = [...this.state.postConfiguration[newType], obj.id];
        console.log(items)                         //length of obj is not empty...?
        this.setState({postConfiguration:{...this.state.postConfiguration, [newType]:items}});
        this.setState({updatedConfiguration:{...this.state.updatedConfiguration, [newType]:{...this.state.updatedConfiguration[type], value: obj}}})
      }
      // Unlikely Case
      else
      {
        this.setState({postConfiguration:{...this.state.postConfiguration, [newType]:value}});
        this.setState({updatedConfiguration:{...this.state.updatedConfiguration, [type]:value}})
      }
    }
    // Item is already in the config, so remove it
    else {                                                     // if the selection is unchecked
        delete this.state.postConfiguration[newType][value];           //Delete from updatedConfiguration
        console.log(this.state.updatedConfiguration);
        delete this.state.updatedConfiguration[type][value];
    }
    this.setState({isUpdated: true});
  }

  /*
    String, Integer and Boolean data type
    property: the property that will be updated
    value: the new value for the property
  */
  updateConfig2(property, value) {
    this.setState({updatedConfiguration:{...this.state.updatedConfiguration, [property]:value}});
    this.setState({postConfiguration:{...this.state.postConfiguration, [property]:value}})
    if (this.props.data[property] !== value) {
      this.setState({isUpdated: true});
    }
  }

  /*
      Toggle View of objects of objects
          -icn is dropdown symbol <=> upward symbol
          -val is the td tag
          if up replace with down
          else then replace down with up
          Toggle view of its children (Attributes) that does have same id as prefix followed by numbers
  */
  hideChildren(event) {
    let item = event.target;
    let className = event.target.className;
    let tag = item.nodeName;
    console.log(item)
    if(tag === 'TD')
    {
      let child = $(item).children('span')[0];
      let id = item.id;
      if($(child).hasClass('fa-chevron-down'))
      {
        $(child).removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }
      else
      {
        $(child).removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }
      let index = 0;
      while(typeof $('#' + id + '-child-' + index) !== 'undefined') {
        $($('#'+ id +'-child-'+ index)[0]).toggle();
        index++;
        if(index > 200)
        {
          break;
        }
      }
    }

    else if(tag === 'SPAN')
    {
      if($(item).hasClass('fa-chevron-down'))
      {
        event.target.className = className.replace('down', 'up');
      }
      else
      {
        event.target.className = className.replace('up', 'down');
      }
      let id = item.parentNode.id;
      let index = 0;
      while(typeof $('#' + id + '-child-' + index) !== 'undefined') {
        $($('#'+ id +'-child-'+ index)[0]).toggle();
        index++;
        if(index > 200)
        {
          break;
        }
      }
    }
  }





  /*
  ** Toggles pencil (edit) and check-square (done editing) icons and Toggles
  ** isEdit in the components state
  */
  onClickEdit(event) {
    let parentFullID = event.target.parentNode.id.split('-');
    let parentID = parentFullID[1];
    event.preventDefault();
    //console.log(this.state.isEdit);
    if ($(event.target).hasClass('fa-pencil')) {
      event.target.className = event.target.className.replace('fa-pencil','fa-check-square-o');
      this.setState({isEdit: {...this.state.isEdit, [parentID]: true}});
    }
    else
    {
      event.target.className = event.target.className.replace('fa-check-square-o','fa-pencil');
      this.setState({isEdit:{...this.state.isEdit, [parentID]: false}});
    }
  }

  /*
  ** When a boolean toggle is clicked, check to see if the value is changing and
  ** update it's classes
  */
  onBooleanClick(event) {
      let item = event.target;
      let className = item.className;
      let fullID = item.id.split('-');
      let property = fullID[0];
      let value = (fullID[1] === 'true');

      if(!$(item).hasClass('active'))
      {
        $(event.target).addClass('active');
        $(event.target).siblings().removeClass('active');
        this.updateConfig2(property, value);
      }
  }

  /*
  ** When an input type changes, prepare it's value to be be sent for updating
  */
  onInputChange(event) {
    let input = event.target;
    let fullID = input.id.split('-');
    let property = fullID[0];
    let value = input.value;
    this.updateConfig2(property, value);
  }

  /*
  ** If edit is clicked this function is called to render elements for complete default options for selected listing.
  */
  renderEditOptions(options, data, option){
    let OptionList = [];

    // Editing properties that require input
    if (options === 'string' || options === 'integer' || options === 'decimal'){
      OptionList.push(
        <tr key = {option + "-input"}>
          <td>
            <input
              defaultValue = {data[option]}
              onChange = {this.onInputChange}
              id = {option + "-input"}
              placeholder = {'Enter a ' + option + ' of type ' + options}
              style = {{'width':'100%'}}
              type = {(options === 'integer' || options === 'decimal') ? 'number' : 'text'}
            />
          </td>
        </tr>
      );
    }

    //  Editing properties with true/false values
    else if (options === 'boolean'){
      OptionList.push(
        <tr key={option + "-bool"}>
          <td>
            <div className="btn-group" role="group">
              <button id={option + "-true"} onClick={this.onBooleanClick} className={"btn btn-default" + (data[option] ? " active" : "")}>True</button>
              <button id={option + "-false"} onClick={this.onBooleanClick} className={"btn btn-default" + (!data[option] ? " active" : "")}>False</button>
            </div>
          </td>
        </tr>
      );
    }

    //  Editing other type of property
    // NOTE: I'm unsure if this is actually needed
    else{
      OptionList.push(
        <tr key={option + "-other"}>
          <td>
            <input style={{'width':'100%'}} placeholder={'Enter a ' + option + ' of not implemented type ' + options} />
          </td>
        </tr>
      );
    }
    return OptionList;
  }

  /*
  ** Renders attributes for configuration selected. main logic involes in what html to show for edit options and view options
  **  id: the id of the component we are viewing ie. the Server with an id of 5
  **  data: the complete data for the component
  */
  getOptionsList(id, data) {
    let OptionList = [];
    console.log(data)
    if(id !== '' && Object.keys(data).length > 0) {
      let index = 0;
      let formatOption = '';

      for (var property in data) {
        if(property === "id" || property === "created_at" || property === "updated_at") {
          continue;
        }

        let option_key = 'parent-' + index;


        switch(property)
        {
          case 'cpus':
            formatOption = 'cpu_ids';
            break;
          case 'boot_drives':
            formatOption = 'boot_drive_ids';
            break;
          case 'operating_systems':
            formatOption = 'operating_system_ids';
            break;
          default:
            formatOption = property;
            break;
        }
        // Property Header Bar
        OptionList.push(
          <tr key = {property} className="admin-panel-adopt-tblrowttl">
            <td id = {property + '-' + index} colSpan = '12'>
              {undoURL(property)}
              <i className = "fa fa-pencil right edit" onClick={this.onClickEdit} style = {{'marginRight':'10px'}}/>
            </td>
          </tr>
        );

        // Property Options

        //  Decide whether to render view or edit
        //console.log("EDITING",this.state.isEdit[index]);
        let options = this.state.isEdit[index] ? this.props.defaultOption[formatOption] : (this.state.isUpdated ? this.state.updatedConfiguration[property] : data[property]);


        // Make sure there are actually options to render
        if(options !== null) {
        //  console.log('here1')
          //  Property has a list of options ie. Servers needs a list of memories/boot drives etc.
          if (typeof options === 'object') {
        //    console.log('here2');
            let childIndex = 0;
          //  console.log(options)
            for (var option in options) {
              let key = property + option.id;
              let mainKey = property + "-" + options[option].id;


              // Editing
          //    console.log(index)
              if (this.state.isEdit[index]) {
                // Property has already been edited
                let newProperty = '';
                switch(property)
                {
                  case 'cpus':
                    newProperty = 'cpu_ids';
                    break;
                  case 'boot_drives':
                    newProperty = 'boot_drive_ids';
                    break;
                  case 'operating_systems':
                    newProperty = 'operating_system_ids';
                    break;
                  case 'memories':
                    newProperty = 'memory_ids';
                    break;
                  default:
                    newProperty = property;
                }
                //console.log(this.state.updatedConfiguration[newProperty]);
                if (typeof this.state.updatedConfiguration[property] !== 'undefined') {
                  let updated = this.state.postConfiguration[newProperty];     //  if it's the property in original data, show checked input
                  console.log(updated);
                  OptionList.push(
                    <tr key={mainKey} style={{'backgroundColor':'#eee'}}>
                      <td onClick={this.hideChildren} id = {mainKey} colSpan = '12'>
                        <input id = {mainKey + "-input"} type="checkbox" checked={updated.indexOf(options[option].id) !== -1} onChange={this.updateConfig1}></input>
                        {makeListLabel(property, options[option])}
                        <span className="fa fa-chevron-down right" />
                      </td>
                    </tr>
                  );
                }

                // Property has not yet been edited
                else {                                                                  //  to render unchecked depending on user selection
                  OptionList.push(
                    <tr key={mainKey} style={{'backgroundColor':'#eee'}}>
                      <td onClick={this.hideChildren} colSpan = '12' id = {mainKey}>
                        <input id = {mainKey + "-input"} onClick={this.updateConfig1} type="checkbox"></input>
                        {makeListLabel(property, options[option])}
                        <span className="fa fa-chevron-down right" />
                      </td>
                    </tr>
                  );
                }

                // Render options sub items
                let subChildIndex = 0;
                for (var val in options[option]) {                         // sub attributes if there exists more than one
                  if(makeURL(''+val) === "id" || makeURL(''+val) === "created_at" || makeURL(''+val) === "updated_at"){
                    continue;
                  }
                  //  As keys should be unique for each child
                  let subKey = mainKey +'-child-'+ subChildIndex;
                  OptionList.push(
                    <tr id={subKey} style={{'display':'none'}} key={subKey}>
                      <td name={val} key={subKey+'-ttl'} colSpan='6'>{val}</td>
                      <td name={options[option][val]} key={subKey+'-val'}  colSpan="6">{options[option][val]}</td>
                    </tr>
                  );
                  subChildIndex++;
                }
              }

              // NOT Editing
              // Display list of options when not editing
              else if (typeof options[option] === 'object'){
                //console.log("hererererererer")
                OptionList.push(
                  <tr key={mainKey} style={{'backgroundColor':'#eee'}}>
                    <td id = {mainKey} onClick={this.hideChildren} colSpan="12">
                      {makeListLabel(property, options[option])}
                      <span className="fa fa-chevron-down right"></span>
                    </td>
                  </tr>
                );

                // Display options child data
                let subChildIndex = 0;
                for (var prop in options[option]) {
                  let subKey = mainKey +'-child-'+ subChildIndex;
                  OptionList.push(
                    <tr id = {subKey} key = {subKey} style = {{'display':'none'}}>
                      <td colSpan='6'>{prop}</td>
                      <td colSpan='6'>{options[option][prop]}</td>
                    </tr>
                  );
                  subChildIndex++;
                }
              }

              //If it doesn't contain nested objects, but is in edit mode
              // NOTE: not sure if this is needed
              else if (this.state.isEdit[index]){
                OptionList.push(
                  <tr id={key} key={key}>
                    <td name={options[option]} key={key+'-val'} colSpan = '12'>
                      {options[option]}
                    </td>
                  </tr>
                );
              }
              else{
                OptionList.push(
                  <tr id={key} key={key}>
                    <td name={options[option]} key={key+'-val'} colSpan = '12'>{options[option]}</td>
                  </tr>
                );
              }
              childIndex++;
            }
          }










          // Which has only one single property
          else if(typeof options !== 'undefined') {
            let key = option_key + '-0';
            //if edit mode is enabled (user clicked on edit for this particular attribute)
            if (this.state.isEdit[index])
              OptionList.push(
                    this.renderEditOptions(options, data, property)
                  );
            //  Which has only one single property and edit is not clicked
            else {
              OptionList.push(
                <tr id={key} key={key}>
                  <td name={options} colSpan="12" key={key+'-val'}>{''+options}
                  </td>
                </tr>
              );
            }
          }
          //  options === null or options === undefined
          else {
            if(this.state.isEdit[index]) {
              OptionList.push(
                <tr id={option_key+'-0'}  key={option_key+'-0'} >
                  <td name={option_key+'-0'} colSpan="12" key={option_key+'-0-val'}>
                    {'options are null or undefined'}
                  </td>
                </tr>
              );
            }
            else
              OptionList.push(
                <tr id={option_key+'-0'} key={option_key+'-0'}>
                  <td name={option_key+''}  colSpan="12" key={option_key+'-0'}>{'No Options Available, Please consider adding one..'}</td>
                </tr>
              );
          }

        }
        index++;
      }

    }
    //  options list everything is empty, unexpected case
    else {
      OptionList.push(
        <tr key={"server_optionlist_null"}>
          <td colSpan={"12"}>
            <h4 className="alert alert-danger"> <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              Options could not be loaded, Please contact admin (view console for more information)</h4>
          </td>
        </tr>
      );
    }
    return OptionList;
  }

  // Render Method, finally render all the components
  render() {
    return (
      <div>
        {(this.state.isUpdating && !this.state.updateComplete)? <LoadingPage title="Updating" />: (
          <div>
            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th colSpan="12" className="jumbotron admin-panel-adopt-tblhdr" style={{padding:"0px"}}>
                    <h3 className="text-center" >
                      <Link to={"/admin/"+this.props.title} ><i className={"fa fa-chevron-left fa-1x admin-panel-adopt-tblhdr-icn"}></i></Link>
                      {(typeof this.props.data['model']==='undefined')?(Object.keys(this.props.data).length>0?'Model - '+this.props.data['id']:''):this.props.data['model']}
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody id="tbody-detail">
                {this.getOptionsList(this.props.selection, this.props.data)}
                <tr>
                  <td colSpan="12">
                    <div className="btn btn-danger right" onClick={this.deleteConfig}>Delete</div>
                    <div disabled={!this.state.isUpdated} onClick={this.updateConfig} className = "btn btn-primary right">Update</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

module.exports = DetailList
