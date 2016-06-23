import React from 'react';
import style from './style.css';
// Add bootstrap
require('bootstrap-loader');

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  changeText(e) {
    this.setState({
      value: e.target.value,
    });
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <input type="text" className={style.error + " form-control"}
          onChange={this.changeText.bind(this)} />
      </div>
    );
  }
}
