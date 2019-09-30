import { useState } from "react";
import React from "react";
export default function Int({
  id,
  label,
  maxLength,
  value,
  required,
  onChange,
  sendError,
  ...props
}) {
  const [currentValue, setCurrentValue] = useState(value || "");
  const [error, setError] = useState("");
  const handleChange = ev => {
    ev.persist();
    if (Number(ev.target.value) || ev.target.value === "") {
      setError("");
      setCurrentValue(Number(ev.target.value) || ev.target.value);
      sendError && sendError(false);
      onChange(ev);
    } else {
      setError("Only numbers are allowed");
      sendError && sendError(true);
      ev.target.value = currentValue;
    }
  };
  return (
    <div>
      <input
        type="text"
        name={id}
        value={currentValue}
        onChange={handleChange}
        placeholder={label}
        id={id}
        className="form-control"
        maxLength={maxLength}
      />
      {(props.error || error || props.pageError) && (
        <div
          style={{
            color: "red",
            fontStyle: "italic"
          }}
        >
          {"Error: " +
            (props.error || "") +
            " " +
            (props.pageError || "") +
            " " +
            error}
        </div>
      )}
    </div>
  );
}
