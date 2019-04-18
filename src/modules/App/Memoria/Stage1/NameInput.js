import React from "react";
import Input from "components/Input.js";
export default props => {
  return (
    <>
      Name: <Input value={props.value} onChange={props.handleChange} />
    </>
  );
};
