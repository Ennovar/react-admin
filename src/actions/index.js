
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

export function changeMode(mode) {
  return {
    type: 'CHANGE_MODE',
    payload: mode,
  };
}

export function changeModel(model) {
  return {
    type: 'CHANGE_MODEL',
    payload: model,
  };
}

export function getModels() {
  return {
    type: 'GET_MODELS',
    payload: {
      data: [
        {
          id: 1,
          title: 'Boot Drives',
        }, {
          id: 2,
          title: 'Cables',
        }, {
          id: 3,
          title: 'CPUs',
        }, {
          id: 4,
          title: 'Servers',
        }, {
          id: 5,
          title: 'Servers',
        }, {
          id: 6,
          title: 'Servers',
        }, {
          id: 7,
          title: 'Servers',
        }, {
          id: 8,
          title: 'Servers',
        }, {
          id: 9,
          title: 'Servers',
        }, {
          id: 10,
          title: 'Servers',
        },
      ],
    },
  };
}

export function getIndex(model) {
  const url = model;

  return {
    type: 'GET_INDEX',
    payload: {
      data: [
        {
          id: 1,
          title: '500GB 7K RPM',
          capacity: {
            title: 'Capacity',
            value: 500,
          },
          rpm: {
            title: 'RPM',
            value: 7,
          },
          connection_type: {
            title: 'Connection Type',
            value: 'SATA',
          },
          io: {
            title: 'IO',
            value: 6,
          },
          solid_state: {
            title: 'Solid State',
            value: false,
          },
          phy_size: {
            title: 'Physical Size',
            value: 2.5,
          },
        }, {
          id: 2,
          title: 'Cables',
        }, {
          id: 3,
          title: 'CPUs',
        }, {
          id: 4,
          title: 'Servers',
        }, {
          id: 5,
          title: 'Servers',
        }, {
          id: 6,
          title: 'Servers',
        }, {
          id: 7,
          title: 'Servers',
        }, {
          id: 8,
          title: 'Servers',
        }, {
          id: 9,
          title: 'Servers',
        }, {
          id: 10,
          title: 'Servers',
        },
      ],
    },
  };
}
