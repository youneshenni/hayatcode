import { useState } from "react";
import React from "react";
import { validate } from "postal-codes-js";
export default function Email({
  id,
  label,
  maxLength,
  country,
  value,
  required,
  onChange,
  sendError,
  //country,
  ...props
}) {
  const [error, setError] = useState("");
  const handleChange = ev => {
    ev.persist();
    if (
      validate(
        //country,
        ev.target.value
      )
    ) {
      setError("");
      sendError && sendError(false);
      onChange(ev);
    } else {
      setError("This postal code is invalid");
      sendError && sendError(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        name={id}
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
