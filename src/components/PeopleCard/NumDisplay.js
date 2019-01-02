import React from "react";
import formatNum from "../../utils/formatPhoneNumber";
export default props => {
  const num = formatNum(props.num);
  return (
    <>
      <p>{num}</p>
    </>
  );
};
