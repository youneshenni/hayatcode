import React from "react";
import Text from "./Inputs/Text";
import Enum from "./Inputs/Enum";
import Int from "./Inputs/Int";
import Email from "./Inputs/Email";
import Phone from "./Inputs/Phone";
import Postal from "./Inputs/Postal";
import ImageEnum from "./Inputs/ImageEnum";

export default function Input(props) {
  const handleChange = event => {
    if (event.persist) {
      event.persist();
      props.onChange({ [event.target.id]: event.target.value });
    } else props.onChange(event);
  };
  const getInput = () => {
    switch (props.type) {
      case "enum":
        return <Enum {...props} onChange={handleChange} />;
      case "int":
        return <Int {...props} onChange={handleChange} />;
      case "email":
        return <Email {...props} onChange={handleChange} />;
      case "phone":
        return <Phone {...props} onChange={handleChange} />;
      case "postal":
        return <Postal {...props} onChange={handleChange} />;
      case "imageEnum":
        return <ImageEnum {...props} onChange={handleChange} />;
      default:
        return <Text {...props} onChange={handleChange} />;
    }
  };
  return (
    <div
      id={props.id}
      className={"form-group " + (props.required ? "required" : "")}
    >
      <label className="col-sm-2 control-label" htmlFor="input-company">
        {props.label}
      </label>
      <div className="col-sm-10">{getInput()}</div>
    </div>
  );
}
