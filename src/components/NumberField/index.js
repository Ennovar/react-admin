import React from 'react';
import style from './style.css';
// Add bootstrap
require('bootstrap-loader');


export default class NumberField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
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
        <input type="number" className={style.error + " form-control"}
          onChange={this.changeText.bind(this)} />
      </div>
    );
  }
}
