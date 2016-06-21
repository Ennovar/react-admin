// Libary Imports
import React from 'react';

// User Imports
import { makeURL, makeTitle } from 'helpers/globalfunctions';

const OptionList = ({options, selected, changeSelection}) => {

  // Get a list of all options
  const optionsList = Object.keys(options).map((option) => {
    let select = "";
    // Add class to selected option
    if(option === makeURL(selected))
    {
      select = " selected";
    }

    return (
      <li className={"list-group-item" + select} key={option} onClick={() => changeSelection(option)}>
        {makeTitle(option)}
      </li>
    );
  });

  return (
    <ul className="list-group">
      <li className="list-group-item">Options</li>
      {optionsList}
    </ul>
  )
}

export default OptionList;
