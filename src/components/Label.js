import React from "react";

function Label({ Text, ID, value, onChange }) {
  return (
    <label>
      <strong>{ID.toString().toUpperCase()}: </strong>
      <input
        type={Text}
        name={ID}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default Label;
