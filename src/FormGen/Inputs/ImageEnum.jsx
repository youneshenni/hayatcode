import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function Enum({
  id,
  label,
  value,
  required,
  onChange,
  options,
  ...props
}) {
  const [checked, setChecked] = useState([]);
  const [error] = useState("");
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {options.map(option => (
          <div>
            <input
              type="checkbox"
              className="form-control"
              name={option.value}
              value={option.value}
              onChange={ev => {
                ev.persist();
                const afterRemove = checked.filter(item =>
                  item !== ev.target.value ? true : ev.target.checked
                );
                const afterAdd = ev.target.checked
                  ? afterRemove.concat([ev.target.value])
                  : afterRemove;
                setChecked(afterAdd);
                onChange({ [id]: afterAdd });
              }}
            />
            <label htmlFor={option.value}>{option.label}</label>
            <img style={{ width: 200, height: 200 }} src={option.src} />
          </div>
        ))}
      </div>
      <br />
      <h2>Total price: ${checked.length * 10}</h2>
    </div>
  );
}
