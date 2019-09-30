import React, { useState } from "react"
import Input from "./Input"

export default function Page(props) {
  const [data, setData] = useState({})
  const handleChange = recv => {
    const newData = { ...data, ...recv }
    setData(newData)
    props.onChange(newData)
  }
  return (
    <form>
      <fieldset key={props.name}>
        <legend>{props.name}</legend>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          {props.data
            .filter(input => !input.hidden)
            .map(({ type, ...props }, index) => (
              <div style={{ margin: "1vh" }} key={"input " + index}>
                <Input
                  onChange={handleChange}
                  type={type}
                  sendError={props.sendError}
                  {...props}
                />
              </div>
            ))}
        </div>
      </fieldset>
    </form>
  )
}
