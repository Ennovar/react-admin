export function doSomething() {
  console.log('something happened');
  return {
    type: 'SOME_TYPE',
  };
}

export function changeSelection(selection) {
  return {
    type: 'CHANGE_SELECTION',
    payload: selection
  }
}
