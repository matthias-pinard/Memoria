import React from "react";

export default props => {
  return (
    <button onClick={props.onClick} type={props.type}>
      {props.text}
    </button>
  );
};
