import React from "react";

export default props => {
  return (
    <div>
      Num: <input value={props.value} onChange={props.handleChange} />
    </div>
  );
};
