// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-loader';
import 'font-awesome-sass-loader';

// User imports
import { doSomething } from '../../actions/admin_actions';

// Components
// import New from '../New';
import Models from '../Models';
import Items from '../Items';
import './style.scss';

const models = [
  {
    title: 'Model 1',
    id: 1,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
    ],
  }, {
    title: 'Model 2',
    id: 2,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
    ],
  }, {
    title: 'Model 3',
    id: 3,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
      {
        title: 'Item 3',
        id: 3,
      },
    ],
  }, {
    title: 'Model 4',
    id: 4,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
      {
        title: 'Item 3',
        id: 3,
      },
      {
        title: 'Item 4',
        id: 4,
      },
    ],
  }, {
    title: 'Model 5',
    id: 5,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
      {
        title: 'Item 3',
        id: 3,
      },
      {
        title: 'Item 4',
        id: 4,
      },
      {
        title: 'Item 5',
        id: 5,
      },
    ],
  }, {
    title: 'Model 6',
    id: 6,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
      {
        title: 'Item 3',
        id: 3,
      },
      {
        title: 'Item 4',
        id: 4,
      },
      {
        title: 'Item 5',
        id: 5,
      },
      {
        title: 'Item 6',
        id: 6,
      },
    ],
  }, {
    title: 'Model 7',
    id: 7,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
      {
        title: 'Item 3',
        id: 3,
      },
      {
        title: 'Item 4',
        id: 4,
      },
      {
        title: 'Item 5',
        id: 5,
      },
      {
        title: 'Item 6',
        id: 6,
      },
      {
        title: 'Item 7',
        id: 7,
      },
    ],
  }, {
    title: 'Model 8',
    id: 8,
    data: [
      {
        title: 'Item 1',
        id: 1,
      },
      {
        title: 'Item 2',
        id: 2,
      },
      {
        title: 'Item 3',
        id: 3,
      },
      {
        title: 'Item 4',
        id: 4,
      },
      {
        title: 'Item 5',
        id: 5,
      },
      {
        title: 'Item 6',
        id: 6,
      },
      {
        title: 'Item 7',
        id: 7,
      },
      {
        title: 'Item 8',
        id: 8,
      },
    ],
  },
];

class Admin extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };
  }

  // Render method
  render() {
    const {
      selected,
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3">
            <Models models={models} />
          </div>
          <div className="col-xs-9">
            <Items items={models[selected]} />
          </div>
        </div>
      </div>
    );
  }
}

Admin.propTypes = {
  selected: React.PropTypes.number,
};

function mapStatetoProps(state) {
  return {
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSomething }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Admin);
