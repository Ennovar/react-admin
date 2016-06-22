'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ItemList = function ItemList() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'ItemList'
    )
  );
}; // Libary imports


exports.default = ItemList;