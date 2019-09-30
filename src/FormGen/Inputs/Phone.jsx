import React from "react"
import countryTelephoneCode, { countries } from "country-telephone-code"

export default function Phone({
  id,
  label,
  country,
  value,
  onChange,
  type,
  maxLength,
}) {
  return (
    <div>
      <div className="col-sm-2">
        <input
          type="text"
          name={id}
          value={"+" + countryTelephoneCode(country.toUpperCase())[0]}
          disabled
          className="form-control"
        />
      </div>
      <div className="col-sm-10">
        <input
          type={type || "text"}
          name={id}
          value={value}
          onChange={ev => {
            ev.persist()
            onChange({
              phone:
                "+" +
                countryTelephoneCode(country.toUpperCase())[0] +
                ev.target.value,
            })
          }}
          placeholder={label}
          id={id}
          className="form-control"
          maxLength={maxLength}
        />
      </div>
    </div>
  )
}
