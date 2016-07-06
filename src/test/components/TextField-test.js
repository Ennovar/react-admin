import expect from 'expect';
import TextField from '../../components/TextField';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

describe('TextField', () => {
  it('should render', () => {
    // ReactDOM.render(
    //   <TextField />,
    //   document.body
    // );
    const root = ReactTestUtils.renderIntoDocument(<TextField title={'here'} value={'happy birthday'} mode={'view'} />);
    expect(root).toExist();
  });
});
