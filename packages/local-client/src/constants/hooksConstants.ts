export const SHOW_FUNCTION = `
import _React from 'react';
import _ReactDOM from 'react-dom';
var show = (value) => {
  const root = document.querySelector('#root');

  if (typeof value === 'object') {
    if (value.$$typeof && value.props) {
      _ReactDOM.render(value, root);
    } else {
      root.innerHTML = JSON.stringify(value);
    }
  } else {
    root.innerHTML = value;
  }
};
`;
