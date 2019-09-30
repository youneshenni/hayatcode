import { useState } from "react";
import React from "react";
import { validate } from "email-validator";
export default function Email({
  id,
  label,
  maxLength,
  value,
  required,
  onChange,
  sendError,
  ...props
}) {
  const [error, setError] = useState("");
  const handleChange = ev => {
    ev.persist();
    if (validate(ev.target.value)) {
      setError("");
      sendError && sendError(false);
      onChange(ev);
    } else {
      setError("This email address is invalid");
      sendError && sendError(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        name={id}
        defaultValue={value}
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
