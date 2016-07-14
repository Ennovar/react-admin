// Libary imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

// User imports
import { requestEntries } from '../../actions/index';
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

  onClickEntry(id) {
    browserHistory.push(`${makeURL(this.props.tag)}/${id}`);
  }

  // Render a list of entries
  renderEntries() {
    const { entries } = this.props;
    let entryList = [];

    if (entries) {
      entryList = Object.keys(entries).map((entry) =>
      (
        <li
          id="select"
          key={entries[entry].id}
          className="list-group-item clearfix"
          onClick={() => this.onClickEntry(entries[entry].id)}
        >
          <i className="fa fa-pencil fa-fw" onClick={this.onClickNew} />
          {entries[entry].title}
        </li>
      ));
    }
    return entryList;
  }

  // Render method
  render() {
    const { title } = this.props;

    return (
      <ul id="field" className="list-group">
        <li className="list-group-item">
          <h3 className="list-group-item-heading text-center">{title || 'Title'}</h3>
        </li>
        {this.renderEntries()}
      </ul>
    );
  }
}

Index.propTypes = {
  items: React.PropTypes.object,
  mode: React.PropTypes.string,
  entries: React.PropTypes.object,
  tag: React.PropTypes.string,
  title: React.PropTypes.string,
  requestEntries: React.PropTypes.func,
};

function mapStatetoProps(state) {
  if (state.reducer.selectedModel !== '') {
    return {
      model: state.reducer.model,
      entries: state.reducer.models[state.reducer.selectedModel].entries,
      title: state.reducer.models[state.reducer.selectedModel].title,
      tag: state.reducer.models[state.reducer.selectedModel].tag,
    };
  }
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestEntries }, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(Index);
