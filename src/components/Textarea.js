import React from "react";
import PropTypes from 'prop-types'

function Textarea ({id,name,onChange,label,value}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={name} onChange={onChange} value={value}></textarea>
    </div>
  );
}
Textarea.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Textarea;