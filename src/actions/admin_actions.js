
export function doSomething() {
  return {
    type: 'SOME_TYPE',
  };
}

export function changeSelection(selection) {
  return {
    type: 'CHANGE_SELECTION',
    payload: selection,
  };
}

export function getModels() {
  return {
    type: 'GET_MODEL_TYPES',
    payload: '',
  };
}
