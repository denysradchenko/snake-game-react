import React from 'react';
import './Field.css';

const Field = ({ value }) => {
  let fieldClass = "Field";
  if (value === "apple") fieldClass += ' field-apple';
  else if (value === "snake") fieldClass += ' field-snake';
  else if (value === "snakehead") fieldClass += ' field-snakehead';

  return (
    <div className={fieldClass}></div>
  );
}

export default Field;
