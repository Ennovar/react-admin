import React from 'react';
import style from './style.css';
// Add bootstrap
require('bootstrap-loader');


export default class BooleanField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  changeBoolean() {
    this.setState({
      value: this.state.value ? false : true,
    });
  }
  render() {
    return (
      <div>
        <button className={style.btn + " btn btn-default"} onClick={this.changeBoolean.bind(this)}>
          {this.state.value ? 'True' : 'False'}
        </button>
      </div>
    );
  }
}
