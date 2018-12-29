import React from "react";
export default props => {
  return (
    <>
      Name: <input value={props.value} onChange={props.handleChange} />
    </>
  );
};
