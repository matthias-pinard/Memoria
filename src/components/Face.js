import React from "react";

const style = {
  borderRadius: 20
};
export default props => {
  return (
    <>
      <img style={style} src={props.src} alt="face" />
    </>
  );
};
