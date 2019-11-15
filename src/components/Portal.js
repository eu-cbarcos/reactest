import React from 'react';
import ReactDOM from 'react-dom';

const portal = props => {
  return ReactDOM.createPortal(
    <div>Esto es mediante un portal</div>,
    document.querySelector("#portal")
  );
}

export default portal;