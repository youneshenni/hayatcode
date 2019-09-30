import React, { useState } from "react";
import passwordValidator from "password-validator";

export default function Text({
  id,
  label,
  maxLength,
  value,
  required,
  onChange,
  sendError,
  type,
  ...props
}) {
  const [error, setError] = useState("");
  const schema = new passwordValidator();
  schema.is().min(6);

  const handleChange = ev => {
    ev.persist();
    if (type === "password" && props.register) {
      const errors = schema.validate(ev.target.value, { list: true });
      if (errors.length) {
        setError(
          "Your password doesn't meet the following: " +
            errors
              .map(
                error =>
                  "Your password needs to " +
                  (error === "min"
                    ? "contain at least 8 characters"
                    : error === "uppercase"
                    ? "include at least one uppercase character"
                    : error === "lowercase"
                    ? "include at least one lowercase character"
                    : error === "digits"
                    ? "include at least one digit"
                    : error === "max"
                    ? "contain less than 20 characters"
                    : error)
              )
              .join(", ")
        );
        sendError && sendError(true);
      } else {
        setError("");
        sendError && sendError(false);
        onChange({ [ev.target.id]: ev.target.value });
      }

      console.log(errors);
    } else onChange(ev);
  };
  return (
    <div>
      <input
        type={type || "text"}
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
