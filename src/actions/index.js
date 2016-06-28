
export function doSomething() {
  return {
    type: 'SOME_TYPE',
  };
}

/* ******************************** SETTERS ******************************** */
export function setMode(mode) {
  return {
    type: 'SET_MODE',
    payload: mode,
  };
}

/*
 * This function accepts a model title, in url form and sends it to the reducer
 * to be converted to an array index and put into the state
 *
 * Admin and Model components are the only components that use this function
 */
export function setModel(model) {
  return {
    type: 'SET_MODEL',
    payload: model,
  };
}

/*
 * This function accepts a entry id and sends it to the reducer to be converted
 * to an array index and put into the state
 */
export function setEntry(entry) {
  return {
    type: 'SET_ENTRY',
    payload: entry,
  };
}
/* ****************************** END SETTERS ****************************** */

/* ******************************** GETTERS ******************************** */
export function getModels() {
  return {
    type: 'GET_MODELS',
    payload: {
      data: [
        { id: 1, title: 'Boot Drives' }, { id: 2, title: 'Cables' }, { id: 3, title: 'CPUs' },
        { id: 4, title: 'Servers' }, { id: 5, title: 'Storage Drives' }, { id: 6, title: 'IOPS' },
        { id: 7, title: 'Resiliencies' },
      ],
    },
  };
}

export function getEntries(model) {
  const url = model;

  return {
    type: 'GET_ENTRIES',
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
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
        },
      ],
    },
    meta: {
      model,
    },
  };
}

export function getEntry(id) {
  // Get the entry
}
/* ****************************** END GETTERS ****************************** */
