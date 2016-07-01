// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

// User imports
import {  requestEntries } from '../../actions/index';
import { makeURL } from '../../helpers/functions';
import './style.scss';


class Index extends Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      value: false,
    };

    this.onClickEntry = this.onClickEntry.bind(this);
  }

  componentWillMount() {
    if (this.props.model) {
      this.props.requestEntries();
    }
  }

  onClickEntry(id) {
    this.props.setEntry(id);
    browserHistory.push(makeURL(this.props.title) + '/' + id);
  }

  componentWillReceiveProps() {
  }

  // Render method
  render() {
    const {
      entries,
      title
    } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{title || 'Title'}</h3>
        </li>
        {Object.keys(entries).map((entry) =>
          <li
            id="select"
            key={entries[entry].id}
            className="list-group-item"
            onClick={() => this.onClickEntry(entries[entry].id)}
          >
            <i className="fa fa-pencil fa-fw" onClick={this.onClickNew} />
            {entries[entry].title}
          </li>
        )}
      </ul>
    );
  }
}

Index.propTypes = {
  items: React.PropTypes.object,
  mode: React.PropTypes.string,
  entries: React.PropTypes.object,
  title: React.PropTypes.string,
  requestEntries: React.PropTypes.func,
};

function mapStatetoProps(state) {
  return {
    model: state.model,
    entries: state.models[state.model].entries,
    title: state.models[state.model].title,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestEntries }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Index);
