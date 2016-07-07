import expect from 'expect';
import TextField from '../../components/TextField';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

const textFieldProps = {
  mode: 'view',
  title: 'Title',
  value: 'value',
};

describe('TextField', () => {
  it('should render', () => {
    const textField = ReactTestUtils.renderIntoDocument(<TextField {...textFieldProps} />);
    expect(textField).toExist();
    expect(textField.state.mode).toEqual('view');
    expect(textField.state.value).toEqual('value');

    const h4 = ReactTestUtils.findRenderedDOMComponentWithTag(
      textField, 'h4'
    );

    const p = ReactTestUtils.findRenderedDOMComponentWithTag(
      textField, 'p'
    );

    expect(ReactDOM.findDOMNode(h4).textContent).toEqual('Title');
    expect(ReactDOM.findDOMNode(p).textContent).toEqual('value');
  });

  it('onEditClick', () => {
    const textField = ReactTestUtils.renderIntoDocument(<TextField {...textFieldProps} />);
    expect(textField).toExist();

    const fa = ReactTestUtils.findRenderedDOMComponentWithTag(
      textField, 'i'
    );

    ReactTestUtils.Simulate.click(fa);
    expect(textField.state.mode).toEqual('edit');
  });

  it('changeText', () => {
    const textField = ReactTestUtils.renderIntoDocument(<TextField {...textFieldProps} />);
    expect(textField).toExist();

    const fa = ReactTestUtils.findRenderedDOMComponentWithTag(
      textField, 'i'
    );

    ReactTestUtils.Simulate.click(fa);
    expect(textField.state.mode).toEqual('edit');

    const input = ReactTestUtils.findRenderedDOMComponentWithTag(
      textField, 'input'
    );

    ReactTestUtils.Simulate.change(input, { target: { value: 'new value' } });
    expect(textField.state.value).toEqual('new value');
  });
});
