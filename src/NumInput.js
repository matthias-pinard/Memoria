import React from "react";

export default props => {
  return (
    <div>
      <input value={props.value} onChange={props.handleChange} />
    </div>
  );
};
