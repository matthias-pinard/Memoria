import React from "react";
import formatNum from "utils/formatPhoneNumber.js";
import Input from "components/Input";
export default props => {
  let num = formatNum(props.value);
  return (
    <div>
      Num: <Input value={num} onChange={props.handleChange} />
    </div>
  );
};
