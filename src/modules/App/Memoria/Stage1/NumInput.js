import React from "react";
import formatNum from "utils/formatPhoneNumber.js";

export default props => {
  let num = formatNum(props.value);
  return (
    <div>
      Num: <input value={num} onChange={props.handleChange} />
    </div>
  );
};
