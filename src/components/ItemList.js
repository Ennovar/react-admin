// Libary imports
import React from 'react';
// import { browserHistory } from 'react-router';
//
// // User imports
// import { makeURL, makeItemLabel } from 'helpers/globalfunctions';
//
// const ItemList = ({items, selected}) => {
//   // Set the base url for details page for a selected item
//   const base_url = '/admin/' + makeURL(selected) + '/';
//
//   const itemsList = items.map((item) => {
//     const url = base_url + item.id;
//     return (
//       <li className="list-group-item" key={item.id} onClick={() => {browserHistory.push(url)}}>
//         {makeItemLabel(selected, item)}
//       </li>
//     )
//   });
//
//   return (
//     <ul className="list-group">
//       <li className="list-group-item">{selected}</li>
//       {itemsList}
//     </ul>
//   )
// }

const ItemList = () => {
  return(
    <div>
      <h3>ItemList</h3>
    </div>
  );
};

export default ItemList;
