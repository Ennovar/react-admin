// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';
import 'font-awesome-sass-loader';

// User imports
import AdminActions from '../../actions';
// import { getModels, setModel, getEntries } from '../../actions/index';
import { makeURL } from '../../helpers/functions';

// Components
// import New from '../New';
// import Index from '../Index';
import Models from '../Models';
// import View from '../View';
import './style.scss';

// import Items from '../Items';
/*
// Query Sidebar options

{
  models: [
    {
      title: 'Cars',
      crud: {
        create: 'url to POST to to create a car',
        index: 'url to GET all cars',
        show: 'url to GET a specific car EXAMPLE: http://bobscars.com/api/cars/:id with id being a convention to get the car with that id',
        update: 'url to PUT an update to a specific car while following the same conventions as #show ^^',
        delete: 'url to DELETE a specific car with the id convention above ^^^',
        new: 'url///'
      }
    },
    {
      ect...
    }
  ]
}
// New Model
{
title: 'Hard Drives',
  attributes: {
    base_frequency: {
    type: 'string',
    readable_title: 'Base Frequency',
    }
  }
}
*/

// const models = [
//   {
//     title: 'Boot Drives',
//     id: 1,
//     data: [
//       {
//         title: '500GB 7K RPM',
//         id: 1,
//         capacity: 500,
//         rpm: 7,
//         connection_type: 'SATA',
//         io: 6,
//         solid_state: false,
//         phy_size: 2.5,
//       }, {
//         title: '500GB 7K RPM',
//         id: 2,
//       }, {
//         title: '300GB 15K RPM',
//         id: 3,
//       }, {
//         title: '600GB 15K RPM',
//         id: 4,
//       }, {
//         title: '300GB 10K RPM',
//         id: 5,
//       }, {
//         title: '600GB 10K RPM',
//         id: 6,
//       }, {
//         title: '1200GB 150 RPM',
//         id: 7,
//       }, {
//         title: '200GB 10K RPM',
//         id: 8,
//       }, {
//         title: '400GB 10K RPM',
//         id: 9,
//       },
//     ],
//   }, {
//     title: 'Cables',
//     id: 2,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//     ],
//   }, {
//     title: 'CPUs',
//     id: 3,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//     ],
//   }, {
//     title: 'IOPS',
//     id: 4,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//     ],
//   }, {
//     title: 'Operating Systems',
//     id: 5,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//     ],
//   }, {
//     title: 'Memories',
//     id: 6,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//     ],
//   }, {
//     title: 'Raid Controllers',
//     id: 7,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//     ],
//   }, {
//     title: 'Resiliencies',
//     id: 8,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//       {
//         title: 'Item 8',
//         id: 8,
//       },
//     ],
//   }, {
//     title: 'SAS Host Adapters',
//     id: 8,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//       {
//         title: 'Item 8',
//         id: 8,
//       },
//     ],
//   }, {
//     title: 'Servers',
//     id: 8,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//       {
//         title: 'Item 8',
//         id: 8,
//       },
//     ],
//   }, {
//     title: 'Storage Drives',
//     id: 8,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//       {
//         title: 'Item 8',
//         id: 8,
//       },
//     ],
//   }, {
//     title: 'Storage Enclosures',
//     id: 8,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//       {
//         title: 'Item 8',
//         id: 8,
//       },
//     ],
//   }, {
//     title: 'Users',
//     id: 8,
//     data: [
//       {
//         title: 'Item 1',
//         id: 1,
//       },
//       {
//         title: 'Item 2',
//         id: 2,
//       },
//       {
//         title: 'Item 3',
//         id: 3,
//       },
//       {
//         title: 'Item 4',
//         id: 4,
//       },
//       {
//         title: 'Item 5',
//         id: 5,
//       },
//       {
//         title: 'Item 6',
//         id: 6,
//       },
//       {
//         title: 'Item 7',
//         id: 7,
//       },
//       {
//         title: 'Item 8',
//         id: 8,
//       },
//     ],
//   },
// ];

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
    console.log(AdminActions.baseUrl);
    this.props.getModels().then((data) =>{
      if (this.props.params.model && !data.error) {
        this.props.setModel(makeURL(this.props.params.model));
      }
    })

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
  getModels: React.PropTypes.func,
  getEntries: React.PropTypes.func,
  setModel: React.PropTypes.func,
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
      getModels: AdminActions.getModels,
      setModel: AdminActions.setModel,
      getEntries: AdminActions.getEntries,
    }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Admin);
