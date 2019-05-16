import React from 'react';
import './Field.css';

const Field = ({ value }) => {
  let fieldClass = "Field";
  if (value === "apple") fieldClass += ' field-apple';
  else if (value === "snake") fieldClass += ' field-snake';
  else if (value === "snakehead") fieldClass += ' field-snakehead';

  const fieldValue = value === "apple" ? <i className="fas fa-apple-alt"></i> : null;

  return (
    <div className={fieldClass}>{fieldValue}</div>
  );
}

export default Field;
