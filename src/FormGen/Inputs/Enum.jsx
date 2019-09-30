import React, { useState } from "react"
import Select from "react-select"
import makeAnimated from "react-select/animated"

const animatedComponents = makeAnimated()

export default function Enum({
  id,
  label,
  value,
  required,
  onChange,
  options,
  ...props
}) {
  const [error] = useState("")
  return (
    <div>
      <Select
        placeholder={label}
        components={animatedComponents}
        id={id}
        options={options}
        defaultValue={options.filter(option => option.value === value)[0]}
        required={required}
        onChange={({ value }) => onChange({ [id]: value })}
      />
      {(props.error || error || props.pageError) && (
        <div
          style={{
            color: "red",
            fontStyle: "italic",
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
  )
}
