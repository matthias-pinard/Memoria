import React from "react";
import formatNum from "../utils/formatPhoneNumber.js";
export default props => {
  const num = formatNum(props.num);
  return (
    <div className="NumDispay">
      <p>{num}</p>
    </div>
  );
};
