
export function doSomething() {
  return {
    type: 'SOME_TYPE',
  };
}

export function changeSelection(selection) {

  return {
    type: 'CHANGE_SELECTION',
    payload: selection,
  }
}
