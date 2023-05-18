import React from "react";


function InputField(props) {
  const { label, value, onChange } = props;

  return (
    <div className="input-field">
      <label className="label">{label}</label>
      <select type="text" value={value} onChange={onChange} className="select-input"/>
    </div>
  );
}

export default InputField;
